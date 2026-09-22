// Curriculum structure: an original 10-module learning path for quantum
// computing and quantum machine learning — foundations first, then
// algorithms, machine learning, and the human stories behind the physics.

export const modules = [
  {
    id: "module-1",
    number: 1,
    title: "Introduction to Quantum Computing",
    tagline: "Qubits, gates, and the strange rules of the quantum world.",
    description:
      "Build your foundation: what a qubit is, how to write quantum states with Dirac notation, the gates that manipulate them, and the fundamental results — no-cloning and interference — that make quantum computing different from everything you know.",
    lessons: [
      { slug: "qubits", title: "Quantum Bits (Qubits)" },
      { slug: "dirac-notation", title: "Dirac Notation" },
      { slug: "single-qubit-gates", title: "Single-Qubit Gates" },
      { slug: "multi-qubit-gates", title: "Multi-Qubit Gates" },
      { slug: "no-cloning-theorem", title: "No-Cloning Theorem" },
      { slug: "quantum-interference", title: "Quantum Interference" },
    ],
  },
  {
    id: "module-2",
    number: 2,
    title: "Postulates of Quantum Computing",
    tagline: "The laws every quantum system obeys.",
    description:
      "The postulates of quantum mechanics applied to computing — quantum states, evolution, and measurement — then the famous consequences: Bell's inequality, superdense coding, teleportation, the BB84 protocol, and quantum error correction.",
    lessons: [
      { slug: "quantum-state", title: "The Quantum State" },
      { slug: "quantum-evolution", title: "Quantum Evolution" },
      { slug: "quantum-measurement", title: "Quantum Measurement" },
      { slug: "bells-inequality", title: "Bell's Inequality Test" },
      { slug: "dense-coding", title: "Superdense Coding" },
      { slug: "teleportation-bb84", title: "Teleportation & the BB84 Protocol" },
      { slug: "quantum-error-correction", title: "Quantum Error Correction" },
    ],
  },
  {
    id: "module-3",
    number: 3,
    title: "Introduction to Quantum Algorithms",
    tagline: "Your first quantum programs, written in Qiskit.",
    description:
      "Get hands-on with Qiskit and implement the classic early quantum algorithms — Deutsch–Jozsa, Bernstein–Vazirani, and Simon's — and see exactly where the quantum advantage comes from.",
    lessons: [
      { slug: "qiskit-setup", title: "Qiskit: Setup & First Circuit" },
      { slug: "deutsch-jozsa", title: "Deutsch–Jozsa Algorithm" },
      { slug: "bernstein-vazirani", title: "Bernstein–Vazirani Algorithm" },
      { slug: "simons-algorithm", title: "Simon's Algorithm" },
    ],
  },
  {
    id: "module-4",
    number: 4,
    title: "Quantum Fourier Transform & Related Algorithms",
    tagline: "The engine behind Shor's — and the famous search speedup.",
    description:
      "Master the Quantum Fourier Transform, phase estimation, Shor's period-finding, and Grover's search — the algorithms that made quantum computing famous — all implemented in Qiskit.",
    lessons: [
      { slug: "qft", title: "Quantum Fourier Transform" },
      { slug: "qft-qiskit", title: "QFT Implementation in Qiskit" },
      { slug: "phase-estimation", title: "Quantum Phase Estimation" },
      { slug: "shors-algorithm", title: "Shor's Period-Finding Algorithm" },
      { slug: "grovers-algorithm", title: "Grover's Search Algorithm" },
    ],
  },
  {
    id: "module-5",
    number: 5,
    title: "Quantum Machine Learning",
    tagline: "Where quantum computing meets ML.",
    description:
      "Data encoding, the HHL algorithm, quantum linear regression, the swap test, quantum k-means, quantum PCA, and quantum SVMs — with Qiskit implementations throughout.",
    lessons: [
      { slug: "data-encoding", title: "Data Encoding" },
      { slug: "hhl-algorithm", title: "HHL Algorithm" },
      { slug: "quantum-linear-regression", title: "Quantum Linear Regression" },
      { slug: "swap-test", title: "Swap Test & Euclidean Distance" },
      { slug: "quantum-kmeans", title: "Quantum K-Means Clustering" },
      { slug: "quantum-pca", title: "Quantum Principal Component Analysis" },
      { slug: "quantum-svm", title: "Quantum Support Vector Machines" },
    ],
  },
  {
    id: "module-6",
    number: 6,
    title: "Quantum Deep Learning",
    tagline: "Hybrid quantum-classical neural networks.",
    description:
      "Design, train, and evaluate hybrid quantum-classical neural networks for classification — including quantum neural networks built for near-term (NISQ) processors.",
    lessons: [
      { slug: "hybrid-qnn", title: "Hybrid Quantum-Classical Neural Networks" },
      { slug: "qnn-classification", title: "Classification with Hybrid QNNs" },
      { slug: "qnn-nisq", title: "QNNs on Near-Term Processors" },
    ],
  },
  {
    id: "module-7",
    number: 7,
    title: "Variational Optimisation & Adiabatic Methods",
    tagline: "VQE, QAOA, and quantum algorithms for finance.",
    description:
      "Variational quantum eigensolver, expectation computation, QAOA, the adiabatic theorem, and real applications — Max-Cut clustering, combinatorial optimisation, and quantum algorithms for finance.",
    lessons: [
      { slug: "vqe", title: "Variational Quantum Eigensolver (VQE)" },
      { slug: "qaoa", title: "Quantum Approximate Optimisation Algorithm" },
      { slug: "adiabatic-theorem", title: "Quantum Adiabatic Theorem" },
      { slug: "quantum-finance", title: "Quantum Algorithms for Finance" },
    ],
  },
  {
    id: "module-8",
    number: 8,
    title: "Quantum Physics Stories",
    tagline: "The experiments and ideas that revealed the quantum world.",
    description:
      "Story-driven physics behind the math — the double-slit experiment, the Einstein–Bohr debate, decoherence, and more. Original enrichment material: the human stories that make the math click.",
    lessons: [
      { slug: "wave-particle-duality", title: "Wave–Particle Duality" },
      { slug: "double-slit-experiment", title: "The Double-Slit Experiment" },
      { slug: "does-moon-exist", title: "Does the Moon Exist When Nobody Looks?" },
      { slug: "schrodinger-equation", title: "The Schrödinger Equation" },
      { slug: "heisenberg-uncertainty", title: "Heisenberg's Uncertainty Principle" },
      { slug: "quantum-spin", title: "Quantum Spin" },
      { slug: "decoherence", title: "Decoherence" },
      { slug: "einstein-bohr-debate", title: "The Einstein–Bohr Debate" },
      { slug: "epr-paradox", title: "The EPR Paradox & “Spooky Action”" },
      { slug: "copenhagen-interpretation", title: "The Copenhagen Interpretation" },
      { slug: "quantum-history", title: "Quantum History: Newton to 1933" },
    ],
  },
  {
    id: "module-9",
    number: 9,
    title: "Nobel Prizes That Built Quantum",
    tagline: "The discoveries — and discoverers — behind quantum computing.",
    description:
      "Eleven Nobel Prizes that built the quantum world, from Planck's desperate mathematical trick in 1900 to the 2025 prize for the superconducting circuits behind quantum computing. Original enrichment: the human story behind the physics.",
    lessons: [
      { slug: "nobel-1900-planck", title: "1900 · Planck and the Quantum Hypothesis" },
      { slug: "nobel-1921-einstein", title: "1921 · Einstein and the Photoelectric Effect" },
      { slug: "nobel-1922-bohr", title: "1922 · Bohr and the Quantum Atom" },
      { slug: "nobel-1929-debroglie", title: "1929 · de Broglie and Matter Waves" },
      { slug: "nobel-1932-heisenberg", title: "1932 · Heisenberg and Quantum Mechanics" },
      { slug: "nobel-1933-schrodinger-dirac", title: "1933 · Schrödinger & Dirac" },
      { slug: "nobel-1965-qed", title: "1965 · Feynman, Schwinger & Tomonaga" },
      { slug: "nobel-1973-tunneling", title: "1973 · Tunneling: Esaki, Giaever & Josephson" },
      { slug: "nobel-2012-haroche-wineland", title: "2012 · Haroche & Wineland: Taming Single Quanta" },
      { slug: "nobel-2022-entanglement", title: "2022 · Aspect, Clauser & Zeilinger: Entanglement Proved" },
      { slug: "nobel-2025-clarke-devoret-martinis", title: "2025 · Clarke, Devoret & Martinis: The Quantum Computing Nobel" },
    ],
  },
  {
    id: "module-10",
    number: 10,
    title: "Quantum Philosophy",
    tagline: "The deep questions quantum computing forces us to ask.",
    description:
      "Why quantum computing needs philosophy: six interpretations of quantum mechanics and what each says your quantum computer is doing, the death of local realism, randomness vs determinism and free will, and Wheeler's “it from bit.” Original enrichment material — the questions physics has not settled.",
    lessons: [
      { slug: "phil-why-philosophy", title: "Why Philosophy Is Needed for Quantum Computing" },
      { slug: "phil-interpretations", title: "Six Interpretations — and What Your Quantum Computer Is Doing" },
      { slug: "phil-randomness-free-will", title: "Randomness, Determinism, and Free Will" },
      { slug: "phil-it-from-bit", title: "“It from Bit”: Is Information the Stuff of Reality?" },
    ],
  },
];

export const flatLessons = modules.flatMap((m) =>
  m.lessons.map((l) => ({
    ...l,
    moduleId: m.id,
    moduleTitle: m.title,
    moduleNumber: m.number,
  }))
);

export function neighbors(slug) {
  const i = flatLessons.findIndex((l) => l.slug === slug);
  return {
    prev: i > 0 ? flatLessons[i - 1] : null,
    next: i < flatLessons.length - 1 ? flatLessons[i + 1] : null,
  };
}

export function moduleNeighbors(moduleId) {
  const i = modules.findIndex((m) => m.id === moduleId);
  return {
    prev: i > 0 ? modules[i - 1] : null,
    next: i < modules.length - 1 ? modules[i + 1] : null,
  };
}

export function moduleOf(lesson) {
  return modules.find((m) => m.id === lesson.moduleId);
}
