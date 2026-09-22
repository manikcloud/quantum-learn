// UI strings for the EN / HI site versions.
// Hindi follows the site rule: explanations in Devanagari Hindi,
// technical terms stay in English.

export const strings = {
  en: {
    brandSub: "Quantum computing, in plain language",
    searchPh: "Search lessons…",
    searchNone: "No lessons found — try another word.",
    sidebarTitle: "Course modules",
    footerText:
      "Zero to quantum — one qubit at a time. Built by hand, in plain language.",
    home: "Home",
    moduleWord: "Module",
    simpleKicker: "In simple words",
    deeperSummary: "Go deeper — the math & the rigor",
    keyTakeaways: "Key takeaways",
    references: "References",
    referencesIntro:
      "The books, papers, and articles this lesson drew on — with a note on what each one was used for.",
    referencesUsedFor: "Used for:",
    signOut: "Sign out",
    loginTitle: "Sign in",
    loginSub: "Sign in with Google or your email to enter the Quantum Learning Hub.",
    continueWithGoogle: "Continue with Google",
    loginNote: "Your account is only used to sign you in.",
    orDivider: "or",
    emailAddress: "Email address",
    password: "Password",
    emailSignIn: "Sign in",
    createAccount: "Create account",
    forgotPassword: "Forgot password?",
    verifyTitle: "Verify your email",
    resendVerification: "Resend email",
    iveVerified: "I've verified — continue",
    signedInAs: "Signed in as",
    continueToSite: "Continue to the site →",
    switchAccount: "Use a different account",
    checkUnderstanding: "Check your understanding",
    markComplete: "Mark lesson as complete",
    markedComplete: "✓ Completed — click to undo",
    prevLesson: "← Previous lesson",
    nextLesson: "Next lesson →",
    back: "← Back",
    backHome: "Back to home",
    doneNext: "Done →",
    tipHint: "Tip: press ← / → to turn pages.",
    notesTitle: "Lesson notes are on the way.",
    notesBody:
      "This lesson is still being written — simple explanation, deeper math, and a quiz, like the other lessons. The navigation around it already works.",
    lessonsWord: "Lessons",
    prevModule: "← Previous module",
    nextModule: "Next module →",
    lessonsCount: (n) => `${n} lessons`,
    modulesHeading: (n) => `The ${n} modules`,
    progressText: (done, total) => `${done} of ${total} lessons complete`,
    scoreText: (correct, total) =>
      `You got ${correct} out of ${total} right.` +
      (correct === total ? " Perfect — on to the next lesson." : " Skim the lesson once more, then move on."),
  },
  hi: {
    brandSub: "Quantum computing, आसान भाषा में",
    searchPh: "पाठ खोजें…",
    searchNone: "कोई पाठ नहीं मिला — कोई और शब्द आज़माएँ।",
    sidebarTitle: "पाठ्यक्रम मॉड्यूल",
    footerText:
      "Zero से quantum तक — एक qubit, एक कदम। आसान भाषा में, अपने हाथ से बनाया गया।",
    home: "मुख्य पृष्ठ",
    moduleWord: "मॉड्यूल",
    simpleKicker: "आसान शब्दों में",
    deeperSummary: "गहरे उतरें — गणित और सटीकता",
    keyTakeaways: "मुख्य बातें",
    references: "संदर्भ (References)",
    referencesIntro:
      "इस पाठ के दावे जिन किताबों, papers और articles से लिए गए हैं — हर एक के नीचे लिखा है कि उसका इस्तेमाल किस बात के लिए हुआ।",
    referencesUsedFor: "किस लिए इस्तेमाल हुआ:",
    signOut: "साइन आउट",
    loginTitle: "साइन इन करें",
    loginSub: "Quantum Learning Hub में जाने के लिए Google या अपने ईमेल से साइन इन करें।",
    continueWithGoogle: "Google से जारी रखें",
    loginNote: "आपका account सिर्फ़ साइन इन के लिए इस्तेमाल होगा।",
    orDivider: "या",
    emailAddress: "ईमेल पता",
    password: "पासवर्ड",
    emailSignIn: "साइन इन",
    createAccount: "नया खाता बनाएँ",
    forgotPassword: "पासवर्ड भूल गए?",
    verifyTitle: "अपना ईमेल सत्यापित करें",
    resendVerification: "ईमेल फिर से भेजें",
    iveVerified: "सत्यापित हो गया — आगे बढ़ें",
    signedInAs: "इस रूप में साइन इन:",
    continueToSite: "साइट पर जाएँ →",
    switchAccount: "दूसरा account इस्तेमाल करें",
    checkUnderstanding: "अपनी समझ परखें",
    markComplete: "पाठ पूर्ण चिह्नित करें",
    markedComplete: "✓ पूर्ण — वापस लेने के लिए क्लिक करें",
    prevLesson: "← पिछला पाठ",
    nextLesson: "अगला पाठ →",
    back: "← वापस",
    backHome: "मुख्य पृष्ठ पर वापस",
    doneNext: "पूर्ण →",
    tipHint: "सुझाव: पेज बदलने के लिए ← / → दबाएँ।",
    notesTitle: "पाठ की टिप्पणियाँ जल्द आ रही हैं।",
    notesBody:
      "यह पाठ अभी लिखा जा रहा है — सरल व्याख्या, गहरा गणित और quiz, बाकी पाठों की तरह। इसके आस-पास का navigation पहले से काम करता है।",
    lessonsWord: "पाठ",
    prevModule: "← पिछला मॉड्यूल",
    nextModule: "अगला मॉड्यूल →",
    lessonsCount: (n) => `${n} पाठ`,
    modulesHeading: (n) => `सभी ${n} मॉड्यूल`,
    progressText: (done, total) => `${total} में से ${done} पाठ पूर्ण`,
    scoreText: (correct, total) =>
      `आपने ${total} में से ${correct} सही किए।` +
      (correct === total ? " बिल्कुल सही — अब अगले पाठ पर चलें।" : " पाठ को एक बार और देख लें, फिर आगे बढ़ें।"),
  },
};

export function t(lang, key) {
  const table = strings[lang] || strings.en;
  const val = table[key];
  if (val === undefined) return strings.en[key];
  return val;
}
