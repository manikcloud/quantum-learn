/* Site auth configuration — the ONLY file you edit to change auth behavior.
 *
 * The website never touches provider-specific code directly. It talks only to
 * the provider adapter selected below, through the fixed interface documented
 * in public/auth/README.md. To switch providers tomorrow (Auth0, Clerk, a
 * custom backend...): add "public/auth/<name>-adapter.js" implementing that
 * interface, then change the single `provider` word below. Nothing else moves.
 */
window.__SITE_AUTH__ = {
  // Active provider id. Must match "<id>-adapter.js" in public/auth/.
  provider: "firebase",

  // Access policy (provider-agnostic). Empty array = anyone with a Google account.
  // To restrict: ["you@example.com", "student@example.com"]
  allowedEmails: [],

  // Provider-specific settings live under their own key and are only ever
  // read by that provider's adapter.
  firebase: {
    apiKey: "AIzaSyCLII5OZwIqmsnCelzgI8RaCk89Ppisy1M",
    authDomain: "quantum-learn-hub.firebaseapp.com",
    projectId: "quantum-learn-hub",
    storageBucket: "quantum-learn-hub.firebasestorage.app",
    messagingSenderId: "218042445585",
    appId: "1:218042445585:web:485bbcddb3b9e62032e6b0",
  },
};
