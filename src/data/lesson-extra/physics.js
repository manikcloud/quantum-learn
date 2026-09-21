// Physics enrichment lessons: original story-driven background articles
// (wave-particle duality, the great debates, decoherence...) that sit
// alongside the core lessons.
// Shape mirrors src/data/lesson-content.js.

const raw = String.raw;

export const physicsLessons = {
  "wave-particle-duality": {
    simple: raw`
      <p>Classical physics loved clean categories. A <strong>particle</strong> was a small, localized object with a position and a trajectory. A <strong>wave</strong> was an extended disturbance that spread through space and showed interference and diffraction. That tidy division worked for centuries — until experiments started showing that nature had no interest in keeping our categories neat.</p>
      <p><strong>Light rebelled first.</strong> In some experiments it behaved unmistakably like a wave: it diffracted, interfered, and painted patterns that only made sense if light spread out like a ripple. But in others — above all the <strong>photoelectric effect</strong> — light behaved as if it arrived in localized packets, handing over energy in discrete chunks. Einstein's explanation of those packets, later called <strong>photons</strong>, didn't erase the wave picture. It stood beside it, and the tension stayed.</p>
      <p>Then <strong>matter joined the rebellion</strong>. Electrons, which everyone expected to behave like particles, produced diffraction patterns too. De Broglie's bold idea — that matter has a wavelength — was confirmed by experiment. Now both sides of the old divide were broken: light sometimes acted like particles, and particles sometimes acted like waves.</p>
      <div class="compare">
        <div><h4>The blunt slogan</h4><p>"Things are both waves and particles at the same time" — too crude to be true.</p></div>
        <div><h4>The safer lesson</h4><p>Quantum objects follow a framework that yields wave-like or particle-like behavior depending on the experimental context.</p></div>
      </div>
      <p>If the setup is sensitive to interference, wave-like behavior shows up. If it records localized detection events, particle-like behavior shows up. Neither classical label is the whole story on its own — and the double-slit experiment, coming up next, compresses this entire dilemma into one unforgettable image.</p>
    `,
    deeper: raw`
      <p>Bohr gave this idea a name: <strong>complementarity</strong>. The wave and particle descriptions are not rivals fighting over the same territory; they are partial, mutually incomplete views that become visible in different experimental arrangements. You can sharpen one at the cost of blurring the other, but the full quantum object is neither.</p>
      <p>Underneath the philosophy sits the mathematics of <strong>amplitudes</strong>. A quantum object carries a complex amplitude \(\psi\) for each alternative, and what you observe is governed by \(|\psi|^2\) — the Born rule. When several alternatives are available, it is the <em>sum of amplitudes</em> that gets squared, and the cross terms between them are exactly what we call interference. "Particle-like" behavior is what the same mathematics produces when those cross terms vanish.</p>
    `,
    keyPoints: [
      "Classical physics divided the world into localized particles and extended waves.",
      "Light defied the split: wave-like in interference, particle-like in the photoelectric effect.",
      "Matter defied it too: electrons diffract, confirming de Broglie's matter waves.",
      "The modern lesson is contextual: the experimental setup determines which behavior appears.",
      "\"Both at once\" is too blunt — classical categories are simply too small for quantum objects.",
    ],
    quiz: [
      {
        q: "Which experiment first forced physicists to treat light as arriving in discrete energy packets?",
        options: [
          "The double-slit experiment",
          "The photoelectric effect",
          "The Stern–Gerlach experiment",
          "Rutherford scattering",
        ],
        answer: 1,
        why: "Einstein explained the photoelectric effect by proposing that light arrives in localized quanta — later called photons.",
      },
      {
        q: "De Broglie's bold proposal was that…",
        options: [
          "Matter, like electrons, has a wavelength",
          "Light has mass",
          "Photons are purely waves",
          "Atoms are indivisible",
        ],
        answer: 0,
        why: "De Broglie suggested matter has wave-like character, confirmed when electrons produced diffraction patterns.",
      },
      {
        q: "What is the safest modern summary of wave–particle duality?",
        options: [
          "Quantum objects literally switch identities back and forth",
          "Classical labels are too small; the experimental context determines which behavior appears",
          "Waves don't really exist",
          "Duality applies only to light, never to matter",
        ],
        answer: 1,
        why: "The quantum framework yields wave-like or particle-like behavior depending on the setup — neither classical label is the full story.",
      },
    ],
  },
  "double-slit-experiment": {
    simple: raw`
      <p>If one experiment deserves the title <em>the doorway into quantum strangeness</em>, it is the double-slit experiment. The setup sounds almost childishly simple: a source, a barrier with two narrow slits, and a screen behind it. Fire classical particles through and you expect two bright bands — one behind each slit. Send a wave through and you expect an <strong>interference pattern</strong>: alternating bright and dark stripes, where the wave from one slit reinforces or cancels the wave from the other.</p>
      <p>Now the shock. Send quantum objects — electrons, say — through <strong>one at a time</strong>, and the final pattern is not two classical bands. Each electron still arrives as a single localized <strong>dot</strong> on the screen. But as the dots accumulate, they build up an interference pattern — as though each electron somehow carried wave-like information about <em>both</em> paths. Localized arrivals, wave-like collective structure: the two things classical intuition insists on keeping apart, in one image.</p>
      <p>The real lesson is not that "the electron splits in half." It is that the quantum state assigns <strong>amplitudes to alternative paths</strong>, and those amplitudes interfere <em>before</em> any detection is registered. What lands on the screen is shaped by the relationship between possibilities, not by a hidden classical route.</p>
      <p>Then it gets even more revealing. Add a detector that records <strong>which slit</strong> each electron used, and the interference pattern disappears — the screen reverts to the two-band, particle-like distribution. That is not human curiosity magically bending reality. It is that the interaction needed to record path information changes the physical situation: the coherence between the path alternatives is lost, and with it the interference.</p>
      <p class="myth"><strong>Myth:</strong> "So what was the electron doing before measurement — which slit did it take?" Quantum mechanics refuses the classical version of that question. It offers instead a formalism that predicts the outcomes perfectly: amplitudes evolve, probabilities emerge, and which-path information changes the distribution. The double slit keeps reminding us this is not small-scale classical physics — it is a different grammar of reality.</p>
    `,
    deeper: raw`
      <p>The mathematics of the lesson fits in one line. With amplitudes \(\psi_1\) and \(\psi_2\) for the two slits, the probability pattern on the screen is</p>
      <p>\[P = |\psi_1 + \psi_2|^2 = P_1 + P_2 + 2\,\mathrm{Re}(\psi_1^*\psi_2).\]</p>
      <p>The first two terms are the "classical" contributions; the <strong>cross term</strong> is interference itself. A which-path measurement entangles the electron with the detector or the environment, and once that entanglement spreads to degrees of freedom you don't track, the cross term averages to zero. Physicists call that <strong>decoherence</strong> — the same process that returns, grown up, in the lesson on why the Moon doesn't need an audience.</p>
    `,
    keyPoints: [
      "Electrons sent one at a time still collectively build an interference pattern.",
      "Each arrival is a localized dot; the wave-like structure emerges from many dots.",
      "Quantum amplitudes for alternative paths interfere before detection.",
      "Recording which-path information destroys the interference.",
      "One experiment unites superposition, interference, measurement, and decoherence.",
    ],
    quiz: [
      {
        q: "In the one-at-a-time double-slit experiment, each electron arrives as…",
        options: [
          "A smeared-out wave covering the screen",
          "A localized dot — and many dots together form an interference pattern",
          "Two bright bands, exactly like classical particles",
          "Nothing at all until someone looks",
        ],
        answer: 1,
        why: "Every detection is a localized dot, but the accumulated dots trace out an interference pattern — the experiment's central shock.",
      },
      {
        q: "What happens when you add a detector that records which slit each electron used?",
        options: [
          "The interference pattern gets sharper",
          "The interference disappears and the pattern becomes particle-like",
          "Electrons stop reaching the screen",
          "Nothing changes at all",
        ],
        answer: 1,
        why: "Which-path information destroys the coherence between the alternatives, killing the interference term.",
      },
      {
        q: "Why does the interference vanish with which-path detection?",
        options: [
          "Human curiosity magically alters reality",
          "The interaction needed to record the path destroys coherence between the alternatives",
          "The electrons slow down too much",
          "The slits physically close themselves",
        ],
        answer: 1,
        why: "It is the physical interaction — not consciousness — that entangles the electron with the detector and wipes out interference.",
      },
    ],
  },
  "does-moon-exist": {
    simple: raw`
      <p>Einstein once mocked a certain way of talking about quantum mechanics with a famous question: <em>Do you really believe the Moon exists only when you look at it?</em> The line lands because it exposes a genuine tension. If measurement plays such a central role in quantum theory, how far should we take that idea? Do large objects lack definite existence until observed?</p>
      <p>Hear this first: <strong>no serious physicist thinks the everyday Moon winks in and out of existence.</strong> Macroscopic objects are constantly interacting with their surroundings. The Moon scatters light, exchanges heat, feels gravity, and becomes entangled with unimaginably many environmental degrees of freedom. It is not a delicate isolated quantum system — it is immersed in an ocean of decohering interactions.</p>
      <p>The real issue is subtler, and more interesting. Quantum theory says isolated systems evolve in superposition, yet our world looks stubbornly classical. Chairs stay put; planets follow definite paths. The Moon's "definiteness" is not a mystery — it is <strong>enforced by constant coupling to the universe around it</strong>, which destroys coherent superpositions of macroscopically distinct states almost instantaneously.</p>
      <p>So why did Einstein press the question so hard? He wasn't defending a cartoon about the vanishing Moon. He was asking whether a physical theory should merely <em>predict observations</em> or also <em>describe what exists independently of observation</em>. He wanted a more complete account of reality than the standard interpretation seemed willing to give.</p>
      <p class="myth"><strong>Two opposite mistakes to avoid:</strong> dismissing the measurement problem as meaningless — or turning quantum theory into mystical fog where reality depends on human attention like magic. The hard problem isn't whether the Moon vanishes without an audience. It's how classical definiteness <em>emerges</em> from a framework that fundamentally allows superposition.</p>
    `,
    deeper: raw`
      <p>The numbers behind this are staggering. For a mere dust grain, decoherence-time estimates sit around \(10^{-31}\) seconds — so far below any observable timescale that "almost instantaneously" is an understatement. The Moon, vastly larger and more strongly coupled, is decohered beyond any hope of reversal. Its position is redundantly imprinted on the environment: scattered photons carry copies of "where the Moon is" outward in all directions.</p>
      <p>What remains genuinely unsolved is the <strong>measurement problem</strong> itself. Decoherence explains why we never <em>see</em> macroscopic superpositions, but it doesn't by itself explain why one outcome rather than another becomes actual. The Moon question survives because it forces clarity about completeness, measurement, and where the border between quantum possibility and classical fact really comes from.</p>
    `,
    keyPoints: [
      "Einstein's Moon question was a challenge about completeness, not a claim about astronomy.",
      "Macroscopic objects are never isolated: constant environmental interaction destroys coherence.",
      "Classical definiteness is enforced by decoherence, not assumed.",
      "The real puzzle is how the classical world emerges from a quantum framework.",
      "Avoid both dismissing the measurement problem and mysticizing it.",
    ],
    quiz: [
      {
        q: "Why doesn't the Moon show quantum superposition in practice?",
        options: [
          "It is too far away from Earth",
          "Constant environmental interaction destroys its coherence almost instantly",
          "The Moon is classical by physical law",
          "Nobody has ever measured the Moon",
        ],
        answer: 1,
        why: "The Moon scatters light, exchanges heat, and entangles with countless environmental degrees of freedom — decoherence is immediate and irreversible.",
      },
      {
        q: "Einstein's Moon question was really about…",
        options: [
          "Whether the Moon physically vanishes",
          "Whether quantum theory is complete or merely predictive",
          "Astronomy funding priorities",
          "The photoelectric effect",
        ],
        answer: 1,
        why: "Einstein was pressing on whether physics should describe what exists independently of observation, not just predict observations.",
      },
      {
        q: "Which attitude does the article warn against?",
        options: [
          "Taking decoherence seriously",
          "Claiming reality magically depends on human attention",
          "Studying different interpretations",
          "Learning the Schrödinger equation",
        ],
        answer: 1,
        why: "Turning quantum theory into mystical fog misses the real challenge: how classical definiteness emerges from superposition.",
      },
    ],
  },
  "schrodinger-equation": {
    simple: raw`
      <p>Every great physical theory has an equation that tells its systems how to move. Newton's laws do it for classical mechanics; Maxwell's equations do it for electromagnetism. In quantum mechanics, that role belongs to the <strong>Schrödinger equation</strong>. If quantum mechanics is the language of amplitudes and superpositions, this equation is the grammar rule telling those amplitudes how to change.</p>
      <p>Don't rush past its central symbol: the <strong>Hamiltonian</strong>, \(\hat{H}\). It is not just a number — it is the operator representing the system's total energy, encoding what kinds of motion, interaction, and energy structure the system possesses. Change the Hamiltonian and you change the story the state is allowed to tell.</p>
      <p>Its meaning is profound. Before measurement, the quantum future is <strong>not</strong> chosen randomly at every instant. Evolution under the Schrödinger equation is smooth, deterministic, and <strong>unitary</strong> — it preserves the full coherence of the state. Measurement introduces probability in a completely different way, by selecting outcomes from that evolving state. Picture the state as a wave-like pattern being continuously reshaped by the energy landscape it inhabits: spreading in free regions, oscillating in wells, tunneling through barriers.</p>
      <p>And here is the bridge to everything else you'll learn: <strong>quantum gates are engineered approximations to controlled unitary evolutions generated by effective Hamiltonians.</strong> Beneath the digital-looking circuit language, the deep physics is always Schrödinger evolution. The equation is the law that keeps the quantum state coherent until measurement or decoherence intervenes.</p>
    `,
    deeper: raw`
      <p>In its time-dependent form, the equation reads</p>
      <p>\[i\hbar \frac{\partial}{\partial t} |\psi(t)\rangle = \hat{H}\,|\psi(t)\rangle.\]</p>
      <p>Formally, the solution is \(|\psi(t)\rangle = e^{-i\hat{H}t/\hbar}\,|\psi(0)\rangle\): the exponential of the Hamiltonian is a unitary operator that rotates the state through its Hilbert space without ever changing its total probability. Particularly important are the <strong>stationary states</strong> satisfying \(\hat{H}|E_n\rangle = E_n|E_n\rangle\) — states of definite energy that only pick up a phase \(e^{-iE_n t/\hbar}\) as time passes.</p>
      <p>Notice what the equation does <em>not</em> contain: any hint of randomness or collapse. That is why the contrast with measurement is so sharp — and why interpretations of quantum mechanics spend so much effort reconciling the smooth evolution here with the definite outcomes there.</p>
    `,
    keyPoints: [
      "The Schrödinger equation is quantum mechanics' law of motion for the state.",
      "The Hamiltonian encodes the system's energy and dynamics.",
      "Pre-measurement evolution is smooth, deterministic, and unitary — coherence is preserved.",
      "Measurement introduces probability in a fundamentally different way.",
      "Quantum gates are engineered unitary evolutions: the circuit model rests on this equation.",
    ],
    quiz: [
      {
        q: "What does the Hamiltonian Ĥ represent in the Schrödinger equation?",
        options: [
          "The measurement device",
          "The total-energy operator encoding the system's dynamics",
          "The wavefunction itself",
          "Planck's constant",
        ],
        answer: 1,
        why: "The Hamiltonian represents the total energy and encodes what motion and interactions the system can have.",
      },
      {
        q: "Under the Schrödinger equation alone (no measurement), the quantum state evolves…",
        options: [
          "Randomly at every instant",
          "Smoothly and deterministically, preserving coherence",
          "By collapsing continuously",
          "Backwards in time",
        ],
        answer: 1,
        why: "Schrödinger evolution is unitary: smooth, deterministic, and coherence-preserving. Randomness enters only at measurement.",
      },
      {
        q: "How do quantum gates relate to the Schrödinger equation?",
        options: [
          "They are unrelated — gates are pure logic",
          "They are engineered approximations to controlled unitary evolutions generated by Hamiltonians",
          "They violate the equation",
          "They only work on classical computers",
        ],
        answer: 1,
        why: "Beneath the circuit language, gates are carefully engineered unitary evolutions — applied Schrödinger dynamics.",
      },
    ],
  },
  "heisenberg-uncertainty": {
    simple: raw`
      <p>The uncertainty principle is usually explained badly. "If you measure something too carefully, you disturb it." Not completely wrong — but incomplete, and it plants the wrong picture. The real principle runs deeper: <strong>certain pairs of quantities cannot both be sharply defined in the same quantum state at the same time.</strong></p>
      <p>The famous pair is position and momentum:</p>
      <p>\[\Delta x\,\Delta p \ge \frac{\hbar}{2}.\]</p>
      <p>This is not a confession that our instruments are clumsy. It is a statement about the <strong>state itself</strong>: if a state is extremely localized in position, its momentum distribution must spread — and vice versa.</p>
      <p>The wave picture makes it intuitive. A sharply localized wave packet must be built by combining many different wavelengths. Since momentum is tied to wavelength, squeezing the packet in space automatically broadens its momentum content. The fuzziness is <strong>structural</strong> — woven into the mathematics of wave-like states, not added later by careless experimentalists.</p>
      <p class="myth"><strong>Myth:</strong> "With a gentle enough measurement, we could beat the uncertainty principle." No — the limit survives even in principle, because it comes from the algebra of observables, not the apparatus. Whenever the relevant observables don't commute, an uncertainty relation appears: position–momentum, energy–time, different components of spin. Classical trajectories lose their fundamental status — and that is a feature of the theory, not a bug in our tools.</p>
    `,
    deeper: raw`
      <p>At the root sits the <strong>commutator</strong>: \([\hat{x}, \hat{p}] = i\hbar\). The Robertson–Schrödinger relation generalizes the idea — for any two observables \(\hat{A}\) and \(\hat{B}\),</p>
      <p>\[\Delta A\,\Delta B \ge \frac{1}{2}\left|\langle[\hat{A}, \hat{B}]\rangle\right|.\]</p>
      <p>Uncertainty is therefore a theorem about non-commuting operators and the structure of quantum states, not a limitation of technology. Once you see it that way, the principle stops feeling mysterious and starts feeling powerful — which is exactly the preparation you need for spin, where non-commutation becomes concrete and measurable.</p>
    `,
    keyPoints: [
      "The uncertainty principle is structural, not a statement about clumsy instruments.",
      "Δx·Δp ≥ ħ/2: a state cannot be simultaneously sharp in position and momentum.",
      "A localized wave packet needs many wavelengths — hence broad momentum.",
      "Uncertainty appears whenever observables don't commute.",
      "Quantum states need not assign sharp values to every classical variable.",
    ],
    quiz: [
      {
        q: "The uncertainty principle fundamentally says…",
        options: [
          "All measuring instruments are clumsy",
          "Certain pairs of quantities cannot both be sharply defined in the same quantum state",
          "Position can never be measured",
          "Momentum is an illusion",
        ],
        answer: 1,
        why: "It is a structural statement about quantum states — e.g. Δx·Δp ≥ ħ/2 — not a complaint about hardware.",
      },
      {
        q: "Why does narrowing a wave packet in space broaden its momentum?",
        options: [
          "The detector disturbs it",
          "A localized packet must combine many wavelengths, and momentum relates to wavelength",
          "Heisenberg's microscope argument",
          "It doesn't — that's a myth",
        ],
        answer: 1,
        why: "Sharp localization in space requires many wavelength components, which means a wide spread of momentum.",
      },
      {
        q: "Uncertainty relations appear whenever…",
        options: [
          "You measure carelessly",
          "The relevant observables don't commute",
          "The temperature is high",
          "The particle is large",
        ],
        answer: 1,
        why: "Non-commuting observables like x̂ and p̂ can't share sharp values — the Robertson relation makes this precise.",
      },
    ],
  },
  "quantum-spin": {
    simple: raw`
      <p>The word <em>spin</em> is almost designed to mislead beginners. It sounds like the electron is a tiny ball twirling on its axis. Tempting — and wrong. <strong>Quantum spin is an intrinsic form of angular momentum</strong> carried by particles. Nothing needs to physically rotate.</p>
      <p>Why the name, then? Early physicists were trying to explain observed magnetic behavior in atomic spectra, and the mathematics of the new property resembled angular momentum in important ways. The term stuck. But a miniature spinning sphere would demand impossible surface speeds for some particles — the classical picture collapses under its own weight. Spin is a genuinely quantum property with angular-momentum-like behavior, full stop.</p>
      <p>The cleanest demonstration is the <strong>Stern–Gerlach experiment</strong>: send atoms through a non-uniform magnetic field and you don't get a smooth spread of orientations — you get <strong>discrete outcomes</strong>. For a spin-1/2 system, the measured component comes out as one of two values, "up" or "down" relative to the chosen axis. That discreteness is exactly what makes spin a natural qubit.</p>
      <p>Spin also teaches a lesson nothing else teaches as cleanly: <strong>the measurement axis matters</strong>. A state definite with respect to one axis can be a superposition with respect to another. Prepare "up along z," measure along x, and the old certainty dissolves. Basis choice is not bookkeeping — it is physics.</p>
      <p>That is why spin became technologically central: electron spin, nuclear spin, and spin-like effective degrees of freedom are physically real two-level systems appearing across quantum hardware proposals. Spin is one of the great bridges between the conceptual world of quantum theory and the engineering world of qubits — and the environment, as always, is waiting to ruin it.</p>
    `,
    deeper: raw`
      <p>A spin-1/2 system lives in a two-dimensional Hilbert space — the same mathematics as a qubit. Its observables are built from the Pauli operators, and the components of spin famously refuse to commute:</p>
      <p>\[[\hat{S}_x, \hat{S}_y] = i\hbar\,\hat{S}_z,\]</p>
      <p>which is why the uncertainty principle bites here too: no state can be simultaneously sharp in \(S_x\) and \(S_y\). The eigenstates \(|\uparrow\rangle\) and \(|\downarrow\rangle\) of \(\hat{S}_z\) are equal superpositions in the x-basis — \(|\uparrow\rangle = (|\rightarrow\rangle + |\leftarrow\rangle)/\sqrt{2}\) — the algebraic reason that "up along z" looks completely undecided along x.</p>
    `,
    keyPoints: [
      "Spin is intrinsic angular momentum, not a tiny classical rotation.",
      "The name stuck because the mathematics resembles angular momentum.",
      "Stern–Gerlach shows discrete outcomes: up/down relative to the chosen axis.",
      "Measurement axis matters: definite along one axis can mean superposition along another.",
      "Spin-1/2 systems are natural physical qubits.",
    ],
    quiz: [
      {
        q: "Quantum spin is best described as…",
        options: [
          "A tiny ball physically rotating on its axis",
          "An intrinsic form of angular momentum, not a classical rotation",
          "A property only of protons",
          "An optical illusion",
        ],
        answer: 1,
        why: "Spin is a genuinely quantum property with angular-momentum-like behavior; the spinning-ball picture leads to contradictions.",
      },
      {
        q: "The Stern–Gerlach experiment demonstrated…",
        options: [
          "A continuous spread of atomic deflections",
          "Discrete outcomes — e.g. up or down — for spin-1/2 systems",
          "That electrons have no spin",
          "That atoms are indivisible",
        ],
        answer: 1,
        why: "Atoms through a non-uniform magnetic field split into discrete beams, revealing quantized spin components.",
      },
      {
        q: "A spin prepared 'up along z,' measured along x, gives…",
        options: [
          "Still definitely up",
          "Up or down with 50/50 probability — basis choice matters",
          "No result at all",
          "Always down",
        ],
        answer: 1,
        why: "|↑⟩ is an equal superposition in the x-basis, so the x-measurement is maximally uncertain.",
      },
    ],
  },
  "decoherence": {
    simple: raw`
      <p>Imagine trying to keep a whisper alive in a noisy stadium. A qubit is that whisper. While it is protected, the whisper stays meaningful. But the moment the environment starts "listening" — through heat, vibration, stray electromagnetic fields, other particles — the delicate pattern begins to smear out. That loss of quantum sharpness is <strong>decoherence</strong>.</p>
      <p>What makes it such a big deal: a qubit doesn't just store a value like a classical bit. A classical bit survives a messy room — it is 0 or 1, and as long as the hardware works, that information stays readable. A qubit's power comes from something far more fragile: the precise <strong>relationship between possibilities</strong>. Superposition holds the potential for multiple outcomes at once, and that potential depends on an invisible internal order — a kind of quantum rhythm. Decoherence is that rhythm being disturbed.</p>
      <p>Think of a perfectly coordinated <strong>choir singing in harmony</strong>: every voice matters, and the power comes from exactly how the voices line up. Then noise enters. One singer hears an echo, another loses the beat, another follows a different sound. The choir hasn't vanished, but the harmony has. That harmony is what allows interference, entanglement, and every quantum computational advantage. Once the environment has interacted too strongly, the qubit starts behaving like an ordinary classical object.</p>
      <p>This is why building a quantum computer is mostly about <strong>protection</strong>: cooling to extreme cold, isolating from vibration, shielding electromagnetic noise, and error correction to rescue information before it slips away. The whole field is, in one sense, a fight to keep the whisper from being swallowed by the stadium.</p>
      <p class="myth"><strong>Subtle point:</strong> decoherence is not the same as measurement. Measurement is a controlled process producing a usable macroscopic record. Decoherence is broader and crueler: the environment steals phase information whether or not you wanted a measurement, entangling the system with degrees of freedom you aren't tracking. The interference pattern you hoped to use is gone either way.</p>
    `,
    deeper: raw`
      <p>Formally, decoherence is the system becoming entangled with its environment. If you ignore — mathematically, trace over — the environment, the qubit's reduced state loses its off-diagonal "coherence" terms and becomes an ordinary statistical mixture, indistinguishable from classical ignorance. Engineers quantify the fight with two timescales: \(T_1\), the energy <strong>relaxation</strong> time, and \(T_2\), the <strong>dephasing</strong> time over which superpositions decay.</p>
      <p>Every hardware platform is, at bottom, an attempt to stretch these numbers long enough for the mathematics to win before the environment turns the experiment into noise. That is why coherence times, error rates, dilution refrigerators, and fault-tolerant computation dominate modern quantum engineering: a quantum computer is not just a machine for producing qubits, but a machine for keeping them coherent.</p>
    `,
    keyPoints: [
      "Decoherence is the loss of quantum coherence through unwanted environmental interaction.",
      "A qubit's power lives in fragile phase relationships, unlike a robust classical bit.",
      "Quantum engineering is largely protection: cooling, isolation, shielding, error correction.",
      "Decoherence is not identical to measurement — it's broader and uncontrolled.",
      "Coherence times (T1, T2) are the numbers the whole hardware race is about.",
    ],
    quiz: [
      {
        q: "Decoherence is…",
        options: [
          "The same thing as measurement",
          "The loss of quantum coherence as the environment steals phase information",
          "A type of quantum gate",
          "Caused only by cooling failures",
        ],
        answer: 1,
        why: "Decoherence is uncontrolled entanglement with the environment, destroying the phase relationships that quantum computation needs.",
      },
      {
        q: "Why is a qubit more fragile than a classical bit?",
        options: [
          "It is physically smaller",
          "Its power lives in delicate phase relationships between possibilities, which noise scrambles",
          "Classical bits are digital",
          "Qubits run hotter",
        ],
        answer: 1,
        why: "A classical bit just needs to stay 0 or 1; a qubit needs its superposition's internal 'rhythm' intact.",
      },
      {
        q: "Which is a real strategy against decoherence?",
        options: [
          "Shouting encouragement at the qubit",
          "Ultra-low temperatures, isolation, shielding, and error correction",
          "Using bigger classical bits",
          "Measuring the qubit constantly",
        ],
        answer: 1,
        why: "Quantum engineering fights decoherence with extreme cold, vibration isolation, EM shielding, and error correction.",
      },
    ],
  },
  "einstein-bohr-debate": {
    simple: raw`
      <p>The Einstein–Bohr debate was not a quarrel about equations. Both men knew the formal power of quantum mechanics. The fight was about what the theory <strong>meant</strong>: is quantum mechanics a complete description of physical reality, or a brilliant but incomplete statistical tool pointing at a deeper layer still to be found?</p>
      <p>Einstein wasn't rejecting the theory's success. He was disturbed by the loss of an <strong>objective, observer-independent picture</strong> of the world. Good theories, he felt, should describe what exists — not only what is observed. Bohr argued the opposite lesson: quantum mechanics forces us to rethink what can meaningfully be said about physical properties <em>independent of measurement contexts</em>. For Bohr, the theory wasn't incomplete in Einstein's sense; it was telling us something radical about the limits of classical description.</p>
      <p>Their exchanges became legendary because Einstein kept producing thought experiments designed to expose unacceptable consequences — and Bohr kept showing that each one <strong>smuggled classical assumptions</strong> into a domain where those assumptions no longer held. It was philosophy in the best sense: asking what science is allowed to claim about reality.</p>
      <p>The debate still matters because students stand exactly where Einstein and Bohr stood. One part of the mind wants a clean hidden mechanism beneath the statistics; another becomes convinced that quantum mechanics has forced us to loosen classical expectations. Later, <strong>Bell's theorem</strong> and the experiments that followed showed that Einstein's preferred kind of local hidden-variable completion faces severe obstacles. Yet the urge for a deeper account never died — and the tension between predictive success and interpretive unease is permanent.</p>
    `,
    deeper: raw`
      <p>Einstein's sharpest move was the 1935 EPR paper — the next lesson — which tried to turn philosophical discomfort into a concrete logical challenge. Bohr's reply leaned on <strong>complementarity</strong>: you cannot meaningfully combine results from mutually exclusive experimental arrangements into one classical story.</p>
      <p>Decades later, Bell made the dispute testable by deriving inequalities that any local hidden-variable theory must satisfy — inequalities quantum mechanics violates, and experiment confirms it does. The debate thus did something rare: a philosophical argument matured into an experimental science, and the argument's sharpest product, entanglement, became the working resource of quantum information.</p>
    `,
    keyPoints: [
      "The debate was about meaning and completeness, not about the equations.",
      "Einstein wanted an observer-independent description of reality.",
      "Bohr argued quantum theory limits what can be said independent of measurement context.",
      "Einstein's thought experiments were answered by exposing smuggled classical assumptions.",
      "Bell's theorem later made the dispute experimentally testable; the tension endures.",
    ],
    quiz: [
      {
        q: "The Einstein–Bohr debate was fundamentally about…",
        options: [
          "Who was the greater genius",
          "Whether quantum mechanics completely describes reality or is an incomplete statistical tool",
          "Who discovered the photoelectric effect",
          "How to fund physics research",
        ],
        answer: 1,
        why: "Both accepted the equations' power; they fought over completeness and what the theory says about reality.",
      },
      {
        q: "How did Bohr typically answer Einstein's thought experiments?",
        options: [
          "By showing they smuggled classical assumptions into a quantum domain",
          "By agreeing with Einstein immediately",
          "By rewriting the Schrödinger equation",
          "By refusing to engage",
        ],
        answer: 0,
        why: "Bohr repeatedly demonstrated that each thought experiment hid classical premises that fail in the quantum regime.",
      },
      {
        q: "What did Bell's theorem and subsequent experiments establish?",
        options: [
          "Einstein's local hidden-variable hope faces severe obstacles",
          "That Bohr was wrong about everything",
          "That quantum mechanics makes no testable predictions",
          "That hidden variables were discovered",
        ],
        answer: 0,
        why: "Bell derived limits all local hidden-variable theories must obey; quantum mechanics violates them, and experiments agree with quantum mechanics.",
      },
    ],
  },
  "epr-paradox": {
    simple: raw`
      <p>In 1935, Einstein, Podolsky, and Rosen published one of the most famous attacks on the standard quantum view. Their goal was <strong>not</strong> to deny the theory's predictive success — it was to argue the theory could not be <strong>complete</strong>. We call it the <strong>EPR paradox</strong>.</p>
      <p>The core idea is simple to state. Let two quantum systems interact, then separate them far apart. Quantum mechanics allows them to remain <strong>entangled</strong>: the joint state preserves strong correlations. EPR reasoned that if measuring one system lets you predict with certainty the result of measuring the other — <em>without physically disturbing the distant partner</em> — then the distant partner must already possess that property. If quantum mechanics doesn't assign it in advance, the theory must be incomplete.</p>
      <p>Einstein sharpened the discomfort with his famous phrase <strong>"spooky action at a distance."</strong> He disliked nonlocal-looking correlations that couldn't be explained by local, pre-existing properties, and hoped a deeper hidden-variable theory would restore locality and realism together.</p>
      <p>For decades the argument stayed partly philosophical — until <strong>John Bell</strong> changed the conversation. Bell derived inequalities that <em>any</em> local hidden-variable theory must satisfy, and showed quantum mechanics predicts violations for suitable entangled states and measurements. Experiments — beginning with Alain Aspect's and growing ever more loophole-tight — sided with quantum mechanics.</p>
      <p>This does <strong>not</strong> mean faster-than-light messaging is possible. Bell violations can't be used to send ordinary information superluminally. But they do mean the world isn't described by the combination of local causality and pre-assigned hidden outcomes Einstein had hoped for. And here's the beautiful irony: what Einstein saw as a problem became the seed of entanglement-based technologies — quantum cryptography and teleportation.</p>
    `,
    deeper: raw`
      <p>The sharpest form is the CHSH inequality: for certain measurement choices, any local hidden-variable model satisfies \(|S| \le 2\), while quantum mechanics predicts up to \(|S| = 2\sqrt{2}\) — the Tsirelson bound — for maximally entangled states.</p>
      <p>Experiments now violate the classical bound by overwhelming statistical margins, with detection and locality loopholes closed. EPR began as philosophy; Bell turned it into arithmetic; experiment turned the arithmetic into fact. What started as an argument that quantum mechanics must be incomplete became the foundation of quantum information science.</p>
    `,
    keyPoints: [
      "The 1935 EPR paper argued quantum mechanics is incomplete, not that its predictions fail.",
      "EPR's logic: certain prediction without disturbance implies a pre-existing 'element of reality.'",
      "Bell derived statistical limits for all local hidden-variable theories.",
      "Experiments violate those limits, siding with quantum mechanics.",
      "No faster-than-light messaging is possible — but entanglement became a technological resource.",
    ],
    quiz: [
      {
        q: "The 1935 EPR paper aimed to show that…",
        options: [
          "Quantum predictions are wrong",
          "Quantum mechanics is incomplete",
          "Entanglement is impossible",
          "Light travels slowly",
        ],
        answer: 1,
        why: "Einstein, Podolsky, and Rosen accepted the theory's predictions but argued it couldn't be the complete story.",
      },
      {
        q: "What was Bell's contribution to the debate?",
        options: [
          "He proved hidden variables exist",
          "He derived statistical limits any local hidden-variable theory must obey — which quantum mechanics violates",
          "He disproved relativity",
          "He built the first quantum computer",
        ],
        answer: 1,
        why: "Bell's inequalities turned a philosophical dispute into a testable prediction; experiments violate the classical limits.",
      },
      {
        q: "Do Bell-inequality violations allow faster-than-light messaging?",
        options: [
          "Yes, via entanglement",
          "No — the correlations can't be used to send ordinary information",
          "Only over short distances",
          "Yes, but only on Tuesdays",
        ],
        answer: 1,
        why: "Entanglement correlations are real but uncontrollable at either end, so no usable signal travels faster than light.",
      },
    ],
  },
  "copenhagen-interpretation": {
    simple: raw`
      <p>The Copenhagen interpretation is probably the most quoted interpretation of quantum mechanics — and the most oversimplified. The pop version goes: <em>"nothing is real until observed."</em> Catchy, and not a fair summary of what Bohr and the Copenhagen school actually argued.</p>
      <p>The real view is more modest and more subtle. It treats the quantum formalism as the correct framework for <strong>predicting the probabilities of outcomes in measurement contexts</strong> — while insisting that ordinary <strong>classical language is still needed</strong> to describe the measuring apparatus and the recorded result. It emphasizes the practical structure of experiments and the limits of classical concepts applied uncritically to microscopic systems.</p>
      <p>One of Bohr's key ideas was <strong>complementarity</strong>: certain arrangements reveal one aspect of a system, different arrangements reveal another. Wave-like and particle-like descriptions aren't both wrong — they are context-dependent, mutually incomplete classical images for discussing phenomena the full formalism unifies more deeply. That's not a license for sloppiness; it's a warning that inherited classical language doesn't transfer perfectly.</p>
      <p>Also worth knowing: Copenhagen was never a single rigid doctrine. Bohr, Heisenberg, and others differed in emphasis. The family resemblance is clear — the wavefunction as the central predictive object, measurement outcomes as definite classical records, and suspicion toward demands for a fully classical account of microscopic reality independent of experimental context.</p>
      <p class="myth"><strong>Why do people dislike it?</strong> Because it can feel unsatisfying: it tells you how to calculate and how to speak carefully, but not what vividly <em>exists</em> underneath. That dissatisfaction is exactly why later interpretations — many worlds, pilot wave, objective collapse, relational approaches — kept emerging. Still, Copenhagen remains historically central: it shaped how generations learned to <em>use</em> quantum mechanics successfully, and even its critics usually begin by speaking its practical language.</p>
    `,
    deeper: raw`
      <p>The enduring thorn is the <strong>measurement problem</strong>: the formalism evolves the wavefunction smoothly, yet experiments yield single definite outcomes — and Copenhagen never drew a principled line, the so-called "Heisenberg cut," between the quantum system and the classical apparatus. Where exactly does the quantum description stop?</p>
      <p>Copenhagen's power was to make that question practically irrelevant for working physicists; its weakness is that the question never went away. Every rival interpretation since — from Everett's many worlds to objective-collapse models — can be read as an attempt to answer what Copenhagen chose to leave as careful silence.</p>
    `,
    keyPoints: [
      "Copenhagen is the most quoted and most oversimplified interpretation.",
      "Core claim: the formalism predicts measurement-outcome probabilities; classical language describes apparatus and records.",
      "Complementarity: wave/particle images are context-dependent and mutually incomplete.",
      "It was a family of views (Bohr, Heisenberg), not one rigid doctrine.",
      "Dissatisfaction with its ontology drove later interpretations; its practical language endures.",
    ],
    quiz: [
      {
        q: "A fair summary of the Copenhagen interpretation is…",
        options: [
          "Nothing is real until a human looks at it",
          "The formalism predicts measurement-outcome probabilities; classical language describes the apparatus and records",
          "Quantum mechanics has been proven wrong",
          "Many parallel worlds exist",
        ],
        answer: 1,
        why: "Copenhagen centers the predictive formalism plus classical descriptions of experiments — not mystical observer-dependence.",
      },
      {
        q: "Bohr's complementarity says…",
        options: [
          "Wave and particle pictures are both completely wrong",
          "Wave-like and particle-like descriptions are context-dependent, mutually incomplete classical images",
          "Experiments are unnecessary",
          "Duality is a myth",
        ],
        answer: 1,
        why: "Different arrangements reveal different aspects; the classical images are partial views of one deeper formalism.",
      },
      {
        q: "Why do some physicists dislike the Copenhagen interpretation?",
        options: [
          "It is too mathematical",
          "It tells you how to calculate but may not satisfy the desire for an underlying ontology",
          "It has been experimentally disproved",
          "It ignores experiments entirely",
        ],
        answer: 1,
        why: "Copenhagen is practically successful but philosophically thin on what exists beneath the predictions — hence rival interpretations.",
      },
    ],
  },
  "quantum-history": {
    simple: raw`
      <p>Quantum mechanics did not arrive as a single lightning strike. It emerged through a long crisis — brilliant classical ideas kept working in many places, then began failing a growing list of precise experiments. Seeing it as a <strong>reluctant, evidence-driven reconstruction</strong> makes the theory far less arbitrary.</p>
      <p>Start with the foundation: <strong>Newton's mechanics</strong> made motion, force, and predictability fit one elegant framework. Then <strong>Maxwell</strong> unified electricity, magnetism, and light into a wave theory of electromagnetism. By the late 1800s, many physicists felt nature's basic architecture was nearly complete. Clouds remained, but they looked small.</p>
      <p>Then the clouds grew. <strong>Blackbody radiation</strong> resisted classical explanation until <strong>Planck, in 1900</strong>, introduced the shocking idea that energy exchange comes in discrete <strong>quanta</strong>. <strong>Einstein pushed further in 1905</strong>, treating light itself as arriving in localized quanta to explain the photoelectric effect. <strong>Bohr's 1913 atomic model</strong> added another rupture: electrons occupy discrete states, not a continuous classical range.</p>
      <p>The <strong>1920s became the decisive decade</strong>: de Broglie proposed matter waves, Schrödinger built wave mechanics, Heisenberg built matrix mechanics, Born gave the wavefunction its probabilistic meaning, and Dirac unified the formalism with extraordinary clarity. By decade's end the quantum framework stood in recognizable form — though its interpretation was, and remains, contested.</p>
      <p>In <strong>1933</strong>, the Nobel committee honored both <strong>Schrödinger and Dirac</strong> — yet the story was unfinished. Debates about interpretation, locality, measurement, and completeness were still alive. They remain alive today. And that is the point: quantum mechanics is not mysterious because physicists enjoy paradox. It is mysterious because nature kept refusing simpler classical explanations — reality itself kept voting against the old picture.</p>
    `,
    deeper: raw`
      <p>Each step was forced, not fashionable. Classical physics predicted that a hot object should radiate infinite energy at short wavelengths — the <strong>ultraviolet catastrophe</strong> — an absurdity Planck's quanta cured. Rutherford's atom should have collapsed in a flash of radiation; Bohr's discrete orbits, strange as they were, matched the hydrogen spectrum line for line.</p>
      <p>And the two rival formulations of the mid-1920s — Heisenberg's matrices and Schrödinger's waves — turned out to be the same theory in different mathematical clothing, a unity von Neumann later made rigorous. The pattern repeats across the whole arc: paradox first, reluctant mathematics second, vindication by experiment third.</p>
    `,
    keyPoints: [
      "Quantum theory emerged from a decades-long crisis, not a single discovery.",
      "Planck (1900): energy quanta for blackbody radiation; Einstein (1905): light quanta.",
      "Bohr (1913): discrete atomic states.",
      "The 1920s: de Broglie, Schrödinger, Heisenberg, Born, Dirac built the framework.",
      "1933 Nobel to Schrödinger and Dirac; interpretation debates continue today.",
    ],
    quiz: [
      {
        q: "Planck introduced energy quanta in 1900 to explain…",
        options: [
          "The photoelectric effect",
          "Blackbody radiation",
          "Atomic spectra",
          "Brownian motion",
        ],
        answer: 1,
        why: "Classical physics failed at blackbody radiation (the ultraviolet catastrophe); Planck's quanta fixed it.",
      },
      {
        q: "Bohr's 1913 atomic model proposed that…",
        options: [
          "Electrons orbit continuously at any radius",
          "Electrons occupy discrete states in atoms",
          "Light is only a wave",
          "Atoms do not exist",
        ],
        answer: 1,
        why: "Bohr's discrete orbits matched the hydrogen spectrum — another rupture with classical continuity.",
      },
      {
        q: "The 1933 Nobel Prize in Physics honored…",
        options: [
          "Einstein and Bohr",
          "Schrödinger and Dirac",
          "Heisenberg and Born",
          "Planck and de Broglie",
        ],
        answer: 1,
        why: "By 1933 the quantum framework was established enough for Schrödinger and Dirac to share the prize — though interpretation debates raged on.",
      },
    ],
  },
};
