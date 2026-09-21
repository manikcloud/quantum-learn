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
      "Independent study notes on quantum computing and quantum machine learning — written from scratch, in plain language. Not affiliated with, endorsed by, or reproducing any institution's course materials.",
    home: "Home",
    moduleWord: "Module",
    simpleKicker: "In simple words",
    deeperSummary: "Go deeper — the math & the rigor",
    keyTakeaways: "Key takeaways",
    references: "References",
    referencesIntro:
      "The books, papers, and articles this lesson drew on — with a note on what each one was used for.",
    referencesUsedFor: "Used for:",
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
    brandSub: "Quantum computing, सरल भाषा में",
    searchPh: "पाठ खोजें…",
    searchNone: "कोई पाठ नहीं मिला — कोई और शब्द आज़माएँ।",
    sidebarTitle: "पाठ्यक्रम मॉड्यूल",
    footerText:
      "Quantum computing और quantum machine learning पर स्वतंत्र study notes — सरल भाषा में नए सिरे से लिखे गए। किसी संस्थान के course से संबद्ध, अनुमोदित, या उसकी सामग्री का पुनरुत्पादन नहीं।",
    home: "मुख्य पृष्ठ",
    moduleWord: "मॉड्यूल",
    simpleKicker: "सरल शब्दों में",
    deeperSummary: "गहरे उतरें — गणित और सटीकता",
    keyTakeaways: "मुख्य बातें",
    references: "संदर्भ (References)",
    referencesIntro:
      "इस पाठ के दावे जिन किताबों, papers और articles से लिए गए हैं — हर एक के नीचे लिखा है कि उसका इस्तेमाल किस बात के लिए हुआ।",
    referencesUsedFor: "किस लिए इस्तेमाल हुआ:",
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
