// Firebase Authentication config for the site-wide login wall.
//
// HOW TO FILL THIS IN (one-time, ~3 minutes):
// 1. Go to https://console.firebase.google.com/ and create a project (any name, e.g. "quantum-learn").
// 2. Left menu → Build → Authentication → Get started → Sign-in method → enable "Google" (pick a support email) → Save.
// 3. Authentication → Settings → Authorized domains → Add domain → "quantum-learn.pages.dev".
// 4. Project Overview (gear icon) → Project settings → "Your apps" → Add app → Web (</>) →
//    give it a nickname → copy the firebaseConfig object it shows → paste the values below.
//
// Until apiKey is replaced, the login wall stays OFF and the site behaves exactly as before.

export const firebaseConfig = {
  apiKey: "AIzaSyCLII5OZwIqmsnCelzgI8RaCk89Ppisy1M",
  authDomain: "quantum-learn-hub.firebaseapp.com",
  projectId: "quantum-learn-hub",
  storageBucket: "quantum-learn-hub.firebasestorage.app",
  messagingSenderId: "218042445585",
  appId: "1:218042445585:web:485bbcddb3b9e62032e6b0",
};

// Who is allowed to sign in. Empty array = anyone with a Google account.
// To restrict, list addresses: ["you@example.com", "student@example.com"]
export const ALLOWED_EMAILS = [];

// True only when a real config has been pasted above.
export const authConfigured =
  firebaseConfig.apiKey !== "PASTE_YOUR_API_KEY" &&
  firebaseConfig.apiKey.length > 10;
