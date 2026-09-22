// Philosophy of Quantum — enrichment lessons on the deep questions
// quantum computing forces us to ask. Each entry: simple (human story
// first), deeper (the arguments + the math), keyPoints, quiz (3 questions).
// Sourced from deep research 2026-09-21 (report in research_notes/).
// Settled physics is stated as fact; interpretations are labelled as such.

const raw = String.raw;

export const philosophyLessons = {
  "phil-why-philosophy": {
    simple: raw`
      <p>Here is an embarrassing secret about quantum mechanics: it is the most successful theory in the history of science — and after a hundred years, physicists still cannot agree on what it <em>means</em>. The equations predict experiments flawlessly. But ask what a superposition <em>is</em>, or what happens inside a quantum computer between the start and the measurement, and you will get six different answers from six physicists. Those answers are not physics. They are <strong>philosophy</strong>.</p>
      <p>And here is the twist: the founders of quantum mechanics were all doing philosophy, and they knew it. At the <strong>1927 Solvay Conference</strong>, <strong>Einstein</strong> and <strong>Bohr</strong> argued for days — not about equations, but about reality itself. Einstein insisted physics must describe "the very things, not simply the possibility of their occurrence." Bohr replied that a phenomenon is only defined relative to the experimental arrangement used to observe it. In 1926 Einstein had written to <strong>Max Born</strong>: "I, at any rate, am convinced that He [God] is not playing at dice." The dice — quantum randomness — offended him philosophically, not mathematically.</p>
      <p><strong>Schrödinger</strong>, too, was doing philosophy when he invented his famous cat in 1935. The cat — simultaneously dead and alive until observed — was not a claim about cats. It was a <em>reductio ad absurdum</em>, a philosophical weapon designed to show that Bohr's interpretation led to nonsense. And the label everyone uses, the <strong>"Copenhagen interpretation,"</strong> was coined by Heisenberg in <strong>1955</strong> and papers over the fact that Bohr and Heisenberg actually disagreed with each other. The "standard view" was philosophy wearing a lab coat.</p>
      <p>Now the punchline for this course: <strong>quantum computing itself was born from philosophy.</strong> In 1985 <strong>David Deutsch</strong> published the paper that founded the field — "Quantum theory, the Church–Turing principle and the universal quantum computer." His move was philosophical: he read the <strong>Church–Turing thesis</strong> — the definition of what is computable — not as mathematics but as a <em>physical</em> principle. What can be computed is decided by the laws of physics; physics is quantum; therefore the universal computer must be a quantum computer. Computation stopped being an abstraction and became a physical process. And Deutsch's motivation? He was a committed believer in the <strong>many-worlds interpretation</strong> — he thought quantum parallelism was computation spread across parallel universes. The entire field you are studying exists because one physicist took an interpretation of quantum mechanics seriously.</p>
      <p>Philosophy has repeatedly turned into physics. In 1964 <strong>John Bell</strong> took the old Einstein–Bohr argument about "spooky action" and converted it into a <em>testable inequality</em> — philosophy became an experiment, and the experiments (2022 Nobel Prize) killed "local realism" for good. <strong>Wheeler's</strong> philosophical slogan "it from bit" — the idea that information is more fundamental than matter — seeded an entire research program that is still running. The pattern is reliable: today's philosophy seminar is tomorrow's laboratory.</p>
      <p>So there is a bargain every quantum computing student makes, usually without noticing. Textbooks teach what philosopher <strong>Tim Maudlin</strong> calls the <strong>"quantum recipe"</strong> — rules that predict outcomes — instead of a proper <em>theory</em>, which would say what exists and what it does. The recipe lets you calculate. But the moment you ask the obvious question — <em>what is my quantum computer actually doing between initialization and measurement?</em> — the recipe goes silent, and the honest answer is: physics has not settled it. This module is about that unsettled territory. Not because philosophy is decoration, but because in quantum computing, <strong>the philosophy is load-bearing</strong>.</p>
      <p class="myth"><strong>Common myth:</strong> "Philosophy of quantum mechanics is armchair speculation with no effect on real science." Deutsch's 1985 paper, Bell's 1964 theorem, and Wheeler's "it from bit" each began as philosophy and each redirected experimental physics. In this field, interpretations are research programs.</p>
    `,
    deeper: raw`
      <p>Let us make the "why philosophy" argument precise. Quantum mechanics has two parts, and they have very different philosophical status. The first is <strong>unitary evolution</strong> — the Schrödinger equation,</p>
      <p>\[i\hbar\,\frac{\partial}{\partial t}|\psi\rangle = H|\psi\rangle,\]</p>
      <p>which is deterministic, smooth, and agreed upon by everyone. The second is the <strong>Born rule</strong>,</p>
      <p>\[P(\text{outcome } i) = |\langle i|\psi\rangle|^2,\]</p>
      <p>which says what you will <em>observe</em> — probabilistically. The entire philosophy of quantum mechanics lives in the gap between these two: the equation says the wavefunction evolves deterministically into superpositions; the rule says you observe single definite outcomes with certain probabilities. What connects them — collapse? branching? ignorance? — is the measurement problem, and it is unsolved.</p>
      <p>Deutsch's 1985 move deserves a closer look because it shows philosophy doing creative work. The classical Church–Turing thesis says every effectively computable function can be computed by a Turing machine. Deutsch's <strong>Church–Turing–Deutsch principle</strong> restates it physically: <em>every finitely realizable physical system can be perfectly simulated by a universal computing machine operating by finite means</em> — and since the physical world is quantum-mechanical, that universal machine must be a quantum computer. Notice what happened: "computable" stopped being a fact about mathematics and became a fact about physics. Complexity theory became a branch of physics. (As computer scientist Charlie Bennett later replied to Deutsch: physics is the universal computer that complexity theory describes.)</p>
      <p>Deutsch's Everettianism was not incidental decoration — it was the engine. <strong>Scott Aaronson</strong> recounts the origin story: Deutsch wondered whether one could perform an interference experiment on <em>oneself</em> — a conscious computer placed in superposition — and followed the logic until quantum computing fell out. In <em>The Fabric of Reality</em> (1997) Deutsch issued his famous challenge: <strong>"To those who still cling to a single-universe world-view, I issue this challenge: explain how Shor's algorithm works."</strong> His claim: a quantum computer factoring a large number performs more computations than there are atoms in the visible universe — so <em>where</em> is the computation happening, if not in parallel universes?</p>
      <p>Aaronson — who admires Deutsch enormously — pushes back, and the pushback is itself philosophical. His correction: <strong>"A quantum computer is NOT like a massively-parallel classical computer! Exponentially-many basis states, but you only get to observe one of them. Any hope for a speedup rides on the magic of quantum interference."</strong> On his view, even the simplest quantum speedup, <strong>Deutsch–Jozsa</strong> (1992), works not by trying all answers but by arranging interference so that wrong answers <em>cancel</em> and the right global property of the function survives into a single measurement. Aaronson's slogan for the whole field: quantum computing is <strong>"probability theory with minus signs."</strong> Same equations, opposite stories about what they mean.</p>
      <p>This is why the module exists. A student who learns only the recipe can run the circuits but cannot answer what the circuits <em>are</em>. The six interpretations in the next lesson all reproduce every experimental result — including every quantum computation ever run — yet tell incompatible stories about reality. Choosing between them (or refusing to choose) is philosophy. And as Bell showed, today's philosophical disagreement is tomorrow's Nobel Prize — provided someone finds the question that can be tested.</p>
      <p><strong>Further reading:</strong> Scott Aaronson, <em>Quantum Computing Since Democritus</em> (2013) — the philosophical implications of computing, from a skeptic of many-worlds; David Deutsch, <em>The Fabric of Reality</em> (1997) — the Everettian case, including the Shor challenge; Adam Becker, <em>What Is Real?</em> (2018) — how Copenhagen orthodoxy sidelined the alternatives; Philip Ball, <em>Beyond Weird</em> (2018) — the best single-volume survey of interpretations and experiments.</p>
    `,
    keyPoints: [
      "Quantum mechanics predicts perfectly but explains nothing agreed-upon: the Schrödinger equation (deterministic, agreed) and the Born rule (probabilistic, disputed) leave a gap — the measurement problem — that is philosophy.",
      "The founders were doing philosophy: Bohr vs Einstein at Solvay 1927, Einstein's 1926 'God does not play dice' letter, Schrödinger's cat (1935) as an anti-Copenhagen reductio, and the 'Copenhagen interpretation' label itself (Heisenberg, 1955) papering over real disagreements.",
      "Quantum computing was born from philosophy: Deutsch's 1985 paper read the Church–Turing thesis as a physical principle and was driven by his many-worlds convictions — including the challenge 'explain how Shor's algorithm works' without parallel universes.",
      "Philosophy keeps becoming physics: Bell (1964) turned the EPR debate into a testable inequality; Wheeler's 'it from bit' seeded the reconstruction program.",
      "Aaronson's counterweight: a quantum computer is not a massively-parallel classical machine — speedup rides on interference ('probability theory with minus signs'), and supremacy experiments add nothing new to the interpretation debate.",
    ],
    quiz: [
      {
        q: "What was Deutsch's philosophical move in his 1985 paper that founded quantum computing?",
        options: [
          "He proved that classical computers cannot simulate quantum systems",
          "He read the Church–Turing thesis as a physical principle — what is computable is decided by the laws of physics, so the universal computer must be quantum",
          "He showed that the many-worlds interpretation follows from Bell's theorem",
          "He derived the Born rule from the Schrödinger equation",
        ],
        answer: 1,
        why: "The Church–Turing–Deutsch principle made computability a fact about physics rather than mathematics — and Deutsch's Everettianism supplied the motivation.",
      },
      {
        q: "What was Schrödinger's cat (1935) intended to be?",
        options: [
          "A proof that macroscopic superpositions really exist",
          "A reductio ad absurdum — a philosophical attack showing Bohr's interpretation led to absurd consequences",
          "An experimental proposal for testing quantum mechanics on cats",
          "A thought experiment supporting the Copenhagen interpretation",
        ],
        answer: 1,
        why: "Schrödinger designed the cat to look absurd — it was a weapon against Copenhagen completeness, not an endorsement of dead-and-alive cats.",
      },
      {
        q: "According to Aaronson, where does quantum speedup actually come from?",
        options: [
          "Trying all answers at once in parallel universes",
          "Exponentially many classical processors running simultaneously",
          "Quantum interference — wrong answers cancel so the right structure survives measurement ('probability theory with minus signs')",
          "Faster-than-light communication between entangled qubits",
        ],
        answer: 2,
        why: "Aaronson's correction: exponentially many amplitudes exist, but you observe one outcome — the speedup rides on interference sculpting the distribution, not on parallel classical computation.",
      },
    ],
    references: [
      {
        cite: 'David Deutsch, “Quantum theory, the Church–Turing principle and the universal quantum computer,” <em>Proceedings of the Royal Society of London A</em> <strong>400</strong>, 97–117 (1985).',
        url: "https://royalsocietypublishing.org/doi/10.1098/rspa.1985.0070",
        usedFor: "The founding paper of quantum computing — the source of Deutsch's physical Church–Turing principle and his Everettian motivation.",
      },
      {
        cite: 'David Deutsch, <em>The Fabric of Reality</em> (Allen Lane, 1997).',
        usedFor: "The Everettian case for quantum computing, including the challenge: “explain how Shor's algorithm works” without parallel universes.",
      },
      {
        cite: 'Scott Aaronson, <em>Quantum Computing Since Democritus</em> (Cambridge University Press, 2013).',
        usedFor: "The counterweight — quantum computing as “probability theory with minus signs”; speedup rides on interference, and supremacy experiments add nothing new to the interpretation debate.",
      },
      {
        cite: 'John Bell, <em>Speakable and Unspeakable in Quantum Mechanics</em> (Cambridge University Press, 1987).',
        usedFor: "Collects Bell's 1964 theorem paper — the moment the Einstein–Bohr argument became a testable inequality.",
      },
      {
        cite: 'Tim Maudlin, <em>Philosophy of Physics: Quantum Theory</em> (Princeton University Press, 2019).',
        usedFor: "The distinction between a predictive “quantum recipe” and a proper theory — the framing of this lesson's bargain.",
      },
      {
        cite: 'Adam Becker, <em>What Is Real? The Unfinished Quest for the Meaning of Quantum Physics</em> (Basic Books, 2018).',
        usedFor: "The history of how Copenhagen orthodoxy sidelined alternative interpretations for decades.",
      },
      {
        cite: '“The flawed multiverse,” <em>Physics World</em> (review of Deutsch’s <em>The Beginning of Infinity</em>).',
        url: "https://physicsworld.com/a/the-flawed-multiverse/",
        usedFor: "The preferred-basis critique of many-worlds and Deutsch's multiverse account of quantum computation.",
      },
    ],
  },
  "phil-interpretations": {
    simple: raw`
      <p>Here is the single most important fact in this module, stated plainly: <strong>every interpretation of quantum mechanics predicts exactly the same experimental results.</strong> No experiment — not a Bell test, not a quantum supremacy run, not anything — can distinguish between them. They disagree about what is <em>real</em>, not about what is <em>measured</em>. That is what makes them philosophy rather than physics. Keep that label on each one as you read.</p>
      <p><strong>1. Copenhagen (Bohr, Heisenberg, and the textbooks).</strong> The original orthodoxy: the quantum formalism is a recipe for predicting what <em>classical instruments</em> will register. Superpositions describe your knowledge of possible measurement outcomes, not a thing in the world; "collapse" is just you updating the books when you look. Don't ask what the electron is doing between measurements — the question is malformed, because a phenomenon only exists relative to an experimental arrangement. On this view, your quantum computer's intermediate superposed states are <em>calculational devices</em>; only the preparation and the readout are physically describable. The computation "happens" nowhere classical — which is exactly why it looks powerful. (Honest footnote: there was never one Copenhagen view. Bohr and Heisenberg disagreed with each other, and the tidy label was invented later.)</p>
      <p><strong>2. Many-worlds / Everett (Everett 1957; DeWitt; Deutsch; Wallace).</strong> Delete the collapse postulate entirely. The wavefunction always evolves smoothly, every term of every superposition is equally real, and what we call "measurement" is just the observer becoming entangled with the system — the universe <em>splits</em>, or rather differentiates, and decoherence explains why the branches can't interfere afterward. On this story, <strong>Deutsch's</strong> account of your quantum computer is literal: Shor's algorithm runs across a vast number of branches at once, and the answer emerges where they interfere. It's the most dramatic story — and it has two famous unpaid bills. First, the <strong>preferred-basis problem</strong>: a quantum state can be decomposed into "worlds" in infinitely many ways, so which decomposition counts as real seems to depend on what you later choose to measure. Second, the <strong>probability problem</strong>: if every outcome happens, what does "70% probability" even mean? (Deutsch and others have offered decision-theoretic derivations of the Born rule; they remain contested.) Aaronson's verdict on the whole dispute: supremacy experiments "don't add anything <em>new</em> to this old debate" — they're just more confirmations of the equations everyone already agrees on.</p>
      <p><strong>3. Pilot-wave / de Broglie–Bohm (de Broglie 1927; Bohm 1952).</strong> The particles are real and always have definite positions — no fuzziness at all. Riding above them is the wavefunction, a real physical <em>pilot wave</em> that choreographs every particle's motion through a guiding equation. The theory is fully <strong>deterministic</strong>: the apparent randomness of quantum mechanics is just ignorance of exact starting positions, like classical statistical mechanics. The price is <strong>nonlocality</strong>: the guiding wave lives in configuration space and coordinates distant particles instantaneously. Your quantum computer, on this view, is a swarm of perfectly definite particles being steered by a wave evolving through an exponentially large space — the speedup lives in the wave's choreography.</p>
      <p><strong>4. QBism (Fuchs, Schack, Mermin).</strong> The most radical reframe: the wavefunction is not a thing in the world at all — it is one <em>agent's personal degrees of belief</em> about their own future experiences. "Collapse" is just a Bayesian update: you learn something, you revise your bets. Nothing in the world jumps. And the famous spookiness of entanglement? "A QBist denies that anything is sent, because there was never an objective state on the distant particle to be disturbed." On this view your quantum computer is a tool an agent uses to place <em>coherent bets</em> — the computation is structured expectation, and the user is part of the story. (Not to be confused with "consciousness collapses the wavefunction" — QBism gives the agent a role without any mind-magic.)</p>
      <p><strong>5. Relational quantum mechanics (Rovelli).</strong> There are no absolute facts — only facts <em>relative to</em> some physical system. It is meaningless to say "the qubit is in superposition" full stop; you must say "the qubit is in superposition <em>for</em> this observer." Different observers can give different, equally valid accounts, and that is a <em>complete</em> description of the world — there is no God's-eye view to reconcile them. Your quantum computer's intermediate states are real, but only relative to whatever is interacting with them.</p>
      <p><strong>6. Consistent histories (Griffiths; Omnès; Gell-Mann & Hartle).</strong> Billed as "Copenhagen done right": you may assign probabilities to whole <em>histories</em> — sequences of events through time — provided they satisfy a consistency condition, and you must never mix incompatible descriptions (the single-framework rule). Measurement is just another physical process; on this telling "there is no measurement problem," and apparent paradoxes dissolve. Crucially, it insists that "superluminal influences cannot carry information or anything else, for the simple reason that they do not exist." Your quantum computer has a perfectly ordinary story at successive times — within one consistent framework.</p>
      <p>The stress test for all six is <strong>Wigner's friend</strong> and its modern form, the <strong>Frauchiger–Renner</strong> thought experiment (2018): nested observers applying quantum mechanics to each other produce a trilemma — universal validity of quantum theory, a single shared world, and consistency between agents' accounts cannot all hold. Every interpretation survives by sacrificing a different one. Which sacrifice bothers you least is, once again, philosophy.</p>
      <p class="myth"><strong>Common myth:</strong> "Quantum computers prove the many-worlds interpretation — where else would the computation happen?" No interpretation is confirmed by any computation, because all of them predict identical statistics. Deutsch's multiverse account is his philosophical position, not an experimental result.</p>
    `,
    deeper: raw`
      <p>The six interpretations share the same mathematics — Hilbert space, unitary evolution, the Born rule's empirical content — and differ only in ontology: what they claim <em>exists</em>. A compact way to compare them is to ask each three questions: What is the wavefunction? What happens at measurement? What is the quantum computer doing?</p>
      <p><strong>Copenhagen</strong> answers: the wavefunction is a predictive instrument; measurement is where classical language takes over (the "cut" between quantum system and classical apparatus can be moved but never removed); the computer's middle stages are not describable in classical terms at all. Its weakness is vagueness about the cut — which is why <strong>consistent histories</strong> was built as its disciplined successor: Griffiths' single-framework rule makes "don't mix incompatible descriptions" a precise mathematical rule about which sets of histories admit probabilities, and measurement becomes one process among others.</p>
      <p><strong>Everett</strong> answers: the wavefunction is everything; measurement is entanglement plus decoherence; the computer computes across branches. Formally its elegance is unmatched — no collapse postulate, no extra equation. Its debts are the two problems from the simple layer. The <strong>preferred-basis problem</strong>: the quantum Fourier transform at the heart of Shor's algorithm can be written in many bases, with "no obvious reason why this basis should be preferred over any other, or why this quantum process should not occur in a single universe." The <strong>probability problem</strong>: deriving the Born rule when all outcomes occur. Deutsch (1999) attempted a decision-theoretic derivation — rational agents in a branching universe <em>must</em> bet according to the Born rule — extended by Saunders and Wallace; critics reply that the derivation smuggles in probabilistic assumptions. This is live philosophy of physics, not settled science.</p>
      <p><strong>de Broglie–Bohm</strong> answers: the wavefunction is a real guiding field; particles have exact positions evolving by the <strong>guiding equation</strong></p>
      <p>\[\mathbf{v}_k = \frac{\hbar}{m_k}\,\mathrm{Im}\!\left(\frac{\nabla_k \psi}{\psi}\right);\]</p>
      <p>measurement reveals pre-existing positions, and Born-rule probabilities emerge from ignorance of initial conditions (the "quantum equilibrium" hypothesis). It reproduces all nonrelativistic quantum predictions — including quantum computing — while being deterministic. Its cost, nonlocality, is not a bug but the <em>content</em> of Bell's theorem read this way: any theory with definite pre-existing values must coordinate them faster than light. Bohmian mechanics wears that cost openly.</p>
      <p><strong>QBism</strong> answers: the wavefunction is an agent's belief; measurement is experience; the computer is a betting aid. Its technical program is serious — Fuchs and Schack's reconstruction work tries to derive the quantum formalism from Bayesian coherence principles — but its silence on ontology is the controversy: a theory of everything that declines to say what everything is. <strong>Relational QM</strong> answers: the wavefunction encodes relations; measurement is interaction; facts are indexed. Its signature move dissolves Wigner's-friend paradoxes by indexing every statement to an observer — at the cost of abandoning any absolute, observer-independent reality.</p>
      <p>One constraint binds all six: the <strong>CHSH inequality</strong> (next lesson). Whichever story you prefer must reproduce the experimental fact that local realism fails while no-signaling holds. Interpretations are <strong>empirically underdetermined</strong> — the data cannot choose between them — which is precisely why the choice is philosophical. The Stanford Encyclopedia of Philosophy's peer-reviewed entries on each interpretation are the citable backbone if you want to go deeper than this lesson.</p>
      <p><strong>Further reading:</strong> Sean Carroll, <em>Something Deeply Hidden</em> (2019) — the accessible case for Everett; Carlo Rovelli, <em>Helgoland</em> (2021) — relational QM for general readers; David Albert, <em>Quantum Mechanics and Experience</em> (1992) — the measurement problem with unusual clarity; Tim Maudlin, <em>Philosophy of Physics: Quantum Theory</em> (2019) — the "recipe vs theory" critique and the serious options; Stanford Encyclopedia of Philosophy entries on interpretations, Bohmian mechanics, relational QM, and consistent histories.</p>
    `,
    keyPoints: [
      "All six interpretations predict identical measurement statistics — no experiment, including any quantum computation, can distinguish them. The choice between them is philosophy, not physics.",
      "Copenhagen: the formalism predicts instrument readings; the computer's middle stages are classically indescribable. Consistent histories ('Copenhagen done right') makes this precise with the single-framework rule.",
      "Everett: no collapse, everything happens; Deutsch's story says Shor's algorithm computes across branches. Unpaid bills: the preferred-basis problem and deriving the Born rule when every outcome occurs.",
      "de Broglie–Bohm: definite particles guided by a real pilot wave via the guiding equation — deterministic but explicitly nonlocal; quantum randomness is ignorance of initial positions.",
      "QBism: the wavefunction is an agent's personal beliefs, collapse is a belief update, entanglement's spookiness dissolves. Relational QM: facts exist only relative to an observer. Frauchiger–Renner (2018) forces every interpretation to sacrifice one of: universality, single world, or inter-agent consistency.",
    ],
    quiz: [
      {
        q: "Why can no experiment decide between the interpretations of quantum mechanics?",
        options: [
          "The experiments are too expensive to run",
          "All interpretations predict identical measurement statistics — they disagree about what is real, not about what is measured",
          "Physicists have agreed not to test them",
          "Quantum computers are not yet powerful enough",
        ],
        answer: 1,
        why: "Empirical underdetermination is the defining feature: the interpretations share the mathematics and differ only in ontology.",
      },
      {
        q: "What are the two famous open problems for the Everett (many-worlds) interpretation?",
        options: [
          "The measurement problem and the ultraviolet catastrophe",
          "The preferred-basis problem (which decomposition counts as 'worlds') and the probability problem (deriving the Born rule when every outcome occurs)",
          "Nonlocality and the need for hidden variables",
          "The collapse postulate and the observer's consciousness",
        ],
        answer: 1,
        why: "Everett has no collapse postulate — its elegance — but must say which basis defines branches and what probability means when nothing is left out.",
      },
      {
        q: "In QBism, what is the wavefunction?",
        options: [
          "A real physical wave spreading through space",
          "One agent's personal degrees of belief about their own future experiences — a tool for placing coherent bets",
          "A pilot wave guiding definite particles",
          "A description valid only relative to a particular observer's frame",
        ],
        answer: 1,
        why: "QBism (Fuchs, Schack, Mermin) makes the wavefunction subjective: collapse is belief update, and there was never an objective distant state to be disturbed.",
      },
    ],
    references: [
      {
        cite: 'Stanford Encyclopedia of Philosophy, “Interpretations of Quantum Mechanics” (peer-reviewed; revised regularly).',
        url: "https://plato.stanford.edu/entries/qm-interpretations/",
        usedFor: "The citable backbone for the lesson's framing — all interpretations share the mathematics and differ only in ontology.",
      },
      {
        cite: 'Stanford Encyclopedia of Philosophy, “Bohmian Mechanics.”',
        url: "https://plato.stanford.edu/entries/qm-bohm/",
        usedFor: "The pilot-wave interpretation — definite particles guided by a real wavefunction.",
      },
      {
        cite: 'Stanford Encyclopedia of Philosophy, “Relational Quantum Mechanics.”',
        url: "https://plato.stanford.edu/entries/qm-relational/",
        usedFor: "Rovelli's view — facts exist only relative to a physical system.",
      },
      {
        cite: 'Stanford Encyclopedia of Philosophy, “The Consistent Histories Approach to Quantum Mechanics.”',
        url: "https://plato.stanford.edu/entries/qm-consistent-histories/",
        usedFor: "The single-framework rule and “Copenhagen done right.”",
      },
      {
        cite: 'Hugh Everett III, “Relative state formulation of quantum mechanics,” <em>Reviews of Modern Physics</em> <strong>29</strong>, 454–462 (1957).',
        usedFor: "The original many-worlds paper — no collapse postulate, every term of every superposition equally real.",
      },
      {
        cite: 'Sean Carroll, <em>Something Deeply Hidden: Quantum Worlds and the Emergence of Spacetime</em> (Dutton, 2019).',
        usedFor: "The accessible modern case for the Everett interpretation.",
      },
      {
        cite: 'Carlo Rovelli, <em>Helgoland: Making Sense of the Quantum Revolution</em> (Riverhead, 2021).',
        usedFor: "Relational quantum mechanics for general readers.",
      },
      {
        cite: 'David Albert, <em>Quantum Mechanics and Experience</em> (Harvard University Press, 1992).',
        usedFor: "The measurement problem laid out with unusual clarity — the three ways out.",
      },
      {
        cite: 'Daniela Frauchiger and Renato Renner, “Quantum theory cannot consistently describe the use of itself,” <em>Nature Communications</em> <strong>9</strong>, 3711 (2018).',
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6346061/",
        usedFor: "The 2018 thought experiment forcing every interpretation to sacrifice one of: universality, a single world, or inter-agent consistency.",
      },
      {
        cite: 'Christopher A. Fuchs, N. David Mermin and Rüdiger Schack, “An introduction to QBism with an application to the locality of quantum mechanics,” <em>American Journal of Physics</em> <strong>82</strong>, 749–754 (2014).',
        usedFor: "The QBist position — the wavefunction as an agent's personal degrees of belief.",
      },
    ],
  },
  "phil-randomness-free-will": {
    simple: raw`
      <p>Quantum mechanics says the world is random at its core. A radioactive atom decays at no predictable time; a measured qubit gives 0 or 1 with only probabilities to guide you. But <em>what kind</em> of random? There is a world of difference between "random because we don't know the cause" (a coin flip — the coin already landed) and "random because there <em>is</em> no cause." Quantum mechanics claims the second. This lesson is about whether that claim survives scrutiny — and why the answer matters for cryptography, computing, and free will itself.</p>
      <p><strong>Einstein</strong> never bought it. His 1935 <strong>EPR</strong> argument with Podolsky and Rosen said quantum mechanics must be <em>incomplete</em>: particles must carry pre-set "instructions" — <strong>hidden variables</strong> — that determine outcomes in advance, and the randomness is just our ignorance. For thirty years this was philosophy. Then in 1964 <strong>John Bell</strong> did something extraordinary: he turned it into arithmetic. If particles carry local pre-set instructions, then certain measured correlations — the <strong>CHSH</strong> combination — can never exceed 2. Quantum mechanics predicts 2.83. Somebody had to be wrong, and the question could be settled in a lab.</p>
      <p>The labs spoke. <strong>Clauser and Freedman</strong> first (early 1970s), <strong>Aspect</strong> decisively (1981–82, choosing measurement settings <em>after</em> the photons left), the last loopholes closed in <strong>2015</strong> — and the <strong>2022 Nobel Prize</strong> (Aspect, Clauser, Zeilinger) "for experiments with entangled photons, establishing the violation of Bell inequalities and pioneering quantum information science." Nature's measured value: ~2.8, matching quantum mechanics, smashing the limit of 2.</p>
      <p>Now state the verdict <em>precisely</em>, because pop science mangles it: Bell did not prove "the universe is nonlocal" or "Einstein was wrong about everything." He killed <strong>local realism</strong> — a package deal of three assumptions: <em>realism</em> (outcomes pre-determined), <em>locality</em> (distant settings can't influence results), and <em>statistical independence</em> (settings are chosen freely, uncorrelated with the particles' past). The experiments force you to abandon <em>at least one</em> — and each exit is a live philosophical position. Give up locality: that's Bohm's pilot wave. Give up realism: that's Copenhagen and QBism. Give up statistical independence: that's <strong>superdeterminism</strong>. Accept all outcomes: that's many-worlds. The corpse is local realism; the suspects all walked free.</p>
      <p>Where does <strong>free will</strong> enter? Through a remarkable theorem. <strong>Conway and Kochen's Free Will Theorem</strong> (2006, strengthened 2009) says: <em>if</em> experimenters have free will — defined minimally as making choices "not a function of the past" — <em>then</em> elementary particles have the same freedom: their responses aren't fixed by the past either. Note the crucial subtlety: mere <em>randomness</em> doesn't qualify, because a random outcome could have been pre-written in a cosmic table. The theorem rules out deterministic <em>and</em> pre-scripted-random theories alike. But be honest about the price: it <em>assumes</em> human free will as an axiom. It proves nothing about whether you have it — and critics (Goldstein and co.) dispute the argument. Also note the circularity the field lives with: Bell tests themselves assume the experimenters' setting choices are free.</p>
      <p>That assumption is exactly what <strong>superdeterminism</strong> attacks — and it was Bell himself who named the escape. In a 1985 BBC interview he said: "Suppose the world is super-deterministic... the universe, including particle A, already 'knows' what that measurement, and its outcome, will be." Modern defenders <strong>Gerard 't Hooft</strong> and <strong>Sabine Hossenfelder</strong> argue that since experimenters and particles share a common past stretching to the Big Bang, the "free" setting choices may be subtly correlated with the particles — a cosmic selection bias. The price: absolute determinism, no free choice at all. The objections are fierce: the loophole "cannot be closed by scientific methods" because science itself assumes experimenters can freely choose settings; others call it a fine-tuned conspiracy that makes science pointless. Hossenfelder's pitch is blunt: "Superdeterminism returns us to determinism."</p>
      <p>Why should a computing student care? Because randomness is a <em>resource</em> — and quantum physics can <strong>certify</strong> it. A Bell-inequality violation proves the outcomes were unpredictable <em>even to whoever built the device</em>: no pre-written table, however clever, can reproduce the statistics. <strong>Pironio and colleagues</strong> (2010) showed this yields randomness "without any assumption on the internal working of the devices" — "impossible classically." The state of the art: in 2026 the <strong>Renner group at ETH Zurich</strong> ran 1.5 billion Bell tests on entangled qubits and extracted provably perfect randomness with no assumed bound on the adversary's power. Compare your laptop's random numbers: a deterministic algorithm (unpredictable only if you don't know the seed) versus Bell-certified bits (unpredictable even if the hardware vendor is your enemy). Cryptography runs on the difference.</p>
      <p class="myth"><strong>Common myth:</strong> "Quantum randomness proves we have free will." It doesn't — the Free Will Theorem <em>assumes</em> experimenter freedom to conclude anything, and superdeterminism denies the premise entirely. Randomness is not freedom; a pre-written random table is still a script.</p>
    `,
    deeper: raw`
      <p>The CHSH inequality is the one derivation this lesson must carry, because everything else hangs on it. Alice chooses setting \(a\) or \(a'\), Bob chooses \(b\) or \(b'\); each outcome is \(\pm 1\). Define the correlation \(E(a,b)\) as the average product of their outcomes, and</p>
      <p>\[S = E(a,b) - E(a,b') + E(a',b) + E(a',b').\]</p>
      <p>Under local realism, each particle pair carries instructions fixing outcomes \(A_1, A_2, B_1, B_2 \in \{+1,-1\}\). For any single pair, \(S(\lambda) = A_1(B_1+B_2) + A_2(B_1-B_2)\): either \(B_1 = B_2\), making the second term vanish and the first \(\pm 2\), or \(B_1 = -B_2\), making the first vanish and the second \(\pm 2\). Every pair contributes \(\pm 2\), so the average obeys</p>
      <p>\[|S| \le 2.\]</p>
      <p>Quantum mechanics, for the entangled state \(|\Phi^+\rangle = \tfrac{|00\rangle+|11\rangle}{\sqrt{2}}\) with well-chosen measurement angles, predicts \(S = 2\sqrt{2} \approx 2.828\) — <strong>Tsirelson's bound</strong>, the maximum quantum mechanics allows. The experiments land at ~2.8. Note what the violation <em>doesn't</em> break: the <strong>no-signaling</strong> principle — Alice's local statistics never depend on Bob's distant setting, so entanglement can never send messages faster than light. Bell violations are correlations without communication.</p>
      <p>The Conway–Kochen argument runs on three axioms: <strong>SPIN</strong> (a spin-1 particle measured along three orthogonal axes always yields 1, 0, 1 in some order), <strong>TWIN</strong> (entangled pairs give matching responses), and <strong>FIN</strong> (no influence faster than light). Add the experimenter's free choice of measurement axes, and the conclusion follows: the particle's response "is not a function of the past" — it is as free as yours. The theorem's bite is against <em>any</em> theory in which outcomes are fixed by earlier facts, deterministic or stochastic. Its vulnerability is the premise: superdeterminism simply denies that the experimenter's choice is independent of the particles' past, and then the whole proof collapses — which is why the free-will debate and the superdeterminism debate are the same debate.</p>
      <p>Now the practical payoff — <strong>device-independent randomness</strong>. Classical randomness comes in two weak flavors: pseudorandom generators (deterministic algorithms; secure only if the seed stays secret) and trusted-device quantum generators (a photon hits a beam splitter; secure only if you trust the hardware). Bell certification adds the third, strongest flavor: the <em>statistics themselves</em> prove unpredictability. Pironio et al.'s insight: a CHSH violation of \(S > 2\) bounds how predictable the outcomes could have been to <em>anyone</em> — including the manufacturer. The ETH Zurich result (Nature, May 2026) pushed this to the limit: entangled qubits in a 30-meter cryogenic tube, 1.5 billion Bell tests, randomness certified against an adversary of unbounded power. This is what "truly random" cashes out to — not a metaphysical slogan but an operational guarantee — and it is why Bell's theorem, born as philosophy, now sits inside quantum cryptography (device-independent QKD) and randomness beacons.</p>
      <p>Where does this leave determinism? Honestly: cornered but alive. The mainstream reads Bell as the end of local hidden variables. Bohm keeps determinism by paying in nonlocality. Superdeterminism keeps determinism <em>and</em> locality by paying in free choice — the most expensive currency in science, since every experiment assumes the experimenter could have done otherwise. Many-worlds keeps everything by multiplying reality. Each option is coherent; none is forced. The lesson for the computing student: when your quantum program's measurement returns a bit, <em>why</em> that bit rather than the other is — depending on your philosophy — fundamental chance, ignorance of hidden positions, your own branching, or a script written at the Big Bang. The probabilities you compute are identical either way.</p>
      <p><strong>Further reading:</strong> John Bell, <em>Speakable and Unspeakable in Quantum Mechanics</em> (1987) — the theorem, "Against 'measurement'," and Bell's own late reflections including superdeterminism; Scott Aaronson, <em>Quantum Computing Since Democritus</em> (2013) — free will, predictability, and complexity; Anil Ananthaswamy, <em>Through Two Doors at Once</em> (2018) — the double-slit experiment as the through-line of the whole debate.</p>
    `,
    keyPoints: [
      "The Born rule postulates randomness without explaining it; Einstein's EPR (1935) hoped hidden variables would restore determinism — Bell (1964) turned the hope into a testable inequality.",
      "CHSH: local realism requires |S| ≤ 2; quantum mechanics predicts 2√2 ≈ 2.828 (Tsirelson's bound); experiments (Clauser, Aspect 1981–82, loophole-free 2015, 2022 Nobel) agree with quantum mechanics.",
      "The precise verdict: local realism is dead — realism, locality, and statistical independence can't all survive. Live exits: nonlocality (Bohm), anti-realism (Copenhagen/QBism), superdeterminism, many-worlds.",
      "Conway–Kochen Free Will Theorem (2006/2009): if experimenters' choices aren't fixed by the past, neither are particles' responses — but it assumes human free will, and randomness alone doesn't qualify (a pre-written random table is still determined).",
      "Superdeterminism (Bell's own 1985 escape; 't Hooft, Hossenfelder) restores determinism by sacrificing free choice — critics call it untestable and conspiratorial. Bell violations certify device-independent randomness (Pironio 2010; ETH Zurich/Renner 2026, 1.5 billion tests) — the operational meaning of 'truly random,' and the basis of quantum cryptography.",
    ],
    quiz: [
      {
        q: "What exactly did Bell's theorem kill?",
        options: [
          "Einstein's theory of relativity",
          "Local realism — the conjunction of pre-determined outcomes, locality, and freely chosen settings; at least one of the three must go",
          "The idea that quantum mechanics makes correct predictions",
          "The possibility of faster-than-light communication",
        ],
        answer: 1,
        why: "Bell ruled out the package deal, not any single piece — which is why Bohm (nonlocal), Copenhagen (anti-realist), superdeterminism, and many-worlds all remain live.",
      },
      {
        q: "What is the key subtlety of the Conway–Kochen Free Will Theorem?",
        options: [
          "It proves humans have free will from physics alone",
          "It assumes the experimenter's free will as an axiom — and mere randomness doesn't count as freedom, since outcomes could be pre-written in a table",
          "It only applies to spin-1 particles, not qubits",
          "It was refuted by the 2022 Nobel experiments",
        ],
        answer: 1,
        why: "Free will in, free will out: the theorem transfers freedom from experimenter to particle but cannot establish the premise — and superdeterminism denies it outright.",
      },
      {
        q: "What makes Bell-certified (device-independent) randomness stronger than your laptop's random numbers?",
        options: [
          "It generates numbers much faster",
          "The Bell violation itself proves the outcomes were unpredictable even to whoever built the device — no trust in the hardware is needed",
          "It uses larger prime numbers as seeds",
          "It is deterministic, so it can be reproduced for debugging",
        ],
        answer: 1,
        why: "Pironio et al. showed nonlocal correlations certify genuine randomness 'without any assumption on the internal working of the devices' — impossible classically, and the basis of device-independent cryptography.",
      },
    ],
    references: [
      {
        cite: 'John S. Bell, “On the Einstein Podolsky Rosen paradox,” <em>Physics</em> <strong>1</strong>, 195–200 (1964); reprinted in <em>Speakable and Unspeakable in Quantum Mechanics</em> (Cambridge University Press, 1987).',
        usedFor: "The theorem itself — plus Bell's own late reflections, including superdeterminism as the escape he named.",
      },
      {
        cite: 'Nobel Prize in Physics 2022 — awarded to Alain Aspect, John F. Clauser and Anton Zeilinger “for experiments with entangled photons, establishing the violation of Bell inequalities and pioneering quantum information science.”',
        url: "https://www.nobelprize.org/prizes/physics/2022/summary/",
        usedFor: "The official account of the Bell-test experiments, from Clauser and Freedman through Aspect (1981–82) to the loophole-free tests of 2015.",
      },
      {
        cite: 'Stanford Encyclopedia of Philosophy, “Bell’s Theorem.”',
        url: "https://plato.stanford.edu/entries/bell-theorem/",
        usedFor: "The precise statement of what died: local realism — the conjunction of realism, locality, and statistical independence.",
      },
      {
        cite: 'John H. Conway and Simon Kochen, “The free will theorem,” <em>Foundations of Physics</em> <strong>36</strong>, 1441–1473 (2006); “The strong free will theorem,” <em>Notices of the AMS</em> <strong>56</strong>, 226–232 (2009).',
        usedFor: "The SPIN–TWIN–FIN argument: if experimenters' choices are not fixed by the past, neither are particles' responses.",
      },
      {
        cite: 'Stefano Pironio et al., “Random numbers certified by Bell’s theorem,” <em>Nature</em> <strong>464</strong>, 1021–1024 (2010).',
        usedFor: "Device-independent randomness — a Bell violation certifies unpredictability “without any assumption on the internal working of the devices.”",
      },
      {
        cite: 'ETH Zurich (Renner group), May 2026 — 1.5 billion Bell tests on entangled qubits in a 30-metre cryogenic setup; provably perfect randomness certified against an adversary of unbounded power (reported in <em>Nature</em>).',
        usedFor: "The state of the art in certified randomness cited in this lesson — the operational meaning of “truly random.”",
      },
      {
        cite: 'Anil Ananthaswamy, <em>Through Two Doors at Once: The Elegant Experiment That Captures the Enigma of Our Quantum Reality</em> (Dutton, 2018).',
        usedFor: "The double-slit experiment as the through-line of the entire randomness debate.",
      },
      {
        cite: 'Scott Aaronson, <em>Quantum Computing Since Democritus</em> (Cambridge University Press, 2013).',
        usedFor: "Free will, predictability, and computational complexity — the philosopher-physicist's take on what randomness can and cannot buy.",
      },
    ],
  },
  "phil-it-from-bit": {
    simple: raw`
      <p>In 1989 the physicist <strong>John Archibald Wheeler</strong> — the man who coined "black hole" and supervised Feynman — stood up and proposed that physics had the hierarchy backwards. Matter and energy, he said, are not fundamental. <strong>Information</strong> is. His slogan: <strong>"it from bit."</strong> "Every <em>it</em> — every particle, every field of force, even the spacetime continuum itself — derives its function, its meaning, its very existence entirely from the apparatus-elicited answers to yes-or-no questions, binary choices, <em>bits</em>." Reality, in his <strong>participatory universe</strong>, sits in "indeterminate limbo" until a question is asked — like his parable of the game of twenty questions, where the players realize the word "wasn't in the room when I came in": the answers <em>create</em> the thing being asked about.</p>
      <p>Now split Wheeler's provocation into two halves — one settled, one wide open. The <strong>settled half</strong>: "information is physical." In 1961 <strong>Rolf Landauer</strong> at IBM proved that <em>erasing</em> one bit of information has a minimum thermodynamic cost — about 3 zeptojoules at room temperature — because erasure squeezes two possibilities into one, and the lost entropy must go somewhere as heat. It was verified experimentally in 2012. Information is not an abstraction floating above physics; it is <em>made of</em> physics. Your quantum computer obeys this too: every quantum gate is reversible (unitary), so the energy cost of computation enters only where irreversibility enters — initialization and measurement.</p>
      <p>The <strong>contested half</strong>: "physics <em>is</em> information." Critics reply — Landauer's own dictum cuts both ways — that information "makes no sense in the absence of something to be <em>informed</em>," and ask the awkward question: "Matter can clearly exist without mind, but where do we see mind existing without matter?" Is "it from bit" profound physics or poetry? The honest answer: it's an open research program, not a result. And note the irony — <strong>QBism</strong> (last lesson) agrees that information is central but locates it in the <em>agent</em>, not in the furniture of the world.</p>
      <p>But here is where it gets serious: instead of arguing about the slogan, physicists tried to <strong>rebuild quantum theory from information principles</strong> — the way Einstein rebuilt physics from two crisp postulates of relativity. <strong>Lucien Hardy</strong> (2001) showed that quantum theory follows from five "reasonable axioms" about how systems combine and transform; the axiom that makes it <em>quantum</em> rather than classical is <strong>continuity</strong> — delete that one word and you get ordinary probability back. <strong>Chiribella, D'Ariano, and Perinotti</strong> (2011) derived quantum theory from six informational principles, crowned by the <strong>purification principle</strong>: "ignorance about a part is always compatible with maximal knowledge of a whole" — every mixed state is part of some pure entangled state. Their punchline: "Quantum theory is the only standard theory of information compatible with the purity and reversibility of physical processes."</p>
      <p>The most radical descendant is <strong>constructor theory</strong> (Deutsch and Marletto, 2015): stop writing physics as "initial conditions plus laws of motion" and write it as statements about which <em>tasks</em> are possible and which are impossible. On this view, <strong>quantum information is a special case of "superinformation"</strong> — information with the properties that you can't copy all of it at once and every transformation is reversible — and from superinformation fall out the no-cloning theorem, complementarity, and objective unpredictability as <em>theorems</em>. Status flag, stated honestly: as of 2026 it has produced no confirmed prediction that only it makes. It is Deutsch's current great project — philosophy as a research program, in real time.</p>
      <p>So what does a quantum computer <em>mean</em> on this view? It is physics doing information processing at the deepest level the theory allows: the machine manipulates superinformation — unclonable, complementary, reversibly transformable — rather than classical bits. Wheeler's slogan becomes a design principle. And it closes the circle of this module: Deutsch could read computation as a physical notion in 1985 <em>because</em>, at bottom, computation and physics are made of the same stuff. Whether that stuff is "it" or "bit" is the question Wheeler left us.</p>
      <p class="myth"><strong>Common myth:</strong> "'It from bit' is established physics — scientists proved reality is made of information." No: the settled part is Landauer's "information is physical." The "physics is information" direction is contested philosophy plus an active (unfinished) research program.</p>
    `,
    deeper: raw`
      <p>Landauer's principle deserves its equation, because it is the only part of this lesson that is settled experimental physics. Erasing one bit — a logically irreversible 2→1 map — must dissipate at least</p>
      <p>\[E_{\min} = k_B T \ln 2\]</p>
      <p>per bit (about \(3 \times 10^{-21}\) joules, or 0.018 eV, at room temperature). Bennett (1982) used it to exorcise <strong>Maxwell's demon</strong>: the demon's measurements are reversible, but <em>erasing its memory</em> to measure again costs at least \(k_B T \ln 2\) per bit — the second law is safe. For quantum computing the consequence is architectural: unitary gates are reversible and thermodynamically free in principle; the heat bill arrives at state preparation and measurement, the irreversible steps. (Classical computing pays Landauer's tax on every erased bit; quantum circuits defer it.)</p>
      <p>Hardy's reconstruction is the cleanest "information principle" argument. Characterize any probabilistic theory by two numbers: \(N\), the maximum number of states distinguishable in a single measurement, and \(K\), the number of parameters needed to specify a general state. Classical probability: \(K = N\). Quantum theory: \(K = N^2\) — a qubit needs 3 real parameters (the Bloch sphere) for \(N = 2\). Hardy's five axioms fix everything except one choice: <strong>Axiom 5, continuity</strong> — there exist continuous reversible transformations between any two pure states. Keep it: you get quantum theory. Drop the word "continuous": you get classical probability. The entire quantum/classical divide, reduced to a single axiom about information carriers. (Zeilinger's 1999 proposal belongs to the same family: "an elementary system carries one bit of information" — a qubit is nature's answer to the question "what is the simplest information carrier?")</p>
      <p>The Chiribella–D'Ariano–Perinotti derivation goes further operationally. Its crown jewel, the <strong>purification principle</strong>, states that for every mixed state \(\rho_A\) there exists a pure entangled state \(|\Psi\rangle_{AB}\) with \(\mathrm{Tr}_B(|\Psi\rangle\langle\Psi|) = \rho_A\): ignorance about a part is always compatible with maximal knowledge of the whole — Schrödinger's own characterization of entanglement as <em>the</em> characteristic trait of quantum mechanics. Add causality, local discriminability, perfect distinguishability, ideal compression, and atomicity of composition, and quantum theory is <em>forced</em> — it is "the only standard theory of information compatible with the purity and reversibility of physical processes." Classical information theory is what you get when you drop purification.</p>
      <p>Constructor theory reframes even the no-cloning theorem — the first great result of your syllabus — as a statement about <em>tasks</em>: cloning an unknown quantum state is an <strong>impossible task</strong>, not because of the details of Schrödinger's equation but because quantum systems are <strong>superinformation media</strong>, for which copying all attributes at once is impossible while every allowed transformation is reversible. Complementarity, objective unpredictability, and locally inaccessible information (entanglement's hidden correlations) follow the same way. Whether this reframing predicts anything new remains the open bet — but notice what it already did: it turned three separate quantum "mysteries" into consequences of one informational structure.</p>
      <p>The through-line for the computing student: Shannon's classical information, \(H = -\sum_i p_i \log_2 p_i\), measures <em>ignorance</em> about pre-existing facts. Quantum information measures something stranger — the structure of a world where, as Wheeler's twenty-questions parable insists, the facts are partly <em>created</em> by the questions. A quantum computer is the first machine built to process that kind of information natively. "It from bit" may or may not be the final metaphysics. But as an <em>engineering principle</em> — design machines around what information the world allows — it already built this field.</p>
      <p><strong>Further reading:</strong> David Deutsch, <em>The Beginning of Infinity</em> (2011) — the constructor-theoretic worldview; Jeffrey Bub, <em>Bananaworld: Quantum Mechanics for Primates</em> (2016) — the information-theoretic interpretation via parables; John von Neumann, <em>Mathematical Foundations of Quantum Mechanics</em> (1932/1955) — the axiomatization that created the measurement problem; Lucien Hardy, "Quantum theory from five reasonable axioms" (2001) — the reconstruction program's founding paper; Wheeler's "it from bit" essays (1989/1990).</p>
    `,
    keyPoints: [
      "Wheeler's 'it from bit' (1989/1990): every 'it' — particles, fields, spacetime — derives from answers to yes/no questions; the participatory universe sits in 'indeterminate limbo' until asked (the twenty-questions parable).",
      "The settled half: Landauer (1961) proved erasing a bit costs at least k_B T ln 2 — information is physical (verified 2012). Quantum gates are reversible; the heat bill comes at initialization and measurement.",
      "The contested half: 'physics is information' is philosophy, not fact — information needs something to be informed, and QBism locates information in the agent rather than the world.",
      "The reconstruction program rebuilds QM from information principles: Hardy (2001) — K=N² vs classical K=N, with the continuity axiom as the quantum/classical dividing line; Chiribella–D'Ariano–Perinotti (2011) — the purification principle plus five operational axioms force quantum theory.",
      "Constructor theory (Deutsch & Marletto, 2015) rewrites physics as possible vs impossible tasks; quantum information is 'superinformation,' yielding no-cloning and complementarity as theorems — an open research program with no unique confirmed prediction yet (2026).",
    ],
    quiz: [
      {
        q: "What is the precise content of Landauer's principle?",
        options: [
          "Information can travel faster than light in quantum systems",
          "Erasing one bit of information has a minimum thermodynamic cost of k_B T ln 2, because erasure is a logically irreversible 2→1 map",
          "Every particle in the universe carries exactly one bit of information",
          "Quantum computers can erase bits for free because gates are unitary",
        ],
        answer: 1,
        why: "Landauer (1961, verified 2012) is the settled half of 'it from bit': information is physical. The cost applies to erasure — unitary quantum gates are reversible and avoid it until measurement/initialization.",
      },
      {
        q: "In Hardy's reconstruction (2001), which axiom is the dividing line between quantum and classical probability?",
        options: [
          "The axiom that probabilities sum to one",
          "Continuity — continuous reversible transformations between pure states; drop 'continuous' and you get classical probability back",
          "The axiom that composite systems exist",
          "The purification principle",
        ],
        answer: 1,
        why: "Hardy showed K=N² (quantum) vs K=N (classical), and Axiom 5's continuity is what makes the theory quantum — a single-word difference with enormous consequences.",
      },
      {
        q: "What is constructor theory's central move?",
        options: [
          "Deriving the Born rule from many-worlds decision theory",
          "Rewriting physics not as initial conditions plus laws of motion, but as statements about which tasks (transformations) are possible vs impossible",
          "Proving that information is more fundamental than matter",
          "Showing that quantum computers can solve NP-complete problems",
        ],
        answer: 1,
        why: "Deutsch & Marletto (2015): an information medium supports copying of attributes; superinformation media yield no-cloning and complementarity as theorems — though no unique confirmed prediction exists yet.",
      },
    ],
    references: [
      {
        cite: 'John Archibald Wheeler, “Information, physics, quantum: the search for links,” in <em>Complexity, Entropy, and the Physics of Information</em> (Santa Fe Institute, 1990; paper delivered 1989).',
        usedFor: "The original “it from bit” proposal — reality as answers to yes-or-no questions, and the twenty-questions parable.",
      },
      {
        cite: 'John Horgan, “Why information can’t be the basis of reality,” <em>Scientific American</em> (Cross-Check blog).',
        url: "https://www.scientificamerican.com/blog/cross-check/why-information-cant-be-the-basis-of-reality/",
        usedFor: "The critique of the contested half — Landauer's “information is physical” does not imply “physics is information.”",
      },
      {
        cite: 'Rolf Landauer, “Irreversibility and heat generation in the computing process,” <em>IBM Journal of Research and Development</em> <strong>5</strong>, 183–191 (1961).',
        usedFor: "The settled half: erasing one bit costs at least k<sub>B</sub>T ln 2 — the 2→1 map that must dump entropy as heat.",
      },
      {
        cite: 'Antoine Bérut et al., “Experimental verification of Landauer’s principle linking information and thermodynamics,” <em>Nature</em> <strong>483</strong>, 187–189 (2012).',
        usedFor: "The first direct experimental test of Landauer's bound, using a colloidal particle in a double-well optical trap.",
      },
      {
        cite: 'Charles H. Bennett, “The thermodynamics of computation — a review,” <em>International Journal of Theoretical Physics</em> <strong>21</strong>, 905–940 (1982).',
        usedFor: "Exorcising Maxwell's demon: the demon's measurements are reversible, but erasing its memory pays Landauer's tax.",
      },
      {
        cite: 'Lucien Hardy, “Quantum theory from five reasonable axioms,” arXiv:quant-ph/0101012 (2001).',
        url: "https://arxiv.org/abs/quant-ph/0101012",
        usedFor: "The founding paper of the reconstruction program — Axiom 5 (continuity) as the quantum/classical dividing line.",
      },
      {
        cite: 'Giulio Chiribella, Giacomo Mauro D’Ariano and Paolo Perinotti, “Informational derivation of quantum theory,” <em>Physical Review A</em> <strong>84</strong>, 012311 (2011); popular version “Quantum Theory, Namely the Pure and Reversible Theory of Information,” <em>Entropy</em> (2012).',
        url: "https://arxiv.org/abs/1209.5533",
        usedFor: "The purification principle — “ignorance about a part is always compatible with maximal knowledge of a whole” — plus five operational axioms that force quantum theory.",
      },
      {
        cite: 'David Deutsch and Chiara Marletto, “Constructor theory of information,” <em>Proceedings of the Royal Society A</em> <strong>471</strong>, 20140540 (2015).',
        url: "https://royalsocietypublishing.org/doi/10.1098/rspa.2014.0540",
        usedFor: "Physics as possible vs impossible tasks; quantum information as “superinformation,” yielding no-cloning and complementarity as theorems.",
      },
      {
        cite: 'David Deutsch, <em>The Beginning of Infinity: Explanations That Transform the World</em> (Allen Lane, 2011).',
        usedFor: "The constructor-theoretic worldview behind the lesson's framing of computation as physics.",
      },
      {
        cite: 'Jeffrey Bub, <em>Bananaworld: Quantum Mechanics for Primates</em> (Oxford University Press, 2016).',
        usedFor: "The information-theoretic interpretation of quantum mechanics, explained through parables.",
      },
    ],
  },
};
