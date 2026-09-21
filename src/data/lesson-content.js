// Lesson body content. Each lesson has:
//   simple    — plain-language explanation (anyone can follow)
//   deeper    — the rigorous layer (math via KaTeX, \(...\) and \[...\])
//   keyPoints — takeaways
//   quiz      — { q, options, answer (index), why }
//
// Lessons without an entry here render a "coming soon" placeholder page
// (nav, prev/next still work). Content gets filled in from the course PPT.

const raw = String.raw;

import { physicsLessons } from "./lesson-extra/physics.js";
import { nobelLessons } from "./lesson-extra/nobel.js";

export const lessonContent = {
  ...physicsLessons,
  ...nobelLessons,
  qubits: {
    simple: raw`
      <p>Start with what you already know. A classical bit — the kind inside your laptop — is like a <strong>light switch</strong>. It is either OFF (we call that 0) or ON (we call that 1). There is no in-between.</p>
      <p>A <strong>qubit</strong> is like a <strong>spinning coin</strong>. While the coin spins in the air, it is neither heads nor tails — it is a <em>blend</em> of both possibilities at once. Physicists call this blend <strong>superposition</strong>.</p>
      <p>Now <strong>measure</strong> the qubit. That is like slapping your hand down on the spinning coin: in that instant it becomes heads (0) <em>or</em> tails (1). The spinning stops, the blend is gone, and you get one definite answer.</p>
      <div class="compare">
        <div><h4>Classical bit</h4><p>A light switch: always exactly 0 or 1.</p></div>
        <div><h4>Qubit</h4><p>A spinning coin: a blend of 0 and 1 until you look.</p></div>
      </div>
      <p><strong>Why should you care?</strong> Because the blend grows insanely fast. One qubit blends 2 possibilities. Two qubits blend 4. Three blend 8. <strong>Ten qubits blend 1,024 possibilities — all at the same time</strong> — while 10 classical bits can only ever hold a single 10-bit number at once. That exponential room is the raw material every quantum algorithm in this course exploits.</p>
      <p class="myth"><strong>Common myth:</strong> “A qubit is just a bit that is 0 and 1 at the same time.” Close — but the blend has <em>structure</em>. The two possibilities behave like waves: they can <strong>interfere</strong>, cancelling or reinforcing each other. That interference (coming up in lesson 6) is where the real magic lives.</p>
    `,
    deeper: raw`
      <p>Mathematically, a qubit is a unit vector in a two-dimensional complex Hilbert space. We write its state in <strong>Dirac notation</strong> as</p>
      <p>\[|\psi\rangle = \alpha|0\rangle + \beta|1\rangle, \qquad \alpha, \beta \in \mathbb{C}, \quad |\alpha|^2 + |\beta|^2 = 1.\]</p>
      <p>The complex numbers \(\alpha\) and \(\beta\) are <strong>probability amplitudes</strong>. The <strong>Born rule</strong> says: measure the qubit in the computational basis and you observe \(|0\rangle\) with probability \(|\alpha|^2\) and \(|1\rangle\) with probability \(|\beta|^2\). After measurement the state <strong>collapses</strong> to whichever outcome you saw — the superposition is destroyed.</p>
      <p>Up to an irrelevant global phase, every single-qubit state can be written as</p>
      <p>\[|\psi\rangle = \cos\frac{\theta}{2}\,|0\rangle + e^{i\phi}\sin\frac{\theta}{2}\,|1\rangle,\]</p>
      <p>which maps one-to-one onto a point \((\theta, \phi)\) on the <strong>Bloch sphere</strong>: \(|0\rangle\) at the north pole, \(|1\rangle\) at the south pole, and every equal superposition — e.g. \(|+\rangle = \tfrac{|0\rangle+|1\rangle}{\sqrt{2}}\) — on the equator.</p>
      <p><strong>Qubit vs. probabilistic bit.</strong> A classical coin flip is also “0 or 1 with probabilities” — but its randomness is <em>ignorance</em>: the coin already landed, you just don't know how. A qubit's superposition is <em>ontological</em>: before measurement there is no fact of the matter, and the amplitudes \(\alpha, \beta\) can interfere. No classical probability distribution reproduces interference — the later lessons prove exactly this.</p>
      <p>For \(n\) qubits the state lives in a \(2^n\)-dimensional space — the <strong>tensor product</strong> of the single-qubit spaces. Writing down the state of just 50 qubits already needs more numbers than any classical supercomputer can store. That is the origin of quantum advantage — and of why simulating quantum systems is exponentially hard classically.</p>
    `,
    keyPoints: [
      "A qubit is the quantum analogue of a bit: a two-level quantum system.",
      "Superposition lets a qubit exist as a blend α|0⟩ + β|1⟩ until measured.",
      "Measurement is probabilistic (|α|², |β|²) and collapses the state.",
      "n qubits are described by 2ⁿ amplitudes — an exponential state space.",
      "Superposition is not classical randomness: amplitudes can interfere.",
    ],
    quiz: [
      {
        q: "You measure a qubit in the state |ψ⟩ = α|0⟩ + β|1⟩. What do you get?",
        options: [
          "Always a blend of 0 and 1",
          "0 with probability |α|², or 1 with probability |β|²",
          "0 if α is bigger than β, otherwise 1",
          "A brand-new qubit",
        ],
        answer: 1,
        why: "Measurement collapses the superposition to a single classical outcome, with probabilities given by the Born rule.",
      },
      {
        q: "How many complex amplitudes are needed to describe the state of 4 qubits?",
        options: ["4", "8", "16", "32"],
        answer: 2,
        why: "n qubits live in a 2ⁿ-dimensional Hilbert space, so 4 qubits need 2⁴ = 16 amplitudes.",
      },
      {
        q: "Which statement about a qubit in superposition is TRUE?",
        options: [
          "It secretly already is 0 or 1 — we just don't know which",
          "It exists as a blend of 0 and 1 in a way that allows interference",
          "It can be copied freely, like a classical bit",
          "Measuring it leaves the superposition intact",
        ],
        answer: 1,
        why: "Superposition is not mere ignorance — amplitudes interfere, which no classical hidden state can reproduce. (And the no-cloning theorem forbids perfect copying.)",
      },
    ],
  },
};
