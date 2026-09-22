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
  return {
    email: u.email || "",
    displayName: u.displayName || "",
    photoURL: u.photoURL || "",
    raw: u,
  };
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
    await Promise.all(SDK_URLS.map(loadScript));
    if (!window.firebase) throw new Error("[site-auth] firebase SDK missing");
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

    // cb(user|null, info) — info = { denied: true } when the signed-in
    // account fails the allowedEmails policy (it is signed out first).
    onAuthChange: function (cb) {
      return ready.then(function () {
        return auth.onAuthStateChanged(function (u) {
          userCache = u;
          if (u && !isAllowed(u)) {
            auth.signOut().then(function () { cb(null, { denied: true }); });
            return;
          }
          cb(shapeUser(u), null);
        });
      });
    },

    signIn: function () {
      return ready.then(function () {
        return auth.signInWithRedirect(new window.firebase.auth.GoogleAuthProvider());
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
