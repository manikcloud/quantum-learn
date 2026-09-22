// Nobel Prizes That Built Quantum — enrichment lessons beyond the syllabus.
// Each entry: simple (human story first), deeper (the science + why it matters
// for quantum computing), keyPoints, quiz (3 questions).
// Prize facts verified against nobelprize.org (2026-09-21).

const raw = String.raw;

export const nobelLessons = {
  "nobel-1900-planck": {
    simple: raw`
      <p>When <strong>Max Planck</strong> was sixteen, he asked the Munich physics professor Philipp von Jolly whether he should devote his life to physics. Jolly's answer is famous: physics was "a highly developed, almost fully matured science" — at most, "in one or another nook there would perhaps be a dust particle or a small bubble to be examined and classified." Planck replied that he only wanted to understand the foundations. He would spend his career demolishing them.</p>
      <p>The nook Planck chose was <strong>black-body radiation</strong>: heat a lump of iron and it glows — red, then orange, then white-hot. In 1859 <strong>Gustav Kirchhoff</strong> had proved something astonishing: the glow depends only on temperature, never on the material. A universal law of heat and light was hiding in that glow, and Planck set out to find it.</p>
      <p>By 1900 the best formula, <strong>Wien's law</strong> (1896), worked beautifully at high frequencies — but new infrared measurements by <strong>Rubens and Kurlbaum</strong> showed it failing at long wavelengths. Then came the Sunday that changed physics. On <strong>7 October 1900</strong>, Rubens visited Planck and described the new far-infrared data that afternoon; that same evening, alone at his desk, Planck found a formula bridging Wien's law and the new measurements. He mailed it to Rubens <strong>on a postcard that night</strong>. Rubens checked it overnight and reported complete agreement the next morning.</p>
      <p>On <strong>19 October 1900</strong> Planck presented the formula to the German Physical Society — with no theory behind it at all. Even decades later he called it "a happily chosen interpolation formula." The theory came seven weeks later. On <strong>14 December 1900</strong> he showed how to <em>derive</em> it — but only by assuming energy is not continuous: the oscillators in the cavity walls could emit and absorb energy only in whole chunks, <strong>quanta</strong>, of size \(E = h\nu\). To count the possibilities he borrowed <strong>Boltzmann's</strong> formula \(S = k \log W\) — the statistical method he had spent years publicly opposing. The irony was not lost on him.</p>
      <p>Planck himself didn't believe it. In 1931 he wrote that the derivation had been <strong>"an act of desperation"</strong> — "I was ready to sacrifice every one of my previous convictions about physical laws... This was purely a formal assumption and I really did not give it much thought." He spent years trying to derive his own formula without the quanta. The data never let him.</p>
      <p>For the discovery of energy quanta, Planck received the <strong>1918 Nobel Prize in Physics</strong> — announced 13 November 1919, presented 1 June 1920, the ceremony delayed by the First World War — "in recognition of the services he rendered to the advancement of Physics by his discovery of energy quanta." His Nobel lecture, delivered the next day, ends with a question that was still open in 1920: once a photon is emitted, does its energy spread out like a Huygens wave, or fly like a Newtonian projectile? Wave or particle — the wound was still bleeding.</p>
      <p class="myth"><strong>Common myth:</strong> "Planck was battling the 'ultraviolet catastrophe.'" The phrase was coined by Paul Ehrenfest in <strong>1911</strong> — Planck never heard it. In 1900 there was no named crisis, only precision infrared measurements the old formulas couldn't fit. The "crisis" story was written afterwards.</p>
    `,
    deeper: raw`
      <p>Planck's radiation law gives the energy density per unit frequency inside a cavity at temperature \(T\):</p>
      <p>\[u(\nu, T) = \frac{8\pi h\nu^3}{c^3}\,\frac{1}{e^{h\nu/kT} - 1}\]</p>
      <p>How he got there is the real story. Kirchhoff (1859/60) had shown the spectrum is a <em>universal</em> function of \(\nu\) and \(T\) alone. Wien's law, \(u \propto \nu^3 e^{-a\nu/T}\), matched the short-wavelength data but failed in the infrared, where Rubens and Kurlbaum found the energy growing linearly with \(T\). Classical equipartition — Rayleigh's June 1900 result, corrected by Jeans in 1905 — gave \(u \propto \nu^2 T\): every mode gets \(kT\) of energy, and since there are infinitely many high-frequency modes, the total diverges.</p>
      <p>Planck's 7 October interpolation worked through the entropy. For a resonator of energy \(U\), he considered \(R\), the reciprocal of the second entropy derivative \(\partial^2 S/\partial U^2\). In the Wien regime \(R\) was proportional to \(U\); in the new infrared regime it was proportional to \(U^2\). His move, in his Nobel lecture's words: "there was no better alternative but to make, for the general case, the quantity \(R\) equal to the sum of two terms." Out came the formula — fitted first, explained later.</p>
      <p>The 14 December derivation is the birth certificate of the quantum. Planck counted the ways to distribute \(P\) energy elements of size \(\varepsilon\) among \(N\) resonators:</p>
      <p>\[W = \frac{(N+P-1)!}{P!\,(N-1)!},\qquad \varepsilon = h\nu,\]</p>
      <p>and applied Boltzmann's \(S = k \log W\). Maximizing the entropy at fixed total energy yields Planck's law. Note what \(h\) was in 1900: a fitted constant, \(6.55\times 10^{-27}\) erg·s in Planck's Nobel lecture. Today \(h = 6.62607015\times 10^{-34}\) J·s <em>exactly</em> — since the 2019 redefinition of the SI, the kilogram itself is defined by fixing Planck's constant. The number he fit to a glow curve now anchors the world's unit of mass.</p>
      <p>Two honest footnotes. First, the <strong>Boltzmann irony</strong>: Planck had spent the 1890s attacking Boltzmann's statistical reading of entropy — his student Zermelo joined in, and Boltzmann demolished Planck's alternative route. The quantum forced Planck to adopt \(S = k\log W\) anyway, and he even named \(k\) "Boltzmann's constant," noting that "to my knowledge, Boltzmann himself never introduced it." Second, Planck quantized only the <em>material oscillators</em>; he "was adamantly opposed to the concept of light quanta" and fought Einstein's photons for years. The reluctant revolutionary drew the line at his own revolution's next step.</p>
      <p>Independent confirmation arrived from an unexpected quarter: Rutherford and Geiger's direct counting of alpha particles gave the elementary charge as \(4.65\times 10^{-10}\) esu, against \(4.69\times 10^{-10}\) esu derived from Planck's radiation constants — "decisive confirmation," as his Nobel lecture calls it. And the establishment saw the arc fast: Ekstrand's 1920 presentation speech already lists specific heats, Stokes' law, the photoelectric effect, and Bohr–Sommerfeld–Epstein spectroscopy as triumphs of Planck's theory — twenty years after a postcard.</p>
      <p><strong>Why this prize matters for quantum computing:</strong> the qubit <em>is</em> a quantized energy system. Every qubit — an atom, a superconducting circuit — has discrete energy levels, exactly as Planck discovered. When we write \(|0\rangle\) or \(|1\rangle\), we mean the system sits in one of two quantized energy states, and quantum gates drive transitions between them. Without Planck's quanta, there is no two-level system, and no qubit.</p>
    `,
    keyPoints: [
      "On 7 October 1900 Planck interpolated between Wien's law and Rubens's infrared data in a single evening and mailed the formula on a postcard; he presented it on 19 October with no theory at all.",
      "On 14 December 1900 he derived it by counting energy elements ε = hν with Boltzmann's S = k log W — the statistical method he had spent years opposing.",
      "He called the quantum an act of desperation and tried for years to remove it; the data never allowed it. He received the 1918 Nobel Prize (announced 13 November 1919, presented 1 June 1920) for the discovery of energy quanta.",
      "The phrase ultraviolet catastrophe was coined in 1911 — Planck was fitting precision measurements, not fighting a named crisis.",
      "h is now fixed at exactly 6.62607015×10⁻³⁴ J·s and defines the kilogram (2019); quantized energy levels are the physical basis of the qubit.",
    ],
    quiz: [
      {
        q: "What did Planck do on the evening of 7 October 1900?",
        options: [
          "Derived the quantum from Boltzmann's entropy formula",
          "Interpolated a formula between Wien's law and Rubens's infrared data and mailed it on a postcard",
          "Presented the quantum hypothesis to the German Physical Society",
          "Measured Planck's constant in the laboratory",
        ],
        answer: 1,
        why: "The formula came first as a happily chosen interpolation; the theoretical derivation followed seven weeks later, on 14 December.",
      },
      {
        q: "Why did Planck call his quantum hypothesis an act of desperation?",
        options: [
          "He had fabricated the experimental data",
          "He had to adopt Boltzmann's statistical methods, which he had spent years opposing, and sacrifice his convictions about physical laws",
          "The Nobel committee had rejected his first nomination",
          "He believed the quantum violated the conservation of energy",
        ],
        answer: 1,
        why: "His 1931 letter to R.W. Wood says he was ready to sacrifice every one of my previous convictions about physical laws — the quantum was a formal assumption he did not believe.",
      },
      {
        q: "Which statement about the ultraviolet catastrophe is correct?",
        options: [
          "Planck coined the term in his 1900 paper",
          "The term was coined by Ehrenfest in 1911; Planck was responding to precision infrared measurements, not a named crisis",
          "It refers to the failure of Wien's law at low frequencies",
          "It was the official motivation of Planck's Nobel Prize",
        ],
        answer: 1,
        why: "The crisis narrative is retrospective — in 1900 blackbody theory looked like normal science with one stubborn dataset.",
      },
    ],
  },
  "nobel-1921-einstein": {
    simple: raw`
      <p>In May 1905, a 26-year-old patent clerk in Bern wrote to his friend Conrad Habicht promising four papers. "The first," he wrote, "deals with radiation and the energy properties of light and is <strong>very revolutionary</strong>." He did not mean relativity. He meant the paper that would win him the Nobel Prize.</p>
      <p>The puzzle was the <strong>photoelectric effect</strong>: shine light on metal and electrons pop out. <strong>Philipp Lenard</strong> — Hertz's own student — had nailed down the strange facts by 1902 with a carbon arc and a retarding voltage. Double the light's intensity and you double the <em>number</em> of electrons — but their energy doesn't change at all. What sets the electrons' energy is the light's <em>colour</em>: above a threshold frequency they fly out fast; below it, nothing comes out, however blinding the light. Classical wave theory was helpless: bigger waves should mean more energetic electrons, and dim light should need time to "pump up" an electron before it escapes. Instead the emission was instantaneous.</p>
      <p>Einstein's paper — "On a heuristic point of view concerning the production and transformation of light," received 18 March 1905 — appealed to no new experiments. There were none demanding it. His argument was thermodynamic: in the Wien regime, radiation's entropy changes exactly the way an ideal gas's entropy changes under compression. Radiation, he concluded, "behaves thermodynamically as if it consisted of mutually independent energy quanta" — each of energy \(E = h\nu\), localized in space, moving without dividing, absorbed or emitted only as a whole. One photon strikes one electron and hands over everything. A dim blue beam works; a blazing red beam never can.</p>
      <p>He applied the idea to three phenomena in the same paper — Stokes' rule of photoluminescence, the photoelectric effect, and the ionization of gases — and wrote down the law: \(K_{\max} = h\nu - \phi\), where \(\phi\) is the work function, the escape cost. <strong>Robert Millikan</strong> spent years trying to <em>disprove</em> it, building what he called "a machine shop in vacuo" to scrape metal surfaces atomically clean. By 1916 he had confirmed the equation exactly — measuring \(h\) to within half a percent of Planck's value — and still called the photon "bold, not to say reckless," flying "in the face of thoroughly established facts of interference."</p>
      <p>Then came the politics. Einstein was nominated for the prize nearly every year from 1910 — first by Wilhelm Ostwald, the same Ostwald who had rejected his 1901 job application. But the committee's relativity referee, the ophthalmologist Allvar Gullstrand, judged relativity's effects "below the limits of experimental error," and chairman Arrhenius blocked a second quantum prize so soon after Planck's 1918 award. The <strong>1921 prize was simply not awarded</strong> — reserved under the statutes. In 1922 the deadlock broke: Planck proposed giving Einstein the overdue 1921 prize (and Bohr the 1922 one), and Uppsala's Carl Oseen supplied the compromise citation — the photoelectric law.</p>
      <p>So Einstein received the <strong>1921 Nobel Prize in Physics</strong> — announced 9 November 1922 — "for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect." He wasn't there: he was en route to Japan. In Stockholm the German ambassador accepted the prize on behalf of "a German" — Einstein travelled on a Swiss passport — while the Swiss ambassador merely watched; months later the medal was formally handed to Einstein in Berlin, at his request, via the Swiss embassy. The prize money never touched his hands either: his 1919 divorce settlement had promised it all to his first wife Mileva Marič, who bought a house in Zurich with it.</p>
      <p>Acceptance of the photon took decades more. Planck himself apologized for Einstein's light quanta when nominating him to the Prussian Academy in 1913; Bohr's own 1922 Nobel address rejected them; only Compton's 1923 X-ray scattering experiments — light bouncing off electrons like billiard balls — convinced the holdouts, with Bohr surrendering around mid-1925. The particle got its name, <strong>photon</strong>, from Gilbert Lewis in 1926. And in a final irony, Einstein's official Nobel lecture — delivered at Gothenburg on 11 July 1923 before two thousand people including the King of Sweden — was about <em>relativity</em>, the work the prize had pointedly not honoured. The Nobel Foundation's own footnote disowns the mismatch.</p>
      <p class="myth"><strong>Common myth:</strong> "Einstein won the Nobel for relativity." He didn't — not special, not general, not \(E = mc^2\). The Academy "did not accept the quantization of light and would not recognize the theory of relativity" — so it honoured the one quantum paper nobody could argue with. His Nobel was a quantum prize.</p>
    `,
    deeper: raw`
      <p>The 1905 paper's argument deserves a close look, because it shows Einstein's style: no new experiment, just thermodynamics pushed until it breaks. He grants the wave theory everything for <em>time-averaged</em> optical phenomena — interference, diffraction — which it describes "splendidly." But emission and transformation of light are <em>momentary</em> values, and there the wave picture is silent.</p>
      <p>He computes how the entropy of radiation (in the Wien-law regime) changes with volume, and finds it changes exactly as the entropy of an ideal gas changes under compression. Using Boltzmann's \(S = (R/N)\ln W\), he concludes that monochromatic radiation of low density "behaves thermodynamically as if it consisted of mutually independent energy quanta of magnitude \(R\beta\nu/N\)" — and \(R\beta/N\) is what we now call \(h\). The paper's most famous passage states that light energy "consists of a finite number of energy quanta which are localized at points in space, which move without dividing, and which can only be produced and absorbed as complete units." Einstein called the viewpoint <strong>heuristic</strong> deliberately: a way of thinking justified only by where it leads.</p>
      <p>Where it led, first, was the photoelectric law. If each quantum carries \(h\nu\) and escaping the metal costs the work function \(\phi\), the fastest electrons emerge with</p>
      <p>\[K_{\max} = h\nu - \phi,\]</p>
      <p>so the stopping potential obeys \(eV_{\text{stop}} = h\nu - \phi\). Three predictions no wave theory could make: a <strong>threshold frequency</strong> \(\nu_0 = \phi/h\) below which nothing is emitted at any intensity; electron energy linear in frequency; and a \(V_{\text{stop}}\)-versus-\(\nu\) plot that is a straight line whose slope, \(h/e\), is the same for every metal. Arrhenius walked the Academy through exactly this logic in the 1922 presentation speech.</p>
      <p>Millikan's 1916 confirmation is one of the great reluctant verifications in science. His verdict, printed alongside the confirming data: the equation "appears in every case to predict exactly the observed results," yet "the semi-corpuscular theory by which Einstein arrived at his equation seems at present wholly untenable." Pais later called the equation "the second coming of Planck's constant." Millikan received the 1923 Nobel Prize partly for this work — the man who proved Einstein right while disbelieving him.</p>
      <p>The photon's road after 1905 is a lesson in how physics actually changes its mind. Planck apologized for light quanta in his 1913 nomination of Einstein to the Prussian Academy ("he may have gone overboard in his speculations"). Bohr's 1922 Nobel address still rejected them. Compton's 1923 scattering of X-rays off electrons — light bouncing like billiard balls — finally turned the community; Bohr, who had been willing to sacrifice energy conservation (the BKS theory) rather than accept the photon, gave in around mid-1925. Gilbert Lewis named the particle the <strong>photon</strong> in 1926.</p>
      <p><strong>Why this prize matters for quantum computing:</strong> photons are one of the leading qubit platforms. <strong>Photonic quantum computing</strong> encodes qubits in the polarization or path of single photons, and <strong>quantum key distribution</strong> (the BB84 protocol in your syllabus) literally sends single polarized photons — Einstein's light quanta — between sender and receiver. Every single-photon source and detector in a quantum lab is applied photoelectric physics: \(K_{\max} = h\nu - \phi\) is the equation behind the hardware.</p>
    `,
    keyPoints: [
      "Einstein's 1905 heuristic paper argued from entropy — no new data — that light consists of localized quanta of energy hν; he himself called it very revolutionary.",
      "The photoelectric law K_max = hν − φ predicts a threshold frequency, instantaneous emission, and a universal stopping-potential slope h/e — confirmed by Millikan (1916), who disbelieved the photon even as he verified it.",
      "The 1921 prize was reserved, not awarded: the Academy judged relativity unconfirmed and blocked a second quantum prize so soon after Planck; Oseen's photoelectric citation broke the 1922 deadlock.",
      "Announced 9 November 1922; Einstein was in Japan, a German ambassador accepted for a German travelling on a Swiss passport, and the entire prize money went to Mileva Marič under the 1919 divorce settlement.",
      "Photons are a leading qubit platform: photonic quantum computing and BB84 quantum key distribution run on single photons.",
    ],
    quiz: [
      {
        q: "What was genuinely new about Einstein's 1905 argument for light quanta?",
        options: [
          "It was based on new photoelectric measurements",
          "It used no new experiments — an entropy analogy between radiation and an ideal gas showed light behaves as localized quanta",
          "It derived the photon directly from Maxwell's equations",
          "It was suggested to him by Planck in a letter",
        ],
        answer: 1,
        why: "There were no data in 1905 that required light to be particulate — the thermodynamics did the work, which is why Einstein called the paper heuristic.",
      },
      {
        q: "What did Millikan conclude after his 1912–1916 experiments?",
        options: [
          "Einstein's equation was wrong",
          "The equation predicted the results exactly, though he still called the photon hypothesis wholly untenable",
          "The work function does not exist",
          "Light has no particle properties at all",
        ],
        answer: 1,
        why: "Millikan confirmed K_max = hν − φ and measured h to within 0.5% — while calling the light quantum bold, not to say reckless. He won the 1923 Nobel partly for this work.",
      },
      {
        q: "Why was the 1921 Nobel Prize reserved rather than awarded on time?",
        options: [
          "No physicists were nominated that year",
          "The committee deadlocked: relativity was judged unconfirmed and a second quantum prize so soon after Planck's was blocked",
          "Einstein declined the prize",
          "The prize money had run out during the war",
        ],
        answer: 1,
        why: "Gullstrand's report called relativity's effects unmeasurable and Arrhenius blocked the quantum route; Oseen's 1922 photoelectric nomination broke the deadlock.",
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
  "nobel-2025-clarke-devoret-martinis": {
    simple: raw`
      <p>On <strong>7 October 2025</strong>, the Royal Swedish Academy of Sciences announced a Nobel Prize this course had been waiting for. <strong>John Clarke, Michel Devoret and John Martinis</strong> won the Physics prize <em>"for the discovery of macroscopic quantum mechanical tunnelling and energy quantisation in an electric circuit."</em> In plain words: they proved that billions of electrons in a hand-held electric circuit can behave as a single quantum particle — and every superconducting qubit on Earth descends from that discovery.</p>
      <p>The story starts in <strong>1984, in John Clarke's laboratory at UC Berkeley</strong>. The team was small: Clarke himself, the professor and SQUID pioneer; <strong>Michel Devoret</strong>, a young postdoc visiting from Saclay in France; and <strong>John Martinis</strong>, Clarke's own PhD student. The orthodoxy of the day said quantum mechanics was for atoms and photons — a circuit on your workbench was classical, full stop. They set out to prove the orthodoxy wrong.</p>
      <p>Their device was a <strong>Josephson junction</strong> — two superconductors separated by an insulating layer so thin that electron pairs can tunnel straight through it — wired into a circuit and cooled to about <strong>0.01 kelvin</strong>, colder than deep space. They demonstrated two things. First, the circuit could escape from its zero-voltage state by <strong>quantum tunnelling</strong> — leaking through an energy barrier that no classical physics could cross. Second, the circuit's energy levels were <strong>quantized</strong>: discrete steps, like an atom's, not a smooth continuum. Their masterstroke was a 1984 calibration trick called <strong>resonant activation</strong> — worked out with <strong>Daniel Esteve</strong>, a second visitor from Saclay in France: they used microwaves to tickle the circuit between its energy levels, proving the levels were real — with data so clean it matched Caldeira–Leggett tunnelling theory with <em>no fitted parameters at all</em>. To kill thermal noise, they built filters that damped microwave noise between room temperature and the sample by <strong>twenty orders of magnitude</strong>.</p>
      <p>The paper trail is unusually clean. <strong>1984</strong> — Devoret, Martinis, Esteve &amp; Clarke, <em>Physical Review Letters</em> 53, 1260: the resonant-activation calibration. <strong>1985</strong> — Martinis, Devoret &amp; Clarke, <em>PRL</em> 55, 1543: the first quantized energy levels of a macroscopic variable, published on <strong>7 October 1985</strong>. <strong>1985</strong> — Devoret, Martinis &amp; Clarke, <em>PRL</em> 55, 1908: the tunnelling rates matched theory with every parameter measured in place. <strong>1988</strong> — Clarke and colleagues' synthesis in <em>Science</em> 239, 992. All of it done in Clarke's group at UC Berkeley and Lawrence Berkeley Lab — Martinis as the PhD student, Devoret as the postdoc on leave from Saclay. The Nobel was announced on <strong>7 October 2025</strong>: exactly forty years to the day after the key paper. Nobody plans that; the committee doesn't work that way. It is just how the arithmetic of history landed.</p>
      <p><strong>Why this is the quantum computing Nobel:</strong> the trio had built the first <em>engineerable artificial atom</em> — a circuit you can design on paper that behaves like an atom. The direct line runs from Berkeley 1985 to the Cooper-pair box (1997), the <strong>first superconducting qubit</strong> (1999, coherence about 10 nanoseconds — Nakamura, Pashkin &amp; Tsai at NEC), flux qubits holding superpositions of clockwise and anticlockwise persistent currents (2000), the phase qubit and quantronium (2002), circuit QED (2004), the <strong>transmon</strong> (2007, Devoret a co-author — the chip inside Google's and IBM's processors today), and fluxonium pushing coherence toward milliseconds. The human line is just as direct: Martinis joined <strong>Google in 2014 and led the 2019 quantum supremacy experiment</strong> — 53 transmon qubits doing in about 200 seconds what was estimated at 10,000 years classically — then left in April 2020 and co-founded the superconducting-quantum startup <strong>Qolab</strong> as CTO in 2022. Devoret is now Chief Scientist for Quantum Hardware at Google Quantum AI, and Google's <strong>Willow</strong> chip (2024/25) has since shown quantum error correction below threshold. Along the way the trio shared the Fritz London Memorial Prize (2014) — the classic pre-Nobel signal.</p>
      <p>The prize itself: announced 7 October 2025 in Stockholm — the discovery presented by Nobel Committee chair <strong>Olle Eriksson</strong> — and presented <strong>10 December 2025</strong> at the Stockholm Concert Hall by King Carl XVI Gustaf, with the physics presentation speech by Professor Göran Johansson and the banquet speech given by <strong>Michel Devoret</strong> himself. The money: <strong>11 million SEK, one third each</strong> — about 3.67 million SEK apiece. The laureates: <strong>John Clarke</strong> (born 1942, Cambridge, UK; PhD 1968; the SQUID pioneer; emeritus at Berkeley and Lawrence Berkeley Lab) — 83 at the announcement; <strong>Michel Devoret</strong> (born 1953, Paris; PhD 1982, Paris-Saclay; Yale, UC Santa Barbara, Google Quantum AI) — 72; <strong>John Martinis</strong> (born 1958; PhD 1987 at Berkeley under Clarke; UC Santa Barbara) — 67, also a John Stewart Bell Prize winner (2021) and one of <em>Nature's 10</em> (2019). Clarke's reaction: <em>"To put it mildly, it was the surprise of my life… it never occurred to me in any way that this might be the basis of a Nobel Prize."</em> The prize took Berkeley Lab's count of associated Nobel laureates to <strong>17</strong>. And the timing: the <strong>centenary of quantum mechanics</strong> (Heisenberg, 1925) and the UN's International Year of Quantum Science and Technology. One honest footnote — the Nobel committee never said the quantum year influenced the choice; that timing link is commentators' inference, not a committee statement.</p>
      <p class="myth"><strong>Common myth:</strong> "They won for inventing the qubit." They didn't — the first superconducting qubit came in 1999, fourteen years after their experiment. They discovered the <em>quantum behavior of electric circuits</em> that made qubits possible. The Nobel rewards the discovery, not the engineering that followed.</p>
    `,
    deeper: raw`
      <p>A <strong>Josephson junction</strong> is two superconductors separated by a thin insulating barrier. Inside a superconductor, electrons bind into <strong>Cooper pairs</strong> that share a single macroscopic quantum phase — billions of pairs described by one wavefunction. Pairs can tunnel through the barrier, and the supercurrent depends on the phase difference \(\delta\) across it: \(I = I_c \sin \delta\). That phase is the macroscopic quantum variable Clarke, Devoret and Martinis quantized.</p>
      <p>Bias the junction with a current \(I\) and the phase lives in a <strong>washboard potential</strong>:</p>
      <p>\[U(\delta) = -E_J \cos \delta - \frac{\hbar I}{2e}\,\delta, \qquad E_J = \frac{\hbar I_c}{2e}.\]</p>
      <p>Tilt the washboard with the bias current and the phase sits in one well, oscillating at the plasma frequency \(\omega_p\). Classically it can only escape over the barrier by thermal activation — a rate that freezes out exponentially as temperature falls. Quantum-mechanically it can also <strong>tunnel through</strong> the barrier, at a rate (Caldeira–Leggett) roughly \(\Gamma \propto \exp(-\text{const} \times \Delta U / \hbar \omega_p)\), nearly independent of temperature. The smoking gun of 1984–85: the measured escape rate <em>stopped falling</em> as the circuit was cooled toward 0.01 K — thermal activation would have kept dropping — and resonant microwaves enhanced the escape exactly at the predicted level spacings, proving the well's energy levels were discrete.</p>
      <p>From junction to qubit, one property matters above all: <strong>anharmonicity</strong>. The cosine potential is not a parabola, so its levels are <em>not</em> equally spaced — which means you can address two of them, \(|0\rangle\) and \(|1\rangle\), without accidentally exciting the rest. That is the whole trick of the superconducting qubit. The family tree: the <strong>Cooper-pair box</strong> (charge qubit, 1997) works at \(E_J/E_C \sim 1\); the <strong>transmon</strong> (2007) pushes \(E_J/E_C \gg 1\), flattening the energy bands so the qubit barely notices charge noise — the breakthrough that made processors practical; <strong>flux qubits</strong> (2000) hold superpositions of clockwise and anticlockwise persistent currents in SQUID loops; the <strong>phase qubit</strong> (2002) is the direct descendant of the 1985 current-biased experiment; <strong>fluxonium</strong> (2009) adds a large inductance and reaches millisecond coherence.</p>
      <p><strong>Circuit QED</strong> (2004) completed the picture: couple the artificial atom to a microwave resonator, and you can control it and read it out with microwave pulses — the architecture inside every modern superconducting processor, from lab chips to Google's Sycamore and IBM's Eagle/Heron lines.</p>
      <p>The coherence arc, in one line: ~10 ns (1999) → microseconds (2002) → 100+ µs (modern transmons) → milliseconds (fluxonium). Forty years of engineering, standing on one discovery: <em>a circuit can be a quantum object</em>.</p>
      <p><strong>Why this prize matters for quantum computing:</strong> the qubit <em>is</em> a quantized two-level system, and the 2025 prize is the discovery that such a system can be engineered in an electric circuit. Every time this course writes \(|0\rangle\) and \(|1\rangle\) for a superconducting qubit, it is using energy levels of the kind Clarke, Devoret and Martinis first resolved in 1985.</p>
    `,
    keyPoints: [
      "Announced 7 October 2025 — exactly 40 years after the 7 October 1985 PRL paper (Martinis, Devoret & Clarke, PRL 55, 1543) — with the citation \"for the discovery of macroscopic quantum mechanical tunnelling and energy quantisation in an electric circuit\"; 11M SEK split three equal ways; presented 10 December 2025 in Stockholm (presentation speech by Göran Johansson, banquet speech by Devoret).",
      "The paper trail: PRL 53, 1260 (1984, resonant-activation calibration with Daniel Esteve) → PRL 55, 1543 (1985, energy-level quantization) → PRL 55, 1908 (1985, tunnelling rates vs theory, no fitted parameters) → Science 239, 992 (1988 synthesis). Filters damped thermal microwave noise by twenty orders of magnitude.",
      "The laureates: John Clarke (b. 1942, Cambridge UK; SQUID pioneer; Berkeley/LBL emeritus) — 83; Michel Devoret (b. 1953, Paris; Yale/UCSB; Chief Scientist for Quantum Hardware at Google Quantum AI) — 72; John Martinis (b. 1958; UCSB; Google 2014–2020; Qolab co-founder/CTO 2022; John Stewart Bell Prize 2021) — 67.",
      "Berkeley 1984–85: a current-biased Josephson junction at ~0.01 K showed macroscopic quantum tunnelling and quantized energy levels — billions of electrons behaving as one quantum particle.",
      "The work created the engineerable artificial atom: 1999 first superconducting qubit (~10 ns) → 2000 flux qubits → 2007 transmon, the chip inside Google/IBM processors (Devoret co-author) → fluxonium toward millisecond coherence; Google's Willow (2024/25) showed error correction below threshold.",
      "Martinis led Google's 2019 quantum supremacy demo (53 transmons, ~200 s vs ~10,000 years); the trio shared the Fritz London Memorial Prize (2014) as the pre-Nobel signal; the prize took Berkeley Lab's associated-Nobel count to 17.",
      "The timing hit the quantum centenary (1925–2025) and the UN International Year of Quantum — but the committee never cited the year as a reason; the classic Nobel delay lasted until the technological payoff was undeniable.",
    ],
    quiz: [
      {
        q: "What did Clarke, Devoret and Martinis demonstrate in 1984–85?",
        options: [
          "The first working quantum computer",
          "That a Josephson-junction circuit cooled to ~0.01 K shows macroscopic quantum tunnelling and quantized energy levels",
          "Quantum teleportation of photons over 144 kilometres",
          "An algorithm for factoring large numbers",
        ],
        answer: 1,
        why: "They showed billions of electrons in a circuit behaving as one quantum particle — the discovery, not a device. The first superconducting qubit came fourteen years later, in 1999.",
      },
      {
        q: "Why was the 2007 transmon such a breakthrough?",
        options: [
          "It was the first circuit to show quantum tunnelling",
          "It pushed E_J/E_C >> 1, flattening energy bands so the qubit is nearly immune to charge noise — making processors practical",
          "It used photons instead of electric circuits",
          "It proved entanglement over macroscopic distances",
        ],
        answer: 1,
        why: "Devoret co-authored the transmon paper; its insensitivity to charge noise is why transmons power Google's and IBM's processors today.",
      },
      {
        q: "What made the 1984–85 result convincing to skeptics?",
        options: [
          "The experiment was repeated a thousand times",
          "Resonant-activation spectroscopy provided in-situ calibration, and the data matched Caldeira–Leggett theory with no fitted parameters",
          "A Nobel laureate publicly endorsed it",
          "It was performed at room temperature",
        ],
        answer: 1,
        why: "The 1984 resonant-activation trick let them measure the quantized levels directly, and the tunnelling rates agreed with theory with zero free parameters — the gold standard of experimental proof.",
      },
    ],
  },
};