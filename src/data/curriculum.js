// Curriculum structure: mirrors the IIT Delhi CEP Certification in
// Quantum Computing and Machine Learning (Batch 08) syllabus.

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
