# Site auth — provider interface

`public/auth/` is a self-contained auth module. The website (layouts, pages,
styles) never references a provider SDK directly; it only uses the interface
below, obtained via:

```js
await import("/auth/config.js");          // sets window.__SITE_AUTH__
const { auth } = await import("/auth/index.js");
```

## The interface

`createAuth(cfg)` in `<provider>-adapter.js` must return an object with:

| member | type | description |
|---|---|---|
| `name` | string | provider id, e.g. `"firebase"` |
| `configured` | boolean | false when the provider has no usable settings yet — the site stays public |
| `ready` | Promise | resolves when the provider SDK is loaded and initialized; rejects otherwise |
| `currentUser()` | `user \| null` | sync getter; null until signed in |
| `onAuthChange(cb)` | Promise<unsubscribe> | `cb(user, info)` on every auth change. `user` is null when signed out; `info = { denied: true }` when the account fails the `allowedEmails` policy |
| `signIn()` | Promise | starts the provider's sign-in flow (Google, redirect-based) |
| `signOut()` | Promise | signs out |
| `handleRedirect()` | Promise<{user} \| {error}> | surfaces errors from a redirect-based sign-in |

`user` shape: `{ email, displayName, photoURL, raw }` — `raw` is the
provider's native user object for escape hatches.

## Rules

1. **No provider SDK references outside `public/auth/`.** Grep the built site
   for the provider name (e.g. `firebase`) — the only hits may be inside
   `dist/auth/`.
2. **The adapter loads its own SDK.** The site must not include provider
   `<script>` tags; the adapter injects them and `ready` gates on them.
3. **Access policy stays provider-agnostic.** `allowedEmails` is read from
   `window.__SITE_AUTH__` by every adapter, enforced in one place.
4. **Switching providers = new adapter + one word in `config.js`.**
   Consumers (`SiteLayout` gate, login pages) are untouched.

## Adding a provider

1. Copy `firebase-adapter.js` → `<name>-adapter.js`.
2. Implement `createAuth(cfg)` per the table above.
3. Set `provider: "<name>"` in `config.js` and put settings under `cfg["<name>"]`.
