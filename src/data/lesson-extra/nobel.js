// Nobel Prizes That Built Quantum — enrichment lessons beyond the syllabus.
// Each entry: simple (human story first), deeper (the science + why it matters
// for quantum computing), keyPoints, quiz (3 questions).
// Prize facts verified against nobelprize.org (2026-09-21).

const raw = String.raw;

export const nobelLessons = {
  "nobel-1900-planck": {
    simple: raw`
      <p>On <strong>December 14, 1900</strong>, a 42-year-old German professor named <strong>Max Planck</strong> stood up at a meeting of the Berlin Physical Society and presented a formula that fit the experimental data perfectly — and made no sense at all.</p>
      <p>The problem was called <strong>black-body radiation</strong>: heat a lump of iron and it glows, first red, then orange, then white-hot. Physicists had measured exactly which colours come out at each temperature. But every equation of classical physics predicted the wrong answer — at high frequencies, the formulas blew up to <em>infinite</em> energy. Something was deeply broken.</p>
      <p>Planck found a formula that matched the measurements beautifully. But to <em>derive</em> it, he had to assume something absurd: that energy is not a smooth, continuous flow, but comes in tiny indivisible <strong>packets</strong> — <em>quanta</em> — each carrying energy \(E = h\nu\), where \(h\) was a brand-new constant of nature. He called it a mathematical trick. He spent the next <strong>years trying to get rid of his own idea</strong> and derive the formula without it. He never could. The universe really is granular.</p>
      <p>For this discovery of energy quanta, Planck received the <strong>1918 Nobel Prize in Physics</strong> (announced in 1919, delayed by the First World War) — "in recognition of the services he rendered to the advancement of Physics by his discovery of energy quanta."</p>
      <p class="myth"><strong>Common myth:</strong> "Planck was trying to overthrow physics." Not at all — he was a conservative who wanted to <em>save</em> classical physics. The quantum revolution began as an accident, by a man who didn't want it.</p>
    `,
    deeper: raw`
      <p>Planck's radiation law gives the energy emitted per unit frequency by a perfect absorber (a "black body") at temperature \(T\):</p>
      <p>\[B(\nu, T) = \frac{2h\nu^3}{c^2}\,\frac{1}{e^{h\nu/kT} - 1}\]</p>
      <p>The key move was the counting: to derive this, Planck assumed the oscillators in the cavity walls could only hold energy in whole multiples of \(h\nu\). The constant he introduced, <strong>Planck's constant</strong> \(h \approx 6.626 \times 10^{-34}\,\text{J·s}\), turned out to be one of the fundamental constants of nature — it sets the <em>scale</em> at which quantum effects appear.</p>
      <p>Classically, energy could be divided without limit, so high-frequency modes each carried their "fair share" of thermal energy — and there are infinitely many of them, hence the infinite prediction (the so-called <strong>ultraviolet catastrophe</strong>). Quantization cuts this off: a mode of frequency \(\nu\) needs at least one whole quantum \(h\nu\) to be excited at all, so high-frequency modes simply freeze out. Infinity disappears.</p>
      <p><strong>Why this prize matters for quantum computing:</strong> the qubit <em>is</em> a quantized energy system. Every qubit is a physical system — an atom, a superconducting circuit — whose energy comes in discrete levels, exactly as Planck discovered. When we say a qubit is \(|0\rangle\) or \(|1\rangle\), we mean it sits in one of two quantized energy states, and quantum gates drive transitions between them. Without Planck's quanta, there is no two-level system, and no qubit.</p>
    `,
    keyPoints: [
      "In 1900 Planck explained black-body radiation by assuming energy comes in discrete packets, E = hν.",
      "He introduced Planck's constant h, which sets the scale of all quantum phenomena.",
      "He called it a mathematical trick and tried for years to remove the assumption — the data wouldn't allow it.",
      "He received the 1918 Nobel Prize (announced 1919) for the discovery of energy quanta.",
      "Quantized energy levels are the physical basis of the qubit: |0⟩ and |1⟩ are two discrete energy states.",
    ],
    quiz: [
      {
        q: "What radical assumption did Planck make to derive his radiation law?",
        options: [
          "That light travels faster than previously thought",
          "That energy is emitted and absorbed only in discrete packets, E = hν",
          "That atoms contain a nucleus",
          "That heat and light are completely unrelated",
        ],
        answer: 1,
        why: "Planck's law only follows if the cavity oscillators exchange energy in whole quanta hν — continuous energy gives the wrong (infinite) answer.",
      },
      {
        q: "For which discovery did Planck receive the 1918 Nobel Prize in Physics?",
        options: [
          "The photoelectric effect",
          "The structure of the atom",
          "The discovery of energy quanta",
          "The uncertainty principle",
        ],
        answer: 2,
        why: "The official motivation was 'in recognition of the services he rendered to the advancement of Physics by his discovery of energy quanta.'",
      },
      {
        q: "Why does Planck's discovery matter for quantum computing?",
        options: [
          "It proved computers must use binary logic",
          "It showed energy levels are discrete, which is what makes a two-level qubit physically possible",
          "It invented the transistor",
          "It showed measurement never disturbs a system",
        ],
        answer: 1,
        why: "A qubit is |0⟩ or |1⟩ precisely because real systems have quantized energy levels — no Planck, no discrete levels, no qubits.",
      },
    ],
  },

  "nobel-1921-einstein": {
    simple: raw`
      <p>In <strong>1905</strong>, a 26-year-old patent clerk in Bern, Switzerland, published four papers in a single year — his <em>annus mirabilis</em>, "miracle year." One of them would win him the Nobel Prize. It was not relativity.</p>
      <p>The puzzle was the <strong>photoelectric effect</strong>: shine light on a metal plate and electrons pop out. Classical wave theory said a <em>brighter</em> light (bigger waves) should knock electrons out with more energy. But experiments showed something strange — brightness didn't matter at all. What mattered was the <em>colour</em>: only light above a certain frequency could eject electrons, no matter how dim or bright.</p>
      <p><strong>Albert Einstein's</strong> proposal: light itself comes in packets — <strong>photons</strong> — each carrying energy \(E = h\nu\). One photon hits one electron and hands over its whole packet. A dim blue light still works (each photon has enough energy); a blazing red light never will (no single photon clears the bar). It was Planck's quantum idea, extended from the walls of the cavity to light itself, travelling through empty space.</p>
      <p>Einstein received the <strong>1921 Nobel Prize in Physics</strong> (announced in 1922) "for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect." The Nobel committee deliberately avoided relativity — still controversial at the time — and honoured his quantum work instead.</p>
      <p class="myth"><strong>Common myth:</strong> "Einstein won the Nobel for relativity." He didn't — not for special, not for general relativity, not for \(E = mc^2\). His Nobel was a <em>quantum</em> prize.</p>
    `,
    deeper: raw`
      <p>Einstein's photoelectric equation relates the maximum kinetic energy of the ejected electron to the light's frequency:</p>
      <p>\[K_{\max} = h\nu - \phi\]</p>
      <p>Here \(\phi\) is the <strong>work function</strong> — the energy cost of escaping the metal. Below the threshold frequency \(\nu_0 = \phi/h\), nothing comes out, however intense the light. The American experimentalist <strong>Robert Millikan</strong> spent a decade testing this equation, confirmed it with exquisite precision — and still refused to believe Einstein's photon explanation. The data won anyway.</p>
      <p>This was the birth of <strong>wave–particle duality</strong>: light, the archetypal wave, behaves as particles. Within two decades the favour would be returned — de Broglie would argue that particles behave as waves (1929 prize).</p>
      <p><strong>Why this prize matters for quantum computing:</strong> photons are one of the leading qubit platforms. <strong>Photonic quantum computing</strong> encodes qubits in the polarization or path of single photons, and <strong>quantum key distribution</strong> (the BB84 protocol in your syllabus) literally sends single polarized photons — Einstein's light quanta — between sender and receiver. Every single-photon source and detector in a quantum lab is applied photoelectric physics.</p>
    `,
    keyPoints: [
      "Einstein's 1905 paper explained the photoelectric effect: light arrives in packets (photons) of energy E = hν.",
      "Brightness doesn't eject electrons — only frequency above a threshold does: K_max = hν − φ.",
      "He won the 1921 Nobel Prize (announced 1922) for the photoelectric law, not for relativity.",
      "Millikan confirmed the equation experimentally over a decade while doubting the photon idea.",
      "Photons are a leading qubit platform, and single photons carry quantum key distribution (BB84).",
    ],
    quiz: [
      {
        q: "In the photoelectric effect, what determines whether electrons are ejected from the metal?",
        options: [
          "The brightness (intensity) of the light",
          "The frequency of the light being above a threshold",
          "The temperature of the metal",
          "The angle of the light",
        ],
        answer: 1,
        why: "Einstein showed each photon carries hν; only photons with hν > φ (the work function) can free an electron — intensity only changes how many arrive.",
      },
      {
        q: "For what work did Einstein receive his Nobel Prize?",
        options: [
          "Special relativity",
          "General relativity",
          "The law of the photoelectric effect",
          "Brownian motion",
        ],
        answer: 2,
        why: "The official 1921 motivation cites 'his discovery of the law of the photoelectric effect' — relativity was deliberately left out as too controversial.",
      },
      {
        q: "Which quantum-computing technology most directly uses Einstein's photons?",
        options: [
          "Superconducting qubits",
          "Photonic qubits and quantum key distribution (BB84)",
          "Trapped-ion qubits",
          "Classical error correction",
        ],
        answer: 1,
        why: "Photonic quantum computing encodes qubits in single photons, and BB84 transmits cryptographic keys as polarized single photons.",
      },
    ],
  },

  "nobel-1922-bohr": {
    simple: raw`
      <p>In 1911, a 26-year-old Dane named <strong>Niels Bohr</strong> arrived in Manchester to work with <strong>Ernest Rutherford</strong>, who had just discovered the atomic nucleus: a tiny, dense, positive core with electrons around it. There was one problem — according to classical physics, this atom could not exist. An orbiting electron should radiate energy, spiral inward, and crash into the nucleus in a fraction of a second. Yet atoms are stable. Matter exists.</p>
      <p>Bohr's 1913 answer was beautifully bold: electrons may only circle the nucleus in certain <strong>allowed orbits</strong>, each with a fixed energy. While in an allowed orbit, the electron radiates nothing. When it <em>jumps</em> from a higher orbit to a lower one, the energy difference flies out as a single photon of light — which is why every element glows with its own exact set of colours, its spectral "fingerprint."</p>
      <p>His model predicted the hydrogen spectrum perfectly. In 1920 he founded his institute in Copenhagen, which became the world capital of quantum physics — Heisenberg, Pauli, and a generation of giants all passed through it. Bohr received the <strong>1922 Nobel Prize in Physics</strong> "for his services in the investigation of the structure of atoms and of the radiation emanating from them."</p>
      <div class="compare">
        <div><h4>Rutherford's atom (1911)</h4><p>Electrons orbit like planets — but should spiral into the nucleus in a flash. Unstable.</p></div>
        <div><h4>Bohr's atom (1913)</h4><p>Only certain orbits allowed; jumps between them emit exact colours of light. Stable — and matches experiment.</p></div>
      </div>
    `,
    deeper: raw`
      <p>Bohr's quantization condition for the hydrogen electron was that its angular momentum comes in whole units of \(\hbar\):</p>
      <p>\[mvr = n\hbar, \qquad n = 1, 2, 3, \dots\]</p>
      <p>Combined with the Coulomb attraction, this gives the famous energy levels</p>
      <p>\[E_n = -\frac{13.6\ \text{eV}}{n^2},\]</p>
      <p>and the light emitted in a jump from level \(m\) to level \(n\) has frequency given by \(h\nu = E_m - E_n\) — the <strong>Rydberg formula</strong>, which spectroscopists had measured decades earlier without understanding it. Bohr also formulated the <strong>correspondence principle</strong>: quantum physics must reproduce classical physics for large quantum numbers — a guardrail every new theory still respects.</p>
      <p><strong>Why this prize matters for quantum computing:</strong> Bohr's atom is the conceptual grandfather of the qubit. A qubit is exactly a <strong>two-level system</strong>: pick two energy levels — ground and excited — and drive transitions between them with light or microwaves. That is Bohr's electron jump, engineered. The Rabi oscillations used to rotate a qubit between \(|0\rangle\) and \(|1\rangle\) are transitions between quantized levels, precisely the physics Bohr introduced.</p>
    `,
    keyPoints: [
      "Bohr's 1913 model: electrons occupy only allowed orbits; jumps between them emit photons of exact energies.",
      "It explained the hydrogen spectrum via quantized angular momentum, mvr = nℏ, and energy levels E_n = −13.6 eV/n².",
      "His Copenhagen institute became the world centre of quantum physics in the 1920s.",
      "He won the 1922 Nobel Prize for investigating atomic structure and the radiation atoms emit.",
      "Two atomic energy levels driven by light — Bohr's jump — is the physical picture behind every qubit.",
    ],
    quiz: [
      {
        q: "What was the fatal flaw in Rutherford's planetary atom that Bohr fixed?",
        options: [
          "It predicted atoms would be too large",
          "Orbiting electrons should radiate energy and spiral into the nucleus",
          "It couldn't explain gravity",
          "It required electrons to move faster than light",
        ],
        answer: 1,
        why: "Classical electrodynamics says accelerating charges radiate; Bohr's allowed orbits forbid radiation except during jumps, making atoms stable.",
      },
      {
        q: "In Bohr's model, the light emitted when an electron jumps from level m to level n has energy equal to:",
        options: [
          "The sum E_m + E_n",
          "The difference E_m − E_n",
          "Planck's constant h alone",
          "The electron's rest energy",
        ],
        answer: 1,
        why: "Energy is conserved: the photon carries away exactly the difference between the two quantized levels, hν = E_m − E_n.",
      },
      {
        q: "How does Bohr's model connect to a modern qubit?",
        options: [
          "It doesn't — qubits are purely mathematical",
          "A qubit is a two-level system, and driving transitions between two energy levels is Bohr's electron jump, engineered",
          "Bohr invented the transistor",
          "Qubits orbit a nucleus at fixed speeds",
        ],
        answer: 1,
        why: "Single-qubit gates physically drive transitions between two quantized energy states — the same jumps Bohr postulated in 1913.",
      },
    ],
  },

  "nobel-1929-debroglie": {
    simple: raw`
      <p><strong>Louis de Broglie</strong> was born a French prince — he would become the 7th duc de Broglie — and his first university degree was in <em>history</em>, not physics. During the First World War he worked on military radio, and his older brother Maurice, an experimental physicist, pulled him toward science. Then Louis did something nobody else dared.</p>
      <p>Einstein had shown that <em>waves</em> (light) behave like <em>particles</em> (photons). In his <strong>1924 doctoral thesis</strong>, de Broglie argued the universe must be symmetric: if waves can be particles, then <em>particles</em> — electrons, atoms, even baseballs — must also be <em>waves</em>. Every moving particle carries a wavelength: \(\lambda = h/p\). For everyday objects the wavelength is absurdly tiny, invisible. For an electron, it is real and measurable.</p>
      <p>Einstein read the thesis and declared it had "lifted a corner of the great veil." In 1927, Davisson and Germer fired electrons at a nickel crystal and saw them <strong>diffract</strong> — spread out in a wave pattern — exactly as de Broglie's formula predicted. De Broglie received the <strong>1929 Nobel Prize in Physics</strong> "for his discovery of the wave nature of electrons" — the first Nobel Prize ever awarded for a PhD thesis.</p>
      <p class="myth"><strong>Common myth:</strong> "De Broglie's idea was immediately accepted." It wasn't — it sounded crazy. It took Einstein's endorsement and, three years later, the electron-diffraction experiments to convince the skeptics.</p>
    `,
    deeper: raw`
      <p>The de Broglie relation ties a particle's momentum to its wavelength through Planck's constant:</p>
      <p>\[\lambda = \frac{h}{p}\]</p>
      <p>This single equation explains Bohr's mysterious allowed orbits: an electron wave must close on itself around the nucleus, so the circumference must hold a whole number of wavelengths, \(n\lambda = 2\pi r\) — which is exactly Bohr's condition \(mvr = n\hbar\). What Bohr had postulated as a rule, de Broglie revealed as <strong>standing waves</strong>. Schrödinger took this idea and wrote a wave equation for the electron itself — wave mechanics was born directly from de Broglie's thesis.</p>
      <p><strong>Why this prize matters for quantum computing:</strong> quantum algorithms run on <strong>interference</strong> — waves of probability amplitude cancelling and reinforcing, exactly like de Broglie's electron waves. The Hadamard gate splits a qubit's "wave" into two paths; algorithms like Deutsch–Jozsa, Grover's, and Shor's arrange for wrong answers to cancel out and right answers to amplify. That is de Broglie waves, doing computation.</p>
    `,
    keyPoints: [
      "De Broglie's 1924 PhD thesis proposed that all matter has a wavelength, λ = h/p.",
      "Davisson and Germer confirmed it in 1927 by diffracting electrons off a nickel crystal.",
      "He won the 1929 Nobel Prize 'for his discovery of the wave nature of electrons' — the first Nobel for a PhD thesis.",
      "His standing-wave picture explains Bohr's quantized orbits: nλ = 2πr.",
      "Quantum algorithms exploit interference of probability waves — de Broglie's physics doing computation.",
    ],
    quiz: [
      {
        q: "What was de Broglie's revolutionary proposal in his 1924 thesis?",
        options: [
          "That electrons orbit the nucleus like planets",
          "That every moving particle has an associated wavelength, λ = h/p",
          "That light has no particle nature",
          "That atoms cannot be split",
        ],
        answer: 1,
        why: "De Broglie inverted Einstein's photon idea: if waves are particles, particles are waves — every particle carries wavelength h/p.",
      },
      {
        q: "What experiment confirmed de Broglie's hypothesis in 1927?",
        options: [
          "The photoelectric effect",
          "Electron diffraction off a nickel crystal by Davisson and Germer",
          "The Michelson–Morley experiment",
          "Rutherford's gold-foil scattering",
        ],
        answer: 1,
        why: "Davisson and Germer saw electrons diffract like waves, with wavelengths matching de Broglie's formula exactly.",
      },
      {
        q: "How does de Broglie's wave nature of matter show up in quantum algorithms?",
        options: [
          "It doesn't — algorithms are purely classical logic",
          "Algorithms use interference of probability amplitudes: wrong answers cancel, right answers amplify",
          "It makes qubits heavier",
          "It prevents measurement",
        ],
        answer: 1,
        why: "Quantum speedup comes from choreographing wave-like interference of amplitudes — Grover's and Shor's algorithms are interference machines.",
      },
    ],
  },

  "nobel-1932-heisenberg": {
    simple: raw`
      <p>In the spring of <strong>1925</strong>, 24-year-old <strong>Werner Heisenberg</strong> was suffering badly from hay fever. He fled to <strong>Heligoland</strong>, a windswept, pollen-free island in the North Sea — and in the middle of the night, between bouts of fever, he had the breakthrough that created quantum mechanics.</p>
      <p>Heisenberg's radical move: <strong>stop asking what electrons are "really doing" inside the atom</strong>. Nobody can see that. Instead, build the theory only from what is <em>observable</em> — the frequencies and brightnesses of the spectral lines atoms emit. He arranged these numbers in tables, and discovered the tables multiplied in a strange, order-dependent way: \(A\) times \(B\) was not the same as \(B\) times \(A\). His mentor <strong>Max Born</strong> recognized the tables immediately — they were <strong>matrices</strong>, an obscure branch of mathematics. Quantum mechanics was born as <strong>matrix mechanics</strong>.</p>
      <p>Two years later Heisenberg found the theory's most famous consequence: the <strong>uncertainty principle</strong> — you cannot know a particle's position and momentum both perfectly at once. He received the <strong>1932 Nobel Prize in Physics</strong> (awarded in 1933) "for the creation of quantum mechanics, the application of which has, inter alia, led to the discovery of the allotropic forms of hydrogen."</p>
    `,
    deeper: raw`
      <p>The strangeness Heisenberg found is captured in the <strong>commutation relation</strong> between position and momentum:</p>
      <p>\[[\hat{x}, \hat{p}] = \hat{x}\hat{p} - \hat{p}\hat{x} = i\hbar\]</p>
      <p>Because the order of multiplication matters, position and momentum cannot both have perfectly definite values. This yields the <strong>Heisenberg uncertainty principle</strong>:</p>
      <p>\[\Delta x\,\Delta p \ge \frac{\hbar}{2}\]</p>
      <p>Within a year, Schrödinger's wave mechanics appeared to be a rival theory — until Schrödinger himself proved the two formulations mathematically equivalent: two languages for the same physics.</p>
      <p><strong>Why this prize matters for quantum computing:</strong> everything in quantum computing is <strong>operator algebra</strong> — Heisenberg's legacy. Quantum gates are matrices (the Pauli \(X\), \(Y\), \(Z\) matrices multiply in order-dependent ways, exactly as Heisenberg found). Non-commuting observables are why measuring one property disturbs another — the measurement postulate of your syllabus. And commutators like \([H_1, H_2]\) are the working machinery of Hamiltonian simulation and QAOA.</p>
    `,
    keyPoints: [
      "In 1925, aged 24, Heisenberg built quantum mechanics from observable quantities only — matrix mechanics.",
      "His tables multiplied in order-dependent ways; Born identified them as matrices.",
      "The uncertainty principle (1927): Δx·Δp ≥ ℏ/2 — position and momentum can't both be perfectly known.",
      "He won the 1932 Nobel Prize (awarded 1933) 'for the creation of quantum mechanics.'",
      "Quantum gates are matrices with order-dependent multiplication — Heisenberg's algebra is the language of quantum circuits.",
    ],
    quiz: [
      {
        q: "What was Heisenberg's radical starting point for quantum mechanics?",
        options: [
          "Assume electrons follow exact planetary orbits",
          "Build the theory only from observable quantities like spectral line frequencies",
          "Prove that atoms don't exist",
          "Measure electron positions with perfect microscopes",
        ],
        answer: 1,
        why: "Heisenberg discarded unobservable electron trajectories and worked with tables of observable transition data — which turned out to be matrices.",
      },
      {
        q: "What does the uncertainty principle Δx·Δp ≥ ℏ/2 actually say?",
        options: [
          "Our instruments are too clumsy to measure precisely",
          "Position and momentum cannot both have arbitrarily precise values — it's a property of nature, not just measurement error",
          "Electrons don't have momentum",
          "Quantum mechanics is only approximate",
        ],
        answer: 1,
        why: "The limit follows from the non-commuting algebra [x̂, p̂] = iℏ — it's built into quantum theory itself, not a technological limitation.",
      },
      {
        q: "Where does Heisenberg's matrix legacy appear directly in quantum computing?",
        options: [
          "In the classical computer controlling the experiment",
          "Quantum gates are matrices (e.g. Pauli matrices) whose order-dependent multiplication is exactly what Heisenberg discovered",
          "In the cooling system",
          "Nowhere — modern QC abandoned matrices",
        ],
        answer: 1,
        why: "Every quantum circuit is a product of matrices; gate order matters precisely because matrix multiplication is non-commutative.",
      },
    ],
  },

  "nobel-1933-schrodinger-dirac": {
    simple: raw`
      <p>Heisenberg's matrix mechanics worked — but hardly anyone could use it. Matrices were alien mathematics to most physicists. Then, in <strong>1926</strong>, <strong>Erwin Schrödinger</strong> found a friendlier road to the same physics. Inspired by de Broglie's matter waves, he asked: what <em>equation</em> does an electron wave obey? Over a Christmas holiday in the Swiss Alps, he wrote down his <strong>wave equation</strong> — and showed it reproduced all of Bohr's energy levels, naturally, with no ad-hoc rules.</p>
      <p>Meanwhile, a quiet 25-year-old at Cambridge, <strong>Paul Dirac</strong>, was bothered by a deeper problem: Schrödinger's equation ignored <strong>relativity</strong>. In 1928 Dirac wrote an equation that married quantum mechanics to Einstein's special relativity — and the mathematics calmly predicted something nobody had asked for: for every particle, there must exist an <strong>antiparticle</strong> with opposite charge. Four years later, Carl Anderson discovered the <strong>positron</strong> — the electron's antimatter twin — in cosmic rays. Dirac's "unwanted" solutions were real.</p>
      <p>Schrödinger and Dirac shared the <strong>1933 Nobel Prize in Physics</strong> "for the discovery of new productive forms of atomic theory."</p>
      <div class="compare">
        <div><h4>Schrödinger (1926)</h4><p>Wave mechanics: electrons as waves, evolving smoothly under a wave equation. Intuitive, visual.</p></div>
        <div><h4>Dirac (1928)</h4><p>Relativistic quantum mechanics: the equation demands antimatter — and the universe agreed.</p></div>
      </div>
    `,
    deeper: raw`
      <p>Schrödinger's equation governs how every quantum state evolves in time:</p>
      <p>\[i\hbar\,\frac{\partial}{\partial t}|\psi(t)\rangle = \hat{H}\,|\psi(t)\rangle\]</p>
      <p>Here \(\hat{H}\) is the <strong>Hamiltonian</strong> — the operator encoding the system's energy. Solve it, and you know the quantum state at any future time. Dirac's relativistic equation,</p>
      <p>\[(i\gamma^\mu\partial_\mu - m)\psi = 0,\]</p>
      <p>required four-component wavefunctions — and its negative-energy solutions, reinterpreted, became antimatter. As a bonus, electron <strong>spin</strong> fell out of Dirac's theory automatically, no longer a hypothesis bolted on by hand.</p>
      <p><strong>Why this prize matters for quantum computing:</strong> two reasons, both enormous. First, the Schrödinger equation <em>is</em> how qubits evolve: every quantum gate is a brief pulse of some Hamiltonian \(\hat{H}\) applied for a precise time — solving the equation tells you exactly what the gate does. Second, the <strong>\(|\psi\rangle\) notation itself was invented by Dirac</strong> (his 1939 "bra-ket" notation). Every \(|0\rangle\), \(|1\rangle\), and \(|\Phi^+\rangle\) in this entire course is Dirac's handwriting.</p>
    `,
    keyPoints: [
      "Schrödinger's 1926 wave equation describes electrons as waves and reproduces atomic energy levels naturally.",
      "Dirac's 1928 relativistic equation predicted antimatter; the positron was found in 1932.",
      "They shared the 1933 Nobel Prize 'for the discovery of new productive forms of atomic theory.'",
      "Dirac invented bra-ket notation (|ψ⟩) — the language of this entire course.",
      "Quantum gates are Hamiltonian pulses evolving states via the Schrödinger equation.",
    ],
    quiz: [
      {
        q: "What did Dirac's relativistic quantum equation predict that nobody had asked for?",
        options: [
          "The existence of antimatter (e.g. the positron)",
          "That electrons have no mass",
          "That light travels infinitely fast",
          "That atoms cannot be ionized",
        ],
        answer: 0,
        why: "Dirac's equation required negative-energy solutions; reinterpreted, they meant every particle has an antiparticle — confirmed by the positron's discovery in 1932.",
      },
      {
        q: "Schrödinger and Dirac shared the 1933 Nobel Prize for:",
        options: [
          "Splitting the atom",
          "The discovery of new productive forms of atomic theory",
          "Inventing the laser",
          "Measuring the speed of light",
        ],
        answer: 1,
        why: "That is the official 1933 motivation — Schrödinger's wave mechanics and Dirac's relativistic theory were new 'forms' of atomic theory.",
      },
      {
        q: "Which piece of Dirac's legacy appears on literally every page of quantum computing?",
        options: [
          "The Dirac delta function",
          "Bra-ket notation: |0⟩, |1⟩, |ψ⟩",
          "The positron",
          "His Cambridge professorship",
        ],
        answer: 1,
        why: "Dirac invented bra-ket notation in 1939; quantum computing's entire language of states and gates is written in it.",
      },
    ],
  },

  "nobel-1965-qed": {
    simple: raw`
      <p>By the late 1940s, quantum theory had an embarrassment: whenever physicists tried to compute how electrons and light interact, the answers came out <strong>infinite</strong>. At the famous 1947 Shelter Island conference, new precision measurements (the <strong>Lamb shift</strong> — a tiny split in hydrogen's energy levels) showed exactly where the old theory failed.</p>
      <p>Three men, working independently, tamed the infinities and built <strong>quantum electrodynamics (QED)</strong> — the quantum theory of light and matter. <strong>Shin'ichiro Tomonaga</strong> did it in wartime isolation in Japan; <strong>Julian Schwinger</strong> produced a formidable formal version at Harvard; and <strong>Richard Feynman</strong> invented an entirely new way of <em>seeing</em> the physics — <strong>Feynman diagrams</strong>, little spacetime doodles of particles exchanging photons, plus his "sum over all paths" picture of quantum mechanics. In 1949, <strong>Freeman Dyson</strong> proved all three approaches were the same theory.</p>
      <p>The result is the most precisely tested theory in all of science — QED predicts the electron's magnetic strength correctly to about <strong>one part in a trillion</strong>. Feynman, Schwinger, and Tomonaga shared the <strong>1965 Nobel Prize in Physics</strong> "for their fundamental work in quantum electrodynamics, with deep-ploughing consequences for the physics of elementary particles."</p>
      <p class="myth"><strong>Common myth:</strong> "Feynman diagrams are just illustrations." They aren't — each line and vertex is a precise mathematical instruction. The doodles <em>are</em> the calculation.</p>
    `,
    deeper: raw`
      <p>The core trick of QED is <strong>renormalization</strong>: the infinities are absorbed into redefinitions of the electron's mass and charge, leaving finite, testable predictions. The theory's strength is measured by the fine-structure constant,</p>
      <p>\[\alpha = \frac{e^2}{4\pi\varepsilon_0\,\hbar c} \approx \frac{1}{137},\]</p>
      <p>which sets the strength of electromagnetic interaction. Because \(\alpha\) is small, physicists can compute in powers of \(\alpha\) — each Feynman diagram adds one more power — and the series converges beautifully onto experiment.</p>
      <p><strong>Why this prize matters for quantum computing:</strong> in <strong>1981</strong>, Richard Feynman gave a talk titled <em>"Simulating Physics with Computers"</em> in which he argued that classical computers can never efficiently simulate quantum systems — "nature isn't classical, dammit" — and proposed building <strong>computers out of quantum systems themselves</strong>. That talk is widely regarded as the founding moment of quantum computing. The entire field exists because Feynman followed QED's logic to its conclusion: if you want to compute quantum physics, use quantum physics.</p>
    `,
    keyPoints: [
      "QED (late 1940s) is the quantum theory of light and matter, built independently by Tomonaga, Schwinger, and Feynman.",
      "Feynman's diagrams turned forbidding calculations into pictures that are themselves the mathematics.",
      "QED is the most precisely tested theory in science — accurate to about one part in a trillion.",
      "They shared the 1965 Nobel Prize for fundamental work in QED.",
      "Feynman's 1981 'Simulating Physics with Computers' talk launched the idea of the quantum computer.",
    ],
    quiz: [
      {
        q: "What problem did QED (quantum electrodynamics) solve in the late 1940s?",
        options: [
          "It proved atoms don't exist",
          "It tamed the infinite answers plaguing the quantum theory of electrons and light, giving precise finite predictions",
          "It showed light has no energy",
          "It disproved relativity",
        ],
        answer: 1,
        why: "Renormalization absorbed the infinities into redefined mass and charge, and QED went on to become the most precisely tested theory in physics.",
      },
      {
        q: "Feynman, Schwinger, and Tomonaga received the 1965 Nobel Prize for:",
        options: [
          "The discovery of the neutron",
          "Their fundamental work in quantum electrodynamics",
          "Inventing the transistor",
          "The Big Bang theory",
        ],
        answer: 1,
        why: "The official motivation cites 'their fundamental work in quantum electrodynamics, with deep-ploughing consequences for the physics of elementary particles.'",
      },
      {
        q: "What is Feynman's most direct gift to quantum computing?",
        options: [
          "He built the first qubit",
          "His 1981 'Simulating Physics with Computers' talk proposed computing with quantum systems — the founding idea of quantum computers",
          "He invented the internet",
          "He proved quantum computers are impossible",
        ],
        answer: 1,
        why: "Feynman argued classical machines can't simulate quantum nature efficiently, so we should compute with quantum systems themselves — the field's founding proposal.",
      },
    ],
  },

  "nobel-1973-tunneling": {
    simple: raw`
      <p>Quantum mechanics says a particle can do the impossible: walk <em>through</em> a wall. Not over it, not around it — <strong>through</strong> it. This is <strong>quantum tunneling</strong>: a particle's wave leaks into regions classical physics forbids, so there is always a small chance of finding it on the other side. Three physicists turned this ghostly effect into hard reality — and one of their discoveries now sits inside every superconducting quantum computer.</p>
      <p><strong>Leo Esaki</strong>, working at Sony in Japan, built the first device to exploit tunneling: the <strong>tunnel diode</strong> (1958), where electrons tunnel through a semiconductor junction. <strong>Ivar Giaever</strong> — a Norwegian mechanical engineer turned physicist at General Electric — crafted sandwiches of metal films separated by oxide layers just atoms thick, and watched electrons tunnel through them in <strong>superconductors</strong>, confirming deep predictions about the superconducting energy gap.</p>
      <p>Then came the shock. <strong>Brian Josephson</strong>, a 22-year-old PhD student at Cambridge, predicted in 1962 that <em>pairs</em> of electrons could tunnel through a barrier <strong>with zero resistance</strong> — a supercurrent flowing through an insulator. The great John Bardeen, himself a double Nobel laureate, said it was impossible. Within a year, experiments proved the student right. The <strong>1973 Nobel Prize in Physics</strong> was split: half to Esaki and Giaever "for their experimental discoveries regarding tunneling phenomena in semiconductors and superconductors, respectively," half to Josephson "for his theoretical predictions of the properties of a supercurrent through a tunnel barrier."</p>
    `,
    deeper: raw`
      <p>Tunneling comes straight from Schrödinger's equation: inside a barrier, the wavefunction doesn't vanish — it <strong>decays exponentially</strong>, so a thin enough barrier lets a finite wave leak through. The transmission probability falls off roughly as \(e^{-2\kappa L}\), where \(L\) is the barrier thickness. Josephson's predictions were sharper — two exact relations for the supercurrent \(I\) through the junction as a function of the quantum phase difference \(\varphi\) and the voltage \(V\):</p>
      <p>\[I = I_c \sin\varphi, \qquad V = \frac{\hbar}{2e}\,\frac{d\varphi}{dt}\]</p>
      <p>The first (DC effect) says a supercurrent flows with no voltage at all; the second (AC effect) says a steady voltage makes the current <strong>oscillate</strong> at a frequency set only by fundamental constants — an effect now used to define the volt.</p>
      <p><strong>Why this prize matters for quantum computing:</strong> the <strong>Josephson junction</strong> is the heart of the superconducting qubit. A Josephson junction acts as a <em>nonlinear inductor</em> — the one circuit element with no classical analogue — which turns a superconducting circuit into an artificial atom with unequally spaced energy levels. Take the lowest two levels, and you have a <strong>transmon qubit</strong>: the workhorse of IBM's and Google's quantum processors. Every superconducting quantum computer ever built runs on Josephson's 1962 prediction.</p>
    `,
    keyPoints: [
      "Quantum tunneling lets particles pass through classically forbidden barriers — the wavefunction leaks through.",
      "Esaki (tunnel diode, semiconductors) and Giaever (tunneling in superconductors) proved it experimentally in solids.",
      "Josephson, aged 22, predicted supercurrent tunneling through a barrier; Bardeen said impossible; experiment proved him right.",
      "The 1973 prize was split: half to Esaki and Giaever, half to Josephson.",
      "The Josephson junction is the core element of superconducting (transmon) qubits used by IBM and Google.",
    ],
    quiz: [
      {
        q: "What is quantum tunneling?",
        options: [
          "Digging a physical tunnel with lasers",
          "A particle's wave leaking through a barrier it classically couldn't cross, giving a finite chance to appear on the other side",
          "Electrons moving faster than light",
          "A type of chemical bond",
        ],
        answer: 1,
        why: "Schrödinger's equation lets the wavefunction decay (not vanish) inside a barrier, so thin barriers have measurable transmission probability.",
      },
      {
        q: "Why did Josephson's 1962 prediction cause such a stir?",
        options: [
          "He was only 22, and the great Bardeen declared his predicted supercurrent through an insulator impossible — then experiments confirmed it",
          "He predicted the end of physics",
          "He claimed superconductors don't exist",
          "He refused the Nobel Prize",
        ],
        answer: 0,
        why: "A graduate student's theory overruled a double Nobel laureate's objection within a year — one of physics' great upsets.",
      },
      {
        q: "How does the 1973 prize connect to today's quantum computers?",
        options: [
          "It doesn't — tunneling is irrelevant to QC",
          "The Josephson junction is the nonlinear element that makes superconducting transmon qubits possible",
          "Esaki built the first quantum computer at Sony",
          "Tunneling is used to cool the chips",
        ],
        answer: 1,
        why: "The Josephson junction is the only non-classical circuit element; it creates the artificial atom whose two lowest levels form the qubit.",
      },
    ],
  },

  "nobel-2012-haroche-wineland": {
    simple: raw`
      <p>Quantum mechanics has a cruel catch: <strong>looking at a quantum system usually destroys its quantumness</strong>. Measure a delicate superposition and it collapses. For decades, the strangest predictions of quantum theory — a single photon watched without being absorbed, an atom in two states at once — lived only in thought experiments. Two experimentalists, working on opposite sides of the Atlantic with completely different tools, changed that.</p>
      <p>In Paris, <strong>Serge Haroche</strong> (born in Morocco) trapped individual <strong>photons</strong> between superconducting mirrors, bouncing a single particle of light back and forth for a tenth of a second — an eternity at that scale. Then he sent specially prepared <strong>Rydberg atoms</strong> (atoms puffed up to nearly a thousand times normal size) through the trap as spies: each atom's state shifted slightly depending on how many photons were inside, revealing the photon's presence <strong>without absorbing it</strong> — a <em>quantum non-demolition</em> measurement.</p>
      <p>In Boulder, Colorado, <strong>David Wineland</strong> at NIST trapped individual <strong>ions</strong> — charged atoms — in electromagnetic cages, cooled them with lasers until they barely moved, and then gently nudged them into superpositions of energy states, watching quantum mechanics play out on a single atom, step by step. Both men were born in <strong>1944</strong>. They shared the <strong>2012 Nobel Prize in Physics</strong> "for ground-breaking experimental methods that enable measuring and manipulation of individual quantum systems."</p>
    `,
    deeper: raw`
      <p>The two approaches were complementary masterpieces of <strong>quantum optics</strong>. Haroche's cavity QED setup let his team watch a superposition of photon states <strong>decohere in real time</strong> — the first direct movie of the quantum-to-classical transition, as the environment gradually "measured" the system. Wineland's trapped ions demonstrated the full toolbox: cooling an ion to its motional ground state, preparing superpositions with laser pulses, and reading them out — the same operations, in the same order, that a quantum computer performs.</p>
      <p>The interaction at the heart of Haroche's experiment is the <strong>Jaynes–Cummings</strong> coupling between a two-level atom and a cavity light mode:</p>
      <p>\[\hat{H} = \hbar\omega_c\,\hat{a}^\dagger\hat{a} + \frac{\hbar\omega_a}{2}\,\hat{\sigma}_z + \hbar g\,(\hat{a}^\dagger\hat{\sigma}_- + \hat{a}\,\hat{\sigma}_+)\]</p>
      <p>— the simplest fully quantum model of light meeting matter, and the ancestor of the <strong>circuit QED</strong> architecture used to control superconducting qubits today.</p>
      <p><strong>Why this prize matters for quantum computing:</strong> Haroche and Wineland demonstrated <strong>single-quantum control</strong> — isolate one quantum system, manipulate it, measure it, keep it coherent. That is literally what a quantum computer does, thousands of times over. Trapped ions went on to become a leading qubit platform (the technology behind IonQ and Quantinuum), and cavity QED became the readout method for superconducting qubits. The Nobel committee said it outright: this work "paved the way" toward quantum computers.</p>
    `,
    keyPoints: [
      "Haroche trapped single photons between mirrors and detected them with Rydberg atoms — without destroying them.",
      "Wineland trapped single ions with electromagnetic fields and manipulated their quantum states with lasers.",
      "Their methods made it possible to watch decoherence — the quantum-to-classical transition — happen in real time.",
      "They shared the 2012 Nobel Prize for measuring and manipulating individual quantum systems.",
      "Trapped ions became a leading qubit platform; cavity QED became the readout for superconducting qubits.",
    ],
    quiz: [
      {
        q: "What was the central achievement of Haroche and Wineland?",
        options: [
          "They proved quantum mechanics wrong",
          "They developed methods to isolate, manipulate, and measure individual quantum systems without destroying their quantumness",
          "They built the first classical computer",
          "They discovered a new element",
        ],
        answer: 1,
        why: "The official 2012 motivation cites 'ground-breaking experimental methods that enable measuring and manipulation of individual quantum systems.'",
      },
      {
        q: "How did Haroche 'see' a photon without absorbing it?",
        options: [
          "With an ordinary camera",
          "By sending giant Rydberg atoms through the cavity — each atom's state shifted depending on the photon number inside",
          "By cooling the photon to absolute zero",
          "He didn't — the photon was always destroyed",
        ],
        answer: 1,
        why: "The Rydberg atoms acted as non-demolition probes: they picked up information about the trapped photon and carried it out, leaving the photon intact.",
      },
      {
        q: "Which modern qubit technologies descend directly from this prize?",
        options: [
          "Trapped-ion qubits (IonQ, Quantinuum) and circuit-QED readout of superconducting qubits",
          "Vacuum tubes",
          "Magnetic tape storage",
          "Classical transistors",
        ],
        answer: 0,
        why: "Wineland's ion traps became trapped-ion quantum computers; Haroche's cavity QED became circuit QED, the standard way superconducting qubits are controlled and read out.",
      },
    ],
  },

  "nobel-2022-entanglement": {
    simple: raw`
      <p>In 1935, Einstein and two colleagues argued quantum mechanics must be incomplete: it predicted that two particles could be <strong>entangled</strong> — linked so that measuring one instantly determines the other, no matter how far apart. Einstein called it <em>"spooky action at a distance"</em> and insisted some hidden, sensible explanation must exist. For thirty years, it was philosophy. Then <strong>John Bell</strong> (1964) devised a test: if hidden explanations were right, certain measurement correlations could never exceed a limit. Quantum mechanics said they could.</p>
      <p>Three experimentalists, working decades apart, settled it. <strong>John Clauser</strong> performed the <strong>first Bell test</strong> in 1972 (with Stuart Freedman), when the topic was so unfashionable colleagues warned it could ruin his career. <strong>Alain Aspect</strong> in 1982 closed the biggest loophole, switching his detectors <em>while the photons were in flight</em> so no signal could sneak between them. <strong>Anton Zeilinger</strong> took entanglement into the wild: <strong>quantum teleportation</strong> (1997), entanglement swapping, and distributing entanglement over 144 kilometres between Canary Islands.</p>
      <p>Every experiment violated Bell's limit. Einstein's hidden variables lost; entanglement is real. The trio shared the <strong>2022 Nobel Prize in Physics</strong> "for experiments with entangled photons, establishing the violation of Bell inequalities and pioneering quantum information science" — the first Nobel Prize awarded <em>for quantum information itself</em>.</p>
    `,
    deeper: raw`
      <p>The workhorse of these experiments is the Bell state — two photons whose polarizations are perfectly correlated yet individually random:</p>
      <p>\[|\Phi^+\rangle = \frac{|00\rangle + |11\rangle}{\sqrt{2}}\]</p>
      <p>Bell's theorem, in the CHSH form used in the labs, says any locally realistic hidden-variable theory must satisfy \(|S| \le 2\) for a certain combination \(S\) of measurement correlations. Quantum mechanics predicts up to \(|S| = 2\sqrt{2} \approx 2.83\) — and the experiments agree with quantum mechanics, decisively. No local hidden variables can reproduce the observed correlations: the universe is, at bottom, <strong>nonlocal</strong>.</p>
      <p><strong>Why this prize matters for quantum computing:</strong> entanglement is <em>the</em> resource that makes quantum computing quantum — it is what lets \(n\) qubits explore \(2^n\) amplitudes together, the fuel of every quantum speedup in your syllabus. Beyond computing, Bell tests enable <strong>device-independent quantum key distribution</strong>: cryptographic security certified by the violation itself, with no need to trust the devices. Aspect, Clauser, and Zeilinger turned a philosophical argument into the foundation of quantum technology.</p>
    `,
    keyPoints: [
      "Einstein's 1935 EPR argument claimed entanglement implied quantum mechanics was incomplete; Bell (1964) made it testable.",
      "Clauser (1972) ran the first Bell test; Aspect (1982) closed the communication loophole; Zeilinger pioneered teleportation and long-distance entanglement.",
      "Every test violated Bell's inequality — local hidden variables are ruled out.",
      "They shared the 2022 Nobel Prize for entangled-photon experiments and pioneering quantum information science.",
      "Entanglement is the resource behind quantum speedup and enables device-independent quantum cryptography.",
    ],
    quiz: [
      {
        q: "What did the Bell tests of Clauser, Aspect, and Zeilinger prove?",
        options: [
          "That quantum mechanics is wrong",
          "That entangled particles show correlations no local hidden-variable theory can explain — entanglement is real",
          "That information travels faster than light",
          "That photons have no polarization",
        ],
        answer: 1,
        why: "Measured correlations exceed Bell's limit (|S| ≤ 2) up to 2√2, matching quantum predictions and ruling out Einstein's local hidden variables.",
      },
      {
        q: "For what were Aspect, Clauser, and Zeilinger awarded the 2022 Nobel Prize?",
        options: [
          "Inventing the laser",
          "Experiments with entangled photons, establishing the violation of Bell inequalities and pioneering quantum information science",
          "Discovering the Higgs boson",
          "Building the first quantum computer",
        ],
        answer: 1,
        why: "That is the official 2022 motivation — the first Nobel Prize given for quantum information science itself.",
      },
      {
        q: "Why is entanglement central to quantum computing?",
        options: [
          "It makes qubits cheaper to manufacture",
          "It links qubits so n of them jointly explore 2ⁿ amplitudes — the source of quantum speedup",
          "It prevents all errors automatically",
          "It lets qubits communicate faster than light",
        ],
        answer: 1,
        why: "Entanglement creates the exponentially large joint state space that quantum algorithms exploit; without it, qubits are just independent classical bits.",
      },
    ],
  },
};
