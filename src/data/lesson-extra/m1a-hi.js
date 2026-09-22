// Module 1a companion lessons — Hindi (Devanagari). Rule: explanations in Hindi,
// technical terms stay in English (Latin script). Shape mirrors lesson-content-hi.js.

const raw = String.raw;

export const m1aLessonsHi = {
  "m1a-course-map": {
    simple: raw`

    <p>यह course 3 pillars पर बना है। पहला है <strong>quantum computing</strong> — quantum physics के rules पर बनी computing, जो कल की heavy computation का चेहरा हो सकती है। दूसरा है <strong>machine learning</strong> — वह technology जो आज की दुनिया का बड़ा हिस्सा चला रही है: आपके feeds भरने वाले recommendations, cameras और cars में vision systems, लिखने और translate करने वाले language models। तीसरा pillar इन दोनों के intersection पर है: <strong>quantum machine learning</strong> — जब ये 2 दुनियाएँ मिलती हैं तो क्या होता है।</p>
    <p>course एक सोचे-समझे order में चलता है। शुरुआत quantum computing से होती है: <strong>qubit</strong> क्या है, उसकी अजीब properties का असली मतलब क्या है, और quantum algorithms <em>क्यों</em> जीत सकते हैं — तेज़ clock से नहीं, बल्कि fundamentally अलग तरीके से compute करके। रास्ते में आप landmark algorithms से मिलते हैं — जिन्होंने साबित किया कि quantum machines वह कर सकती हैं जो classical machines practically नहीं कर सकतीं — और फिर <strong>आज के hardware</strong> का survey: असली quantum computers अभी क्या कर सकते हैं, और उनकी limits क्या हैं।</p>
    <p>उसके बाद ही machine learning आता है, ground up सिखाया गया: machines data से कैसे सीखती हैं, models train और test कैसे होते हैं, और आगे के intersection के लिए कौन-से ideas असल में मायने रखते हैं। ML कोई detour नहीं है — यह final destination का आधा हिस्सा है, और quantum के साथ merge होने से पहले इसे अपने पैरों पर खड़ा होना चाहिए।</p>
    <div class="note-box">
      <p><strong>यही order क्यों?</strong> जब तक आप दोनों pieces को अलग-अलग नहीं समझते, तब तक यह judge नहीं कर सकते कि machine learning में quantum computing क्या add करता है। पहले foundations, आखिर में intersection — यही पूरा map है। quantum side का short version चाहिए? <a href="/hi/quantum-computing-10-questions/">10 सवालों में quantum computing</a> से शुरू कीजिए।</p>
    </div>
    <p>आखिर में course <strong>quantum machine learning</strong> पर converge करता है: learning algorithms के quantum versions, quantum data, और ईमानदार open question — कि quantum side असल में कहाँ (अगर कहीं) genuine advantage देता है। यही destination है। इससे पहले सब कुछ रास्ता है।</p>
  
    `,
    deeper: raw`

    <p>3-pillar design इसलिए है क्योंकि foundations के बिना intersection बेमानी है। "यह quantum model बेहतर सीखता है" जैसे दावे को तभी evaluate किया जा सकता है जब आप जानते हों कि <em>classical</em> model क्या करता है, <em>quantum</em> circuit क्या करता है, और comparison कहाँ fair है। जो students intersection की तरफ दौड़ते हैं, वे genuine speedup और poorly tuned classical baseline में फर्क नहीं कर पाते — और इस field के history में ऐसे confusion के कई मशहूर cases हैं।</p>
    <p>"machine learning आज की दुनिया चलाता है" का concrete मतलब क्या है? मतलब वे systems जिनसे आप रोज़ interact करते हैं: ranking और recommendation engines जो तय करते हैं कि आप क्या देखेंगे, computer-vision models जो photos tag करते हैं और vehicles guide करते हैं, speech और language models जो transcribe और translate करते हैं, और banks और supply chains के पीछे fraud-detection और forecasting systems। ये research demos नहीं हैं — ये deployed infrastructure हैं, classical hardware पर massive datasets से trained। यही scale है जिसका सामना किसी भी quantum proposal को आखिरकार करना होगा।</p>
    <p>वह asymmetry देखिए जो course चुपचाप सिखा रहा है: machine learning <em>scale पर proven</em> है, जबकि quantum computing <em>promising लेकिन young</em> है। quantum machine learning को दोनों का बोझ उठाना पड़ता है — उसे ML की engineering discipline और quantum computing की physical honesty, दोनों से सीखना होगा। roadmap (QC → ML → QML) सिर्फ teaching convenience नहीं है; यह उस intellectual debt को mirror करता है जो intersection अपने दोनों parent fields का देनदार है।</p>
  
    `,
    keyPoints: [
      "course 3 pillars पर टिका है: quantum computing, machine learning, और इनका intersection — quantum machine learning।",
      "पहले quantum computing सिखाई जाती है: qubits, उनकी properties, quantum algorithms क्यों जीतते हैं, landmark algorithms, और आज का hardware।",
      "फिर machine learning एक standalone subject के रूप में आता है — quantum ideas के साथ merge होने से पहले इसे अपने आप में खड़ा होना चाहिए।",
      "intersection destination है: classical algorithms के against ईमानदारी से evaluate किए गए quantum learning algorithms।",
      "ML planetary scale पर proven है; quantum computing promising लेकिन young है — QML को दोनों realities का सम्मान करना होगा।"
    ],
    quiz: [
      { q: "course के 3 pillars कौन-से हैं, उसी order में जिसमें वे सिखाए जाते हैं?",
        options: ["पहले quantum machine learning, फिर quantum computing, फिर machine learning", "पहले quantum computing, फिर machine learning, फिर quantum machine learning", "पहले machine learning, फिर quantum machine learning, फिर quantum computing", "पहले quantum hardware, फिर quantum software, फिर quantum machine learning"],
        answer: 1,
        why: "course पहले QC सिखाता है, फिर ML एक standalone subject के रूप में, और आखिर में दोनों के intersection — QML — पर converge करता है।" },
      { q: "course में machine learning, quantum machine learning से पहले क्यों आता है?",
        options: ["क्योंकि ML software के बिना quantum computers चल नहीं सकते", "क्योंकि QML का quantum हिस्सा पहले सिखाने के लिए बहुत कठिन है", "क्योंकि classical learning को अलग से समझे बिना यह judge नहीं किया जा सकता कि quantum क्या add करता है", "क्योंकि ML का invention quantum computing से पहले हुआ था"],
        answer: 2,
        why: "fair comparison ही point है: classical ML को अलग से समझे बिना आप genuine quantum advantage और कमज़ोर classical baseline में फर्क नहीं कर सकते।" },
      { q: "दोनों parent fields के बारे में course की framing को कौन-सा statement सबसे अच्छा capture करता है?",
        options: ["दोनों equally mature technologies हैं", "machine learning scale पर proven है; quantum computing promising लेकिन young है", "quantum computing industry में classical ML को replace कर चुकी है", "machine learning, quantum computing का एक subfield है"],
        answer: 1,
        why: "ML आज दुनिया भर में deployed infrastructure चलाता है, जबकि quantum computing अभी emerging technology है — QML को दोनों realities का सम्मान करना होगा।" }
    ],
    slides: [
      { title: "3 pillars",
        body: "यह course <strong>3 pillars</strong> पर खड़ा है: quantum computing, machine learning, और इन दोनों का intersection — quantum machine learning।",
        visual: '<svg viewBox="0 0 220 100" fill="none" stroke="currentColor" stroke-width="4"><rect x="14" y="14" width="192" height="12" rx="6"/><rect x="24" y="32" width="44" height="58" rx="8"/><rect x="88" y="32" width="44" height="58" rx="8"/><rect x="152" y="32" width="44" height="58" rx="8"/></svg>' },
      { title: "Pillar 1 — Quantum computing",
        body: "Quantum physics के नियमों पर बनी computing — <strong>कल की heavy computation</strong> की दावेदार।",
        visual: '<svg viewBox="0 0 120 100" fill="none" stroke="currentColor" stroke-width="3"><circle cx="60" cy="50" r="7" fill="currentColor" stroke="none"/><ellipse cx="60" cy="50" rx="46" ry="18"/><ellipse cx="60" cy="50" rx="46" ry="18" transform="rotate(60 60 50)"/><ellipse cx="60" cy="50" rx="46" ry="18" transform="rotate(120 60 50)"/></svg>' },
      { title: "Pillar 2 — Machine learning",
        body: "वह technology जो <strong>आज की दुनिया चला रही है</strong>: आपके feeds के recommendations, vision systems, language models।",
        visual: '<svg viewBox="0 0 160 100" fill="none" stroke="currentColor" stroke-width="3"><circle cx="25" cy="25" r="8"/><circle cx="25" cy="50" r="8"/><circle cx="25" cy="75" r="8"/><circle cx="135" cy="35" r="8"/><circle cx="135" cy="65" r="8"/><path d="M33 25 L127 35 M33 50 L127 35 M33 50 L127 65 M33 75 L127 65" stroke-width="2"/></svg>' },
      { title: "Order matter करता है",
        body: "पहले quantum computing, फिर machine learning अपने आप में — और सबसे आखिर में इनका intersection। <strong>पहले foundation</strong>: दोनों sides मज़बूत हों, तभी intersection समझ आएगा।",
        visual: '<svg viewBox="0 0 240 80" fill="none" stroke="currentColor" stroke-width="3"><circle cx="40" cy="40" r="22"/><circle cx="120" cy="40" r="22"/><circle cx="200" cy="40" r="22"/><path d="M62 40 H94 M142 40 H174"/><path d="M86 32 L96 40 L86 48 M166 32 L176 40 L166 48"/><text x="40" y="48" text-anchor="middle" font-size="20" fill="currentColor" stroke="none">1</text><text x="120" y="48" text-anchor="middle" font-size="20" fill="currentColor" stroke="none">2</text><text x="200" y="48" text-anchor="middle" font-size="20" fill="currentColor" stroke="none">3</text></svg>' },
      { title: "मंज़िल",
        body: "Quantum machine learning: quantum learning algorithms, quantum data — और ईमानदार सवाल: quantum side <strong>असली advantage कहाँ</strong> देता है?",
        visual: '<svg viewBox="0 0 160 100" fill="none" stroke="currentColor" stroke-width="3"><circle cx="60" cy="50" r="34"/><circle cx="100" cy="50" r="34"/></svg>' },
      { title: "Proven बनाम promising",
        body: "Machine learning <strong>planetary scale पर proven</strong> है; quantum computing <strong>promising है लेकिन young</strong>। QML को दोनों realities का सम्मान करना होगा।",
        visual: '<svg viewBox="0 0 140 100" fill="none" stroke="currentColor" stroke-width="3"><path d="M70 10 V88 M42 88 H98"/><path d="M70 22 H20 M70 22 H120"/><path d="M20 22 L10 54 H30 Z M120 22 L110 54 H130 Z"/></svg>' }
    ]
  },
  "m1a-qubit": {
    simple: raw`

    <p>classical <strong>bit</strong> computing की सबसे simple चीज़ है: यह या तो 0 होता है या 1, कभी दोनों नहीं, कभी बीच में कुछ नहीं। आपके devices पर हर file, photo और video आखिरकार ऐसे ही bits की एक लंबी string है — billions of छोटे switches, हर एक पक्के तौर पर set।</p>
    <p><strong>qubit</strong> इतना simple होने से इनकार करता है। यह 0 हो सकता है, 1 हो सकता है — और <strong>एक ही समय में 0 और 1 के मिश्रण</strong> में भी रह सकता है। "हमें पता नहीं कौन-सा है" वाली बात नहीं, बल्कि एक genuine, physical in-between जो wave की तरह behave करता है और खुद से interfere कर सकता है।</p>
    <p>इससे तुरंत natural सवाल उठता है: <em>यह possible कैसे है?</em> एक चीज़ एक साथ 2 states में कैसे हो सकती है? यह पहला सवाल है जो हर student पूछता है, और इसका सीधा जवाब मिलना चाहिए, कंधे उचकाना नहीं।</p>
    <div class="note-box">
      <p><strong>एक शब्द में जवाब है superposition।</strong> superposition पूरे quantum computing का सबसे अजीब और सबसे central idea है: quantum objects measure होने तक अपनी possible states के combination में रह सकते हैं। इस course में बाकी सब कुछ — algorithms, speedups, hardware की परेशानियाँ — इसी एक idea से निकलता है।</p>
    </div>
    <p>पूरे treatment के लिए — qubit mathematically क्या है, Born rule, Bloch sphere, और measurement blend को collapse क्यों करता है — <a href="/hi/lessons/qubits/">qubits वाला lesson</a> देखिए। यह page सिर्फ doorway है: bits या-तो/या-तो होते हैं, qubits दोनों हो सकते हैं, और इस magic का नाम superposition है।</p>
  
    `,
    deeper: raw`

    <p>classical bit की ठीक 2 distinguishable states होती हैं, और bit की state हमेशा उनमें से एक होती है। qubit का state space <strong>continuous</strong> है: उसकी state Bloch sphere पर एक point है, और sphere का <em>हर</em> point एक valid state है। 2 poles |0⟩ और |1⟩ हैं, लेकिन उनके बीच की पूरी surface — infinitely many states — उतनी ही real है। "blend" का precise मतलब यही continuity है।</p>
    <p>formally, single-qubit state \(|\psi\rangle = \alpha|0\rangle + \beta|1\rangle\) होती है, जहाँ complex amplitudes \(|\alpha|^2 + |\beta|^2 = 1\) satisfy करती हैं। <strong>Born rule</strong> इस continuous description को measurement की discrete दुनिया से जोड़ता है: computational basis में measure करने पर 0 probability \(|\alpha|^2\) के साथ और 1 probability \(|\beta|^2\) के साथ मिलता है, और state देखे गए outcome में collapse हो जाती है। तो qubit की richness <em>measurements के बीच</em> रहती है — computation के दौरान — और हर measurement में सिर्फ एक classical bit बचता है।</p>
    <p>यही आखिरी point हैरानी के पीछे का discipline है। qubit कोई ऐसा bit नहीं है जो secretly infinite information store करता हो जिसे आप पढ़ सकें — information निकालना measurement से bottlenecked है, जो हर qubit से सिर्फ एक bit देता है। superposition <em>computation</em> को maneuver करने की जगह देता है (amplitudes के बीच interference), <em>observer</em> को बड़ा readout नहीं। इन 2 roles को अलग रखना ही आगे की हर चीज़ समझने की कुंजी है।</p>
  
    `,
    keyPoints: [
      "classical bit हमेशा ठीक-ठीक 0 या 1 होता है — 2 distinguishable states, बीच में कुछ नहीं।",
      "qubit 0 और 1 के blend में रह सकता है — एक genuine physical in-between, सिर्फ अज्ञान नहीं।",
      "'यह possible कैसे है?' का एक शब्द में जवाब superposition है — quantum computing का सबसे अजीब और सबसे central idea।",
      "qubit का state space continuous है: Bloch sphere का हर point एक valid state है।",
      "measurement एक classical bit देता है और blend को collapse कर देता है — richness computation के दौरान रहती है, readout में नहीं।"
    ],
    quiz: [
      { q: "bit और qubit में fundamental difference क्या है?",
        options: ["qubit, bit से छोटा होता है", "bit हमेशा 0 या 1 होता है; qubit 0 और 1 के blend में रह सकता है", "qubit, bit से ठीक दोगुना readable data store करता है", "कोई difference नहीं है — 'qubit' सिर्फ marketing है"],
        answer: 1,
        why: "bit की 2 distinguishable states होती हैं; qubit superposition में रह सकता है — 0 और 1 का genuine blend जो interfere कर सकता है।" },
      { q: "'qubit एक साथ 0 और 1 कैसे हो सकता है?' — इसका एक शब्द में जवाब क्या है?",
        options: ["Entanglement", "Tunneling", "Superposition", "Decoherence"],
        answer: 2,
        why: "superposition — quantum objects का states के combination में रहने की ability — qubit के पीछे का central idea है।" },
      { q: "आपने एक qubit measure किया और result 1 मिला। अब आप उस qubit से क्या पढ़ सकते हैं?",
        options: ["measurement से पहले वह जिस blend में था, वह पूरा", "एक साथ 0 और 1 दोनों", "सिर्फ एक classical outcome — blend collapse हो चुका है", "α और β की exact values"],
        answer: 2,
        why: "measurement superposition को एक classical outcome में collapse कर देता है; amplitudes α और β सीधे readable नहीं होतीं।" }
    ]
  },
  "m1a-superposition": {
    simple: raw`

    <p>superposition "qubit एक साथ 0 और 1 कैसे हो सकता है?" का जवाब है — लेकिन <em>computing के लिए</em> यह असल में क्या करता है? short version: यह quantum computer को एक ही stroke में कई possibilities के साथ काम करने देता है, और फिर interference से सही जवाब की तरफ steer करता है।</p>
    <p>physicists इन blends को एक compact notation में लिखते हैं जिसे <strong>Dirac notation</strong> कहते हैं। state 0 में qubit को |0⟩ लिखते हैं, state 1 में |1⟩, और दोनों के blend को |ψ⟩ = α|0⟩ + β|1⟩। kets | ⟩ को "the state of" पढ़िए: |0⟩ मतलब "state 0," और |ψ⟩ मतलब "state psi।" numbers α और β बताते हैं कि blend में हर ingredient <em>कितना</em> है।</p>
    <p>अब देखिए एक से ज़्यादा qubits के साथ क्या होता है। 1 qubit के description को <strong>2</strong> numbers चाहिए (α और β)। 2 qubits को <strong>4</strong> चाहिए। 3 को <strong>8</strong>। हर नया qubit description को double कर देता है — और हर doubling computation के maneuver करने की जगह को भी double करती है।</p>
    <div class="note-box">
      <p><strong>क्या यह बहुत powerful नहीं है?</strong> 10 qubits एक साथ 1,024 possibilities describe करते हैं; 20 qubits दस लाख से ज़्यादा; 30 qubits एक billion से ज़्यादा। classical register को हर possibility के लिए अलग entry चाहिए होती — quantum register सबको एक shared description में रखता है। यही explosive growth वह कच्चा माल है जिसका हर quantum algorithm इस्तेमाल करता है।</p>
    </div>
    <p>एक ईमानदार caveat, qubit वाले lesson से: हर measurement में आपको अब भी सिर्फ एक जवाब पढ़ने को मिलता है। superposition <em>workspace</em> देता है; चालाक interference <em>result</em> देती है। notation का पूरा mathematical treatment <a href="/hi/lessons/dirac-notation/">Dirac notation वाले lesson</a> में है।</p>
  
    `,
    deeper: raw`

    <p>|0⟩ जैसा ket असल में एक <strong>vector</strong> है — एक vector space में numbers का column, जहाँ |0⟩ और |1⟩ एक two-dimensional complex space के 2 basis vectors हैं। superposition |ψ⟩ = α|0⟩ + β|1⟩ बस उन basis vectors का linear combination है — ठीक वैसे ही जैसे किसी arrow को x- और y-directions के mix के रूप में लिखना। Dirac notation ऐसे vectors के लिए एक bookkeeping system है, जिसे इस तरह design किया गया है कि quantum states का algebra readable बना रहे।</p>
    <p>amplitudes को <strong>normalization condition</strong> \(|\alpha|^2 + |\beta|^2 = 1\) satisfy करनी होती है: चूँकि \(|\alpha|^2\) और \(|\beta|^2\), 0 और 1 measure होने की probabilities हैं, इन्हें मिलकर certainty बनानी होती है। एक irrelevant overall phase को छोड़ दें, तो हर single-qubit state Bloch sphere पर एक point है — 2 real numbers की freedom, poles के बीच states की continuous infinity।</p>
    <p>कई qubits <strong>tensor product</strong> से combine होते हैं: 2 qubits का state space 2 single-qubit spaces का product है, इसलिए उसकी dimension multiply होती है — \(2 \times 2 = 4\), और generally \(n\) qubits के लिए \(2^n\)। इसीलिए description exponentially बढ़ता है: \(n\) qubits को \(2^n\) complex amplitudes से describe किया जाता है (normalization और phase constraints घटाकर)। entanglement extra twist है — उन multi-qubit states में से ज़्यादातर को वापस अलग-अलग single-qubit descriptions में split ही नहीं किया जा सकता।</p>
  
    `,
    keyPoints: [
      "Dirac notation states को kets में लिखती है: |0⟩, |1⟩, और |ψ⟩ = α|0⟩ + β|1⟩ जैसे blends।",
      "α और β amplitudes हैं — वे बताते हैं कि blend में हर ingredient कितना है।",
      "हर qubit के साथ description double होता है: 1→2 numbers, 2→4, 3→8 — exponential growth।",
      "10 qubits एक shared description में 1,024 possibilities describe करते हैं; 30 qubits एक billion से ज़्यादा।",
      "superposition workspace देता है; जवाब की तरफ steer अब भी interference को करना पड़ता है — readout एक measurement ही रहता है।"
    ],
    quiz: [
      { q: "Dirac notation में |ψ⟩ = α|0⟩ + β|1⟩ क्या describe करता है?",
        options: ["एक classical bit जो 0 या 1 है", "superposition में एक qubit — α और β से weighted |0⟩ और |1⟩ का blend", "2 अलग qubits, एक |0⟩ में और एक |1⟩ में", "qubit measure करने का result"],
        answer: 1,
        why: "ket |ψ⟩, basis states |0⟩ और |1⟩ का linear combination है — यही ठीक-ठीक superposition है, amplitudes α और β के साथ।" },
      { q: "3 qubits की state describe करने के लिए कितने complex numbers चाहिए?",
        options: ["3", "6", "8", "9"],
        answer: 2,
        why: "n qubits को 2ⁿ amplitudes चाहिए, इसलिए 3 qubits को 2³ = 8 numbers चाहिए — हर नए qubit के साथ description double होता है।" },
      { q: "amplitudes α और β को हमेशा क्या satisfy करना चाहिए?",
        options: ["α + β = 1", "|α|² + |β|² = 1", "α × β = 0", "α हमेशा β के बराबर"],
        answer: 1,
        why: "normalization: |α|² और |β|², 0 और 1 measure होने की probabilities हैं, इसलिए इनका sum 1 होना चाहिए।" }
    ]
  },
  "m1a-bits-vs-qubits": {
    simple: raw`

    <p>यह वह punchline है जिसकी तरफ पूरा module बढ़ रहा था। classical और quantum machines <strong>अलग तरीके से</strong> scale होती हैं — और यही difference, raw speed नहीं, quantum advantage की जड़ है। 2 scaling stories इसे concrete बनाती हैं।</p>
    <p><strong>पहली story।</strong> मान लीजिए आप N = 2ⁿ possibilities का track रखना चाहते हैं। classically, इन सबको describe करने में ऐसे resources लगते हैं जो N के साथ बढ़ते हैं — हर possibility के लिए एक slot वाली list, N में linear। quantumly, n qubits सारी 2ⁿ amplitudes को एक shared description में रखते हैं। जो classically <em>linear</em> था, वह quantumly <em>logarithmic</em> हो जाता है: N possibilities, सिर्फ n = log₂N qubits।</p>
    <p><strong>दूसरी story।</strong> इसे पलट दीजिए: एक problem जिसका classical description या computation <em>exponentially</em> blow up होता है — हर नए piece के साथ difficulty double — उसे सही structured problems के लिए quantum machine पर सिर्फ <em>linearly</em> बढ़ने वाले resources से handle किया जा सकता है। exponential, linear बन जाता है। यह तेज़ घोड़ा नहीं है; यह अलग तरह का vehicle है।</p>
    <div class="note-box">
      <p><strong>इससे फर्क क्यों पड़ता है?</strong> क्योंकि complexity classes scaling से तय होती हैं, constants से नहीं। एक machine जो exponential costs को linear बना देती है, वह सिर्फ आज नहीं जीतती — problem size के हर step के साथ वह <em>और ज़्यादा</em> जीतती है। यही widening gap quantum advantage की mathematical जड़ है।</p>
    </div>
    <p>ईमानदार fine print: यह इस बारे में है कि structured problems के लिए <em>description और computation</em> कैसे scale होते हैं — magic नहीं, और readout trick नहीं। n qubits से आप अब भी सिर्फ n bits measure करते हैं। compression real है, लेकिन इसे harvest करने के लिए clever algorithms चाहिए जो interference को ऐसे arrange करें कि final measurement से कुछ काम की चीज़ निकले। big picture के लिए <a href="/hi/quantum-computing-10-questions/">10 सवालों में quantum computing</a> देखिए।</p>
  
    `,
    deeper: raw`

    <p>scaling story असल में <strong>description complexity</strong> के बारे में एक statement है। n classical bits की एक general state 2ⁿ configurations में से एक होती है, और उन पर किसी arbitrary <em>distribution</em> को लिखने में 2ⁿ numbers लगते हैं — N = 2ⁿ में linear। n qubits की general state को <em>भी</em> 2ⁿ amplitudes से describe किया जाता है — लेकिन वह machine में natively रहती है: n physical qubits, यानी n = log₂N का resource count, पूरी exponentially large description को hold करते हैं। quantum device उस large space को <em>simulate</em> नहीं करता; वह उसमें <em>रहता</em> है।</p>
    <p>यही compression वह जड़ है जिससे quantum speedups उगते हैं। Shor's जैसे algorithms structure (periodicity) का फायदा उठाते हैं ताकि interference amplitude को जवाब पर concentrate कर दे, और classically exponential task polynomial-time quantum task बन जाता है। Grover's उसी moral का हल्का quadratic version देता है: space विशाल है, और उस तक quantum access सस्ता है। लेकिन "सस्ता access" का मतलब "मुफ्त जवाब" नहीं है — <strong>Holevo's bound</strong> guarantee करता है कि n qubits हर measurement में ज़्यादा से ज़्यादा n classical bits दे सकते हैं, इसलिए algorithm को इस हिसाब से design करना पड़ता है कि एक careful सवाल क्या extract कर सकता है।</p>
    <p>punchlines को carefully present कीजिए: "linear → logarithmic" और "exponential → linear" यह describe करते हैं कि suitable structured problems के लिए <em>resource requirements</em> कैसे scale होती हैं। इसका मतलब यह नहीं कि हर problem तेज़ हो जाता है, और न ही यह कि exponential description को print किया जा सकता है। advantage real है लेकिन conditional है — structure पर, interference के steering करने पर, और ऐसे hardware पर जो noise जीतने से पहले काफी deep circuits चला सके।</p>
  
    `,
    keyPoints: [
      "classical और quantum machines अलग तरीके से scale होती हैं — यही scaling gap, raw speed नहीं, quantum advantage की जड़ है।",
      "पहला punchline: N = 2ⁿ possibilities describe करने में classically N में linear resources लगते हैं, लेकिन quantumly सिर्फ n = log₂N qubits।",
      "दूसरा punchline: suitable structured problems के लिए classically exponential costs quantum machine पर linear हो सकती हैं।",
      "quantum device large state space को simulate नहीं करता — वह उसमें natively रहता है।",
      "fine print: readout अब भी हर measurement में n bits है (Holevo's bound), इसलिए compression को harvest clever interference ही करती है।"
    ],
    quiz: [
      { q: "N = 2ⁿ possibilities describe करने के लिए classical और quantum resource needs की तुलना कैसी है?",
        options: ["दोनों को N के साथ linearly बढ़ने वाले resources चाहिए", "classical को ~N resources चाहिए; n qubits पूरी description को n = log₂N के साथ hold करते हैं", "quantum को ज़्यादा resources चाहिए क्योंकि qubits नाज़ुक होते हैं", "classical को log N bits चाहिए; quantum को N qubits चाहिए"],
        answer: 1,
        why: "classically description N के साथ बढ़ता है; n qubits natively सारी 2ⁿ amplitudes carry करते हैं — linear, logarithmic बन जाता है।" },
      { q: "'exponential → linear' punchline का मतलब क्या है?",
        options: ["quantum computer पर हर problem exponentially तेज़ चलता है", "suitable structured problems के लिए classically exponentially blow up होने वाली costs quantumly सिर्फ linearly बढ़ सकती हैं", "quantum computers की clock speeds linear होती हैं", "quantum state को print करने में linear time लगता है"],
        answer: 1,
        why: "scaling win structured problems पर लागू होता है जहाँ interference amplitude को जवाब पर concentrate कर सकती है — यह conditional है, universal नहीं।" },
      { q: "n qubits से सारी 2ⁿ amplitudes सीधे क्यों नहीं पढ़ी जा सकतीं?",
        options: ["क्योंकि amplitudes असल में exist ही नहीं करतीं", "क्योंकि आज का hardware बहुत noisy है", "क्योंकि measurement ज़्यादा से ज़्यादा n classical bits देता है और state को collapse कर देता है (Holevo's bound)", "क्योंकि Dirac notation इसकी इजाज़त नहीं देती"],
        answer: 2,
        why: "Holevo's bound readout को हर measurement में n bits तक cap करता है, और measurement superposition को collapse कर देता है — इसलिए algorithms को एक clever सवाल पूछना पड़ता है।" }
    ]
  },
  "m1a-measurement": {
    simple: raw`

    <p>qubit एक बहुत private चीज़ है। जब तक कोई उससे interact नहीं करता, वह <strong>superposition</strong> में रह सकता है — 0 और 1 का एक मिश्रण। लेकिन जैसे ही कोई यह <em>record</em> करने की कोशिश करता है कि वह किस state में है, मिश्रण खत्म। इस record करने वाली घटना को <strong>measurement</strong> कहते हैं, और यही qubit का शाप है: आपको एक classical जवाब मिलता है, और वह quantum-ness खो जाती है जिसका आप इस्तेमाल करना चाहते थे।</p>
    <p>यह बात लोगों को हैरान करती है: measurement के लिए किसी scientist का instrument से देखना ज़रूरी नहीं है। <strong>qubit की privacy में कोई भी दख़ल measurement है।</strong> अगर qubit किसी दूसरे atom से interact करे, किसी stray electron से टकराए, या एक भी ऐसा photon leak करे जो उसकी state की जानकारी ले जाए — वह भी measurement है। universe को इस बात से कोई मतलब नहीं कि कोई इंसान देख रहा था या नहीं।</p>
    <div class="compare">
      <div><h4>measurement से पहले</h4><p>qubit संभावनाओं का मिश्रण रखता है। amplitudes अभी भी interfere कर सकती हैं।</p></div>
      <div><h4>measurement के बाद</h4><p>एक outcome अब तय तथ्य है। मिश्रण खत्म, और आगे कोई interference संभव नहीं।</p></div>
    </div>
    <p>इसलिए measurement कोई passive reading नहीं है, जैसे thermometer देखना। यह एक <strong>active disturbance</strong> है: देखना ही बदलना है। इसीलिए quantum algorithm designers measurement को आखिरी, irreversible step मानते हैं — वे पहले gates और interference से सब कुछ arrange करते हैं, और तभी measure करते हैं जब जवाब सामने लाया जा चुका हो। पूरी कहानी के लिए देखें <a href="/lessons/quantum-measurement/">Quantum Measurement</a> और <a href="/quantum-computing-10-questions/">10 सवालों</a> वाला overview।</p>
    <p class="myth"><strong>आम ग़लतफ़हमी:</strong> “measurement बस वह बता देता है जो पहले से था।” qubit के लिए ऐसा नहीं है। measurement से पहले कोई छिपा हुआ तय तथ्य होता ही नहीं — outcome measurement की क्रिया में ही बनता है, जिसकी probabilities amplitudes तय करती हैं।</p>
  
    `,
    deeper: raw`

    <p><strong>measurement postulate</strong> कहता है: जब आप किसी चुने हुए basis में qubit को measure करते हैं, तो outcome probabilistic होता है और state देखे गए basis state में <strong>collapse</strong> हो जाती है। \(|\psi\rangle = \alpha|0\rangle + \beta|1\rangle\) वाले qubit को computational basis में measure करने पर <strong>Born rule</strong> कहता है — outcome \(|0\rangle\) probability \(|\alpha|^2\) के साथ और \(|1\rangle\) probability \(|\beta|^2\) के साथ। उसके बाद state वही outcome रह जाती है जिसे आपने देखा — \(\alpha\) और \(\beta\) खत्म।</p>
    <p>collapse <strong>basis-dependent</strong> होता है: किसी दूसरे basis (जैसे \(\{|+\rangle, |-\rangle\}\) basis) में measure करने पर state एक अलग pair में collapse होती है, अलग probabilities के साथ। qubit के पास कोई outcome पहले से "रखा" नहीं होता; आप जो basis चुनते हैं वही तय करता है कि कौन-सा सवाल पूछा जा रहा है, और state उसका एक बार जवाब देती है।</p>
    <p>readout से क्या निकाला जा सकता है, इसकी एक fundamental limit है। \(n\) qubits की \(2^n\) amplitudes कितनी भी बड़ी हों, सभी \(n\) qubits को measure करने पर ज़्यादा से ज़्यादा <strong>\(n\) classical bits</strong> मिलते हैं — हर qubit से एक binary outcome। (यही <strong>Holevo bound</strong> का आसान मतलब है।) इसीलिए algorithms सारे जवाब compute करके print नहीं कर सकते: bottleneck computing power नहीं, readout खुद है।</p>
    <p>और आखिर में, environment हमेशा "measure" कर रहा होता है। जब qubit आस-पास के atoms, fields या photons के साथ बेकाबू तरीके से entangle हो जाता है, तो उसकी state की जानकारी बाहर leak हो जाती है — universe की तरफ से एक बिना देखा गया measurement। यही <strong>decoherence</strong> है: superposition बिना किसी के जानबूझकर देखे, आम classical uncertainty में बदल जाता है। ऐसा होने से पहले qubits को इतना isolated रखना कि computation हो सके — यही quantum hardware की central engineering लड़ाई है।</p>
  
    `,
    keyPoints: [
      "measurement वह हर घटना है जो qubit की state record करती है — scientist का देखना, या किसी stray atom, electron या photon का interact करना।",
      "measure करने पर superposition collapse हो जाती है: एक classical outcome तय तथ्य बन जाता है, और interference संभव नहीं रहता।",
      "collapse basis-dependent होता है: आप जिस basis में measure करते हैं, वही तय करता है कि qubit कौन-से सवाल का जवाब देगा।",
      "n qubits से ज़्यादा से ज़्यादा n classical bits निकाले जा सकते हैं (Holevo bound) — fundamental bottleneck readout है, computing power नहीं।",
      "decoherence environment की तरफ से बेकाबू measurement है — जानकारी leak होती है और superposition नष्ट हो जाता है।"
    ],
    quiz: [
      { q: "superposition में एक qubit एक stray electron के पास से गुज़रता है और दोनों briefly interact करते हैं, जिससे qubit की state की जानकारी exchange होती है। क्या हुआ?",
        options: ["कुछ नहीं — measurement सिर्फ instrument वाला scientist कर सकता है", "qubit measure हो गया: यह interaction उसकी privacy में दख़ल है", "qubit का superposition दोगुना हो गया", "electron ने qubit को absorb कर लिया और classical बन गया"],
        answer: 1,
        why: "qubit की state की जानकारी record करने वाली हर घटना measurement है — इसके लिए किसी इंसान observer की ज़रूरत नहीं।" },
      { q: "आपके पास एक rich entangled state में 10 qubits हैं। आप सभी को measure करते हैं। ज़्यादा से ज़्यादा कितने classical bits की जानकारी निकाल सकते हैं?",
        options: ["2¹⁰ = 1,024 bits", "10 bits", "100 bits", "असीमित — state में 2¹⁰ amplitudes हैं"],
        answer: 1,
        why: "Holevo bound कहता है कि n qubits से ज़्यादा से ज़्यादा n classical bits निकाले जा सकते हैं, चाहे state space कितनी भी बड़ी हो।" },
      { q: "decoherence को environment की तरफ से qubit का 'measurement' क्यों कहा जाता है?",
        options: ["क्योंकि environment outcomes का written log रखता है", "क्योंकि environment के साथ बेकाबू entanglement state की जानकारी leak कर देता है, जिससे superposition नष्ट होता है", "क्योंकि physicists जानबूझकर qubits measure करके decoherence पैदा करते हैं", "क्योंकि decoherence सिर्फ measurement instruments के अंदर होता है"],
        answer: 1,
        why: "decoherence में qubit की जानकारी environment में leak हो जाती है — एक बिना देखा गया measurement जो superposition को classical uncertainty में बदल देता है।" }
    ],
    references: [
      { cite: "Nielsen &amp; Chuang, <em>Quantum Computation and Quantum Information</em>, Ch. 2 (measurement postulate, Born rule, Holevo bound)।", url: "", usedFor: "measurement postulate, basis-dependence और readout limit।" }
    ]
  },
  "m1a-physical-qubits": {
    simple: raw`

    <p>qubit कोई खास gadget नहीं है। यह एक <strong>role</strong> है जिसे कई अलग-अलग physical चीज़ें निभा सकती हैं। job description छोटी है: एक ऐसा quantum system बनो जिसके ठीक <strong>2 distinguishable states</strong> हों — एक ground floor और एक first floor, बीच में कुछ नहीं जिसकी आपको परवाह हो — और engineers को control करने दो कि आप किस floor पर हैं, या दोनों का मिश्रण भी बना सको।</p>
    <p><strong>पहला example: electron के energy levels।</strong> atom से बँधा electron अपनी सबसे कम energy वाली state (ground state) में बैठ सकता है, या excited state में ऊपर उठ सकता है। ground state को |0⟩ कहो, excited state को |1⟩। electron को इन दोनों के मिश्रण में भी तैयार किया जा सकता है — और अब आपके पास एक electron से बना qubit है।</p>
    <p><strong>दूसरा example: electron का spin।</strong> electrons छोटे magnets की तरह behave करते हैं जो किसी चुनी हुई axis पर "up" या "down" point कर सकते हैं। ये 2 orientations — spin-up और spin-down — 2 बिल्कुल सही qubit states हैं। कोई excited energy level नहीं चाहिए; qubit सिर्फ spin में रहता है।</p>
    <div class="compare">
      <div><h4>energy-level qubit</h4><p>|0⟩ = ground state, |1⟩ = excited state। qubit <em>electron की energy कहाँ है</em>, इसमें रहता है।</p></div>
      <div><h4>spin qubit</h4><p>|0⟩ = spin-down, |1⟩ = spin-up। qubit <em>electron किस तरफ point करता है</em>, इसमें रहता है।</p></div>
    </div>
    <p><strong>तीसरा example: photon की polarization।</strong> light waves एक direction में wiggle करती हैं, और एक single photon horizontally या vertically polarized हो सकता है — 2 states, |0⟩ और |1⟩। photons लगभग किसी चीज़ से interact नहीं करते, जो उन्हें wonderfully stable qubits बनाता है — और उन्हें पकड़कर operate करना wonderfully मुश्किल भी। ये सब एक साथ कैसे fit होते हैं, इसके लिए देखें <a href="/quantum-computing-10-questions/">10 सवाल</a> और <a href="/lessons/qubits/">qubits वाला lesson</a>।</p>
    <p class="myth"><strong>आम ग़लतफ़हमी:</strong> “qubit की एक ही सच्ची technology है।” अभी नहीं। हर physical realization एक समझौता है — कुछ तेज़ लेकिन नाज़ुक हैं, कुछ stable लेकिन control करने में मुश्किल — और field में race अभी चल रही है।</p>
  
    `,
    deeper: raw`

    <p><strong>"two-level"</strong> का physical मतलब क्या है? इसका मतलब है: system जितनी states में हो सकता है, उनमें से हम 2 चुनते हैं — उन्हें \(|0\rangle\) और \(|1\rangle\) कहते हैं — और physics को ऐसे arrange करते हैं कि system बहुत अच्छी approximation में इन्हीं 2 के बनाए two-dimensional subspace के अंदर रहे। असली atoms के infinite energy levels होते हैं, असली spins complicated environments में बैठते हैं, लेकिन अगर <em>तीसरे</em> level तक का energy gap बड़ा हो और हमारे control pulses सौम्य और well-tuned हों, तो system बाकी states के universe को notice ही नहीं करता। qubit को 2 ही levels चाहिए, क्योंकि qubit एक binary choice है जिसे quantum बना दिया गया हो।</p>
    <p>2 levels को isolate करना एक engineering art है। unwanted transitions को design से दबाया जाता है: system को ठंडा रखो ताकि thermal energy उसे ऊपर न धकेले, control pulses को ऐसे shape करो कि वे गलती से level 3 तक न पहुँचें, और ऐसे physical systems चुनो जिनमें पहले 2 levels बाकी से conveniently दूर हों। जब यह isolation fail होती है — जब system higher levels में "leak" कर जाता है — तो computation चुपचाप qubit subspace से बाहर निकल जाता है, जो hardware की एक और error source है।</p>
    <p>ऊपर के 3 examples के अलावा zoo बहुत बड़ा है। <strong>trapped ions</strong> electromagnetic पिंजरों में पकड़े गए अलग-अलग atoms के internal electronic states use करते हैं — extremely high-quality qubits, लेकिन slow और densely pack करने में मुश्किल। <strong>superconducting circuits</strong> chip पर metal से तराशे गए artificial atoms हैं, तेज़ और manufacturable, लेकिन इन्हें absolute zero के पास cooling चाहिए और ये relatively noisy हैं। <strong>neutral atoms</strong> (optical tweezers में), <strong>quantum dots</strong> (semiconductor islands में फँसे electron spins), और <strong>nuclear spins</strong> — हर एक tradeoff space के अलग कोने को push करता है: coherence time बनाम gate speed बनाम scalability बनाम operating temperature। कोई platform चारों में dominate नहीं करता — इसीलिए hardware race अभी खुली है।</p>
  
    `,
    keyPoints: [
      "qubit कोई gadget नहीं, एक role है: कोई भी controllable quantum system जिसके 2 distinguishable states हों, यह role निभा सकता है।",
      "3 classic realizations: electron का ground बनाम excited energy level, electron का spin-up बनाम spin-down, और photon की horizontal बनाम vertical polarization।",
      "सिर्फ 2 levels इसलिए चाहिए क्योंकि qubit एक binary choice है जिसे quantum बना दिया गया हो; higher levels होते हैं लेकिन जानबूझकर isolate किए जाते हैं।",
      "बड़ा zoo — trapped ions, superconducting circuits, neutral atoms, quantum dots, nuclear spins — coherence, speed, scalability और temperature के बीच tradeoff करता है।",
      "कोई एक platform हर axis पर नहीं जीतता; हर एक अलग engineering समझौता है।"
    ],
    quiz: [
      { q: "एक engineer electron के spin से qubit बनाता है — spin-down को |0⟩ और spin-up को |1⟩ मानकर। कौन-सा कथन सही है?",
        options: ["यह काम नहीं कर सकता — सिर्फ energy levels से qubit बन सकते हैं", "यह valid qubit है: spin-up और spin-down 2 distinguishable, controllable quantum states हैं", "spin qubits को superposition में नहीं रखा जा सकता", "spin qubit को काम करने के लिए तीसरे level की भी ज़रूरत होती है"],
        answer: 1,
        why: "qubit कोई भी controllable two-level quantum system हो सकता है — spin-up/spin-down इस परिभाषा में बिल्कुल fit होता है।" },
      { q: "असली atom के infinite energy levels होते हैं, फिर भी हम उसे two-level qubit की तरह use करते हैं। यह कैसे justified है?",
        options: ["extra levels को control software delete कर देता है", "हम 2 levels isolate करते हैं: तीसरे level तक gap बड़ा होता है और control pulses ऐसे tuned होते हैं कि वहाँ कभी न पहुँचें", "atoms के असल में सिर्फ 2 levels होते हैं; textbooks बढ़ा-चढ़ाकर बताते हैं", "extra levels qubit को बेहतर बनाते हैं, इसलिए हम सभी रखते हैं"],
        answer: 1,
        why: "अच्छा qubit design system को two-dimensional subspace के अंदर रखता है; higher levels में leakage एक error है जिसे दबाना होता है।" },
      { q: "आज qubit hardware platforms की स्थिति को कौन-सा कथन सबसे अच्छा describe करता है?",
        options: ["superconducting circuits जीत चुके हैं और बाकी approaches छोड़ दिए गए हैं", "photons इतने unstable हैं कि वे कभी qubit नहीं बन सकते", "कई platforms साथ-साथ हैं, हर एक coherence time, gate speed, scalability और operating temperature के बीच tradeoff करता है", "trapped ions ही एकमात्र platform है जिसे manufacture किया जा सकता है"],
        answer: 2,
        why: "trapped ions, superconducting circuits, neutral atoms, quantum dots और nuclear spins — हर एक अलग axes पर जीतता है; कोई platform चारों में dominate नहीं करता।" }
    ],
    references: [
      { cite: "Nielsen &amp; Chuang, <em>Quantum Computation and Quantum Information</em>, Ch. 7 (physical realizations of qubits)।", url: "", usedFor: "physical qubit platforms और उनके trade-offs का survey।" }
    ]
  },
  "m1a-three-properties": {
    simple: raw`

    <p>quantum computing quantum world की 3 properties पर खड़ी है। हर एक अपने आप में अजीब है; तीनों मिलकर पूरा खेल हैं। हर property के लिए एक साफ intuition — एक picture।</p>
    <p><strong>1. superposition — मिश्रण।</strong> qubit एक साथ 0 और 1 के मिश्रण में रह सकता है। <em>n</em> qubits के साथ यह मिश्रण एक साथ 2ⁿ संभावनाओं को cover करता है। यही वह property है जो quantum physics को computing के लिए interesting बनाती है: यह काम करने के लिए ज़बरदस्त जगह खोल देती है। लेकिन सिर्फ मिश्रण computing नहीं है — वह सिर्फ कच्चा माल है। (पूरी कहानी के लिए <a href="/lessons/qubits/">qubits वाला lesson</a> देखें।)</p>
    <p><strong>2. interference — steering।</strong> superposition के हिस्से waves की तरह behave करते हैं, और waves एक-दूसरे को काट या बढ़ा सकती हैं। quantum circuit ऐसे design किया जाता है कि ग़लत जवाबों की amplitudes <em>कट जाएँ</em> और सही जवाब की amplitude <em>बढ़ जाए</em>। interference ही वह तरीका है जिससे machine को चाहे गए result की तरफ bias किया जाता है — इसके बिना measurement सिर्फ random noise देता। (<a href="/lessons/quantum-interference/">Quantum Interference</a> देखें।)</p>
    <p><strong>3. entanglement — correlation।</strong> 2 qubits ऐसे link हो सकते हैं कि किसी एक की अपनी कोई state न हो — state सिर्फ <em>pair</em> की हो। एक को measure करो, और दूसरे का outcome तुरंत correlated होता है, चाहे वे कितनी भी दूर हों। Einstein ने इसे "spooky" कहा था — लेकिन यह असली है, tested है, और इससे quantum system ऐसे joint possibilities represent कर सकता है जो कोई classical system नहीं कर सकता।</p>
    <p class="myth"><strong>आम ग़लतफ़हमी:</strong> “entanglement का मतलब universe में instant messaging है — या time travel।” नहीं। outcomes correlated होते हैं, लेकिन हर side का <em>अपना</em> outcome बिल्कुल random दिखता है, और कोई message force करके भेजा नहीं जा सकता। entanglement light से तेज़ जानकारी नहीं भेज सकता, और आपको time में वापस तो बिल्कुल नहीं भेज सकता। जो मिलता है वह है बिना communication के correlation — जो खुद ही काफी अजीब है।</p>
  
    `,
    deeper: raw`

    <p><strong>interference, ठीक-ठीक:</strong> quantum state हर possibility के लिए एक complex amplitude रखती है, और probabilities <em>amplitudes के योग के squared magnitude</em> से आती हैं। अगर 2 paths एक ही outcome तक amplitudes \(\alpha\) और \(\beta\) के साथ ले जाएँ, तो probability \(|\alpha + \beta|^2 = |\alpha|^2 + |\beta|^2 + 2\,\mathrm{Re}(\alpha^*\beta)\) होती है। वह cross term — interference term — negative (cancellation) या positive (reinforcement) हो सकता है। algorithm design काफी हद तक इन्हीं cross terms को arrange करने की कला है: Grover's algorithm, उदाहरण के लिए, amplitudes को बार-बार rotate करता है ताकि marked item की amplitude बढ़े और बाकियों की घटे। cross terms के बिना quantum computing महँगा random-number generation होता।</p>
    <p><strong>entanglement, ठीक-ठीक:</strong> 2-qubit state तब <em>entangled</em> होती है जब उसे single-qubit states के product के रूप में लिखा न जा सके। classic example Bell pair \(|\Phi^+\rangle = \tfrac{|00\rangle + |11\rangle}{\sqrt{2}}\) है: इसे \(|\psi\rangle \otimes |\phi\rangle\) के रूप में factor करने की कोशिश करो और fail होगे — ऐसा कोई pair है ही नहीं। दोनों qubits measure करो तो outcomes हमेशा agree करते हैं (दोनों 0 या दोनों 1), हर एक probability \(\tfrac{1}{2}\) के साथ, फिर भी measurement से पहले किसी qubit की कोई definite value नहीं थी। correlation <em>joint</em> state में है, हिस्सों के अंदर छिपा नहीं है।</p>
    <p><strong>light से तेज़ messaging क्यों नहीं?</strong> क्योंकि हर observer, सिर्फ अपने qubit को देखकर, बिल्कुल random outcomes देखता है — 50/50 coin flip, चाहे दूर वाला partner कुछ भी करे। correlation तभी दिखता है जब दोनों sides बाद में <em>notes compare</em> करें, एक आम classical channel पर। यही <strong>no-signaling theorem</strong> है: entanglement बिना communicate किए correlate करता है, इसलिए relativity सलामत रहती है।</p>
    <p><strong>तीनों एक साथ क्यों?</strong> interference के बिना superposition सिर्फ ऐसा parallelism है जिसे पढ़ा नहीं जा सकता (measurement bottleneck याद करो)। entanglement के बिना interference को classically मामूली effort से simulate किया जा सकता है — entanglement ही joint state space को genuinely exponential और mimic करने में कठिन बनाता है। speedup को चाहिए मिश्रण (compute करने की जगह), steering (जवाब की तरफ bias), और non-classical correlation (ऐसी structure जिसे कोई classical system fake न कर सके)। कोई एक हटाओ, और advantage ढह जाता है।</p>
  
    `,
    keyPoints: [
      "superposition संभावनाओं को मिलाता है — n qubits के साथ 2ⁿ — compute करने के लिए ज़बरदस्त जगह खोलता है।",
      "interference computation को steer करता है: ग़लत जवाबों की amplitudes कटती हैं, सही जवाब की बढ़ती है।",
      "entanglement qubits को ऐसे link करता है कि definite state सिर्फ joint system की होती है — ऐसा correlation जो कोई classical system reproduce नहीं कर सकता।",
      "entanglement light से तेज़ messages नहीं भेज सकता (no-signaling theorem) और इसका time travel से कोई लेना-देना नहीं।",
      "quantum speedup को तीनों चाहिए: superposition जगह देता है, interference जवाब की तरफ steer करता है, entanglement structure को classically inimitable बनाता है।"
    ],
    quiz: [
      { q: "2 qubits Bell pair (|00⟩ + |11⟩)/√2 में तैयार करके planet के opposite sides पर भेजे गए। Alice अपना measure करती है और उसे 0 मिलता है। Bob जब अपना measure करेगा तो उसे क्या मिलेगा?",
        options: ["random result, Alice के result से uncorrelated", "0, पूरी certainty के साथ", "1, पूरी certainty के साथ", "Alice के measurement से उसका qubit नष्ट हो जाता है"],
        answer: 1,
        why: "इस Bell pair में outcomes हमेशा agree करते हैं — लेकिन measurement से पहले कोई outcome तय नहीं था, और दोनों के बीच कोई signal नहीं गया।" },
      { q: "क्या Alice entangled pair के अपने आधे हिस्से से Bob को light से तेज़ instant message भेज सकती है?",
        options: ["हाँ — correlation instantaneous है, इसलिए messages instantly travel करते हैं", "हाँ, लेकिन हर pair से सिर्फ एक bit", "नहीं — उसके अपने outcomes बिल्कुल random दिखते हैं; correlation तभी दिखता है जब वे classically notes compare करें", "नहीं, क्योंकि qubits दूर होने पर entanglement टूट जाता है"],
        answer: 2,
        why: "no-signaling theorem: हर side अकेले randomness देखती है। बिना communication के correlation कोई message नहीं ले जा सकता।" },
      { q: "एक quantum circuit superposition और entanglement use करता है, लेकिन उसके gates ऐसे arrange हैं कि सारे interference cross-terms खत्म हो जाते हैं। नतीजा क्या होगा?",
        options: ["और भी बड़ा speedup, क्योंकि interference रुकावट थी", "असल में महँगा random-number generation — measurement से noise मिलेगा, जवाब की तरफ कोई bias नहीं", "qubits classical bits बन जाते हैं", "computation आधे time में चलेगा"],
        answer: 1,
        why: "interference के बिना steering नहीं है: amplitudes न कट सकती हैं न बढ़ सकती हैं, इसलिए readout में सही जवाब की तरफ कोई bias नहीं होता।" }
    ],
    references: [
      { cite: "Nielsen &amp; Chuang, <em>Quantum Computation and Quantum Information</em>, Ch. 2 (composite systems, Bell states) और Ch. 4 (quantum circuits)।", url: "", usedFor: "Bell-pair non-separability, interference cross-terms और no-signaling argument।" }
    ]
  },
  "m1a-merits": {
    simple: raw`

    <p>यहीं वह वादा है जिसने इस field को launch किया। कुछ problems बढ़ने पर <strong>exponentially कठिन</strong> होते जाते हैं: input size दोगुना करो, और काम दोगुना नहीं होता — explode हो जाता है। ऐसे problem के सामने classical computer ऐसा है जैसे कोई चम्मच से समंदर खाली करने की कोशिश करे। quantum algorithms, कुछ खास problems के लिए, इस explosion को एक gentle slope में बदल सकते हैं।</p>
    <p>वह classic plot imagine करो जो हर quantum course बनाता है। horizontal axis है <strong>problem size</strong> n — मान लो उस number के digits जिसे factor करना है — 0 से 60 तक। vertical axis है <strong>computational steps</strong>, लगभग 1,200,000 तक। अब 3 curves बनाओ। n² वाली curve और n³ वाली curve floor से चिपकी रहती हैं: n = 60 पर भी उन्हें सिर्फ कुछ हज़ार steps चाहिए। लेकिन 2ⁿ वाली curve एक अलग ही जानवर है — पहले flat, फिर rocket की तरह ऊपर और chart के top को तोड़ती हुई। यही rocket है जिसका सामना classical algorithms कठिन problems पर करते हैं। quantum algorithms का मकसद इस rocket को वापस floor तक खींच लाना है।</p>
    <p>flagship example है <strong>factoring</strong> — किसी बड़ी संख्या को उसके prime factors में तोड़ना। जितने classical तरीके हम जानते हैं, वे digits की संख्या के साथ brutally scale होते हैं, और यही hardness आधुनिक encryption की रक्षा करती है: आपके bank transactions इसलिए safe हैं क्योंकि 600-digit number को factor करने में classical machines को universe की age से ज़्यादा time लगेगा। <strong>Shor's algorithm</strong> (1994) उसी number को इतने steps में factor करता है जो सिर्फ <em>polynomially</em> बढ़ते हैं — efficiently, explosively नहीं। वही problem, effort की अलग ही दुनिया।</p>
    <p>तो quantum algorithm की merit इस बात से मापी जाती है कि उसका काम <strong>problem size के साथ कैसे scale</strong> होता है, raw speed से नहीं। quantum computer तेज़ clock नहीं है — यह एक ऐसी machine है जो कुछ classically intractable problems को tractable बना सकती है। वह "कुछ" बहुत मायने रखता है, और अगला section इस बारे में ईमानदार है।</p>
    <p class="myth"><strong>आम ग़लतफ़हमी:</strong> “Shor's algorithm O(log n) steps में factor करता है — मतलब लगभग instant।” नहीं। Shor's <em>polynomial</em> time में चलता है (digits की संख्या में लगभग cubic), जो efficient है लेकिन logarithmic से बहुत दूर। किसी भी chart या slogan से सावधान रहो जो इसे instant जैसा बताए — ईमानदार दावा polynomial बनाम super-polynomial है, और वही पहले से revolutionary है।</p>
  
    `,
    deeper: raw`

    <p>complexity theory इसे एक precise भाषा देती है। <strong>P</strong> उन problems की class है जिन्हें classical computer polynomial time में solve कर सकता है — ऐसा time जो input size n के \(n^2\), \(n^3\) या किसी fixed power की तरह बढ़ता है। <strong>BQP</strong> ("bounded-error quantum polynomial time") इसका quantum analogue है: वे problems जिन्हें quantum computer polynomial time में solve कर सकता है, error probability ज़्यादा से ज़्यादा \(\tfrac{1}{3}\) के साथ। P का हर problem BQP में भी है — quantum computer efficiently वह सब कर सकता है जो classical कर सकता है — और दृढ़ता से माना जाता है (हालाँकि proven नहीं है) कि BQP strictly बड़ा है: इसमें integer factoring और discrete logarithms जैसे problems हैं जो जहाँ तक कोई बता सकता है, P के बाहर हैं।</p>
    <p>Shor's algorithm वह exhibit है जिसने BQP को मशहूर किया। classically, सबसे अच्छा known factoring method — <strong>general number field sieve</strong> — <em>sub-exponential</em> time में चलता है: साफ \(2^n\) नहीं, लेकिन फिर भी super-polynomial, बड़े inputs के लिए practical होने से कहीं ज़्यादा तेज़ी से बढ़ता हुआ। Shor's algorithm, quantum Fourier transform और period-finding पर बना, n-digit number को n में polynomial time में factor करता है (standard multiplication के साथ लगभग \(O(n^3)\)। polynomial बनाम super-polynomial ईमानदार framing है — "exponential speedup" slogan है, और यह justified है, क्योंकि classical scaling exponential जैसी ही है भले ही literally \(2^n\) न हो।</p>
    <p>वह caveat जो field को ईमानदार रखता है: <strong>exponential speedup problem-specific है, universal नहीं।</strong> P के ज़्यादातर problems को कोई meaningful quantum advantage नहीं मिलता, और BQP के बाहर के ज़्यादातर problems quantum computers के लिए भी कठिन रहते हैं। field की कला है structured problems खोजना — periodicity, hidden subgroups, unstructured search (Grover's quadratic speedup), quantum simulation — जहाँ interference और entanglement वह खरीदते हैं जो classical machines नहीं खरीद सकतीं। quantum computer एक specialist instrument है, universal accelerator नहीं।</p>
  
    `,
    keyPoints: [
      "quantum algorithm की merit इस बात से मापी जाती है कि उसका काम problem size के साथ कैसे scale होता है — polynomial बनाम super-polynomial — clock speed से नहीं।",
      "steps-बनाम-size वाले classic plot पर 2ⁿ curve chart से बाहर explode होती है जबकि n² और n³ floor से चिपकी रहती हैं; quantum algorithms का मकसद कठिन problems को वापस floor तक लाना है।",
      "factoring flagship है: classically super-polynomial (best known: general number field sieve), quantumly polynomial — Shor's algorithm (1994) से।",
      "Shor's polynomial time में चलता है — digits में लगभग cubic — O(log n) में नहीं; ईमानदार दावा polynomial बनाम super-polynomial है।",
      "exponential speedup problem-specific है: P ⊆ BQP strictly बड़ा माना जाता है लेकिन proven नहीं है, और रोज़मर्रा के ज़्यादातर problems को quantum computers से कुछ नहीं मिलता।"
    ],
    quiz: [
      { q: "computational steps (y-axis) बनाम problem size n (x-axis, 0–60) वाले classic plot पर, n² और n³ curves की तुलना में 2ⁿ curve कैसी दिखती है?",
        options: ["तीनों curves chart के floor के पास रहती हैं", "2ⁿ curve flat रहती है जबकि n² और n³ ऊपर explode होती हैं", "2ⁿ curve rocket की तरह chart से बाहर ऊपर जाती है जबकि n² और n³ floor से चिपकी रहती हैं", "curves identical हैं — scaling सिर्फ constants का मामला है"],
        answer: 2,
        why: "exponential scaling n के साथ explode होती है; polynomial curves (n², n³) धीरे बढ़ती हैं। quantum algorithms का पूरा point है कठिन problems को rocket curve से floor तक लाना।" },
      { q: "Shor's factoring algorithm के बारे में कौन-सा कथन सही है?",
        options: ["यह n-digit number को O(log n) steps में factor करता है — मतलब लगभग instant", "यह polynomial time में चलता है (digits में लगभग cubic), जबकि best known classical methods super-polynomial हैं", "यह classical factoring से slower है लेकिन कम memory use करता है", "यह prove करता है कि P = BQP"],
        answer: 1,
        why: "Shor's polynomial है, जबकि classical general number field sieve sub-exponential scale होता है। O(log n) एक myth है; P बनाम BQP की strictness अभी unproven है।" },
      { q: "एक startup दावा करता है कि उसका quantum computer 'सारे computing tasks को exponentially speed up' करेगा। इस दावे में क्या ग़लत है?",
        options: ["कुछ नहीं — quantum computers हर computation को accelerate करते हैं", "quantum speedup problem-specific है: P के ज़्यादातर problems को कम फ़ायदा मिलता है, और BQP के बाहर के problems कठिन रहते हैं", "quantum computers हर चीज़ में classical से slower हैं", "exponential speedup सिर्फ factoring पर लागू होता है, और कुछ पर नहीं"],
        answer: 1,
        why: "quantum advantage structured problems (periodicity, search, simulation) पर लागू होता है; यह universal accelerator नहीं है।" }
    ],
    references: [
      { cite: "Shor, P., \"Algorithms for quantum computation: discrete logarithms and factoring\" (Proc. 35th FOCS, 1994)।", url: "https://arxiv.org/abs/quant-ph/9508027", usedFor: "Shor's polynomial-time factoring result और quantum period-finding में उसका आधार।" },
      { cite: "Nielsen &amp; Chuang, <em>Quantum Computation and Quantum Information</em>, Ch. 3 (complexity classes P और BQP)।", url: "", usedFor: "P बनाम BQP framing और quantum speedup की problem-specific प्रकृति।" }
    ]
  },
  "m1a-three-circles": {
    simple: raw`

    <p>quantum computing की सबसे साफ़ तस्वीरों में से एक है तीन circles वाला एक Venn diagram। यह पूछने का तरीका है: वे quantum algorithms कहाँ हैं जिनके लिए machine बनाना वाकई worthwhile है? Diagram जवाब नहीं देता — लेकिन हर candidate कहाँ खड़ा है, यह बिल्कुल बता देता है।</p>
    <p>तीन circles हैं — <strong>practical utility</strong> (क्या algorithm असली दुनिया का problem solve करता है — chemistry, logistics, cryptography — जिसे किसी को सच में solve कराना हो?), <strong>few qubits</strong> (क्या यह थोड़े-से qubits पर चल सकता है, जैसे हम आज बना सकते हैं?), और <strong>quantum advantage</strong> (क्या यह best classical computer से genuinely बेहतर है?)। जहाँ 3 overlap होते हैं, वही goal है: एक useful, buildable, genuinely तेज़ quantum computation।</p>
    <p>2 landmark results बताते हैं कि वह center इतना मुश्किल क्यों है। <strong>Shor's algorithm</strong> <em>practical utility</em> और <em>quantum advantage</em> के overlap में मज़बूती से बैठता है: बड़ी संख्याओं के factors exponentially तेज़ निकालना enormously useful है (आज की encryption टूट जाती है) और true quantum speedup भी। लेकिन यह <strong>नहीं</strong> पहुँचता "few qubits" वाले circle तक — cryptographically relevant numbers पर इसे चलाने के लिए हज़ारों reliable logical qubits चाहिए, यानी error correction मिलाकर millions of physical qubits। Shor's diagram में है, लेकिन center से दूर।</p>
    <div class="compare">
      <div><h4>Shor's algorithm</h4><p>Practical utility + quantum advantage — लेकिन हमारे पास जितने qubits हैं, उससे कहीं ज़्यादा चाहिए।</p></div>
      <div><h4>Quantum supremacy (2019)</h4><p>Few qubits + quantum advantage — लेकिन उस task का कोई practical use नहीं था।</p></div>
    </div>
    <p>Google का 2019 का <strong>quantum supremacy</strong> experiment एक अलग overlap में बैठता है: <em>few qubits</em> और <em>quantum advantage</em>। ~53-qubit processor ने एक sampling task चलाया जिसे कोई supercomputer reasonable time में reproduce नहीं कर सकता था — एक modest chip पर genuine quantum speedup। लेकिन यह <strong>नहीं</strong> पहुँचता "practical utility" वाले circle तक: वह task, random circuit sampling, इसलिए चुना गया था क्योंकि classical machines के लिए कठिन है, इसलिए नहीं कि किसी को उसका answer चाहिए। तो diagram का message ही field का central tension है: सबसे useful algorithms को सबसे ज़्यादा qubits चाहिए, और आज की machines के पास सबसे कम हैं। research की हर line — बेहतर hardware, error correction, smarter algorithms — नतीजों को उस desired center की ओर खींचने की कोशिश है। center आज खाली है; diagram का point ही यही है।</p>
  
    `,
    deeper: raw`

    <p>3 circles overlap करने से कतराते क्यों हैं? क्योंकि "few qubits" और "quantum advantage" एक-दूसरे के खिलाफ खींचते हैं। छोटे device पर advantage के लिए deep, intricate circuits चाहिए; noise deep circuits को खत्म होने से पहले ही नष्ट कर देता है। वहीं "practical utility" का मतलब आमतौर पर बड़े problem instances होते हैं — असली molecule को simulate करना, असली key को factor करना — जिनके लिए कई qubits और लंबी coherence चाहिए। औपचारिक रूप से, हर circle एक resource demand है: utility को problem size चाहिए, advantage को ऐसी circuit complexity चाहिए जो classical machines match न कर सकें, और "few qubits" को चाहिए कि पूरी चीज़ NISQ-era device में fit हो जाए। 3 को एक साथ satisfy करना ही field का open problem है।</p>
    <p>2019 के supremacy experiment को precise भाषा में समझना चाहिए। Google के Sycamore processor ने एक random quantum circuit के output को sample किया — ऐसा task जिसकी cost \(2^{53}\) जैसी बढ़ती है, 53-qubit state space का dimension — लगभग 200 seconds में। Google का estimate था कि best supercomputer को ~10,000 साल लगेंगे; IBM ने जवाब दिया कि बेहतर classical algorithms और पर्याप्त disk storage के साथ यह दिनों में हो सकता है। Diagram के लिए यह बहस बगल की बात है: exact classical cost जो भी हो, यह एक असली quantum computation थी जिसे कोई classical machine आसानी से नहीं कर सकती थी — एक असली chip पर — और यह ठीक वहीं उतरी जहाँ diagram predict करता है: utility के बिना advantage।</p>
    <p>इसके contrast में Shor's देखिए। \(n\)-bit number के लिए quantum circuit को सिर्फ \(O(n)\) qubits चाहिए — polynomial, exponential नहीं — तो सिद्धांत रूप में यह efficient है। दिक्कत constant factors में है: हज़ारों logical qubits, हर एक error correction से protected जिसके लिए सैकड़ों से हज़ारों physical qubits चाहिए, plus deep circuits और लंबी coherence। resource estimate millions of physical qubits का है। Shor's एक ऐसा algorithm है जो machine का इंतज़ार कर रहा है — utility और advantage confirmed, "few qubits" denied।</p>
    <p>इस तरह पढ़ने पर diagram एक research map भी है। Error correction हर qubit को बेहतर बनाकर नतीजों को "few qubits" की ओर ले जाता है; नया hardware "few" की boundary को आगे बढ़ाता है; और algorithm design ऐसे problems खोजता है जो useful भी हों और NISQ-sized भी — VQE और QAOA जैसे variational algorithms ठीक इसी खोज में जीते हैं। Progress इसी से मापी जाती है कि नतीजे center की ओर कितने migrate करते हैं। (यह भी देखें: <a href="/hi/lessons/shors-algorithm/">Shor's algorithm</a>, <a href="/hi/lessons/grovers-algorithm/">Grover's algorithm</a>, <a href="/hi/quantum-computing-10-questions/">10 सवालों में quantum computing</a>।)</p>
  
    `,
    keyPoints: [
      "practical utility, few qubits और quantum advantage का Venn diagram worthwhile quantum algorithms की खोज को organize करता है।",
      "center — 3 एक साथ — goal है, और आज वह खाली है।",
      "Shor's algorithm में utility और advantage है, लेकिन NISQ devices जितने qubits देते हैं, उससे कहीं ज़्यादा चाहिए।",
      "2019 के supremacy experiment में ~53 qubits पर advantage था, लेकिन उसने कोई practical problem solve नहीं किया।",
      "hardware, error correction और algorithm design — सब नतीजों को center की ओर खींचने की कोशिशें हैं।"
    ],
    quiz: [
      { q: "three-circles diagram में Shor's algorithm कहाँ बैठता है?",
        options: ["center में — 3 circles में", "practical utility + quantum advantage में, लेकिन few qubits में नहीं", "few qubits + quantum advantage में, लेकिन practical utility में नहीं", "सिर्फ quantum advantage वाले circle में"],
        answer: 1,
        why: "Shor's enormously useful है और true speedup भी, लेकिन इसे हज़ारों logical qubits चाहिए — 'few' से बहुत दूर।" },
      { q: "Google का 2019 supremacy experiment diagram के center से क्यों चूकता है?",
        options: ["इसने इतने qubits use किए कि 'few' नहीं गिने गए", "यह ~53 qubits पर genuine speedup के साथ चला, लेकिन उस task का कोई practical use नहीं था", "यह best classical supercomputer से slower था", "यह असल में quantum hardware पर कभी चला ही नहीं"],
        answer: 1,
        why: "random circuit sampling classical hardness के लिए चुना गया था, इसलिए नहीं कि किसी को उसका answer चाहिए।" },
      { q: "किसी algorithm को desired center तक पहुँचने के लिए क्या चाहिए?",
        options: ["classical supercomputer पर चलना", "असली problem solve करना, classical machines को हराना, और modest qubit count पर fit होना", "जितने physically possible हों, उतने qubits use करना", "quantum advantage से बचना"],
        answer: 1,
        why: "center 3 circles का overlap है: utility, advantage और few qubits।" }
    ],
    references: [
      { cite: "Arute et al., \"Quantum supremacy using a programmable superconducting processor\", Nature 574, 505–510 (2019).", url: "https://www.nature.com/articles/s41586-019-1666-5", usedFor: "2019 supremacy experiment — ~53 qubits पर random circuit sampling।" },
      { cite: "IBM, \"On 'quantum supremacy'\" (2019).", url: "https://www.ibm.com/quantum/blog/on-quantum-supremacy", usedFor: "supremacy experiment के classical-cost पर बहस।" }
    ]
  },
  "m1a-nisq": {
    simple: raw`

    <p>अगर qubits इतने powerful हैं, तो आज के quantum computers में सिर्फ कुछ दर्जन या कुछ सौ ही क्यों होते हैं — जबकि आपके laptop में billions of transistors हैं? Short answer: qubit एक prima donna है। यह तभी quantum रहता है जब दुनिया से protected हो, और 1 qubit को protect करना मुश्किल है; 1,000 को protect करना — हर एक wired, हर एक पड़ोसियों से बात करता हुआ — enormously ज़्यादा मुश्किल।</p>
    <p>3 forces आपके खिलाफ लड़ती हैं। पहली, <strong>control</strong>: हर qubit को अपनी control lines चाहिए, और हर नए qubit के साथ wiring और calibration की complexity बढ़ती जाती है। दूसरी, <strong>noise</strong>: गर्मी, कंपन, stray electromagnetic fields — कोई भी disturbance qubit से जानकारी बाहर leak कर देती है और उसका superposition नष्ट कर देती है। physicists इसे <strong>decoherence</strong> कहते हैं, और यही field का central दुश्मन है। तीसरी, <strong>ठंड</strong>: कई qubit designs (जैसे superconducting circuits) सिर्फ absolute zero के पास ही quantum-mechanically behave करते हैं, इसलिए पूरा processor deep space से भी ठंडे dilution refrigerator के अंदर रहता है।</p>
    <p>इसीलिए हम "सिर्फ कुछ qubits" के पीछे भागते हैं — और इसीलिए जिस era में हम जी रहे हैं, उसका एक नाम है: <strong>NISQ</strong>, Noisy Intermediate-Scale Quantum (2018 में John Preskill का दिया शब्द)। <em>Noisy</em>: error rates high हैं और error-correcting codes अभी practical use में नहीं हैं — हर operation थोड़ा-बहुत ग़लत होता है। <em>Intermediate-scale</em>: qubit counts दसियों से सैकड़ों में हैं — कुछ से कहीं ज़्यादा, लेकिन उन millions से कहीं कम जो fault-tolerant algorithms को चाहिए होंगे।</p>
    <p>race में भीड़ है और funding भी खूब है: Google, IBM, Intel, Microsoft, D-Wave, Rigetti, IonQ और कई दूसरे अलग-अलग qubit technologies पर machines बना रहे हैं, और governments और companies के field पर bet लगाने से investment तेज़ी से बढ़ा है। लेकिन सबसे ज़्यादा मायने रखने वाला number headline qubit count नहीं है — वह यह है कि उनमें से कितने <em>अच्छे</em> qubits हैं।</p>
    <div class="note-box">
      <p><strong>100 noisy qubits, 10 excellent qubits से हार सकते हैं।</strong> इसीलिए field ने raw count से बेहतर yardsticks बनाए: <strong>quantum volume</strong> qubit count और error rates को एक number में जोड़ता है, और <strong>CLOPS</strong> — circuit layer operations per second — मापता है कि machine असल में कितनी तेज़ circuits चलाती है। किसी भी quantum computer के बारे में सही सवाल कभी "कितने qubits हैं?" नहीं होता, बल्कि "noise हावी होने से पहले यह कौन-सा काम का circuit चला सकती है?" होता है।</p>
    </div>
    <p>(यह भी देखें: <a href="/hi/lessons/decoherence/">Decoherence</a>, <a href="/hi/quantum-computing-10-questions/">10 सवालों में quantum computing</a>।)</p>
  
    `,
    deeper: raw`

    <p>Quantum volume (QV) एक ही number में यह जवाब देने की कोशिश करता है: "यह machine कितनी बड़ी <em>सफल</em> computation चला सकती है?" Definition: machine किसी width और depth \(d\) तक के random square circuits reliably चला सकती है, और quantum volume है \[QV = 2^{\min(N,\,d(N))}\] जहाँ \(N\) qubits की संख्या है और \(d(N)\) वह सबसे बड़ी circuit depth है जो machine acceptable error के साथ achieve करती है। \(\min\) ही point है: depth के बिना width बेकार है — 1,000 qubits जो 2 layers के बाद decohere हो जाएँ, कुछ interesting नहीं चला सकते।</p>
    <p>Depth इसलिए मायने रखती है क्योंकि हर gate fail होने का एक मौका है। अगर हर two-qubit gate probability \(p\) से fail होता है, तो कई gates वाला circuit लगभग \((1-p)^{\text{gates की संख्या}}\) probability से succeed करता है — operations की संख्या में exponential decay। error rate को 1% से 0.1% करना circuits को सिर्फ थोड़ा बेहतर नहीं बनाता; यह achievable depth को लगभग 10 गुना बढ़ा देता है, और चूँकि QV depth में exponential है, quantum volume orders of magnitude jump कर सकता है। इसीलिए एक modest hardware improvement QV में huge leap जैसा दिख सकता है — और vendors fidelity के पीछे उतनी ही मेहनत करते हैं जितनी qubit count के पीछे।</p>
    <p>CLOPS — circuit layer operations per second — वह मापता है जो QV नहीं मापता: <strong>speed</strong>। किसी machine का quantum volume impressive हो सकता है लेकिन 1 circuit चलाने में उसे 1 घंटा लग सकता है; CLOPS गिनता है कि वह प्रति second कितनी circuit layers execute करती है — gate times, measurement speed और control stack के classical overhead सब मिलाकर। यह उसी सवाल का quantum analogue है: processor कितना powerful है, यह नहीं — आपका program असल में कितनी तेज़ चलता है, यह।</p>
    <p>ये metrics मिलकर NISQ की कहानी ईमानदारी से बताते हैं: हमारे पास 1,000 से ज़्यादा physical qubits वाली announced machines हैं, फिर भी quantum volumes जो सिर्फ कुछ दर्जन <em>effective</em> qubits के बराबर हैं — और production में अभी कोई error correction नहीं है। NISQ era हर qubit को गिनने का era है: shallow circuits, clever compilation और error mitigation — जब तक fault tolerance न आ जाए।</p>
  
    `,
    keyPoints: [
      "qubit तभी quantum रहता है जब isolated हो; control complexity, noise (decoherence) और cooling scaling को मुश्किल बनाते हैं।",
      "NISQ = Noisy Intermediate-Scale Quantum: high error rates, error correction अभी use में नहीं, और qubit counts दसियों से सैकड़ों में।",
      "headline qubit counts गुमराह करते हैं — मायने यह रखता है कि कितने qubits अच्छे हैं।",
      "quantum volume, QV = 2^min(N, d(N)), qubit count को achievable circuit depth के साथ जोड़ता है; depth error rates से limited होती है।",
      "CLOPS (circuit layer operations per second) मापता है कि machine असल में कितनी तेज़ circuits execute करती है।"
    ],
    quiz: [
      { q: "NISQ में 'Noisy' का क्या मतलब है?",
        options: ["machines physically शोर करती हैं", "error rates high हैं और error-correcting codes अभी practical use में नहीं हैं", "qubits सुनाई देने वाली तरह vibrate करते हैं", "results hype के साथ publish होते हैं"],
        answer: 1,
        why: "NISQ devices practical error correction के बिना चलते हैं, इसलिए हर operation में fail होने का असली chance होता है।" },
      { q: "QV = 2^min(N, d(N)) में min क्यों मायने रखता है?",
        options: ["यह marketing के लिए number छोटा करता है", "depth के बिना width बेकार है — 2 layers के बाद decohere होने वाले qubits कोई interesting circuit नहीं चला सकते", "यह qubits को bits में convert करता है", "यह cooling power मापता है"],
        answer: 1,
        why: "noise computation को depth achieve होने से पहले मार दे, तो huge qubit count का कोई मतलब नहीं।" },
      { q: "CLOPS क्या मापता है?",
        options: ["machine में qubits की संख्या", "machine प्रति second कितनी circuit layers execute करती है — उसकी असली speed", "dilution refrigerator का temperature", "प्रति qubit cost"],
        answer: 1,
        why: "CLOPS (circuit layer operations per second) gate times, measurement और control overhead को एक speed metric में जोड़ता है।" }
    ],
    references: [
      { cite: "Preskill, \"Quantum computing in the NISQ era and beyond\", Quantum 2, 79 (2018).", url: "https://quantum-journal.org/papers/q-2018-08-06-79/", usedFor: "NISQ concept और उसकी framing।" },
      { cite: "IBM Quantum — quantum volume और CLOPS definitions (public documentation).", url: "https://www.ibm.com/quantum/blog/quantum-volume-and-clops", usedFor: "quantum volume formula और CLOPS speed metric।" }
    ]
  },
  "m1a-ml-basics": {
    simple: raw`

    <p>machine learning है data से prediction। आप computer को हज़ारों examples दिखाते हैं, और वह ऐसे examples के लिए answer predict करना सीख जाता है जो उसने कभी देखे नहीं। email spam filters, photo tagging, weather forecasts, product recommendations — यह सब एक ही idea के अलग-अलग कपड़े हैं।</p>
    <p>गणितीय रूप से ML 2 चीज़ों का जोड़ है: <strong>function approximation</strong> plus <strong>optimization</strong>। कोई unknown true function होता है — "यह email देखते हुए, spam है या नहीं?" — और आप एक flexible <strong>model</strong> चुनते हैं (support vector machine, neural network) जिसमें <strong>parameters</strong> नाम के knobs होते हैं। फिर आप knobs को तब तक घुमाते हैं जब तक model के answers training data से match न करने लगें। हर <strong>datapoint</strong> एक example है जिससे model सीखता है।</p>
    <p>field problems को families में बाँटती है। <strong>Classification</strong>: answer एक छोटे fixed menu से आता है — क्या यह picture में बिल्ली है या नहीं, क्या यह email spam है या नहीं? <strong>Regression</strong>: answer एक number होता है जो कुछ भी हो सकता है — कल का temperature, अगले quarter की sales growth। दोनों <strong>supervised learning</strong> हैं: आप ऐसे examples पर train करते हैं जिनमें सही answers पहले से होते हैं।</p>
    <p><strong>Clustering</strong>: categories आपको पहले से कोई नहीं बताता — आप machine को data का ढेर देते हैं और कहते हैं similar items को group कर दो, जैसे customers को buying habits से sort करना, बिना predefined labels के। <strong>Recommendation systems</strong>: predict करना कि आप आगे क्या देखेंगे या खरीदेंगे — human taste effectively limitless है, इसलिए "menu" कभी fixed नहीं होता। <strong>Dimensionality reduction</strong>: हज़ारों features वाले data को कुछ essential features तक squeeze करना — जो मायने रखता है वह रखना, noise हटाना — जैसे photo को compress करना बिना चेहरा खोए। ये <strong>unsupervised learning</strong> हैं: machine बिना labels वाले data में structure खोजती है।</p>
    <p class="myth"><strong>आम ग़लतफ़हमी:</strong> "machine learning" का मतलब है computer समझता है। नहीं — यह data पर एक flexible function fit करता है और उम्मीद करता है कि fit generalize करेगा। 4 families, 1 engine: function approximate करो, fit optimize करो। अगले lesson की हर चीज़ इसी vocabulary पर बनी है।</p>
  
    `,
    deeper: raw`

    <p>"Function approximation plus optimization" को खोलना चाहिए। आप एक model family चुनते हैं — मान लीजिए neural network — जो असल में एक parameterized function है \(f(x; \theta)\), जहाँ \(x\) input है और \(\theta\) सारे knobs को इकट्ठा करता है। आप एक <strong>loss function</strong> \(L(\theta)\) define करते हैं जो मापता है कि model training data पर कितना खराब करता है — जैसे predictions और true answers के बीच average squared error। <strong>Optimization</strong> उस \(\theta\) की खोज है जो \(L\) को minimize करे। Training <em>वही</em> खोज है।</p>
    <p>supervised बनाम unsupervised labels की बात है। supervised learning में हर training example एक pair \((x, y)\) होता है: input plus सही answer, और loss prediction को answer से compare करता है। unsupervised learning में आपको सिर्फ \(x\)'s मिलते हैं — कोई answers नहीं — इसलिए loss को कुछ intrinsic मापना पड़ता है, जैसे हर cluster कितना tightly जुड़ा है या compressed representation original को कितनी faithfully reconstruct करता है। कोई labels नहीं, कोई answer key नहीं: machine अपना homework खुद grade करती है।</p>
    <p>एक subtlety जो course के quantum half में साथ ले जानी चाहिए: ML models उतने ही अच्छे होते हैं जितनी उनकी assumptions। जो model training data पर perfectly fit हो लेकिन नए data पर fail करे, वह <strong>overfitting</strong> है — उसने सीखने के बजाय रट लिया। पूरा game <strong>generalization</strong> है: ऐसे data पर अच्छा perform करना जो model ने कभी देखा नहीं। machine learning में हर quantum speedup claim को इसी standard पर judge किया जाएगा — अगले lesson की cautionary tale समेत।</p>
    <p>(आगे: <a href="/hi/quantum-computing-10-questions/">quantum machine learning कहाँ fit होता है</a> — और उसके 4 flavors।)</p>
  
    `,
    keyPoints: [
      "machine learning है data से prediction — गणितीय रूप से, function approximation plus optimization।",
      "model एक parameterized function होता है; parameters को training data पर loss function minimize करने के लिए tune किया जाता है।",
      "classification और regression supervised learning हैं: training examples में सही answers होते हैं।",
      "clustering, recommendation और dimensionality reduction unsupervised हैं: machine बिना labels के structure खोजती है।",
      "असली goal generalization है — overfitting का मतलब है सीखने के बजाय training data को रट लेना।"
    ],
    quiz: [
      { q: "गणितीय रूप से 'model को train करना' का क्या मतलब है?",
        options: ["computer को हाथ से grammar rules सिखाना", "ऐसे parameters खोजना जो training data पर loss function minimize करें", "training data को एक बार पढ़कर delete कर देना", "model को जितना हो सके complicated बनाना"],
        answer: 1,
        why: "training optimization है: knobs (parameters) को तब तक घुमाना जब तक data पर model की errors (loss) minimum न हो जाएँ।" },
      { q: "पिछले मौसम से कल के temperature को predict करना किसका example है…",
        options: ["classification", "clustering", "regression", "dimensionality reduction"],
        answer: 2,
        why: "output एक number है जो (effectively) कोई भी value ले सकता है — यही regression है, एक supervised task।" },
      { q: "clustering को 'unsupervised' क्या बनाता है?",
        options: ["results को कोई human कभी देखता नहीं", "training data में कोई labels नहीं होते — machine खुद similar items को group करती है", "यह बिना बिजली के चलता है", "इसे असली problems के लिए use नहीं किया जा सकता"],
        answer: 1,
        why: "unsupervised learning बिना सही answers वाले bare datapoints पर काम करती है; structure खोजनी पड़ती है, सिखाई नहीं जाती।" }
    ]
  },
  "m1a-qml": {
    simple: raw`

    <p>"quantum machine learning" सुनने में 1 subject लगता है, लेकिन असल में यह 4 है — और इन्हें mix कर देना ही field की ज़्यादातर confusion की वजह है। इन्हें sort करने का साफ़ तरीका है एक 2×2 table: rows हैं <strong>data-generating system</strong> (classical C, या quantum Q), columns हैं <strong>data-processing device</strong> (classical C, या quantum Q)। इससे 4 boxes मिलते हैं: CC, CQ, QC, QQ।</p>
    <p><strong>CC — quantum-inspired algorithms।</strong> classical computer, classical data — लेकिन algorithm quantum computing से ideas उधार लेता है। मशहूर कहानी: 2016 में Kerenidis और Prakash ने एक quantum recommendation algorithm propose किया जो known classical तरीकों से exponentially तेज़ साबित हुआ था। 2018 में undergraduate Ewin Tang ने quantum-inspired principles से एक classical algorithm खोज निकाला जो उसे match करता था — और अपने PhD में उन्होंने कई और quantum ML algorithms को "dequantize" कर दिया। सबक: हर quantum speedup किसी चालाक classical idea के सामने टिक नहीं पाता।</p>
    <p><strong>QC — quantum के लिए machine learning।</strong> classical computer, लेकिन अब <em>data</em> एक quantum system से आता है: qubits को calibrate करने, noise से लड़ने और quantum error correction में मदद के लिए ML use करना — यहाँ तक कि neural networks से ऐसे quantum systems की नकल करना जिन्हें हम सीधे simulate नहीं कर सकते। यह flavor आज काम करता है और इसे किसी quantum computer की ज़रूरत नहीं।</p>
    <p><strong>CQ — machine learning के लिए quantum।</strong> classical data, quantum processor। course के लिए यह सबसे interesting box है — और सबसे delicate भी। poster child है linear systems solve करने वाला <strong>HHL algorithm</strong>: theory में exponentially तेज़, classical O(n) के मुकाबले O(log n)। catch है <strong>input-output problem</strong>: classical data को quantum computer में load करना और answer को बाहर पढ़ना ही O(n) cost करता है, जो speedup को मिटा सकता है। quantum RAMs theory में इसे fix कर देंगे — लेकिन वे exist नहीं करते, और शायद कभी करेंगे भी नहीं।</p>
    <p><strong>QQ — quantum in, quantum out।</strong> data भी quantum, processor भी quantum: particle collider (CERN का LHC) के output को analyze करना, या किसी दूसरे quantum computer के output को। यहाँ कोई loading problem नहीं है — data पहले से quantum है — और ML principles CQ वाले box से सीधे carry over होते हैं। 4 boxes, 1 ईमानदार summary: QC आज काम करता है, CC सबको humble रखता है, CQ great hope है जिसमें loading-shaped hole है, और QQ quantum data के abundant होने का इंतज़ार कर रहा है। (यह भी देखें: <a href="/hi/lessons/hhl-algorithm/">HHL algorithm</a>।)</p>
  
    `,
    deeper: raw`

    <p>dequantization ने चोट क्यों पहुँचाई? क्योंकि Kerenidis–Prakash recommendation algorithm एक flagship था: एक genuinely practical problem के लिए exponential speedup, HHL वाली ही linear-algebra machinery पर बना। Tang की insight थी कि speedup के fine print — यह assumption कि data एक special quantum-friendly format में आता है — को classically एक analogous classical data structure (sampling access) से match किया जा सकता है। एक बार जब उन्होंने दिखा दिया कि comparable assumptions के तहत classical algorithm को वही advantage मिलता है, तो "exponential speedup" polynomial में evaporate हो गया। reality check: quantum ML speedup claim को अपना input model specify करना होगा, वरना यह quantum athlete की तुलना tied shoes वाले classical athlete से करने जैसा है।</p>
    <p>loading bottleneck को उसका पूरा weight मिलना चाहिए, क्योंकि यह पूरे CQ program का central caveat है। HHL \(Ax = b\) को \(O(\log n)\) time में solve करता है — लेकिन सिर्फ तब जब vector \(b\) पहले से quantum state \(|b\rangle\) के रूप में loaded हो, और सिर्फ तब जब आप answer के रूप में quantum state \(|x\rangle\) से संतुष्ट हों, न कि सारे \(n\) classical numbers से। classical data से \(|b\rangle\) तैयार करना generally \(O(n)\) cost करता है; \(x\) को पूरा बाहर पढ़ना भी \(O(n)\) cost करता है। तो exponential speedup सिर्फ उन problems में बचता है जहाँ input सस्ते में prepare हो और आपको answer की कोई global property चाहिए हो — expectation value, पूरा vector नहीं।</p>
    <p>quantum RAM (QRAM) theoretical escape hatch है: एक device जो classical data को \(O(\log n)\) time में superposition में load कर दे। लेकिन कोई QRAM exist नहीं करता, और एक बनाना एक enormous routing network में coherence maintain करने जैसा है — arguably उतना ही मुश्किल जितना खुद quantum computer बनाना, ऊपर से error-correction overhead। ज़्यादातर researchers QRAM को "कभी न कभी, शायद" का placeholder मानते हैं, plan नहीं। जब तक input problem solve नहीं होता, CQ algorithms ऐसे speedups हैं जो data pipeline का इंतज़ार कर रहे हैं।</p>
    <p>इसीलिए QQ conceptually सबसे clean box है: जब data-generating system खुद quantum हो — collider, quantum sensor network, quantum simulation — तो load करने को कुछ है ही नहीं। state, state के रूप में आती है। ML principles (पिछले lesson से function approximation plus optimization) unchanged carry over होते हैं; सिर्फ substrate बदलता है। field का bet है कि जैसे-जैसे quantum devices बढ़ेंगे, quantum-native data भी बढ़ेगा — और QQ को विरासत मिलेगी। पूरे 2×2 का ईमानदार summary: physics असली है, speedups conditional हैं, और conditions ही interesting part हैं।</p>
  
    `,
    keyPoints: [
      "quantum ML 4 boxes में बँटता है — data source (C/Q) × processing device (C/Q): CC, CQ, QC, QQ।",
      "CC (dequantized algorithms): Ewin Tang के 2018 के classical match ने दिखाया कि कुछ 'quantum speedups' असल में बेहतर input assumptions की बात थे।",
      "QC (quantum के लिए ML): असली quantum systems को improve करने वाला classical ML — calibration, error correction — आज काम करता है।",
      "CQ (ML के लिए quantum): HHL O(log n) बनाम O(n) का वादा करता है, लेकिन input-output loading problem speedup को मिटा सकता है; QRAM exist नहीं करता।",
      "QQ (quantum in, quantum out): कोई loading problem नहीं — सबसे clean box, quantum-native data के abundant होने का इंतज़ार।"
    ],
    quiz: [
      { q: "2×2 table में 'CQ' का क्या मतलब है?",
        options: ["classical computer पर classical data process करना", "quantum computer पर classical data process करना", "classical computer पर quantum data process करना", "quantum computer पर quantum data process करना"],
        answer: 1,
        why: "पहला letter = data-generating system (classical), दूसरा = processing device (quantum)।" },
      { q: "Ewin Tang के 2018 के result का significance क्या था?",
        options: ["उन्होंने पहला quantum computer बनाया", "उन्होंने Kerenidis–Prakash quantum recommender को match करने वाला classical algorithm खोजा — उसके speedup को 'dequantize' कर दिया", "उन्होंने prove किया कि quantum computers classical को कभी हरा नहीं सकते", "उन्होंने quantum RAM invent किया"],
        answer: 1,
        why: "comparable input assumptions के तहत exponential speedup evaporate हो गया — QML claims के लिए reality check।" },
      { q: "HHL जैसे CQ algorithms के लिए input-output problem central caveat क्यों है?",
        options: ["quantum computers में input ports नहीं होते", "classical data को अंदर load करना और पूरा answer बाहर पढ़ना ही O(n) cost करता है, जो O(log n) speedup को मिटा सकता है", "classical data को numbers के रूप में represent नहीं किया जा सकता", "HHL सिर्फ quantum data पर काम करता है"],
        answer: 1,
        why: "speedup सिर्फ तब बचता है जब input सस्ते में prepare हो और आपको answer की global property चाहिए हो, पूरा vector नहीं।" }
    ],
    references: [
      { cite: "Kerenidis & Prakash, \"Quantum recommendation systems\", arXiv:1603.08675 (2016).", url: "https://arxiv.org/abs/1603.08675", usedFor: "dequantization story के पीछे 2016 quantum recommendation algorithm।" },
      { cite: "Tang, \"A quantum-inspired classical algorithm for recommendation systems\", STOC 2019 (arXiv:1807.04271).", url: "https://arxiv.org/abs/1807.04271", usedFor: "2018 dequantization result और CC flavor।" },
      { cite: "Harrow, Hassidim & Lloyd, \"Quantum algorithm for linear systems of equations\", Phys. Rev. Lett. 103, 150502 (2009).", url: "https://arxiv.org/abs/0811.3171", usedFor: "HHL algorithm और CQ flavor में उसका O(log n) claim।" },
      { cite: "Aaronson, \"Read the fine print\", Nature Physics 11, 291–293 (2015).", url: "https://www.nature.com/articles/nphys3272", usedFor: "HHL-style speedups के caveats, input problem समेत।" }
    ]
  },
};
