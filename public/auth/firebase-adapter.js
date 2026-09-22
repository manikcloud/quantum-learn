// Firebase implementation of the site auth interface (see README.md).
//
// This is the ONLY file in the entire site that references the Firebase SDK.
// The adapter injects the SDK itself, so no page or layout includes Firebase
// <script> tags. SiteLayout's gate and the login pages use only the object
// returned by createAuth() below.

var SDK_VERSION = "10.14.1";
var SDK_URLS = [
  "https://www.gstatic.com/firebasejs/" + SDK_VERSION + "/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/" + SDK_VERSION + "/firebase-auth-compat.js",
];

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    if (document.querySelector('script[src="' + src + '"]')) return resolve();
    var s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = function () { resolve(); };
    s.onerror = function () { reject(new Error("[site-auth] failed to load " + src)); };
    document.head.appendChild(s);
  });
}

function shapeUser(u) {
  if (!u) return null;
  var providerId = "";
  try {
    if (u.providerData && u.providerData.length) providerId = u.providerData[0].providerId || "";
  } catch (e) { /* ignore */ }
  return {
    email: u.email || "",
    displayName: u.displayName || "",
    photoURL: u.photoURL || "",
    emailVerified: !!u.emailVerified,
    provider: providerId,
    raw: u,
  };
}

function isPasswordUser(u) {
  try {
    return (u.providerData || []).some(function (p) { return p.providerId === "password"; });
  } catch (e) { return false; }
}

export function createAuth(cfg) {
  var fb = cfg.firebase || {};
  var configured =
    typeof fb.apiKey === "string" &&
    fb.apiKey.length > 10 &&
    fb.apiKey.indexOf("PASTE") === -1;

  var auth = null;      // firebase.auth() instance, set once ready
  var userCache = null; // last raw user seen

  var ready = (async function () {
    if (!configured) throw new Error("[site-auth] firebase not configured");
    // Sequential: auth-compat must evaluate AFTER app-compat defines the
    // firebase namespace. Promise.all raced them and intermittently left
    // firebase.auth unregistered (dead sign-in button, no redirect).
    for (const src of SDK_URLS) {
      await loadScript(src);
    }
    if (!window.firebase || !window.firebase.auth) {
      throw new Error("[site-auth] firebase SDK failed to initialize");
    }
    try {
      window.firebase.initializeApp(fb);
    } catch (e) { /* already initialized */ }
    auth = window.firebase.auth();
  })();

  function isAllowed(user) {
    var list = cfg.allowedEmails || [];
    return list.length === 0 || (user && list.indexOf(user.email) !== -1);
  }

  return {
    name: "firebase",
    configured: configured,

    ready: ready,

    currentUser: function () {
      return shapeUser(userCache);
    },

    // cb(user|null, info) — info is one of:
    //   { denied: true }     account fails the allowedEmails policy (signed out first)
    //   { unverified: true } email/password account whose email is not verified yet
    onAuthChange: function (cb) {
      return ready.then(function () {
        return auth.onAuthStateChanged(function (u) {
          userCache = u;
          if (u && !isAllowed(u)) {
            auth.signOut().then(function () { cb(null, { denied: true }); });
            return;
          }
          if (u && isPasswordUser(u) && !u.emailVerified) {
            cb(shapeUser(u), { unverified: true });
            return;
          }
          cb(shapeUser(u), null);
        });
      });
    },

    // Google sign-in. Prefers a popup: the login page stays alive behind it,
    // so the auth result can't get lost on the return hop the way it can
    // with a full-page redirect on mobile browsers. Falls back to the
    // redirect flow only when the browser blocks the popup outright.
    // Rejects visibly on misconfiguration (e.g. unauthorized domain) so the
    // login page can show the real error.
    signIn: function () {
      return ready.then(function () {
        var provider = new window.firebase.auth.GoogleAuthProvider();
        return auth.signInWithPopup(provider).catch(function (err) {
          if (err && err.code === "auth/popup-blocked") {
            return auth.signInWithRedirect(provider);
          }
          throw err;
        });
      });
    },

    // Email/password sign-up. Creates the account and sends the verification
    // link; the user lands in the "unverified" state until they click it.
    signUpWithEmail: function (email, password) {
      return ready.then(function () {
        return auth.createUserWithEmailAndPassword(email, password).then(function (cred) {
          return cred.user.sendEmailVerification().then(function () { return shapeUser(cred.user); });
        });
      });
    },

    // Email/password sign-in. The onAuthChange listener reports unverified
    // accounts via info.unverified — the login page shows the verify prompt.
    signInWithEmail: function (email, password) {
      return ready.then(function () {
        return auth.signInWithEmailAndPassword(email, password).then(function (cred) {
          return shapeUser(cred.user);
        });
      });
    },

    // Re-send the verification link to the currently signed-in user.
    sendVerification: function () {
      return ready.then(function () {
        var u = auth.currentUser;
        if (!u) throw { code: "auth/no-current-user", message: "No signed-in user." };
        return u.sendEmailVerification();
      });
    },

    // Send a password-reset email.
    resetPassword: function (email) {
      return ready.then(function () {
        return auth.sendPasswordResetEmail(email);
      });
    },

    // Re-fetch the user (e.g. after they clicked the verification link
    // in another tab) so emailVerified is current. Does not fire onAuthChange.
    reloadUser: function () {
      return ready.then(function () {
        var u = auth.currentUser;
        if (!u) return null;
        return u.reload().then(function () {
          userCache = auth.currentUser;
          return shapeUser(userCache);
        });
      });
    },

    signOut: function () {
      return ready.then(function () {
        return auth.signOut();
      });
    },

    handleRedirect: function () {
      return ready.then(function () {
        return auth.getRedirectResult().then(
          function (res) { return { user: shapeUser(res.user) }; },
          function (err) { return { error: err }; }
        );
      });
    },
  };
}
