// Module 1a companion lessons: the full opening-lecture arc (qubits, superposition,
// measurement, physical platforms, properties, algorithms, NISQ hardware, ML, QML)
// rewritten from scratch in original language. Shape mirrors lesson-content.js.

const raw = String.raw;

export const m1aLessons = {
  "m1a-course-map": {
    simple: raw`

    <p>This course is built around three pillars. The first is <strong>quantum computing</strong> — computing built on the rules of quantum physics, the candidate for what much of tomorrow's heavy computation will look like. The second is <strong>machine learning</strong> — the technology already carrying a huge share of today's world: the recommendations that fill your feeds, the vision systems in cameras and cars, the language models that write and translate. The third pillar sits at their intersection: <strong>quantum machine learning</strong>, which asks what happens when these two worlds meet.</p>
    <p>The course follows a deliberate order. It begins with quantum computing itself: what a <strong>qubit</strong> is, what its strange properties really mean, and <em>why</em> quantum algorithms can win — not by running faster clocks, but by computing in a fundamentally different way. Along the way you meet the landmark algorithms — the ones that proved quantum machines can do things classical ones practically cannot — and then you survey <strong>today's hardware</strong>: what real quantum computers can currently do, and what limits them.</p>
    <p>Only then comes machine learning, taught from the ground up: how machines learn from data, how models are trained and tested, and which ideas actually matter for the intersection ahead. ML is not a detour — it is half the final destination, and it needs to stand on its own feet before it gets merged with anything quantum.</p>
    <div class="note-box">
      <p><strong>Why this order?</strong> You cannot judge what quantum computing adds to machine learning until you understand both pieces separately. Foundations first, intersection last — that is the whole map. Want the short version of the quantum side? Start with <a href="/quantum-computing-10-questions/">quantum computing in 10 questions</a>.</p>
    </div>
    <p>Finally, the course converges on <strong>quantum machine learning</strong>: quantum versions of learning algorithms, quantum data, and the honest open question of where — if anywhere — the quantum side gives a genuine advantage. That is the destination. Everything before it is the road.</p>
  
    `,
    deeper: raw`

    <p>The three-pillar design exists because the intersection is meaningless without the foundations. A claim like "this quantum model learns better" can only be evaluated if you know what the <em>classical</em> model does, what the <em>quantum</em> circuit does, and where the comparison is fair. Students who rush to the intersection end up unable to tell a genuine speedup from a poorly tuned classical baseline — and the history of this field contains several famous cases of exactly that confusion.</p>
    <p>What does "machine learning runs today's world" concretely mean? It means the systems you already interact with daily: ranking and recommendation engines that decide what you see, computer-vision models that tag photos and guide vehicles, speech and language models that transcribe and translate, and fraud-detection and forecasting systems behind banks and supply chains. These are not research demos — they are deployed infrastructure, trained on massive datasets with classical hardware. That scale is the benchmark any quantum proposal must eventually face.</p>
    <p>Notice the asymmetry the course is quietly teaching: machine learning is <em>proven at scale</em>, while quantum computing is <em>promising but young</em>. Quantum machine learning inherits the burden of both — it must learn from the engineering discipline of ML and the physical honesty of quantum computing. The roadmap (QC → ML → QML) is not just a teaching convenience; it mirrors the intellectual debt the intersection owes to each parent field.</p>
  
    `,
    keyPoints: [
      "The course rests on three pillars: quantum computing, machine learning, and their intersection — quantum machine learning.",
      "Quantum computing is taught first: qubits, their properties, why quantum algorithms win, landmark algorithms, and today's hardware.",
      "Machine learning comes next as a standalone subject — it must stand on its own before being merged with quantum ideas.",
      "The intersection is the destination: quantum learning algorithms evaluated honestly against classical ones.",
      "ML is proven at planetary scale; quantum computing is promising but young — QML must respect both realities."
    ],
    quiz: [
      { q: "What are the three pillars of the course, in the order they are taught?",
        options: ["Quantum machine learning, then quantum computing, then machine learning", "Quantum computing, then machine learning, then quantum machine learning", "Machine learning, then quantum machine learning, then quantum computing", "Quantum hardware, then quantum software, then quantum machine learning"],
        answer: 1,
        why: "The course teaches QC first, then ML as a standalone subject, and converges on their intersection — QML — last." },
      { q: "Why does machine learning come before quantum machine learning in the course?",
        options: ["Because quantum computers cannot run without ML software", "Because the quantum part of QML is too hard to teach first", "Because you cannot judge what quantum adds to learning until you understand classical learning on its own", "Because ML was invented before quantum computing"],
        answer: 2,
        why: "Fair comparison is the point: without understanding classical ML separately, you cannot tell a genuine quantum advantage from a weak classical baseline." },
      { q: "Which statement best captures the course's framing of the two parent fields?",
        options: ["Both are equally mature technologies", "Machine learning is proven at scale; quantum computing is promising but young", "Quantum computing has already replaced classical ML in industry", "Machine learning is a subfield of quantum computing"],
        answer: 1,
        why: "ML runs deployed infrastructure worldwide today, while quantum computing is still an emerging technology — QML must respect both realities." }
    ]
  },
  "m1a-qubit": {
    simple: raw`

    <p>A classical <strong>bit</strong> is the simplest thing in computing: it is either 0 or 1, never both, never in between. Every file, photo, and video on your devices is ultimately just a long string of such bits — billions of tiny switches, each firmly set.</p>
    <p>A <strong>qubit</strong> refuses to be that simple. It can be 0, it can be 1 — and it can also exist in a <strong>blend of 0 and 1 at the same time</strong>. Not "we don't know which," but a genuine, physical in-between that behaves like a wave and can interfere with itself.</p>
    <p>That immediately raises the natural question: <em>how is this possible?</em> How can one thing be in two states at once? It is the first question every student asks, and it deserves a direct answer rather than a shrug.</p>
    <div class="note-box">
      <p><strong>The one-word answer is superposition.</strong> Superposition is the strangest and most central idea in all of quantum computing: quantum objects can occupy a combination of their possible states until they are measured. Everything else in this course — the algorithms, the speedups, the hardware headaches — grows out of this one idea.</p>
    </div>
    <p>For the full treatment — what a qubit mathematically is, the Born rule, the Bloch sphere, and why measurement collapses the blend — see the <a href="/lessons/qubits/">qubits lesson</a>. This page is just the doorway: bits are either/or, qubits can be both, and superposition is the name of the magic.</p>
  
    `,
    deeper: raw`

    <p>A classical bit has exactly two distinguishable states, and the state of a bit is always one of them. A qubit's state space is <strong>continuous</strong>: its state is a point on the Bloch sphere, and <em>every</em> point on that sphere is a valid state. The two poles are |0⟩ and |1⟩, but the entire surface between them — infinitely many states — is equally real. That continuity is what "blend" means, made precise.</p>
    <p>Formally, a single-qubit state is \\(|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle\\) with complex amplitudes satisfying \\(|\\alpha|^2 + |\\beta|^2 = 1\\). The <strong>Born rule</strong> connects this continuous description to the discrete world of measurement: measuring in the computational basis yields 0 with probability \\(|\\alpha|^2\\) and 1 with probability \\(|\\beta|^2\\), and the state collapses to the observed outcome. So the qubit's richness lives <em>between</em> measurements — during the computation — and only a single classical bit survives each measurement.</p>
    <p>That last point is the discipline behind the wonder. A qubit is not a bit that secretly stores infinite information you can read out — extracting information is bottlenecked by measurement, which returns just one bit per qubit. Superposition gives the <em>computation</em> room to maneuver (interference among amplitudes), not the <em>observer</em> a bigger readout. Keeping those two roles apart is the key to understanding everything that follows.</p>
  
    `,
    keyPoints: [
      "A classical bit is always exactly 0 or 1 — two distinguishable states, nothing in between.",
      "A qubit can exist in a blend of 0 and 1 — a genuine physical in-between, not mere ignorance.",
      "The one-word answer to 'how is this possible?' is superposition — the strangest and most central idea in quantum computing.",
      "A qubit's state space is continuous: every point on the Bloch sphere is a valid state.",
      "Measurement yields a single classical bit and collapses the blend — the richness lives during the computation, not in the readout."
    ],
    quiz: [
      { q: "What is the fundamental difference between a bit and a qubit?",
        options: ["A qubit is smaller than a bit", "A bit is always 0 or 1; a qubit can exist in a blend of 0 and 1", "A qubit stores exactly twice as much readable data as a bit", "There is no difference — 'qubit' is just marketing"],
        answer: 1,
        why: "A bit has two distinguishable states; a qubit can occupy a superposition — a genuine blend of 0 and 1 that can interfere." },
      { q: "What is the one-word answer to 'how can a qubit be 0 and 1 at once?'",
        options: ["Entanglement", "Tunneling", "Superposition", "Decoherence"],
        answer: 2,
        why: "Superposition — the ability of quantum objects to occupy a combination of states — is the central idea behind the qubit." },
      { q: "You measure a qubit and get the result 1. What can you now read out from that qubit?",
        options: ["The full blend it was in before measurement", "Both 0 and 1 simultaneously", "Just the single classical outcome — the blend collapsed", "The exact values of α and β"],
        answer: 2,
        why: "Measurement collapses the superposition to one classical outcome; the amplitudes α and β are not directly readable." }
    ]
  },
  "m1a-superposition": {
    simple: raw`

    <p>Superposition is the answer to "how can a qubit be 0 and 1 at once?" — but what does it actually <em>do for computing</em>? The short version: it lets a quantum computer work with many possibilities in a single stroke, and then use interference to steer toward the right answer.</p>
    <p>Physicists write these blends in a compact notation called <strong>Dirac notation</strong>. A qubit in state 0 is written |0⟩, in state 1 as |1⟩, and a blend of the two as |ψ⟩ = α|0⟩ + β|1⟩. Read the kets | ⟩ as "the state of": |0⟩ means "the state 0," and |ψ⟩ means "the state psi." The numbers α and β say <em>how much</em> of each ingredient the blend contains.</p>
    <p>Now watch what happens with more than one qubit. One qubit's description needs <strong>2</strong> numbers (α and β). Two qubits need <strong>4</strong>. Three need <strong>8</strong>. Every qubit you add doubles the description — and each doubling is another doubling of the room the computation has to maneuver in.</p>
    <div class="note-box">
      <p><strong>Is it not very powerful?</strong> Ten qubits describe 1,024 possibilities at once; twenty describe over a million; thirty, over a billion. A classical register would need a separate entry for every one of those possibilities — the quantum register holds them all in one shared description. That explosive growth is the raw material every quantum algorithm exploits.</p>
    </div>
    <p>One honest caveat, carried over from the qubit lesson: you still only read out a single answer per measurement. Superposition supplies the <em>workspace</em>; clever interference supplies the <em>result</em>. The full mathematical treatment of the notation lives in the <a href="/lessons/dirac-notation/">Dirac notation lesson</a>.</p>
  
    `,
    deeper: raw`

    <p>A ket like |0⟩ is really a <strong>vector</strong> — a column of numbers in a vector space, with |0⟩ and |1⟩ as the two basis vectors of a two-dimensional complex space. The superposition |ψ⟩ = α|0⟩ + β|1⟩ is just a linear combination of those basis vectors, exactly like writing an arrow as a mix of x- and y-directions. Dirac notation is a bookkeeping system for such vectors, designed so that the algebra of quantum states stays readable.</p>
    <p>The amplitudes must satisfy the <strong>normalization condition</strong> \\(|\\alpha|^2 + |\\beta|^2 = 1\\): since \\(|\\alpha|^2\\) and \\(|\\beta|^2\\) are the probabilities of measuring 0 and 1, they have to add up to certainty. Up to an irrelevant overall phase, every single-qubit state is therefore a point on the Bloch sphere — two real numbers' worth of freedom, a continuous infinity of states between the poles.</p>
    <p>Multiple qubits combine through the <strong>tensor product</strong>: the state space of two qubits is the product of the two single-qubit spaces, so its dimension multiplies — \\(2 \\times 2 = 4\\), and in general \\(2^n\\) for \\(n\\) qubits. That is why the description grows exponentially: \\(n\\) qubits are described by \\(2^n\\) complex amplitudes (minus normalization and phase constraints). Entanglement is the extra twist — most of those multi-qubit states cannot be split back into separate single-qubit descriptions at all.</p>
  
    `,
    keyPoints: [
      "Dirac notation writes states as kets: |0⟩, |1⟩, and blends like |ψ⟩ = α|0⟩ + β|1⟩.",
      "α and β are amplitudes — they say how much of each ingredient the blend contains.",
      "The description doubles with every qubit: 1→2 numbers, 2→4, 3→8 — exponential growth.",
      "Ten qubits describe 1,024 possibilities in one shared description; thirty describe over a billion.",
      "Superposition supplies the workspace; interference must still steer toward the answer — readout stays one measurement."
    ],
    quiz: [
      { q: "In Dirac notation, what does |ψ⟩ = α|0⟩ + β|1⟩ describe?",
        options: ["A classical bit that is either 0 or 1", "A qubit in a superposition — a blend of |0⟩ and |1⟩ weighted by α and β", "Two separate qubits, one in |0⟩ and one in |1⟩", "The result of measuring a qubit"],
        answer: 1,
        why: "The ket |ψ⟩ is a linear combination of the basis states |0⟩ and |1⟩ — that is precisely a superposition, with amplitudes α and β." },
      { q: "How many complex numbers are needed to describe the state of 3 qubits?",
        options: ["3", "6", "8", "9"],
        answer: 2,
        why: "n qubits need 2ⁿ amplitudes, so 3 qubits need 2³ = 8 numbers — the description doubles with every added qubit." },
      { q: "What must the amplitudes α and β always satisfy?",
        options: ["α + β = 1", "|α|² + |β|² = 1", "α × β = 0", "α = β always"],
        answer: 1,
        why: "Normalization: |α|² and |β|² are the probabilities of measuring 0 and 1, so they must sum to 1." }
    ]
  },
  "m1a-bits-vs-qubits": {
    simple: raw`

    <p>Here is the punchline the whole module has been building toward. Classical and quantum machines scale <strong>differently</strong> — and that difference, not raw speed, is where quantum advantage comes from. Two scaling stories make it concrete.</p>
    <p><strong>Story one.</strong> Suppose you want to keep track of N = 2ⁿ possibilities. Classically, describing all of them takes resources that grow with N itself — a list with a slot for every possibility, linear in N. Quantumly, n qubits hold all 2ⁿ amplitudes in a single shared description. What was <em>linear</em> classically becomes <em>logarithmic</em> quantumly: N possibilities, just n = log₂N qubits.</p>
    <p><strong>Story two.</strong> Turn it around: a problem whose classical description or computation blows up <em>exponentially</em> — doubling in difficulty with every added piece — can, for the right structured problems, be handled with resources that grow only <em>linearly</em> on a quantum machine. Exponential becomes linear. That is not a faster horse; it is a different kind of vehicle.</p>
    <div class="note-box">
      <p><strong>Why does this matter?</strong> Because complexity classes are decided by scaling, not by constants. A machine that turns exponential costs into linear ones doesn't just win today — it wins <em>more</em> with every step up in problem size. That widening gap is the mathematical root of quantum advantage.</p>
    </div>
    <p>The honest fine print: this is about how the <em>description and computation</em> scale for structured problems — not magic, and not a readout trick. You still measure only n bits from n qubits. The compression is real, but harvesting it takes clever algorithms that arrange interference so the final measurement reveals something useful. For the big picture, see <a href="/quantum-computing-10-questions/">quantum computing in 10 questions</a>.</p>
  
    `,
    deeper: raw`

    <p>The scaling story is really a statement about <strong>description complexity</strong>. A general state of n classical bits is one of 2ⁿ configurations, and writing down an arbitrary <em>distribution</em> over them takes 2ⁿ numbers — linear in N = 2ⁿ. A general state of n qubits is <em>also</em> described by 2ⁿ amplitudes — but it lives natively in the machine: n physical qubits, a resource count of n = log₂N, hold the whole exponentially large description. The quantum device doesn't <em>simulate</em> the large space; it <em>inhabits</em> it.</p>
    <p>That compression is the root from which quantum speedups grow. Algorithms like Shor's exploit structure (periodicity) so that interference concentrates amplitude on the answer, turning a classically exponential task into a polynomial-time quantum one. Grover's gives the milder quadratic version of the same moral: the space is vast, and quantum access to it is cheap. But "cheap access" is not "free answers" — <strong>Holevo's bound</strong> guarantees that n qubits can deliver at most n classical bits per measurement, so the algorithm must be designed around what a single careful question can extract.</p>
    <p>Present the punchlines carefully: "linear → logarithmic" and "exponential → linear" describe how <em>resource requirements scale</em> for suitable structured problems. They do not mean every problem gets faster, and they do not mean the exponential description can be printed out. The advantage is real but conditional — on structure, on interference doing the steering, and on hardware that can run deep enough circuits before noise wins.</p>
  
    `,
    keyPoints: [
      "Classical and quantum machines scale differently — that scaling gap, not raw speed, is the root of quantum advantage.",
      "Punchline one: describing N = 2ⁿ possibilities takes linear-in-N resources classically, but only n = log₂N qubits quantumly.",
      "Punchline two: for suitable structured problems, classically exponential costs can become linear on a quantum machine.",
      "The quantum device doesn't simulate the large state space — it inhabits it natively.",
      "The fine print: readout is still n bits per measurement (Holevo's bound), so clever interference is what harvests the compression."
    ],
    quiz: [
      { q: "To describe N = 2ⁿ possibilities, how do classical and quantum resource needs compare?",
        options: ["Both need resources growing linearly with N", "Classical needs ~N resources; n qubits hold the whole description with n = log₂N", "Quantum needs more resources because qubits are fragile", "Classical needs log N bits; quantum needs N qubits"],
        answer: 1,
        why: "Classically the description grows with N itself; n qubits natively carry all 2ⁿ amplitudes — linear becomes logarithmic." },
      { q: "What does the 'exponential → linear' punchline mean?",
        options: ["Every problem runs exponentially faster on a quantum computer", "For suitable structured problems, costs that blow up exponentially classically can grow only linearly quantumly", "Quantum computers have linear clock speeds", "Printing out a quantum state takes linear time"],
        answer: 1,
        why: "The scaling win applies to structured problems where interference can concentrate amplitude on the answer — it is conditional, not universal." },
      { q: "Why can't you simply read out all 2ⁿ amplitudes from n qubits?",
        options: ["Because the amplitudes don't really exist", "Because current hardware is too noisy", "Because measurement yields at most n classical bits and collapses the state (Holevo's bound)", "Because Dirac notation forbids it"],
        answer: 2,
        why: "Holevo's bound caps readout at n bits per measurement, and measurement collapses the superposition — so algorithms must ask one clever question." }
    ]
  },
  "m1a-measurement": {
    simple: raw`

    <p>A qubit is a private creature. As long as nobody interacts with it, it can sit in <strong>superposition</strong> — a blend of 0 and 1. But the moment anything tries to <em>record</em> which state it is in, the blend ends. That recording event is a <strong>measurement</strong>, and it is the curse of the qubit: you gain one classical answer, and you lose the quantum-ness you were trying to use.</p>
    <p>Here is the part that surprises people: a measurement does not have to be a scientist peering through an instrument. <strong>Any intrusion into the qubit's privacy counts.</strong> If the qubit interacts with another atom, bumps into a stray electron, or leaks even a single photon that carries information about its state — that is a measurement too. The universe does not care whether a human was watching.</p>
    <div class="compare">
      <div><h4>Before measurement</h4><p>The qubit holds a blend of possibilities. The amplitudes can still interfere.</p></div>
      <div><h4>After measurement</h4><p>One outcome is now a fact. The blend is gone, and no further interference is possible.</p></div>
    </div>
    <p>So measurement is not a passive reading, like checking a thermometer. It is an <strong>active disturbance</strong>: to look is to change. This is why quantum algorithm designers treat measurement as the final, irreversible step — they arrange everything beforehand with gates and interference, and measure only when the answer has been coaxed into the open. For the full story, see <a href="/lessons/quantum-measurement/">Quantum Measurement</a> and the overview in <a href="/quantum-computing-10-questions/">10 questions</a>.</p>
    <p class="myth"><strong>Common myth:</strong> “Measurement just reveals what was already there.” Not for a qubit. Before measurement there is no hidden fact of the matter — the outcome is genuinely created in the act of measuring, with probabilities set by the amplitudes.</p>
  
    `,
    deeper: raw`

    <p>The <strong>measurement postulate</strong> says: when you measure a qubit in a chosen basis, the outcome is probabilistic and the state <strong>collapses</strong> onto the observed basis state. For a qubit \\(|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle\\) measured in the computational basis, the <strong>Born rule</strong> gives outcome \\(|0\\rangle\\) with probability \\(|\\alpha|^2\\) and \\(|1\\rangle\\) with probability \\(|\\beta|^2\\). Afterward the state is whichever outcome you saw — \\(\\alpha\\) and \\(\\beta\\) are gone.</p>
    <p>Collapse is <strong>basis-dependent</strong>: measuring in a different basis (say the \\(\\{|+\\rangle, |-\\rangle\\}\\) basis) collapses onto a different pair of states, with different probabilities. The qubit does not "have" an outcome waiting to be found; the basis you choose decides the question being asked, and the state answers it once.</p>
    <p>There is a fundamental limit to what readout can extract. However large the \\(2^n\\) amplitudes of \\(n\\) qubits are, a measurement of all \\(n\\) qubits returns at most <strong>\\(n\\) classical bits</strong> — one binary outcome per qubit. (This is the qualitative content of the <strong>Holevo bound</strong>.) That is why algorithms cannot simply compute every answer and print them out: the bottleneck is not computing power, it is the readout itself.</p>
    <p>Finally, the environment is always "measuring." When a qubit entangles with surrounding atoms, fields, or photons in an uncontrolled way, information about its state leaks outward — an unobserved measurement by the universe. This is <strong>decoherence</strong>: the superposition degrades into ordinary classical uncertainty without anyone deliberately looking. Keeping qubits isolated enough to compute before this happens is the central engineering battle of quantum hardware.</p>
  
    `,
    keyPoints: [
      "A measurement is any event that records a qubit's state — a scientist observing, or a stray atom, electron, or photon interacting with it.",
      "Measuring collapses superposition: one classical outcome becomes fact, and interference is no longer possible.",
      "Collapse is basis-dependent: the basis you measure in determines which question the qubit answers.",
      "n qubits yield at most n classical bits of readout (Holevo bound) — readout, not computing power, is the fundamental bottleneck.",
      "Decoherence is the environment measuring the qubit uncontrollably, leaking information and destroying superposition."
    ],
    quiz: [
      { q: "A qubit in superposition drifts near a stray electron and they interact briefly, exchanging information about the qubit's state. What happened?",
        options: ["Nothing — only a scientist with an instrument can perform a measurement", "The qubit was measured: the interaction counts as an intrusion into its privacy", "The qubit's superposition doubled in size", "The electron absorbed the qubit and became classical"],
        answer: 1,
        why: "Any event that records information about the qubit's state is a measurement — no human observer is required." },
      { q: "You have 10 qubits in a rich entangled state. You measure all of them. How many classical bits of information can you extract at most?",
        options: ["2¹⁰ = 1,024 bits", "10 bits", "100 bits", "Unlimited — the state holds 2¹⁰ amplitudes"],
        answer: 1,
        why: "The Holevo bound says n qubits yield at most n classical bits of readout, however large the state space is." },
      { q: "Why is decoherence described as the environment 'measuring' the qubit?",
        options: ["Because the environment keeps a written log of the outcomes", "Because uncontrolled entanglement with the environment leaks information about the state, destroying superposition", "Because physicists deliberately measure qubits to create decoherence", "Because decoherence only happens inside measurement instruments"],
        answer: 1,
        why: "Decoherence is information about the qubit leaking into the environment — an unobserved measurement that degrades superposition into classical uncertainty." }
    ],
    references: [
      { cite: "Nielsen &amp; Chuang, <em>Quantum Computation and Quantum Information</em>, Ch. 2 (measurement postulate, Born rule, Holevo bound).", url: "", usedFor: "Measurement postulate, basis-dependence, and the readout limit." }
    ]
  },
  "m1a-physical-qubits": {
    simple: raw`

    <p>A qubit is not a particular gadget. It is a <strong>role</strong> that many different physical things can play. The job description is short: be a quantum system with exactly <strong>two distinguishable states</strong> — a ground floor and a first floor, with nothing you care about in between — and let engineers control which floor you are on, and even put you in a blend of both.</p>
    <p><strong>Example one: an electron's energy levels.</strong> An electron bound to an atom can sit in its lowest-energy state (the ground state) or be kicked up to an excited state. Call the ground state |0⟩ and the excited state |1⟩. The electron can also be prepared in a blend of the two — and now you have a qubit made of one electron.</p>
    <p><strong>Example two: an electron's spin.</strong> Electrons behave like tiny magnets that can point "up" or "down" along any chosen axis. Those two orientations — spin-up and spin-down — are two perfectly good qubit states. No excited energy level needed; the qubit lives in the spin alone.</p>
    <div class="compare">
      <div><h4>Energy-level qubit</h4><p>|0⟩ = ground state, |1⟩ = excited state. The qubit is <em>where the electron's energy sits</em>.</p></div>
      <div><h4>Spin qubit</h4><p>|0⟩ = spin-down, |1⟩ = spin-up. The qubit is <em>which way the electron points</em>.</p></div>
    </div>
    <p><strong>Example three: a photon's polarization.</strong> Light waves wiggle in a direction, and a single photon can be polarized horizontally or vertically — two states, |0⟩ and |1⟩. Photons barely interact with anything, which makes them wonderfully stable qubits — and wonderfully hard to hold still and operate on. For the big picture of how these fit together, see <a href="/quantum-computing-10-questions/">10 questions</a> and the <a href="/lessons/qubits/">qubits lesson</a>.</p>
    <p class="myth"><strong>Common myth:</strong> “There is one true qubit technology.” Not yet. Every physical realization is a tradeoff — some are fast but fragile, some are stable but hard to control — and the field is still running the race.</p>
  
    `,
    deeper: raw`

    <p>What does <strong>"two-level"</strong> mean physically? It means: among all the states the system could occupy, we single out two — call them \\(|0\\rangle\\) and \\(|1\\rangle\\) — and arrange the physics so that the system stays, to an excellent approximation, inside the two-dimensional subspace they span. Real atoms have infinitely many energy levels, real spins sit in complicated environments, but if the energy gap to the <em>third</em> level is large and our control pulses are gentle and well-tuned, the system never notices the rest of the universe of states. Two levels are all a qubit needs, because a qubit is a single binary choice made quantum.</p>
    <p>Isolating two levels is an engineering art. The unwanted transitions are suppressed by design: keep the system cold so thermal energy cannot kick it upward, shape control pulses so they do not accidentally drive it to level three, and pick physical systems where the first two levels are conveniently far from the rest. When this isolation fails — when the system "leaks" into higher levels — the computation silently leaves the qubit subspace, which is one more source of error hardware must fight.</p>
    <p>Beyond the three examples above, the zoo is large. <strong>Trapped ions</strong> use the internal electronic states of individual atoms held in electromagnetic cages — extremely high-quality qubits, but slow and hard to pack densely. <strong>Superconducting circuits</strong> are artificial atoms carved from metal on a chip, fast and manufacturable, but they demand cooling to near absolute zero and are relatively noisy. <strong>Neutral atoms</strong> in optical tweezers, <strong>quantum dots</strong> (electron spins trapped in semiconductor islands), and <strong>nuclear spins</strong> each push a different corner of the tradeoff space: coherence time vs. gate speed vs. scalability vs. operating temperature. No platform dominates all four — which is why the hardware race is still open.</p>
  
    `,
    keyPoints: [
      "A qubit is a role, not a gadget: any controllable quantum system with two distinguishable states can play it.",
      "Three classic realizations: an electron's ground vs. excited energy level, an electron's spin-up vs. spin-down, and a photon's horizontal vs. vertical polarization.",
      "Only two levels are needed because a qubit is one binary choice made quantum; higher levels exist but are deliberately isolated away.",
      "The wider zoo — trapped ions, superconducting circuits, neutral atoms, quantum dots, nuclear spins — trades off coherence, speed, scalability, and temperature.",
      "No single platform wins on every axis; each is a different engineering compromise."
    ],
    quiz: [
      { q: "An engineer builds a qubit from an electron's spin, using spin-down as |0⟩ and spin-up as |1⟩. Which statement is TRUE?",
        options: ["This cannot work — only energy levels can form qubits", "This is a valid qubit: spin-up and spin-down are two distinguishable, controllable quantum states", "Spin qubits cannot be put into superposition", "A spin qubit must also use a third level to function"],
        answer: 1,
        why: "A qubit is any controllable two-level quantum system — spin-up/spin-down qualifies exactly." },
      { q: "A real atom has infinitely many energy levels, yet we use it as a two-level qubit. How is this justified?",
        options: ["The extra levels are deleted by the control software", "We isolate two levels: the gap to the third level is large and control pulses are tuned to never reach it", "Atoms actually have only two levels; textbooks exaggerate", "Extra levels improve the qubit, so we keep them all"],
        answer: 1,
        why: "Good qubit design keeps the system inside the two-dimensional subspace; leakage to higher levels is an error to be suppressed." },
      { q: "Which best describes the state of qubit hardware platforms today?",
        options: ["Superconducting circuits have won and all other approaches are abandoned", "Photons are too unstable to ever be qubits", "Multiple platforms coexist, each trading off coherence time, gate speed, scalability, and operating temperature", "Trapped ions are the only platform that can be manufactured"],
        answer: 2,
        why: "Trapped ions, superconducting circuits, neutral atoms, quantum dots, and nuclear spins each win on different axes — no platform dominates all four." }
    ],
    references: [
      { cite: "Nielsen &amp; Chuang, <em>Quantum Computation and Quantum Information</em>, Ch. 7 (physical realizations of qubits).", url: "", usedFor: "Survey of physical qubit platforms and their trade-offs." }
    ]
  },
  "m1a-three-properties": {
    simple: raw`

    <p>Quantum computing stands on three properties of the quantum world. Each one is strange on its own; together they are the whole game. Here is the intuition for each — one clear picture per property.</p>
    <p><strong>1. Superposition — the blend.</strong> A qubit can exist in a blend of 0 and 1 at once. With <em>n</em> qubits, the blend covers 2ⁿ possibilities simultaneously. This is the property that makes quantum physics interesting for computing: it opens up an enormous space to work in. But a blend alone is not computing — it is just raw material. (See the <a href="/lessons/qubits/">qubits lesson</a> for the full story.)</p>
    <p><strong>2. Interference — the steering.</strong> The parts of a superposition behave like waves, and waves can cancel or reinforce each other. A quantum circuit is designed so that wrong answers' amplitudes <em>cancel out</em> while the right answer's amplitude <em>piles up</em>. Interference is how you bias the machine toward the result you want — without it, measuring would just give random noise. (See <a href="/lessons/quantum-interference/">Quantum Interference</a>.)</p>
    <p><strong>3. Entanglement — the correlation.</strong> Two qubits can be linked so that neither one has a state of its own — only the <em>pair</em> does. Measure one, and the other's outcome is instantly correlated, no matter how far apart they are. Einstein called this "spooky" — but it is real, tested, and it lets a quantum system represent joint possibilities no classical system can.</p>
    <p class="myth"><strong>Common myth:</strong> “Entanglement means instant messaging across the universe — or time travel.” No. The outcomes are correlated, but each side's <em>own</em> outcome looks completely random, and no message can be forced through. Entanglement cannot send information faster than light, and it certainly cannot send you back in time. What it gives is correlation without communication — which is strange enough.</p>
  
    `,
    deeper: raw`

    <p><strong>Interference, precisely:</strong> a quantum state carries a complex amplitude for each possibility, and probabilities come from the <em>squared magnitude of sums of amplitudes</em>. If two paths lead to the same outcome with amplitudes \\(\\alpha\\) and \\(\\beta\\), the probability is \\(|\\alpha + \\beta|^2 = |\\alpha|^2 + |\\beta|^2 + 2\\,\\mathrm{Re}(\\alpha^*\\beta)\\). That cross term — the interference term — can be negative (cancellation) or positive (reinforcement). Algorithm design is largely the art of arranging these cross terms: Grover's algorithm, for example, repeatedly rotates amplitudes so the marked item's amplitude grows while the others shrink. Without the cross terms, quantum computing would be expensive random-number generation.</p>
    <p><strong>Entanglement, precisely:</strong> a two-qubit state is <em>entangled</em> when it cannot be written as a product of single-qubit states. The classic example is the Bell pair \\(|\\Phi^+\\rangle = \\tfrac{|00\\rangle + |11\\rangle}{\\sqrt{2}}\\): try to factor it as \\(|\\psi\\rangle \\otimes |\\phi\\rangle\\) and you will fail — no such pair exists. Measure both qubits and the outcomes always agree (both 0 or both 1), each with probability \\(\\tfrac{1}{2}\\), yet before measurement neither qubit had a definite value. The correlation is in the <em>joint</em> state, not hidden inside the parts.</p>
    <p><strong>Why no faster-than-light messaging?</strong> Because each observer, looking only at their own qubit, sees perfectly random outcomes — a 50/50 coin flip, regardless of what the distant partner does. The correlation becomes visible only when the two sides <em>compare notes</em> afterward, over an ordinary classical channel. This is the <strong>no-signaling theorem</strong>: entanglement correlates without communicating, so relativity stays intact.</p>
    <p><strong>Why all three together?</strong> Superposition without interference is just parallelism you cannot read out (recall the measurement bottleneck). Interference without entanglement can be simulated classically with modest effort — it is entanglement that makes the joint state space genuinely exponential and hard to mimic. Speedup needs the blend (room to compute), the steering (bias toward the answer), and the non-classical correlation (structure no classical system can fake). Remove any one, and the advantage collapses.</p>
  
    `,
    keyPoints: [
      "Superposition blends possibilities — with n qubits, 2ⁿ of them — opening an enormous space to compute in.",
      "Interference steers the computation: amplitudes of wrong answers cancel, the right answer's amplitude reinforces.",
      "Entanglement links qubits so only the joint system has a definite state — correlation no classical system can reproduce.",
      "Entanglement cannot send messages faster than light (no-signaling theorem) and has nothing to do with time travel.",
      "Quantum speedup needs all three: superposition supplies the room, interference steers toward the answer, entanglement makes the structure classically inimitable."
    ],
    quiz: [
      { q: "Two qubits are prepared in the Bell pair (|00⟩ + |11⟩)/√2 and flown to opposite sides of the planet. Alice measures hers and gets 0. What does Bob get when he measures his?",
        options: ["A random result, uncorrelated with Alice's", "0, with certainty", "1, with certainty", "His qubit is destroyed by Alice's measurement"],
        answer: 1,
        why: "In this Bell pair the outcomes always agree — but neither outcome was determined before measurement, and no signal traveled between them." },
      { q: "Can Alice use her half of an entangled pair to send Bob an instant message faster than light?",
        options: ["Yes — the correlation is instantaneous, so messages travel instantly", "Yes, but only one bit per pair", "No — her own outcomes look perfectly random; the correlation only shows when they compare notes classically", "No, because entanglement breaks if the qubits are far apart"],
        answer: 2,
        why: "The no-signaling theorem: each side alone sees randomness. Correlation without communication cannot carry a message." },
      { q: "A quantum circuit uses superposition and entanglement but its gates are arranged so that all interference cross-terms vanish. What is the result?",
        options: ["An even bigger speedup, since interference was holding it back", "Effectively expensive random-number generation — measurement yields noise with no bias toward the answer", "The qubits become classical bits", "The computation runs in half the time"],
        answer: 1,
        why: "Without interference there is no steering: amplitudes cannot cancel or reinforce, so the readout has no bias toward the right answer." }
    ],
    references: [
      { cite: "Nielsen &amp; Chuang, <em>Quantum Computation and Quantum Information</em>, Ch. 2 (composite systems, Bell states) and Ch. 4 (quantum circuits).", url: "", usedFor: "Bell-pair non-separability, interference cross-terms, and the no-signaling argument." }
    ]
  },
  "m1a-merits": {
    simple: raw`

    <p>Here is the promise that launched the field. Some problems get <strong>exponentially harder</strong> as they grow: double the input size, and the work does not double — it explodes. A classical computer facing such a problem is like someone trying to empty the ocean with a teaspoon. Quantum algorithms can, for certain problems, turn that explosion into a gentle slope.</p>
    <p>Picture the classic plot every quantum course draws. The horizontal axis is the <strong>problem size</strong> n — say, the number of digits in a number you want to factor — running from 0 to 60. The vertical axis is <strong>computational steps</strong>, up to about 1,200,000. Now draw three curves. The n² curve and the n³ curve hug the floor: even at n = 60, they need only a few thousand steps. But the 2ⁿ curve is a different animal — flat at first, then it rockets upward and smashes through the top of the chart. That rocket is what classical algorithms face on hard problems. Quantum algorithms aim to drag that rocket back down to the floor.</p>
    <p>The flagship example is <strong>factoring</strong> — splitting a large number into its prime factors. Every classical method we know scales brutally with the number of digits, and that hardness is literally what protects modern encryption: your bank transactions are safe because factoring a 600-digit number would take classical machines longer than the age of the universe. <strong>Shor's algorithm</strong> (1994) factors the same number in a number of steps that grows only <em>polynomially</em> — efficiently, not explosively. Same problem, different universe of effort.</p>
    <p>So the merit of a quantum algorithm is measured in <strong>how the work scales</strong>, not in raw speed. A quantum computer is not a faster clock — it is a machine that can turn some classically intractable problems into tractable ones. That "some" matters enormously, and the next section is honest about it.</p>
    <p class="myth"><strong>Common myth:</strong> “Shor's algorithm factors in O(log n) steps — basically instant.” No. Shor's runs in <em>polynomial</em> time (roughly cubic in the number of digits), which is efficient but very far from logarithmic. Beware any chart or slogan that makes it sound instant — the honest claim is polynomial vs. super-polynomial, and that is already revolutionary.</p>
  
    `,
    deeper: raw`

    <p>Complexity theory gives this a precise language. <strong>P</strong> is the class of problems a classical computer can solve in polynomial time — time growing like \\(n^2\\), \\(n^3\\), or any fixed power of the input size \\(n\\). <strong>BQP</strong> ("bounded-error quantum polynomial time") is the quantum analogue: problems a quantum computer can solve in polynomial time with error probability at most \\(\\tfrac{1}{3}\\). Every problem in P is also in BQP — a quantum computer can do anything a classical one can, efficiently — and it is strongly believed (though not proven) that BQP is strictly larger: it contains problems like integer factoring and discrete logarithms that sit outside P as far as anyone can tell.</p>
    <p>Shor's algorithm वह exhibit है जिसने BQP को मशहूर किया। classically, सबसे अच्छा known factoring method — <strong>general number field sieve</strong> — <em>sub-exponential</em> time में चलता है: साफ \\(2^n\\) नहीं, लेकिन फिर भी super-polynomial, और बड़े inputs के लिए practical होने की सीमा से कहीं ज़्यादा तेज़ी से बढ़ता हुआ। Shor's algorithm, जो quantum Fourier transform और period-finding पर बना है, n-digit number को n में polynomial time में factor करता है (standard multiplication के साथ लगभग \\(O(n^3)\\)। polynomial बनाम super-polynomial ही ईमानदार framing है — "exponential speedup" एक slogan है, और यह justified है, क्योंकि classical scaling exponential जैसी ही है, भले ही वह literally \\(2^n\\) न हो।</p>
    <p>The caveat that keeps the field honest: <strong>exponential speedup is problem-specific, not universal.</strong> Most problems in P get no meaningful quantum advantage, and most problems outside BQP stay hard even for quantum computers. The art of the field is finding the structured problems — periodicity, hidden subgroups, unstructured search (Grover's quadratic speedup), quantum simulation — where interference and entanglement buy something classical machines cannot. A quantum computer is a specialist instrument, not a universal accelerator.</p>
  
    `,
    keyPoints: [
      "A quantum algorithm's merit is measured by how its work scales with problem size — polynomial vs. super-polynomial — not by clock speed.",
      "On the classic steps-vs-size plot, the 2ⁿ curve explodes off the chart while n² and n³ hug the floor; quantum algorithms aim to pull hard problems back down to the floor.",
      "Factoring is the flagship: classically super-polynomial (best known: the general number field sieve), quantumly polynomial via Shor's algorithm (1994).",
      "Shor's runs in polynomial time — roughly cubic in the digits — NOT O(log n); the honest claim is polynomial vs. super-polynomial.",
      "Exponential speedup is problem-specific: P ⊆ BQP is believed strict but unproven, and most everyday problems gain nothing from quantum computers."
    ],
    quiz: [
      { q: "On the classic plot of computational steps (y-axis) vs. problem size n (x-axis, 0–60), what does the 2ⁿ curve look like compared to the n² and n³ curves?",
        options: ["All three curves stay near the floor of the chart", "The 2ⁿ curve stays flat while n² and n³ explode upward", "The 2ⁿ curve rockets upward off the chart while n² and n³ hug the floor", "The curves are identical — scaling is just a matter of constants"],
        answer: 2,
        why: "Exponential scaling explodes with n; polynomial curves (n², n³) grow gently. The whole point of quantum algorithms is to move hard problems from the rocket curve down to the floor." },
      { q: "Which statement about Shor's factoring algorithm is ACCURATE?",
        options: ["It factors an n-digit number in O(log n) steps — essentially instant", "It runs in polynomial time (about cubic in the digits), while the best known classical methods are super-polynomial", "It is slower than classical factoring but uses less memory", "It proves that P = BQP"],
        answer: 1,
        why: "Shor's is polynomial vs. the classical general number field sieve's sub-exponential scaling. O(log n) is a myth; P vs. BQP strictness remains unproven." },
      { q: "A startup claims its quantum computer will 'exponentially speed up all computing tasks.' What is wrong with this claim?",
        options: ["Nothing — quantum computers accelerate every computation", "Quantum speedup is problem-specific: most problems in P gain little, and problems outside BQP stay hard", "Quantum computers are slower than classical ones at everything", "Exponential speedup only applies to factoring, nothing else"],
        answer: 1,
        why: "Quantum advantage applies to structured problems (periodicity, search, simulation); it is not a universal accelerator." }
    ],
    references: [
      { cite: "Shor, P., \"Algorithms for quantum computation: discrete logarithms and factoring\" (Proc. 35th FOCS, 1994).", url: "https://arxiv.org/abs/quant-ph/9508027", usedFor: "Shor's polynomial-time factoring result and its basis in quantum period-finding." },
      { cite: "Nielsen &amp; Chuang, <em>Quantum Computation and Quantum Information</em>, Ch. 3 (complexity classes P and BQP).", url: "", usedFor: "P vs. BQP framing and the problem-specific nature of quantum speedup." }
    ]
  },
  "m1a-three-circles": {
    simple: raw`

    <p>One of the clearest pictures in quantum computing is a Venn diagram with three circles. It is a way of asking: where are the quantum algorithms that are actually worth building a machine for? The diagram does not answer that — but it tells you exactly where every candidate sits.</p>
    <p>The three circles are <strong>practical utility</strong> (does the algorithm solve a real-world problem — chemistry, logistics, cryptography — that somebody actually needs solved?), <strong>few qubits</strong> (can it run on a modest number of qubits, the kind we can build today?), and <strong>quantum advantage</strong> (does it genuinely outperform the best classical computer?). The spot where all three overlap is the goal: a useful, buildable, genuinely faster quantum computation.</p>
    <p>Two landmark results show why that center is so hard to reach. <strong>Shor's algorithm</strong> sits firmly in the overlap of <em>practical utility</em> and <em>quantum advantage</em>: factoring large numbers exponentially faster is enormously useful (it breaks today's encryption) and a true quantum speedup. But it does <strong>not</strong> reach into the "few qubits" circle — running it on cryptographically relevant numbers needs thousands of reliable logical qubits, which means millions of physical ones once error correction is included. Shor's is in the diagram, but off-center.</p>
    <div class="compare">
      <div><h4>Shor's algorithm</h4><p>Practical utility + quantum advantage — but needs far more qubits than we have.</p></div>
      <div><h4>Quantum supremacy (2019)</h4><p>Few qubits + quantum advantage — but the task had no practical use.</p></div>
    </div>
    <p>Google's 2019 <strong>quantum supremacy</strong> experiment sits in a different overlap: <em>few qubits</em> and <em>quantum advantage</em>. A ~53-qubit processor ran a sampling task no supercomputer could reproduce in reasonable time — a genuine quantum speedup on a modest chip. But it does <strong>not</strong> reach into the "practical utility" circle: the task, random circuit sampling, was chosen precisely because it is hard for classical machines, not because anyone needs its answer. So the diagram's message is the field's central tension: the most useful algorithms need the most qubits, and today's machines have the fewest. Every line of research — better hardware, error correction, smarter algorithms — is an attempt to drag more results toward that desired center. The center is empty today; that is the point of the diagram.</p>
  
    `,
    deeper: raw`

    <p>Why do the three circles resist overlapping? Because "few qubits" and "quantum advantage" pull against each other. Advantage on a small device demands deep, intricate circuits; noise destroys deep circuits before they finish. Meanwhile "practical utility" usually means large problem instances — simulating a real molecule, factoring a real key — which need many qubits and long coherence. Formally, each circle is a resource demand: utility demands problem size, advantage demands circuit complexity that classical machines cannot match, and "few qubits" demands the whole thing fit in a NISQ-era device. Satisfying all three at once is the field's open problem.</p>
    <p>The 2019 supremacy experiment deserves precise language. Google's Sycamore processor sampled the output of a random quantum circuit — a task whose cost grows like \\(2^{53}\\), the dimension of the 53-qubit state space — in about 200 seconds. Google estimated the best supercomputer would need ~10,000 years; IBM countered that with better classical algorithms and enough disk storage it could take days. The debate is beside the point for the diagram: whatever the exact classical cost, this was a real quantum computation no classical machine could do conveniently — on a real chip — and it landed exactly where the diagram predicts: advantage without utility.</p>
    <p>Contrast Shor's. For an \\(n\\)-bit number, the quantum circuit needs only \\(O(n)\\) qubits — polynomial, not exponential — so in principle it is efficient. The trouble is the constant factors: thousands of logical qubits, each protected by error correction requiring hundreds to thousands of physical qubits, plus deep circuits and long coherence. The resource estimate is millions of physical qubits. Shor's is an algorithm waiting for a machine — utility and advantage confirmed, "few qubits" denied.</p>
    <p>Read this way, the diagram is also a research map. Error correction moves results toward "few qubits" by making each qubit better; new hardware moves the boundary of what "few" means; and algorithm design hunts for problems that are both useful and NISQ-sized — variational algorithms like VQE and QAOA live in exactly that hunt. Progress is measured in results migrating toward the center. (See also: <a href="/lessons/shors-algorithm/">Shor's algorithm</a>, <a href="/lessons/grovers-algorithm/">Grover's algorithm</a>, <a href="/quantum-computing-10-questions/">Quantum computing in 10 questions</a>.)</p>
  
    `,
    keyPoints: [
      "A Venn diagram of practical utility, few qubits, and quantum advantage organizes the search for worthwhile quantum algorithms.",
      "The center — all three at once — is the goal, and it is empty today.",
      "Shor's algorithm has utility and advantage but needs far more qubits than NISQ devices offer.",
      "The 2019 supremacy experiment had advantage on ~53 qubits but solved no practical problem.",
      "Hardware, error correction, and algorithm design are all attempts to pull results toward the center."
    ],
    quiz: [
      { q: "In the three-circles diagram, where does Shor's algorithm sit?",
        options: ["In the center — all three circles", "Practical utility + quantum advantage, but NOT few qubits", "Few qubits + quantum advantage, but NOT practical utility", "Only in the quantum advantage circle"],
        answer: 1,
        why: "Shor's is enormously useful and a true speedup, but needs thousands of logical qubits — far beyond 'few'." },
      { q: "Why does Google's 2019 supremacy experiment miss the center of the diagram?",
        options: ["It used too many qubits to count as 'few'", "It ran on ~53 qubits with a genuine speedup, but the task had no practical use", "It was slower than the best classical supercomputer", "It never actually ran on quantum hardware"],
        answer: 1,
        why: "Random circuit sampling was chosen for classical hardness, not because anyone needs its answer." },
      { q: "What would it take for an algorithm to reach the desired center?",
        options: ["Run on a classical supercomputer instead", "Solve a real problem, beat classical machines, and fit on a modest qubit count", "Use as many qubits as physically possible", "Avoid any quantum advantage"],
        answer: 1,
        why: "The center is the overlap of all three circles: utility, advantage, and few qubits." }
    ],
    references: [
      { cite: "Arute et al., \"Quantum supremacy using a programmable superconducting processor\", Nature 574, 505–510 (2019).", url: "https://www.nature.com/articles/s41586-019-1666-5", usedFor: "the 2019 supremacy experiment — random circuit sampling on ~53 qubits." },
      { cite: "IBM, \"On 'quantum supremacy'\" (2019).", url: "https://www.ibm.com/quantum/blog/on-quantum-supremacy", usedFor: "the classical-cost debate around the supremacy experiment." }
    ]
  },
  "m1a-nisq": {
    simple: raw`

    <p>If qubits are so powerful, why do today's quantum computers have only a few dozen or a few hundred of them — while your laptop has billions of transistors? The short answer: a qubit is a prima donna. It stays quantum only while it is protected from the world, and protecting one qubit is hard; protecting a thousand, each wired up and talking to its neighbors, is enormously harder.</p>
    <p>Three forces fight you. First, <strong>control</strong>: every qubit needs its own control lines, and the wiring and calibration complexity grows with each qubit you add. Second, <strong>noise</strong>: heat, vibration, stray electromagnetic fields — any disturbance leaks information out of the qubit and destroys its superposition. Physicists call this <strong>decoherence</strong>, and it is the central enemy of the field. Third, <strong>cold</strong>: many qubit designs (superconducting circuits, for example) only behave quantum-mechanically near absolute zero, so the whole processor lives inside a dilution refrigerator colder than deep space.</p>
    <p>That is why we chase "only a few qubits" — and why the era we live in has a name: <strong>NISQ</strong>, Noisy Intermediate-Scale Quantum (a term coined by John Preskill in 2018). <em>Noisy</em>: error rates are high and error-correcting codes are not yet in practical use — every operation is a little bit wrong. <em>Intermediate-scale</em>: qubit counts are in the tens to hundreds — far more than a few, far fewer than the millions that fault-tolerant algorithms will need.</p>
    <p>The race is crowded and well funded: Google, IBM, Intel, Microsoft, D-Wave, Rigetti, IonQ and many others are building machines on different qubit technologies, and investment has surged as governments and companies bet on the field. But the number that matters most is not the headline qubit count — it is how many of those qubits are <em>good</em> qubits.</p>
    <div class="note-box">
      <p><strong>A hundred noisy qubits can lose to ten excellent ones.</strong> That is why the field invented better yardsticks than raw count: <strong>quantum volume</strong> folds qubit count and error rates into one number, and <strong>CLOPS</strong> — circuit layer operations per second — measures how fast a machine actually executes circuits. The right question about any quantum computer is never "how many qubits?" but "what useful circuit can it run before the noise takes over?"</p>
    </div>
    <p>(See also: <a href="/lessons/decoherence/">Decoherence</a>, <a href="/quantum-computing-10-questions/">Quantum computing in 10 questions</a>.)</p>
  
    `,
    deeper: raw`

    <p>Quantum volume (QV) tries to answer "how big a <em>successful</em> computation can this machine run?" in a single number. The definition: the machine can reliably run random square circuits up to some width and depth \\(d\\), and the quantum volume is \\[QV = 2^{\\min(N,\\,d(N))}\\] where \\(N\\) is the number of qubits and \\(d(N)\\) is the largest circuit depth the machine achieves with acceptable error. The \\(\\min\\) is the point: width without depth is useless — a thousand qubits that decohere after two layers cannot run anything interesting.</p>
    <p>Depth matters because every gate is a chance to fail. If each two-qubit gate fails with probability \\(p\\), a circuit with many gates succeeds with probability roughly \\((1-p)^{\\text{number of gates}}\\) — exponential decay in the number of operations. Improving the error rate from 1% to 0.1% does not just make circuits slightly better; it multiplies the achievable depth roughly tenfold, and because QV is exponential in depth, the quantum volume can jump by orders of magnitude. This is why a modest hardware improvement can look like a huge leap in QV — and why vendors chase fidelity as hard as qubit count.</p>
    <p>CLOPS — circuit layer operations per second — measures something QV does not: <strong>speed</strong>. A machine might have an impressive quantum volume but take an hour to run one circuit; CLOPS counts how many circuit layers it executes per second, folding in gate times, measurement speed, and the classical overhead of the control stack. It is the quantum analogue of asking not just how powerful a processor is, but how fast it actually runs your program.</p>
    <p>Together the metrics tell the NISQ story honestly: we have machines with over a thousand physical qubits announced, yet quantum volumes that correspond to a few dozen <em>effective</em> qubits — and no error correction in production yet. The NISQ era is the era of making every qubit count: shallow circuits, clever compilation, and error mitigation, until fault tolerance arrives.</p>
  
    `,
    keyPoints: [
      "A qubit stays quantum only while isolated; control complexity, noise (decoherence), and cooling make scaling hard.",
      "NISQ = Noisy Intermediate-Scale Quantum: high error rates with no error correction in use, and qubit counts in the tens to hundreds.",
      "Headline qubit counts mislead — what matters is how many qubits are good qubits.",
      "Quantum volume, QV = 2^min(N, d(N)), combines qubit count with achievable circuit depth; depth is limited by error rates.",
      "CLOPS (circuit layer operations per second) measures how fast a machine actually executes circuits."
    ],
    quiz: [
      { q: "What does 'Noisy' mean in NISQ?",
        options: ["The machines are physically loud", "Error rates are high and error-correcting codes are not yet in practical use", "The qubits vibrate audibly", "The results are published with hype"],
        answer: 1,
        why: "NISQ devices run without practical error correction, so every operation carries a real chance of failure." },
      { q: "In QV = 2^min(N, d(N)), why does the min matter?",
        options: ["It makes the number smaller for marketing", "Width without depth is useless — qubits that decohere after two layers can't run interesting circuits", "It converts qubits to bits", "It measures cooling power"],
        answer: 1,
        why: "A huge qubit count means nothing if noise kills the computation before any depth is achieved." },
      { q: "What does CLOPS measure?",
        options: ["The number of qubits in the machine", "How many circuit layers the machine executes per second — its real speed", "The temperature of the dilution refrigerator", "The cost per qubit"],
        answer: 1,
        why: "CLOPS (circuit layer operations per second) folds gate times, measurement, and control overhead into a speed metric." }
    ],
    references: [
      { cite: "Preskill, \"Quantum computing in the NISQ era and beyond\", Quantum 2, 79 (2018).", url: "https://quantum-journal.org/papers/q-2018-08-06-79/", usedFor: "the NISQ concept and its framing." },
      { cite: "IBM Quantum — quantum volume and CLOPS definitions (public documentation).", url: "https://www.ibm.com/quantum/blog/quantum-volume-and-clops", usedFor: "the quantum volume formula and the CLOPS speed metric." }
    ]
  },
  "m1a-ml-basics": {
    simple: raw`

    <p>Machine learning is prediction from data. You show a computer thousands of examples, and it learns to predict the answer for examples it has never seen. Email spam filters, photo tagging, weather forecasts, product recommendations — all of this is one idea wearing different clothes.</p>
    <p>Mathematically, ML is two things glued together: <strong>function approximation</strong> plus <strong>optimization</strong>. There is some unknown true function — "given this email, spam or not?" — and you pick a flexible <strong>model</strong> (a support vector machine, a neural network) with knobs called <strong>parameters</strong>. Then you turn the knobs until the model's answers match the training data. Each <strong>datapoint</strong> is one example the model learns from.</p>
    <p>The field sorts problems into families. <strong>Classification</strong>: the answer comes from a small fixed menu — is this picture a cat or not, is this email spam or not? <strong>Regression</strong>: the answer is a number that can be anything — tomorrow's temperature, next quarter's sales growth. Both are <strong>supervised learning</strong>: you train on examples that already carry the right answers.</p>
    <p><strong>Clustering</strong>: nobody tells you the categories in advance — you hand the machine a pile of data and ask it to group similar items together, like sorting customers by buying habits without predefined labels. <strong>Recommendation systems</strong>: predict what you will watch or buy next — human taste is effectively limitless, so the "menu" is never fixed. <strong>Dimensionality reduction</strong>: squeeze data with thousands of features down to a few essential ones, keeping what matters and discarding noise — like compressing a photo without losing the face. These are <strong>unsupervised learning</strong>: the machine finds structure in data that carries no labels.</p>
    <p class="myth"><strong>Common myth:</strong> "machine learning" means the computer understands. It doesn't — it fits a flexible function to data and hopes the fit generalizes. Four families, one engine: approximate a function, optimize the fit. Everything in the next lesson builds on this vocabulary.</p>
  
    `,
    deeper: raw`

    <p>"Function approximation plus optimization" deserves unpacking. You choose a model family — say, a neural network — which is really a parameterized function \\(f(x; \\theta)\\), where \\(x\\) is the input and \\(\\theta\\) collects all the knobs. You define a <strong>loss function</strong> \\(L(\\theta)\\) measuring how badly the model does on the training data — for example, the average squared error between predictions and true answers. <strong>Optimization</strong> is the search for the \\(\\theta\\) that minimizes \\(L\\). Training <em>is</em> that search.</p>
    <p>Supervised versus unsupervised is about the labels. In supervised learning each training example is a pair \\((x, y)\\): the input plus the correct answer, and the loss compares prediction to answer. In unsupervised learning you only get the \\(x\\)'s — no answers — so the loss must measure something intrinsic, like how tightly each cluster holds together or how faithfully a compressed representation reconstructs the original. No labels, no answer key: the machine grades its own homework.</p>
    <p>One subtlety worth carrying into the quantum half of the course: ML models are only as good as their assumptions. A model that fits the training data perfectly but fails on new data is <strong>overfitting</strong> — it memorized instead of learning. The whole game is <strong>generalization</strong>: performing well on data the model has never seen. Every quantum speedup claim in machine learning will be judged by this same standard — including the cautionary tale in the next lesson.</p>
    <p>(Coming up: <a href="/quantum-computing-10-questions/">where quantum machine learning fits</a> — and the four flavors of it.)</p>
  
    `,
    keyPoints: [
      "Machine learning is prediction from data — mathematically, function approximation plus optimization.",
      "A model is a parameterized function; parameters are tuned to minimize a loss function on training data.",
      "Classification and regression are supervised learning: the training examples carry the right answers.",
      "Clustering, recommendation, and dimensionality reduction are unsupervised: the machine finds structure without labels.",
      "The real goal is generalization — overfitting means memorizing the training data instead of learning from it."
    ],
    quiz: [
      { q: "What does 'training a model' mean mathematically?",
        options: ["Teaching the computer grammar rules by hand", "Searching for parameters that minimize a loss function on the training data", "Deleting the training data after reading it once", "Making the model as complicated as possible"],
        answer: 1,
        why: "Training is optimization: turn the knobs (parameters) until the model's errors (loss) on the data are as small as possible." },
      { q: "Predicting tomorrow's temperature from past weather is an example of…",
        options: ["Classification", "Clustering", "Regression", "Dimensionality reduction"],
        answer: 2,
        why: "The output is a number that can take (effectively) any value — that is regression, a supervised task." },
      { q: "What makes clustering 'unsupervised'?",
        options: ["No human ever looks at the results", "The training data carries no labels — the machine groups similar items on its own", "It runs without electricity", "It cannot be used for real problems"],
        answer: 1,
        why: "Unsupervised learning works on bare datapoints with no correct answers attached; structure must be discovered, not taught." }
    ]
  },
  "m1a-qml": {
    simple: raw`

    <p>"Quantum machine learning" sounds like one subject, but it is really four — and mixing them up causes most of the confusion in the field. The clean way to sort them is a 2×2 table: the rows are the <strong>data-generating system</strong> (classical C, or quantum Q), the columns are the <strong>data-processing device</strong> (classical C, or quantum Q). That gives four boxes: CC, CQ, QC, QQ.</p>
    <p><strong>CC — quantum-inspired algorithms.</strong> Classical computer, classical data — but the algorithm borrows ideas from quantum computing. The famous story: in 2016, Kerenidis and Prakash proposed a quantum recommendation algorithm proved exponentially faster than known classical methods. In 2018, undergraduate Ewin Tang found a classical algorithm that matched it, using quantum-inspired principles — and in her PhD she "dequantized" several more quantum ML algorithms. The lesson: not every quantum speedup survives contact with a clever classical idea.</p>
    <p><strong>QC — machine learning for quantum.</strong> Classical computer, but now the <em>data</em> comes from a quantum system: using ML to calibrate qubits, fight noise, and assist quantum error correction — even using neural networks to mimic quantum systems we cannot simulate directly. This flavor works today and needs no quantum computer at all.</p>
    <p><strong>CQ — quantum for machine learning.</strong> Classical data, quantum processor. This is the most interesting box for the course — and the most delicate. The poster child is the <strong>HHL algorithm</strong> for solving linear systems: exponentially faster in theory — O(log n) versus classical O(n). The catch is the <strong>input-output problem</strong>: just loading classical data into the quantum computer and reading the answer out already costs O(n), which can erase the speedup. Quantum RAMs would fix this in theory — but they don't exist, and may never.</p>
    <p><strong>QQ — quantum in, quantum out.</strong> Both the data and the processor are quantum: analyzing the output of a particle collider (CERN's LHC), or the output of another quantum computer. Here there is no loading problem — the data is already quantum — and the ML principles carry straight over from the CQ box. Four boxes, one honest summary: QC works now, CC keeps everyone humble, CQ is the great hope with a loading-shaped hole in it, and QQ waits for quantum data to become abundant. (See also: <a href="/lessons/hhl-algorithm/">HHL algorithm</a>.)</p>
  
    `,
    deeper: raw`

    <p>Why did dequantization sting? Because the Kerenidis–Prakash recommendation algorithm was a flagship: an exponential speedup for a genuinely practical problem, built on the same linear-algebra machinery as HHL. Tang's insight was that the speedup's fine print — the assumption that data arrives in a special quantum-friendly format — could be matched classically by an analogous classical data structure (sampling access). Once she showed the classical algorithm inherits the same advantage under comparable assumptions, the "exponential speedup" evaporated into a polynomial one. The reality check: a quantum ML speedup claim must specify its input model, or it is comparing a quantum athlete to a classical athlete with tied shoes.</p>
    <p>The loading bottleneck deserves its full weight, because it is the central caveat of the entire CQ program. HHL solves \\(Ax = b\\) in time \\(O(\\log n)\\) — but only if the vector \\(b\\) is already loaded as a quantum state \\(|b\\rangle\\), and only if you are satisfied with a quantum state \\(|x\\rangle\\) as the answer rather than all \\(n\\) classical numbers. Preparing \\(|b\\rangle\\) from classical data costs \\(O(n)\\) in general; reading out all of \\(x\\) costs \\(O(n)\\) too. So the exponential speedup survives only for problems where the input is cheap to prepare and the output you need is some global property — an expectation value, not the full vector.</p>
    <p>Quantum RAM (QRAM) is the theoretical escape hatch: a device that loads classical data into superposition in \\(O(\\log n)\\) time. But no QRAM exists, and building one requires maintaining coherence across an enormous routing network — arguably as hard as building the quantum computer itself, with error-correction overhead on top. Most researchers treat QRAM as a placeholder for "someday, maybe," not a plan. Until the input problem is solved, CQ algorithms are speedups waiting for a data pipeline.</p>
    <p>That is why QQ is conceptually the cleanest box: when the data-generating system is itself quantum — a collider, a quantum sensor network, a quantum simulation — there is nothing to load. The state arrives as a state. The ML principles (function approximation plus optimization, from the last lesson) carry over unchanged; only the substrate changes. The field's bet is that as quantum devices proliferate, quantum-native data will too — and QQ will inherit the earth. Honest summary for the whole 2×2: the physics is real, the speedups are conditional, and the conditions are the interesting part.</p>
  
    `,
    keyPoints: [
      "Quantum ML splits into four boxes by data source (C/Q) × processing device (C/Q): CC, CQ, QC, QQ.",
      "CC (dequantized algorithms): Ewin Tang's 2018 classical match to the 2016 Kerenidis–Prakash quantum recommender showed some 'quantum speedups' were really about better input assumptions.",
      "QC (ML for quantum): classical ML improving real quantum systems — calibration, error correction — works today.",
      "CQ (quantum for ML): HHL promises O(log n) vs O(n), but the input-output loading problem can erase the speedup; QRAM doesn't exist.",
      "QQ (quantum in, quantum out): no loading problem — the cleanest box, waiting for quantum-native data to become abundant."
    ],
    quiz: [
      { q: "In the 2×2 table, what does 'CQ' mean?",
        options: ["Classical data processed on a classical computer", "Classical data processed on a quantum computer", "Quantum data processed on a classical computer", "Quantum data processed on a quantum computer"],
        answer: 1,
        why: "First letter = the data-generating system (classical), second = the processing device (quantum)." },
      { q: "What was the significance of Ewin Tang's 2018 result?",
        options: ["She built the first quantum computer", "She found a classical algorithm matching the Kerenidis–Prakash quantum recommender, 'dequantizing' its speedup", "She proved quantum computers can never beat classical ones", "She invented quantum RAM"],
        answer: 1,
        why: "Under comparable input assumptions, the exponential speedup evaporated — a reality check for QML claims." },
      { q: "Why is the input-output problem the central caveat of CQ algorithms like HHL?",
        options: ["Quantum computers have no input ports", "Loading classical data in and reading the full answer out already costs O(n), which can erase the O(log n) speedup", "Classical data cannot be represented as numbers", "HHL only works on quantum data"],
        answer: 1,
        why: "The speedup survives only when the input is cheap to prepare and you need a global property of the answer, not the full vector." }
    ],
    references: [
      { cite: "Kerenidis & Prakash, \"Quantum recommendation systems\", arXiv:1603.08675 (2016).", url: "https://arxiv.org/abs/1603.08675", usedFor: "the 2016 quantum recommendation algorithm behind the dequantization story." },
      { cite: "Tang, \"A quantum-inspired classical algorithm for recommendation systems\", STOC 2019 (arXiv:1807.04271).", url: "https://arxiv.org/abs/1807.04271", usedFor: "the 2018 dequantization result and the CC flavor." },
      { cite: "Harrow, Hassidim & Lloyd, \"Quantum algorithm for linear systems of equations\", Phys. Rev. Lett. 103, 150502 (2009).", url: "https://arxiv.org/abs/0811.3171", usedFor: "the HHL algorithm and its O(log n) claim in the CQ flavor." },
      { cite: "Aaronson, \"Read the fine print\", Nature Physics 11, 291–293 (2015).", url: "https://www.nature.com/articles/nphys3272", usedFor: "the caveats around HHL-style speedups, including the input problem." }
    ]
  },
};
