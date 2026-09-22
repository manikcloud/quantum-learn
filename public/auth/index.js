// Provider switchboard — the ONLY module that knows which third-party
// auth service is active. Everything else imports { auth } from here and
// programs against the interface in public/auth/README.md.
var cfg = window.__SITE_AUTH__ || {};
var provider = cfg.provider || "firebase";

// Sanitized dynamic import: any "<id>-adapter.js" in this directory that
// implements the interface from README.md can be selected with one word in
// config.js — no switchboard edits needed.
if (!/^[a-z0-9-]{1,40}$/.test(provider)) {
  throw new Error("[site-auth] invalid provider id");
}
var adapter = await import("./" + provider + "-adapter.js");

export const auth = adapter.createAuth(cfg);
export const authConfig = cfg;
