// Provider switchboard — the ONLY module that knows which third-party
// auth service is active. Everything else imports { auth } from here and
// programs against the interface in public/auth/README.md.
var cfg = window.__SITE_AUTH__ || {};
var provider = cfg.provider || "firebase";

var adapter;
if (provider === "firebase") {
  adapter = await import("./firebase-adapter.js");
} else {
  throw new Error(
    "[site-auth] unknown provider \"" + provider +
    "\" — add public/auth/" + provider + "-adapter.js (see README.md)"
  );
}

export const auth = adapter.createAuth(cfg);
export const authConfig = cfg;
