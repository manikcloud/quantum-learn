// Hindi (Devanagari) metadata: module titles/taglines/descriptions and
// lesson title overrides. Anything missing falls back to the English
// curriculum entry, so Hindi coverage can grow lesson by lesson.

export const hiModules = {
  "module-1": {
    title: "Quantum Computing का परिचय",
    tagline: "Qubits, gates, और quantum world के अजीबोगरीब नियम।",
    description:
      "अपनी नींव बनाइए: qubit क्या है, Dirac notation से quantum states कैसे लिखते हैं, उन्हें manipulate करने वाले gates, और बुनियादी नतीजे — no-cloning और interference — जो quantum computing को हर जानी-पहचानी चीज़ से अलग बनाते हैं।",
  },
  "module-2": {
    title: "Quantum Computing के नियम",
    tagline: "वे नियम जिनका पालन हर quantum system करता है।",
    description:
      "Computing पर लागू quantum mechanics के postulates — quantum states, evolution, और measurement — फिर मशहूर नतीजे: Bell's inequality, superdense coding, teleportation, BB84 protocol, और quantum error correction।",
  },
  "module-3": {
    title: "Quantum Algorithms का परिचय",
    tagline: "Qiskit में लिखे आपके पहले quantum programs।",
    description:
      "Qiskit के साथ hands-on होइए और classic शुरुआती quantum algorithms implement कीजिए — Deutsch–Jozsa, Bernstein–Vazirani, और Simon's — और देखिए quantum advantage असल में कहाँ से आता है।",
  },
  "module-4": {
    title: "Quantum Fourier Transform और संबंधित Algorithms",
    tagline: "Shor's algorithm का engine — और मशहूर search speedup।",
    description:
      "Quantum Fourier Transform, phase estimation, Shor's period-finding, और Grover's search में महारत हासिल कीजिए — वे algorithms जिन्होंने quantum computing को मशहूर किया — सब Qiskit में implemented।",
  },
  "module-5": {
    title: "Quantum Machine Learning",
    tagline: "जहाँ quantum computing मिलती है ML से।",
    description:
      "Data encoding, HHL algorithm, quantum linear regression, swap test, quantum k-means, quantum PCA, और quantum SVMs — हर जगह Qiskit implementations के साथ।",
  },
  "module-6": {
    title: "Quantum Deep Learning",
    tagline: "Hybrid quantum-classical neural networks।",
    description:
      "Classification के लिए hybrid quantum-classical neural networks design, train और evaluate कीजिए — जिनमें near-term (NISQ) processors के लिए बने quantum neural networks भी शामिल हैं।",
  },
  "module-7": {
    title: "Variational Optimisation और Adiabatic Methods",
    tagline: "VQE, QAOA, और finance के लिए quantum algorithms।",
    description:
      "Variational quantum eigensolver, expectation computation, QAOA, adiabatic theorem, और असली applications — Max-Cut clustering, combinatorial optimisation, और finance के लिए quantum algorithms।",
  },
  "module-8": {
    title: "Quantum Physics की कहानियाँ",
    tagline: "वे experiments और ideas जिन्होंने quantum world को उजागर किया।",
    description:
      "Math के पीछे की कहानी-आधारित physics — double-slit experiment, Einstein–Bohr debate, decoherence, और बहुत कुछ। Original enrichment सामग्री — वे मानवीय कहानियाँ जिनसे गणित समझ आता है।",
  },
  "module-9": {
    title: "Nobel पुरस्कार जिन्होंने Quantum बनाया",
    tagline: "quantum computing के पीछे की खोजें — और खोजकर्ता।",
    description:
      "Quantum world बनाने वाले दस Nobel पुरस्कार — 1900 में Planck की desperate mathematical trick से लेकर 2022 में entanglement को real साबित करने वाले पुरस्कार तक। Original enrichment सामग्री: physics के पीछे की मानवीय कहानी।",
  },
  "module-10": {
    title: "Quantum Philosophy",
    tagline: "वे गहरे सवाल जो quantum computing हमसे पूछने पर मजबूर करती है।",
    description:
      "Quantum computing को philosophy की ज़रूरत क्यों है: quantum mechanics की छह interpretations और हर एक के अनुसार आपका quantum computer क्या कर रहा है, local realism का अंत, randomness बनाम determinism और free will, और Wheeler का “it from bit”। Original enrichment सामग्री — वे सवाल जिनका physics के पास अभी जवाब नहीं।",
  },
};

export const hiLessonTitles = {
  qubits: "क्वांटम बिट (Qubits)",
  "phil-why-philosophy": "Quantum Computing को Philosophy की ज़रूरत क्यों है",
  "phil-interpretations": "छह Interpretations — और आपका Quantum Computer क्या कर रहा है",
  "phil-randomness-free-will": "Randomness, Determinism और Free Will",
  "phil-it-from-bit": "“It from Bit”: क्या Information ही Reality है?",
};

export function hiModuleTitle(mod) {
  return (hiModules[mod.id] && hiModules[mod.id].title) || mod.title;
}

export function hiModuleTagline(mod) {
  return (hiModules[mod.id] && hiModules[mod.id].tagline) || mod.tagline;
}

export function hiModuleDescription(mod) {
  return (hiModules[mod.id] && hiModules[mod.id].description) || mod.description;
}

export function hiLessonTitle(lesson) {
  return hiLessonTitles[lesson.slug] || lesson.title;
}

// Sidebar/search index for the Hindi pages: Hindi titles where available,
// English fallback otherwise. `base` prefixes links ("/hi" on Hindi pages).
export function lessonIndex(lang, base, flatLessons, moduleOf) {
  const hi = lang === "hi";
  return flatLessons.map((l) => {
    const mod = moduleOf(l);
    return {
      slug: l.slug,
      title: hi ? hiLessonTitle(l) : l.title,
      moduleNumber: mod.number,
      moduleTitle: hi ? hiModuleTitle(mod) : mod.title,
      url: `${base}/lessons/${l.slug}/`,
    };
  });
}
