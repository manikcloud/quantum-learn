// UI strings for the EN / HI site versions.
// Hindi follows the site rule: explanations in Devanagari Hindi,
// technical terms stay in English.

export const strings = {
  en: {
    brandSub: "IIT Delhi · QCML companion",
    searchPh: "Search lessons…",
    sidebarTitle: "Course modules",
    footerText:
      "Companion notes for the IIT Delhi CEP Certification in Quantum Computing and Machine Learning. Explanations are written for every level — from curious beginners to researchers.",
    home: "Home",
    moduleWord: "Module",
    simpleKicker: "In simple words",
    deeperSummary: "Go deeper — the math & the rigor",
    keyTakeaways: "Key takeaways",
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
      "This page will be filled in from the course PPT — simple explanation, deeper math, and a quiz, like the other lessons. The navigation around it already works.",
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
    brandSub: "IIT Delhi · QCML साथी",
    searchPh: "पाठ खोजें…",
    sidebarTitle: "पाठ्यक्रम मॉड्यूल",
    footerText:
      "IIT Delhi CEP Certification in Quantum Computing and Machine Learning के लिए साथी notes। व्याख्याएँ हर स्तर के लिए लिखी गई हैं — जिज्ञासु beginners से लेकर researchers तक।",
    home: "मुख्य पृष्ठ",
    moduleWord: "मॉड्यूल",
    simpleKicker: "सरल शब्दों में",
    deeperSummary: "गहरे उतरें — गणित और सटीकता",
    keyTakeaways: "मुख्य बातें",
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
      "यह पेज course PPT से भरा जाएगा — सरल व्याख्या, गहरा गणित और quiz, बाकी पाठों की तरह। इसके आस-पास का navigation पहले से काम करता है।",
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
