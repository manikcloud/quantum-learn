// Hindi (Devanagari) lesson content.
// Rule: explanations in Hindi, technical terms stay in English (Latin script).
// Lessons without an entry fall back to the English content with a banner.

const raw = String.raw;

export const lessonContentHi = {
  qubits: {
    simple: raw`
      <p>जो आप पहले से जानते हैं, वहीं से शुरू करते हैं। classical bit — जो आपके laptop के अंदर होता है — एक <strong>light switch</strong> की तरह है। यह या तो OFF होता है (जिसे हम 0 कहते हैं) या ON (जिसे हम 1 कहते हैं)। बीच में कुछ नहीं होता।</p>
      <p><strong>qubit</strong> एक <strong>घूमते हुए सिक्के</strong> की तरह है। जब सिक्का हवा में घूम रहा होता है, तब वह न चित (heads) होता है, न पट (tails) — वह एक ही समय में दोनों संभावनाओं का <em>मिश्रण (blend)</em> होता है। physicists इस मिश्रण को <strong>superposition</strong> कहते हैं।</p>
      <p>अब qubit का <strong>measurement</strong> कीजिए। यह घूमते सिक्के पर हाथ मारने जैसा है: उसी पल वह चित (0) <em>या</em> पट (1) बन जाता है। घूमना रुक जाता है, मिश्रण खत्म, और आपको एक पक्का जवाब मिल जाता है।</p>
      <div class="compare">
        <div><h4>Classical bit</h4><p>एक light switch: हमेशा ठीक-ठीक 0 या 1।</p></div>
        <div><h4>Qubit</h4><p>एक घूमता सिक्का: जब तक आप देखेंगे नहीं, 0 और 1 का मिश्रण।</p></div>
      </div>
      <p><strong>आपको इसकी परवाह क्यों करनी चाहिए?</strong> क्योंकि यह मिश्रण बहुत तेज़ी से बढ़ता है। एक qubit 2 संभावनाओं को मिलाता है। दो qubits 4 को। तीन 8 को। <strong>दस qubits एक ही समय में 1,024 संभावनाओं को मिलाते हैं</strong> — जबकि 10 classical bits एक बार में सिर्फ एक 10-bit number ही रख सकते हैं। यही exponential जगह वह कच्चा माल है जिसका इस्तेमाल इस course का हर quantum algorithm करता है।</p>
      <p class="myth"><strong>आम ग़लतफ़हमी:</strong> “qubit बस एक ऐसा bit है जो एक साथ 0 और 1 दोनों होता है।” करीब-करीब — लेकिन इस मिश्रण में <em>संरचना (structure)</em> होती है। दोनों संभावनाएँ waves की तरह व्यवहार करती हैं: वे <strong>interfere</strong> कर सकती हैं, एक-दूसरे को काट सकती हैं या बढ़ा सकती हैं। वही interference (lesson 6 में आगे) असली जादू है।</p>
    `,
    deeper: raw`
      <p>गणितीय रूप से, qubit एक two-dimensional complex Hilbert space में एक unit vector होता है। हम इसकी state को <strong>Dirac notation</strong> में इस तरह लिखते हैं</p>
      <p>\[|\psi\rangle = \alpha|0\rangle + \beta|1\rangle, \qquad \alpha, \beta \in \mathbb{C}, \quad |\alpha|^2 + |\beta|^2 = 1.\]</p>
      <p>complex numbers \(\alpha\) और \(\beta\) <strong>probability amplitudes</strong> कहलाते हैं। <strong>Born rule</strong> कहता है: qubit को computational basis में measure कीजिए और आपको \(|0\rangle\) probability \(|\alpha|^2\) के साथ और \(|1\rangle\) probability \(|\beta|^2\) के साथ मिलेगा। measurement के बाद state उसी outcome में <strong>collapse</strong> हो जाती है जिसे आपने देखा — superposition नष्ट हो जाता है।</p>
      <p>एक irrelevant global phase को छोड़ दें, तो हर single-qubit state को इस रूप में लिखा जा सकता है</p>
      <p>\[|\psi\rangle = \cos\frac{\theta}{2}\,|0\rangle + e^{i\phi}\sin\frac{\theta}{2}\,|1\rangle,\]</p>
      <p>जो <strong>Bloch sphere</strong> पर एक बिंदु \((\theta, \phi)\) के साथ one-to-one जुड़ता है: \(|0\rangle\) north pole पर, \(|1\rangle\) south pole पर, और हर equal superposition — जैसे \(|+\rangle = \tfrac{|0\rangle+|1\rangle}{\sqrt{2}}\) — equator पर।</p>
      <p><strong>Qubit बनाम probabilistic bit।</strong> एक classical coin flip भी “probabilities के साथ 0 या 1” होता है — लेकिन उसकी randomness <em>अज्ञान (ignorance)</em> है: सिक्का पहले ही गिर चुका है, बस आपको पता नहीं कि कैसे। qubit का superposition <em>ontological</em> है: measurement से पहले कोई तय तथ्य होता ही नहीं, और amplitudes \(\alpha, \beta\) interfere कर सकते हैं। कोई classical probability distribution interference को दोहरा नहीं सकता — आगे के lessons में यही साबित किया गया है।</p>
      <p>\(n\) qubits के लिए state \(2^n\)-dimensional space में रहती है — single-qubit spaces का <strong>tensor product</strong>। सिर्फ 50 qubits की state लिखने के लिए ही इतने numbers चाहिए जितने कोई classical supercomputer store नहीं कर सकता। यही quantum advantage की जड़ है — और यही कारण है कि quantum systems को classically simulate करना exponentially कठिन है।</p>
    `,
    keyPoints: [
      "qubit, bit का quantum analogue है: एक two-level quantum system।",
      "superposition qubit को measure होने तक α|0⟩ + β|1⟩ के blend के रूप में रहने देता है।",
      "measurement probabilistic होता है (|α|², |β|²) और state को collapse कर देता है।",
      "n qubits को 2ⁿ amplitudes से describe किया जाता है — एक exponential state space।",
      "superposition classical randomness नहीं है: amplitudes interfere कर सकते हैं।",
    ],
    quiz: [
      {
        q: "आप |ψ⟩ = α|0⟩ + β|1⟩ state वाले qubit को measure करते हैं। आपको क्या मिलेगा?",
        options: [
          "हमेशा 0 और 1 का मिश्रण",
          "0 probability |α|² के साथ, या 1 probability |β|² के साथ",
          "0 अगर α, β से बड़ा है, वरना 1",
          "एक बिल्कुल नया qubit",
        ],
        answer: 1,
        why: "measurement superposition को एक ही classical outcome में collapse कर देता है, जिसकी probabilities Born rule से मिलती हैं।",
      },
      {
        q: "4 qubits की state describe करने के लिए कितने complex amplitudes चाहिए?",
        options: ["4", "8", "16", "32"],
        answer: 2,
        why: "n qubits 2ⁿ-dimensional Hilbert space में रहते हैं, इसलिए 4 qubits के लिए 2⁴ = 16 amplitudes चाहिए।",
      },
      {
        q: "superposition में मौजूद qubit के बारे में कौन-सा कथन सत्य है?",
        options: [
          "वह गुप्त रूप से पहले से ही 0 या 1 है — बस हमें पता नहीं",
          "वह 0 और 1 के blend के रूप में मौजूद है, जो interference की अनुमति देता है",
          "उसे classical bit की तरह स्वतंत्र रूप से copy किया जा सकता है",
          "उसे measure करने पर superposition बना रहता है",
        ],
        answer: 1,
        why: "superposition सिर्फ अज्ञान नहीं है — amplitudes interfere करते हैं, जिसे कोई classical hidden state दोहरा नहीं सकता। (और no-cloning theorem perfect copying को मना करता है।)",
      },
    ],
  },
  "phil-why-philosophy": {
    simple: raw`
      <p>यहाँ quantum mechanics का एक शर्मनाक राज़ है: यह विज्ञान के इतिहास का सबसे सफल सिद्धांत है — और सौ साल बाद भी physicists इस बात पर सहमत नहीं हो पाए हैं कि इसका <em>मतलब</em> क्या है। समीकरण experiments की भविष्यवाणी बेदाग़ करते हैं। लेकिन पूछिए कि superposition असल में <em>क्या</em> है, या quantum computer के शुरू होने और measurement के बीच उसके अंदर क्या होता है, तो 6 physicists से 6 अलग जवाब मिलेंगे। ये जवाब physics नहीं हैं। ये <strong>philosophy</strong> हैं।</p>
      <p>और मज़ेदार बात यह है: quantum mechanics के संस्थापक सभी philosophy ही कर रहे थे, और उन्हें इसका पता था। <strong>1927 Solvay Conference</strong> में <strong>Einstein</strong> और <strong>Bohr</strong> ने कई दिनों तक बहस की — समीकरणों पर नहीं, बल्कि reality पर। Einstein ने ज़ोर दिया कि physics को “चीज़ों को स्वयं, न कि सिर्फ़ उनके घटने की संभावना को” describe करना चाहिए। Bohr ने जवाब दिया कि कोई phenomenon सिर्फ़ उसे observe करने के लिए इस्तेमाल किए गए experimental arrangement के सापेक्ष ही परिभाषित होता है। 1926 में Einstein ने <strong>Max Born</strong> को लिखा था: “कम से कम मुझे तो यक़ीन है कि वह [ईश्वर] पासे नहीं खेलता।” वे पासे — quantum randomness — उन्हें philosophically चुभते थे, mathematically नहीं।</p>
      <p><strong>Schrödinger</strong> भी philosophy ही कर रहे थे जब उन्होंने 1935 में अपनी मशहूर बिल्ली बनाई। वह बिल्ली — observe होने तक एक साथ मरी हुई और ज़िंदा — बिल्लियों के बारे में कोई दावा नहीं थी। वह एक <em>reductio ad absurdum</em> थी, एक philosophical हथियार, जिसे यह दिखाने के लिए बनाया गया था कि Bohr का interpretation बकवास तक ले जाता है। और वह label जिसे सब इस्तेमाल करते हैं, <strong>“Copenhagen interpretation,”</strong> <strong>Heisenberg</strong> ने <strong>1955</strong> में गढ़ा था और इस तथ्य पर पर्दा डालता है कि Bohr और Heisenberg असल में एक-दूसरे से असहमत थे। “मानक दृष्टिकोण” lab coat पहनी हुई philosophy था।</p>
      <p>अब इस course का punchline: <strong>quantum computing खुद philosophy से पैदा हुई थी।</strong> 1985 में <strong>David Deutsch</strong> ने वह paper प्रकाशित किया जिसने इस field की नींव रखी — “Quantum theory, the Church–Turing principle and the universal quantum computer।” उनका कदम philosophical था: उन्होंने <strong>Church–Turing thesis</strong> को — computable क्या है की परिभाषा को — mathematics नहीं बल्कि एक <em>physical</em> सिद्धांत के रूप में पढ़ा। क्या compute किया जा सकता है, यह physics के नियम तय करते हैं; physics quantum है; इसलिए universal computer को quantum computer ही होना चाहिए। Computation एक अमूर्त चीज़ नहीं रहा — वह एक physical process बन गया। और Deutsch की प्रेरणा? वह <strong>many-worlds interpretation</strong> के कट्टर विश्वासी थे — उनका मानना था कि quantum parallelism parallel universes में फैला हुआ computation है। आप जो पूरा field पढ़ रहे हैं, वह इसलिए मौजूद है क्योंकि एक physicist ने quantum mechanics के एक interpretation को गंभीरता से लिया।</p>
      <p>Philosophy बार-बार physics में बदलती रही है। 1964 में <strong>John Bell</strong> ने Einstein–Bohr के पुराने “spooky action” वाले तर्क को एक <em>testable inequality</em> में बदल दिया — philosophy experiment बन गई, और experiments ने (2022 Nobel Prize) “local realism” को हमेशा के लिए ख़त्म कर दिया। <strong>Wheeler</strong> का philosophical नारा “it from bit” — यह idea कि information matter से ज़्यादा fundamental है — ने एक पूरे research program को जन्म दिया जो आज भी चल रहा है। पैटर्न भरोसेमंद है: आज का philosophy seminar कल की laboratory है।</p>
      <p>तो हर quantum computing student एक सौदा करता है, आमतौर पर बिना ध्यान दिए। Textbooks वह सिखाती हैं जिसे philosopher <strong>Tim Maudlin</strong> <strong>“quantum recipe”</strong> कहते हैं — outcomes की भविष्यवाणी करने वाले नियम — एक proper <em>theory</em> के बजाय, जो बताती कि क्या मौजूद है और वह क्या करता है। Recipe आपको calculate करने देती है। लेकिन जैसे ही आप स्पष्ट सवाल पूछते हैं — <em>मेरा quantum computer initialization और measurement के बीच असल में क्या कर रहा है?</em> — recipe ख़ामोश हो जाती है, और ईमानदार जवाब है: physics ने यह तय नहीं किया है। यह module इसी अनसुलझे इलाक़े के बारे में है। इसलिए नहीं कि philosophy सजावट है, बल्कि इसलिए क्योंकि quantum computing में <strong>philosophy load-bearing है</strong>।</p>
      <p class="myth"><strong>आम ग़लतफ़हमी:</strong> “Philosophy of quantum mechanics बस armchair speculation है जिसका असल science पर कोई असर नहीं पड़ता।” Deutsch का 1985 paper, Bell का 1964 theorem और Wheeler का “it from bit” — हर एक philosophy के रूप में शुरू हुआ और हर एक ने experimental physics की दिशा बदल दी। इस field में interpretations research programs हैं।</p>
    `,
    deeper: raw`
      <p>चलिए “why philosophy” तर्क को सटीक बनाते हैं। Quantum mechanics के दो हिस्से हैं, और उनकी philosophical स्थिति बहुत अलग है। पहला है <strong>unitary evolution</strong> — Schrödinger equation,</p>
      <p>\[i\hbar\,\frac{\partial}{\partial t}|\psi\rangle = H|\psi\rangle,\]</p>
      <p>जो deterministic, smooth है, और जिस पर सभी सहमत हैं। दूसरा है <strong>Born rule</strong>,</p>
      <p>\[P(\text{outcome } i) = |\langle i|\psi\rangle|^2,\]</p>
      <p>जो कहता है कि आप क्या <em>observe</em> करेंगे — probabilistically। Quantum mechanics की पूरी philosophy इन दोनों के बीच की खाई में रहती है: समीकरण कहता है कि wavefunction deterministically superpositions में evolve होती है; नियम कहता है कि आप single definite outcomes कुछ probabilities के साथ observe करते हैं। इन्हें क्या जोड़ता है — collapse? branching? ignorance? — यही measurement problem है, और यह अनसुलझा है।</p>
      <p>Deutsch के 1985 वाले कदम को करीब से देखना ज़रूरी है, क्योंकि यह दिखाता है कि philosophy रचनात्मक काम करती है। Classical Church–Turing thesis कहती है कि हर effectively computable function को Turing machine compute कर सकती है। Deutsch का <strong>Church–Turing–Deutsch principle</strong> इसे physically दोहराता है: <em>हर finitely realizable physical system को finite साधनों से चलने वाली एक universal computing machine पूरी तरह simulate कर सकती है</em> — और चूँकि भौतिक जगत quantum-mechanical है, वह universal machine quantum computer ही होनी चाहिए। देखिए क्या हुआ: “computable” mathematics का तथ्य नहीं रहा — वह physics का तथ्य बन गया। Complexity theory physics की एक शाखा बन गई। (जैसा कि computer scientist Charlie Bennett ने बाद में Deutsch को जवाब दिया: physics वह universal computer है जिसे complexity theory describe करती है।)</p>
      <p>Deutsch का Everettianism महज़ सजावट नहीं था — वह इंजन था। <strong>Scott Aaronson</strong> मूल कहानी सुनाते हैं: Deutsch ने सोचा कि क्या कोई <em>खुद पर</em> interference experiment कर सकता है — superposition में रखा एक conscious computer — और तर्क का पीछा करते-करते quantum computing निकल आई। <em>The Fabric of Reality</em> (1997) में Deutsch ने अपनी मशहूर चुनौती जारी की: <strong>“जो लोग अभी भी single-universe world-view से चिपके हैं, उन्हें मैं यह चुनौती देता हूँ: समझाइए कि Shor's algorithm कैसे काम करता है।”</strong> उनका दावा: बड़ी संख्या factor करने वाला quantum computer visible universe के atoms से ज़्यादा computations करता है — तो computation हो <em>कहाँ</em> रही है, अगर parallel universes में नहीं?</p>
      <p>Aaronson — जो Deutsch की बहुत इज़्ज़त करते हैं — विरोध करते हैं, और यह विरोध खुद philosophical है। उनका सुधार: <strong>“A quantum computer is NOT like a massively-parallel classical computer! Exponentially-many basis states, but you only get to observe one of them. Any hope for a speedup rides on the magic of quantum interference.”</strong> उनके विचार में, सबसे सरल quantum speedup, <strong>Deutsch–Jozsa</strong> (1992), भी सभी answers try करके काम नहीं करता, बल्कि interference को इस तरह arrange करके कि ग़लत answers <em>cancel</em> हो जाएँ और function की सही global property single measurement में बच जाए। पूरे field के लिए Aaronson का नारा: quantum computing <strong>“probability theory with minus signs”</strong> है। वही समीकरण, उनके मतलब के बारे में उल्टी कहानियाँ।</p>
      <p>इसीलिए यह module मौजूद है। जो student सिर्फ़ recipe सीखता है, वह circuits चला सकता है लेकिन यह नहीं बता सकता कि circuits <em>असल में क्या</em> हैं। अगले lesson के 6 interpretations हर experimental result को दोहराते हैं — अब तक चली हर quantum computation सहित — फिर भी reality के बारे में असंगत कहानियाँ कहते हैं। इनमें से चुनना (या चुनने से इनकार करना) philosophy है। और जैसा Bell ने दिखाया, आज का philosophical मतभेद कल का Nobel Prize है — बशर्ते कोई वह सवाल ढूँढ़ ले जिसे test किया जा सके।</p>
      <p><strong>आगे पढ़ने के लिए:</strong> Scott Aaronson, <em>Quantum Computing Since Democritus</em> (2013) — computing के philosophical निहितार्थ, एक many-worlds skeptic की नज़र से; David Deutsch, <em>The Fabric of Reality</em> (1997) — Everettian पक्ष, Shor चुनौती सहित; Adam Becker, <em>What Is Real?</em> (2018) — Copenhagen orthodoxy ने विकल्पों को कैसे दरकिनार किया; Philip Ball, <em>Beyond Weird</em> (2018) — interpretations और experiments का सबसे अच्छा single-volume सर्वेक्षण।</p>
    `,
    keyPoints: [
      "Quantum mechanics भविष्यवाणी तो बेदाग़ करता है, लेकिन किसी agreed-upon व्याख्या के बिना: Schrödinger equation (deterministic, सभी को मंज़ूर) और Born rule (probabilistic, विवादित) के बीच की खाई — measurement problem — philosophy है।",
      "संस्थापक philosophy कर रहे थे: Solvay 1927 में Bohr बनाम Einstein, Einstein का 1926 वाला “God does not play dice” पत्र, Schrödinger की बिल्ली (1935) जो anti-Copenhagen reductio थी, और “Copenhagen interpretation” label खुद (Heisenberg, 1955) जो असली मतभेदों पर पर्दा डालता है।",
      "Quantum computing philosophy से पैदा हुई: Deutsch के 1985 paper ने Church–Turing thesis को physical सिद्धांत के रूप में पढ़ा और उनकी many-worlds निष्ठा से प्रेरित था — “parallel universes के बिना समझाइए कि Shor's algorithm कैसे काम करता है” वाली चुनौती सहित।",
      "Philosophy बार-बार physics बनती रही है: Bell (1964) ने EPR बहस को testable inequality में बदल दिया; Wheeler के “it from bit” ने reconstruction program को जन्म दिया।",
      "Aaronson का counterweight: quantum computer massively-parallel classical machine नहीं है — speedup interference पर टिका है (“probability theory with minus signs”), और supremacy experiments interpretation बहस में कुछ नया नहीं जोड़ते।",
    ],
    quiz: [
      {
        q: "Deutsch के 1985 paper में उनका philosophical कदम क्या था जिसने quantum computing की नींव रखी?",
        options: [
          "उन्होंने साबित किया कि classical computers quantum systems को simulate नहीं कर सकते",
          "उन्होंने Church–Turing thesis को physical सिद्धांत के रूप में पढ़ा — क्या computable है यह physics के नियम तय करते हैं, इसलिए universal computer quantum ही होना चाहिए",
          "उन्होंने दिखाया कि many-worlds interpretation Bell's theorem से निकलता है",
          "उन्होंने Schrödinger equation से Born rule derive किया",
        ],
        answer: 1,
        why: "Church–Turing–Deutsch principle ने computability को mathematics का तथ्य नहीं, physics का तथ्य बना दिया — और Deutsch के Everettianism ने प्रेरणा दी।",
      },
      {
        q: "Schrödinger की बिल्ली (1935) असल में क्या थी?",
        options: [
          "एक सबूत कि macroscopic superpositions सच में मौजूद हैं",
          "एक reductio ad absurdum — एक philosophical हमला जो दिखाता है कि Bohr का interpretation बेतुके नतीजों तक ले जाता है",
          "बिल्लियों पर quantum mechanics test करने का experimental प्रस्ताव",
          "Copenhagen interpretation के समर्थन में एक thought experiment",
        ],
        answer: 1,
        why: "Schrödinger ने बिल्ली को बेतुका दिखने के लिए बनाया था — यह मरी-ज़िंदा बिल्लियों का समर्थन नहीं, Copenhagen completeness पर हमला था।",
      },
      {
        q: "Aaronson के अनुसार quantum speedup असल में कहाँ से आता है?",
        options: [
          "Parallel universes में एक साथ सभी answers try करने से",
          "एक साथ चल रहे exponentially many classical processors से",
          "Quantum interference से — ग़लत answers cancel हो जाते हैं ताकि सही structure measurement में बच जाए (“probability theory with minus signs”)",
          "Entangled qubits के बीच faster-than-light communication से",
        ],
        answer: 2,
        why: "Aaronson का सुधार: exponentially many amplitudes मौजूद हैं, लेकिन आप एक ही outcome observe करते हैं — speedup parallel classical computation पर नहीं, distribution को आकार देने वाले interference पर टिका है।",
      },
    ],
  },
  "phil-interpretations": {
    simple: raw`
      <p>यहाँ इस module का सबसे महत्वपूर्ण तथ्य है, साफ़ शब्दों में: <strong>quantum mechanics का हर interpretation बिल्कुल एक जैसे experimental results की भविष्यवाणी करता है।</strong> कोई experiment — न Bell test, न quantum supremacy run, न कुछ और — इन्हें अलग नहीं कर सकता। ये इस बात पर असहमत हैं कि <em>असल</em> क्या है, इस बात पर नहीं कि <em>मापा</em> क्या जाता है। पढ़ते समय हर एक पर यही label लगाए रखिए: ये physics नहीं, philosophy हैं।</p>
      <p><strong>1. Copenhagen (Bohr, Heisenberg और textbooks)।</strong> मूल orthodoxy: quantum formalism एक recipe है जो बताता है कि <em>classical instruments</em> क्या register करेंगे। Superpositions measurement outcomes के बारे में आपकी जानकारी describe करते हैं, दुनिया में मौजूद कोई चीज़ नहीं; “collapse” सिर्फ़ आपके देखने पर हिसाब-किताब update करना है। यह मत पूछिए कि electron measurements के बीच क्या कर रहा है — सवाल ही ग़लत है, क्योंकि कोई phenomenon सिर्फ़ उसे observe करने के experimental arrangement के सापेक्ष ही मौजूद होता है। इस दृष्टिकोण में आपके quantum computer की बीच की superposed states <em>calculational devices</em> हैं; सिर्फ़ preparation और readout ही physically describable हैं। Computation classical अर्थों में “कहीं” होती ही नहीं — और इसीलिए वह इतनी powerful लगती है। (ईमानदार footnote: एक Copenhagen view कभी था ही नहीं। Bohr और Heisenberg एक-दूसरे से असहमत थे, और यह साफ़-सुथरा label बाद में गढ़ा गया।)</p>
      <p><strong>2. Many-worlds / Everett (Everett 1957; DeWitt; Deutsch; Wallace)।</strong> Collapse postulate को पूरी तरह हटा दीजिए। Wavefunction हमेशा smoothly evolve होती है, हर superposition का हर term समान रूप से असल है, और जिसे हम “measurement” कहते हैं वह सिर्फ़ observer का system के साथ entangled हो जाना है — universe <em>split</em> होता है, या कहें differentiate होता है, और decoherence समझाता है कि branches बाद में interfere क्यों नहीं कर सकतीं। इस कहानी में आपके quantum computer के बारे में <strong>Deutsch</strong> का विवरण शाब्दिक है: Shor's algorithm एक साथ विशाल संख्या में branches में चलता है, और answer वहाँ उभरता है जहाँ वे interfere करती हैं। यह सबसे नाटकीय कहानी है — और इसके दो मशहूर बकाया बिल हैं। पहला, <strong>preferred-basis problem</strong>: quantum state को “worlds” में अनंत तरीक़ों से decompose किया जा सकता है, तो कौन-सा decomposition असल गिना जाए, यह इस पर निर्भर लगता है कि आप बाद में क्या measure करना चुनते हैं। दूसरा, <strong>probability problem</strong>: अगर हर outcome होता है, तो “70% probability” का मतलब ही क्या है? (Deutsch और अन्य ने Born rule के decision-theoretic derivations दिए हैं; वे विवादित बने हुए हैं।) पूरे विवाद पर Aaronson का फ़ैसला: supremacy experiments “इस पुरानी बहस में कुछ <em>नया</em> नहीं जोड़ते” — वे सिर्फ़ उन्हीं समीकरणों की और पुष्टि हैं जिन पर सभी पहले से सहमत हैं।</p>
      <p><strong>3. Pilot-wave / de Broglie–Bohm (de Broglie 1927; Bohm 1952)।</strong> Particles असल हैं और हमेशा definite positions रखते हैं — कोई fuzziness नहीं। उनके ऊपर सवार है wavefunction, एक असल physical <em>pilot wave</em>, जो guiding equation के ज़रिए हर particle की गति choreograph करती है। यह सिद्धांत पूरी तरह <strong>deterministic</strong> है: quantum mechanics की दिखावटी randomness सिर्फ़ exact starting positions की ignorance है, जैसे classical statistical mechanics। इसकी क़ीमत <strong>nonlocality</strong> है: guiding wave configuration space में रहती है और दूर के particles को instantaneously coordinate करती है। इस दृष्टिकोण में आपका quantum computer perfectly definite particles का झुंड है जिन्हें exponentially large space में evolve होती wave चला रही है — speedup wave की choreography में रहता है।</p>
      <p><strong>4. QBism (Fuchs, Schack, Mermin)।</strong> सबसे क्रांतिकारी reframe: wavefunction दुनिया में मौजूद कोई चीज़ ही नहीं है — वह एक <em>agent के अपने future experiences के बारे में personal degrees of belief</em> है। “Collapse” सिर्फ़ Bayesian update है: आप कुछ सीखते हैं, अपने दाँव revise करते हैं। दुनिया में कुछ भी jump नहीं करता। और entanglement की मशहूर spookiness? “QBist इस बात से इनकार करता है कि कुछ भेजा जाता है, क्योंकि दूर के particle पर कोई objective state थी ही नहीं जिसे disturb किया जा सके।” इस दृष्टिकोण में आपका quantum computer एक tool है जिससे agent <em>coherent bets</em> लगाता है — computation structured expectation है, और user कहानी का हिस्सा है। (“consciousness collapses the wavefunction” से confuse न करें — QBism बिना किसी mind-magic के agent को भूमिका देता है।)</p>
      <p><strong>5. Relational quantum mechanics (Rovelli)।</strong> कोई absolute facts नहीं हैं — सिर्फ़ किसी physical system के <em>सापेक्ष</em> facts हैं। “qubit superposition में है” यह कहना ही बेमानी है; आपको कहना होगा “qubit <em>इस</em> observer के लिए superposition में है।” अलग observers अलग, समान रूप से valid accounts दे सकते हैं, और यही दुनिया का <em>पूर्ण</em> description है — इन्हें मिलाने वाला कोई God's-eye view नहीं है। आपके quantum computer की बीच की states असल हैं, लेकिन सिर्फ़ उसके सापेक्ष जो उनसे interact कर रहा है।</p>
      <p><strong>6. Consistent histories (Griffiths; Omnès; Gell-Mann & Hartle)।</strong> “Copenhagen done right” के रूप में पेश: आप पूरे <em>histories</em> — समय में घटनाओं के क्रम — को probabilities दे सकते हैं, बशर्ते वे consistency condition पूरी करें, और आपको कभी incompatible descriptions को मिलाना नहीं चाहिए (single-framework rule)। Measurement सिर्फ़ एक और physical process है; इस व्याख्या में “कोई measurement problem नहीं है,” और दिखावटी paradoxes घुल जाते हैं। अहम बात, यह ज़ोर देता है कि “superluminal influences information या कुछ और नहीं ले जा सकते, इस सरल कारण से कि वे मौजूद ही नहीं हैं।” आपके quantum computer की समय के एक-एक point पर एकदम सामान्य कहानी है — एक consistent framework के भीतर।</p>
      <p>6 के लिए stress test है <strong>Wigner's friend</strong> और उसका आधुनिक रूप, <strong>Frauchiger–Renner</strong> thought experiment (2018): एक-दूसरे पर quantum mechanics apply करने वाले nested observers एक trilemma पैदा करते हैं — quantum theory की universal validity, एक single shared world, और agents के accounts के बीच consistency — तीनों एक साथ नहीं रह सकते। हर interpretation एक अलग चीज़ sacrifice करके बचता है। कौन-सा sacrifice आपको सबसे कम खलता है, यह एक बार फिर philosophy है।</p>
      <p class="myth"><strong>आम ग़लतफ़हमी:</strong> “Quantum computers many-worlds interpretation को साबित करते हैं — computation हो और कहाँ रही है?” कोई interpretation किसी computation से confirm नहीं होता, क्योंकि सभी identical statistics की भविष्यवाणी करते हैं। Deutsch का multiverse account उनकी philosophical position है, experimental result नहीं।</p>
    `,
    deeper: raw`
      <p>6 interpretations एक ही mathematics साझा करते हैं — Hilbert space, unitary evolution, Born rule का empirical content — और सिर्फ़ ontology में अलग हैं: वे क्या दावा करते हैं कि <em>मौजूद</em> है। इनकी तुलना का एक compact तरीक़ा है हर एक से तीन सवाल पूछना: wavefunction क्या है? Measurement पर क्या होता है? Quantum computer क्या कर रहा है?</p>
      <p><strong>Copenhagen</strong> जवाब देता है: wavefunction एक predictive instrument है; measurement वह जगह है जहाँ classical भाषा सँभालती है (quantum system और classical apparatus के बीच का “cut” हिलाया जा सकता है लेकिन हटाया नहीं जा सकता); computer के बीच के चरण classical terms में describable ही नहीं हैं। इसकी कमज़ोरी cut के बारे में vagueness है — इसीलिए <strong>consistent histories</strong> को उसके disciplined successor के रूप में बनाया गया: Griffiths का single-framework rule “incompatible descriptions को मत मिलाओ” को एक precise mathematical rule बनाता है — histories के किन sets को probabilities मिल सकती हैं — और measurement बाक़ी processes में एक process बन जाता है।</p>
      <p><strong>Everett</strong> जवाब देता है: wavefunction ही सब कुछ है; measurement entanglement plus decoherence है; computer branches में compute करता है। Formally इसकी elegance बेजोड़ है — कोई collapse postulate नहीं, कोई extra equation नहीं। इसके क़र्ज़ simple layer के दो problems हैं। <strong>Preferred-basis problem</strong>: Shor's algorithm के heart में quantum Fourier transform कई bases में लिखा जा सकता है, और “कोई स्पष्ट कारण नहीं कि यह basis किसी और पर preferred क्यों हो, या यह quantum process single universe में क्यों न हो।” <strong>Probability problem</strong>: जब सभी outcomes होते हैं तो Born rule derive करना। Deutsch (1999) ने decision-theoretic derivation की कोशिश की — branching universe में rational agents को Born rule के अनुसार ही bet लगाना <em>चाहिए</em> — जिसे Saunders और Wallace ने आगे बढ़ाया; critics जवाब देते हैं कि derivation probabilistic assumptions चुपके से घुसा देती है। यह live philosophy of physics है, settled science नहीं।</p>
      <p><strong>de Broglie–Bohm</strong> जवाब देता है: wavefunction एक असल guiding field है; particles की exact positions <strong>guiding equation</strong> के अनुसार evolve होती हैं</p>
      <p>\[\mathbf{v}_k = \frac{\hbar}{m_k}\,\mathrm{Im}\!\left(\frac{\nabla_k \psi}{\psi}\right);\]</p>
      <p>measurement pre-existing positions को reveal करता है, और Born-rule probabilities initial conditions की ignorance से उभरती हैं (“quantum equilibrium” hypothesis)। यह deterministic होते हुए सभी nonrelativistic quantum predictions — quantum computing सहित — दोहराता है। इसकी क़ीमत, nonlocality, bug नहीं बल्कि Bell's theorem को इस तरह पढ़ने का <em>content</em> है: definite pre-existing values वाले किसी भी theory को उन्हें light से तेज़ coordinate करना होगा। Bohmian mechanics यह क़ीमत खुलेआम चुकाता है।</p>
      <p><strong>QBism</strong> जवाब देता है: wavefunction agent का belief है; measurement experience है; computer betting aid है। इसका technical program गंभीर है — Fuchs और Schack का reconstruction work Bayesian coherence principles से quantum formalism derive करने की कोशिश करता है — लेकिन ontology पर इसकी ख़ामोशी ही विवाद है: एक theory of everything जो यह कहने से इनकार करती है कि everything क्या है। <strong>Relational QM</strong> जवाब देता है: wavefunction relations encode करती है; measurement interaction है; facts indexed हैं। इसका signature move हर statement को observer से index करके Wigner's-friend paradoxes को घोल देता है — observer-independent absolute reality को त्यागने की क़ीमत पर।</p>
      <p>एक constraint 6 को बाँधती है: <strong>CHSH inequality</strong> (अगला lesson)। आप जो भी कहानी पसंद करें, उसे experimental तथ्य दोहराना होगा कि local realism fail होता है जबकि no-signaling बना रहता है। Interpretations <strong>empirically underdetermined</strong> हैं — data इनमें से चुन नहीं सकता — और ठीक इसीलिए यह चुनाव philosophical है। Stanford Encyclopedia of Philosophy के हर interpretation पर peer-reviewed entries citable backbone हैं अगर आप इस lesson से गहरा जाना चाहें।</p>
      <p><strong>आगे पढ़ने के लिए:</strong> Sean Carroll, <em>Something Deeply Hidden</em> (2019) — Everett का accessible case; Carlo Rovelli, <em>Helgoland</em> (2021) — आम पाठकों के लिए relational QM; David Albert, <em>Quantum Mechanics and Experience</em> (1992) — असामान्य स्पष्टता के साथ measurement problem; Tim Maudlin, <em>Philosophy of Physics: Quantum Theory</em> (2019) — “recipe vs theory” critique और गंभीर विकल्प; Stanford Encyclopedia of Philosophy में interpretations, Bohmian mechanics, relational QM और consistent histories पर entries।</p>
    `,
    keyPoints: [
      "6 interpretations identical measurement statistics की भविष्यवाणी करते हैं — कोई experiment, कोई भी quantum computation सहित, इन्हें अलग नहीं कर सकता। इनमें चुनाव philosophy है, physics नहीं।",
      "Copenhagen: formalism instrument readings की भविष्यवाणी करता है; computer के बीच के चरण classically indescribable हैं। Consistent histories (“Copenhagen done right”) single-framework rule से इसे precise बनाता है।",
      "Everett: कोई collapse नहीं, सब कुछ होता है; Deutsch की कहानी कहती है कि Shor's algorithm branches में compute करता है। बकाया बिल: preferred-basis problem और जब हर outcome होता है तो Born rule derive करना।",
      "de Broglie–Bohm: guiding equation के ज़रिए असल pilot wave से guided definite particles — deterministic लेकिन स्पष्ट रूप से nonlocal; quantum randomness initial positions की ignorance है।",
      "QBism: wavefunction agent के personal beliefs हैं, collapse belief update है, entanglement की spookiness घुल जाती है। Relational QM: facts सिर्फ़ observer के सापेक्ष मौजूद हैं। Frauchiger–Renner (2018) हर interpretation को तीन में से एक sacrifice करने पर मजबूर करता है: universality, single world, या inter-agent consistency।",
    ],
    quiz: [
      {
        q: "कोई experiment quantum mechanics के interpretations के बीच फ़ैसला क्यों नहीं कर सकता?",
        options: [
          "Experiments चलाने में बहुत ख़र्च आता है",
          "सभी interpretations identical measurement statistics की भविष्यवाणी करते हैं — वे इस बात पर असहमत हैं कि असल क्या है, इस बात पर नहीं कि मापा क्या जाता है",
          "Physicists ने इन्हें test न करने की सहमति बना रखी है",
          "Quantum computers अभी पर्याप्त powerful नहीं हैं",
        ],
        answer: 1,
        why: "Empirical underdetermination ही defining feature है: interpretations mathematics साझा करते हैं और सिर्फ़ ontology में अलग हैं।",
      },
      {
        q: "Everett (many-worlds) interpretation के दो मशहूर open problems क्या हैं?",
        options: [
          "Measurement problem और ultraviolet catastrophe",
          "Preferred-basis problem (कौन-सा decomposition “worlds” गिना जाए) और probability problem (जब हर outcome होता है तो Born rule derive करना)",
          "Nonlocality और hidden variables की ज़रूरत",
          "Collapse postulate और observer की consciousness",
        ],
        answer: 1,
        why: "Everett में कोई collapse postulate नहीं है — यही उसकी elegance है — लेकिन उसे बताना होगा कि कौन-सा basis branches define करता है और जब कुछ भी छूटता नहीं तो probability का मतलब क्या है।",
      },
      {
        q: "QBism में wavefunction क्या है?",
        options: [
          "Space में फैली एक असल physical wave",
          "एक agent के अपने future experiences के बारे में personal degrees of belief — coherent bets लगाने का tool",
          "Definite particles को guide करती pilot wave",
          "सिर्फ़ किसी observer के frame के सापेक्ष valid description",
        ],
        answer: 1,
        why: "QBism (Fuchs, Schack, Mermin) wavefunction को subjective बनाता है: collapse belief update है, और दूर कोई objective state थी ही नहीं जिसे disturb किया जा सके।",
      },
    ],
  },
  "phil-randomness-free-will": {
    simple: raw`
      <p>Quantum mechanics कहता है कि दुनिया अपने core में random है। Radioactive atom किसी predictable समय पर decay नहीं करता; measured qubit सिर्फ़ probabilities के सहारे 0 या 1 देता है। लेकिन <em>किस तरह</em> की random? “हमें cause नहीं पता इसलिए random” (coin flip — सिक्का पहले ही गिर चुका है) और “कोई cause ही <em>नहीं</em> इसलिए random” में ज़मीन-आसमान का फ़र्क़ है। Quantum mechanics दूसरे का दावा करता है। यह lesson इस बारे में है कि यह दावा जाँच में टिकता है या नहीं — और जवाब cryptography, computing और free will के लिए क्यों मायने रखता है।</p>
      <p><strong>Einstein</strong> ने यह कभी नहीं माना। उनके 1935 के <strong>EPR</strong> तर्क (Podolsky और Rosen के साथ) ने कहा कि quantum mechanics <em>अधूरी</em> होनी चाहिए: particles को pre-set “instructions” — <strong>hidden variables</strong> — साथ लेकर चलना चाहिए जो outcomes पहले से तय करते हैं, और randomness सिर्फ़ हमारी ignorance है। तीस साल तक यह philosophy रही। फिर 1964 में <strong>John Bell</strong> ने कुछ असाधारण किया: उन्होंने इसे arithmetic में बदल दिया। अगर particles local pre-set instructions लेकर चलते हैं, तो कुछ measured correlations — <strong>CHSH</strong> combination — कभी 2 से ज़्यादा नहीं हो सकते। Quantum mechanics 2.83 की भविष्यवाणी करता है। किसी एक को ग़लत होना था, और सवाल lab में सुलझाया जा सकता था।</p>
      <p>Labs ने बोल दिया। पहले <strong>Clauser और Freedman</strong> (1970s की शुरुआत), फिर निर्णायक रूप से <strong>Aspect</strong> (1981–82, photons के निकलने के <em>बाद</em> measurement settings चुनते हुए), 2015 में आख़िरी loopholes बंद — और <strong>2022 Nobel Prize</strong> (Aspect, Clauser, Zeilinger) “entangled photons के साथ experiments के लिए, Bell inequalities के violation को स्थापित करने और quantum information science की नींव रखने के लिए।” Nature का measured value: ~2.8, quantum mechanics से मेल खाता, 2 की limit को चकनाचूर करता।</p>
      <p>अब फ़ैसला <em>सटीक</em> शब्दों में कहिए, क्योंकि pop science इसे बिगाड़ देता है: Bell ने यह साबित नहीं किया कि “universe nonlocal है” या “Einstein हर बात में ग़लत थे।” उन्होंने <strong>local realism</strong> को मारा — तीन assumptions का package deal: <em>realism</em> (outcomes पहले से तय), <em>locality</em> (दूर की settings नतीजों को प्रभावित नहीं कर सकतीं), और <em>statistical independence</em> (settings स्वतंत्र रूप से चुनी जाती हैं, particles के अतीत से uncorrelated)। Experiments आपको <em>कम से कम एक</em> को छोड़ने पर मजबूर करते हैं — और हर exit एक live philosophical position है। Locality छोड़िए: वह Bohm की pilot wave है। Realism छोड़िए: वह Copenhagen और QBism हैं। Statistical independence छोड़िए: वह <strong>superdeterminism</strong> है। सभी outcomes स्वीकार कीजिए: वह many-worlds है। लाश local realism की है; suspects सभी छूट गए।</p>
      <p><strong>Free will</strong> कहाँ आता है? एक remarkable theorem के ज़रिए। <strong>Conway और Kochen का Free Will Theorem</strong> (2006, 2009 में मज़बूत) कहता है: <em>अगर</em> experimenters के पास free will है — न्यूनतम परिभाषा में ऐसे choices जो “अतीत का function नहीं” हैं — <em>तो</em> elementary particles के पास भी वही आज़ादी है: उनके responses भी अतीत से fixed नहीं हैं। अहम subtlety नोट कीजिए: महज़ <em>randomness</em> qualify नहीं करती, क्योंकि random outcome किसी cosmic table में पहले से लिखा हो सकता था। Theorem deterministic <em>और</em> pre-scripted-random दोनों theories को ख़ारिज करता है। लेकिन क़ीमत के बारे में ईमानदार रहिए: यह human free will को axiom के रूप में <em>मान</em> लेता है। यह साबित नहीं करता कि आपके पास वह है — और critics (Goldstein वगैरह) तर्क पर विवाद करते हैं। वह circularity भी नोट कीजिए जिसके साथ field जीता है: Bell tests खुद यह मानते हैं कि experimenters की setting choices स्वतंत्र हैं।</p>
      <p>उसी assumption पर <strong>superdeterminism</strong> हमला करता है — और यह escape Bell ने खुद नाम दिया था। 1985 के BBC interview में उन्होंने कहा: “मान लीजिए दुनिया super-deterministic है… universe, particle A सहित, पहले से 'जानता' है कि वह measurement, और उसका outcome, क्या होगा।” आधुनिक defenders <strong>Gerard 't Hooft</strong> और <strong>Sabine Hossenfelder</strong> तर्क देते हैं कि चूँकि experimenters और particles Big Bang तक फैला common past साझा करते हैं, “स्वतंत्र” setting choices particles के साथ subtly correlated हो सकती हैं — एक cosmic selection bias। क़ीमत: पूर्ण determinism, कोई free choice नहीं। आपत्तियाँ तीखी हैं: यह loophole “scientific methods से बंद नहीं किया जा सकता” क्योंकि science खुद यह मानती है कि experimenters settings स्वतंत्र रूप से चुन सकते हैं; कुछ इसे fine-tuned conspiracy कहते हैं जो science को बेमानी बना देता है। Hossenfelder की pitch सीधी है: “Superdeterminism हमें determinism में वापस ले जाता है।”</p>
      <p>Computing student को परवाह क्यों करनी चाहिए? क्योंकि randomness एक <em>resource</em> है — और quantum physics इसे <strong>certify</strong> कर सकता है। Bell-inequality का violation साबित करता है कि outcomes unpredictable थे <em>device बनाने वाले के लिए भी</em>: कोई pre-written table, चाहे कितनी clever हो, इन statistics को दोहरा नहीं सकती। <strong>Pironio और colleagues</strong> (2010) ने दिखाया कि इससे “devices के internal working पर कोई assumption लिए बिना” randomness मिलती है — “classically असंभव।” State of the art: 2026 में <strong>ETH Zurich के Renner group</strong> ने entangled qubits पर 1.5 billion Bell tests चलाए और adversary की power पर कोई assumed bound रखे बिना provably perfect randomness निकाली। अपने laptop के random numbers से तुलना कीजिए: deterministic algorithm (सिर्फ़ तब unpredictable जब आपको seed न पता हो) बनाम Bell-certified bits (तब भी unpredictable जब hardware vendor आपका दुश्मन हो)। Cryptography इसी फ़र्क़ पर चलती है।</p>
      <p class="myth"><strong>आम ग़लतफ़हमी:</strong> “Quantum randomness साबित करती है कि हमारे पास free will है।” नहीं करती — Free Will Theorem experimenter freedom को <em>मानकर</em> निष्कर्ष निकालता है, और superdeterminism इस premise को ही नकार देता है। Randomness freedom नहीं है; पहले से लिखी random table भी script ही है।</p>
    `,
    deeper: raw`
      <p>CHSH inequality वह एक derivation है जो इस lesson को ज़रूर carry करनी चाहिए, क्योंकि बाक़ी सब इसी पर टिका है। Alice setting \\(a\\) या \\(a'\\) चुनती है, Bob \\(b\\) या \\(b'\\) चुनता है; हर outcome \\(\pm 1\\) है। Correlation \\(E(a,b)\\) को outcomes के average product के रूप में define कीजिए, और</p>
      <p>\[S = E(a,b) - E(a,b') + E(a',b) + E(a',b').\]</p>
      <p>Local realism के तहत, हर particle pair instructions लेकर चलता है जो outcomes \\(A_1, A_2, B_1, B_2 \in \\{+1,-1\\}\\) fix करते हैं। किसी single pair के लिए, \\(S(\\lambda) = A_1(B_1+B_2) + A_2(B_1-B_2)\\): या तो \\(B_1 = B_2\\), जिससे दूसरा term ग़ायब और पहला \\(\pm 2\\), या \\(B_1 = -B_2\\), जिससे पहला ग़ायब और दूसरा \\(\pm 2\\)। हर pair \\(\pm 2\\) contribute करता है, इसलिए average यह obey करता है</p>
      <p>\[|S| \le 2.\]</p>
      <p>Quantum mechanics, entangled state \\(|\Phi^+\rangle = \tfrac{|00\rangle+|11\rangle}{\sqrt{2}}\\) के लिए well-chosen measurement angles के साथ, \\(S = 2\sqrt{2} \approx 2.828\\) की भविष्यवाणी करता है — <strong>Tsirelson's bound</strong>, quantum mechanics की अधिकतम सीमा। Experiments ~2.8 पर उतरते हैं। नोट कीजिए कि violation क्या <em>नहीं</em> तोड़ता: <strong>no-signaling</strong> principle — Alice के local statistics कभी Bob की distant setting पर निर्भर नहीं करते, इसलिए entanglement light से तेज़ messages कभी नहीं भेज सकता। Bell violations communication के बिना correlations हैं।</p>
      <p>Conway–Kochen तर्क तीन axioms पर चलता है: <strong>SPIN</strong> (तीन orthogonal axes के अनुदिश measured spin-1 particle हमेशा 1, 0, 1 किसी क्रम में देता है), <strong>TWIN</strong> (entangled pairs matching responses देते हैं), और <strong>FIN</strong> (light से तेज़ कोई influence नहीं)। Experimenter की measurement axes की free choice जोड़िए, और निष्कर्ष निकलता है: particle का response “अतीत का function नहीं” है — वह उतना ही free है जितने आप। Theorem की मार <em>किसी भी</em> theory के ख़िलाफ़ है जिसमें outcomes पहले के facts से fixed हों, deterministic या stochastic। इसकी कमज़ोरी premise है: superdeterminism सीधे इस बात से इनकार करता है कि experimenter की choice particles के अतीत से independent है, और फिर पूरा proof ढह जाता है — इसीलिए free-will debate और superdeterminism debate एक ही debate हैं।</p>
      <p>अब practical payoff — <strong>device-independent randomness</strong>। Classical randomness दो कमज़ोर flavors में आती है: pseudorandom generators (deterministic algorithms; सिर्फ़ तब secure जब seed गुप्त रहे) और trusted-device quantum generators (photon beam splitter से टकराता है; सिर्फ़ तब secure जब आपको hardware पर भरोसा हो)। Bell certification तीसरा, सबसे मज़बूत flavor जोड़ता है: <em>statistics खुद</em> unpredictability साबित करते हैं। Pironio et al. की insight: \\(S > 2\\) का CHSH violation यह bound करता है कि outcomes <em>किसी के लिए</em> कितने predictable हो सकते थे — manufacturer सहित। ETH Zurich result (Nature, May 2026) ने इसे limit तक पहुँचाया: 30-meter cryogenic tube में entangled qubits, 1.5 billion Bell tests, unbounded power वाले adversary के ख़िलाफ़ certified randomness। “Truly random” का यही operational मतलब है — कोई metaphysical नारा नहीं बल्कि operational guarantee — और इसीलिए philosophy के रूप में जन्मा Bell's theorem आज quantum cryptography (device-independent QKD) और randomness beacons के अंदर बैठा है।</p>
      <p>Determinism कहाँ खड़ा है? ईमानदारी से: घिरा हुआ लेकिन ज़िंदा। Mainstream Bell को local hidden variables का अंत मानता है। Bohm nonlocality की क़ीमत चुकाकर determinism रखता है। Superdeterminism free choice की क़ीमत चुकाकर determinism <em>और</em> locality दोनों रखता है — science में सबसे महंगी currency, क्योंकि हर experiment यह मानता है कि experimenter कुछ और कर सकता था। Many-worlds reality को multiply करके सब कुछ रखता है। हर विकल्प coherent है; कोई forced नहीं है। Computing student के लिए lesson: जब आपके quantum program का measurement एक bit लौटाता है, तो <em>क्यों</em> वही bit और दूसरा नहीं — आपकी philosophy के अनुसार — fundamental chance है, hidden positions की ignorance है, आपकी अपनी branching है, या Big Bang में लिखा script है। आप जो probabilities compute करते हैं, वे किसी भी तरह identical हैं।</p>
      <p><strong>आगे पढ़ने के लिए:</strong> John Bell, <em>Speakable and Unspeakable in Quantum Mechanics</em> (1987) — theorem, “Against 'measurement',” और superdeterminism सहित Bell के अपने late reflections; Scott Aaronson, <em>Quantum Computing Since Democritus</em> (2013) — free will, predictability और complexity; Anil Ananthaswamy, <em>Through Two Doors at Once</em> (2018) — पूरी बहस की through-line के रूप में double-slit experiment।</p>
    `,
    keyPoints: [
      "Born rule randomness postulate करता है, उसे explain नहीं करता; Einstein का EPR (1935) hidden variables से determinism बहाल करना चाहता था — Bell (1964) ने इस उम्मीद को testable inequality में बदल दिया।",
      "CHSH: local realism माँगता है |S| ≤ 2; quantum mechanics 2√2 ≈ 2.828 की भविष्यवाणी करता है (Tsirelson's bound); experiments (Clauser, Aspect 1981–82, loophole-free 2015, 2022 Nobel) quantum mechanics से सहमत हैं।",
      "सटीक फ़ैसला: local realism मर चुका है — realism, locality और statistical independence तीनों एक साथ नहीं बच सकते। Live exits: nonlocality (Bohm), anti-realism (Copenhagen/QBism), superdeterminism, many-worlds।",
      "Conway–Kochen Free Will Theorem (2006/2009): अगर experimenters के choices अतीत से fixed नहीं हैं, तो particles के responses भी नहीं — लेकिन यह human free will को मान लेता है, और महज़ randomness qualify नहीं करती (पहले से लिखी random table भी determined है)।",
      "Superdeterminism (Bell का खुद का 1985 escape; 't Hooft, Hossenfelder) free choice sacrifice करके determinism बहाल करता है — critics इसे untestable और conspiratorial कहते हैं। Bell violations device-independent randomness certify करते हैं (Pironio 2010; ETH Zurich/Renner 2026, 1.5 billion tests) — “truly random” का operational मतलब, और quantum cryptography की नींव।",
    ],
    quiz: [
      {
        q: "Bell's theorem ने ठीक-ठीक क्या मारा?",
        options: [
          "Einstein's theory of relativity",
          "Local realism — pre-determined outcomes, locality और freely chosen settings का conjunction; तीनों में से कम से कम एक को जाना होगा",
          "यह idea कि quantum mechanics सही भविष्यवाणियाँ करता है",
          "Faster-than-light communication की संभावना",
        ],
        answer: 1,
        why: "Bell ने package deal को ख़ारिज किया, किसी single piece को नहीं — इसीलिए Bohm (nonlocal), Copenhagen (anti-realist), superdeterminism और many-worlds सभी live बने हुए हैं।",
      },
      {
        q: "Conway–Kochen Free Will Theorem की key subtlety क्या है?",
        options: [
          "यह अकेले physics से साबित करता है कि humans के पास free will है",
          "यह experimenter की free will को axiom के रूप में मान लेता है — और महज़ randomness freedom नहीं गिनी जाती, क्योंकि outcomes पहले से table में लिखे हो सकते हैं",
          "यह सिर्फ़ spin-1 particles पर लागू होता है, qubits पर नहीं",
          "इसे 2022 Nobel experiments ने refute कर दिया",
        ],
        answer: 1,
        why: "Free will in, free will out: theorem freedom को experimenter से particle तक transfer करता है लेकिन premise establish नहीं कर सकता — और superdeterminism इसे सीधे नकार देता है।",
      },
      {
        q: "Bell-certified (device-independent) randomness आपके laptop के random numbers से मज़बूत क्यों है?",
        options: [
          "यह numbers बहुत तेज़ generate करता है",
          "Bell violation खुद साबित करता है कि outcomes device बनाने वाले के लिए भी unpredictable थे — hardware पर किसी भरोसे की ज़रूरत नहीं",
          "यह seeds के रूप में बड़े prime numbers इस्तेमाल करता है",
          "यह deterministic है, इसलिए debugging के लिए reproduce किया जा सकता है",
        ],
        answer: 1,
        why: "Pironio et al. ने दिखाया कि nonlocal correlations genuine randomness certify करती हैं “devices के internal working पर कोई assumption लिए बिना” — classically असंभव, और device-independent cryptography की नींव।",
      },
    ],
  },
  "phil-it-from-bit": {
    simple: raw`
      <p>1989 में physicist <strong>John Archibald Wheeler</strong> — वह शख़्स जिसने “black hole” शब्द गढ़ा और Feynman को supervise किया — खड़े हुए और प्रस्ताव रखा कि physics ने hierarchy उल्टी पकड़ रखी है। Matter और energy, उन्होंने कहा, fundamental नहीं हैं। <strong>Information</strong> है। उनका नारा: <strong>“it from bit।”</strong> “हर <em>it</em> — हर particle, हर field of force, यहाँ तक कि spacetime continuum खुद — अपना function, अपना meaning, अपना अस्तित्व पूरी तरह yes-or-no सवालों के apparatus-elicited answers, binary choices, <em>bits</em> से derive करता है।” उनके <strong>participatory universe</strong> में reality “indeterminate limbo” में बैठी है जब तक कोई सवाल न पूछा जाए — जैसे twenty questions के खेल वाली उनकी parable, जहाँ players को एहसास होता है कि वह शब्द “जब मैं कमरे में आया था तब था ही नहीं”: answers उस चीज़ को <em>create</em> करते हैं जिसके बारे में पूछा जा रहा है।</p>
      <p>अब Wheeler की provocation को दो हिस्सों में बाँटिए — एक settled, एक पूरी तरह खुला। <strong>Settled half</strong>: “information is physical।” 1961 में IBM के <strong>Rolf Landauer</strong> ने साबित किया कि information के एक bit को <em>erase</em> करने की minimum thermodynamic cost होती है — room temperature पर लगभग 3 zeptojoules — क्योंकि erasure दो possibilities को एक में squeeze करता है, और खोई हुई entropy कहीं न कहीं heat के रूप में जानी चाहिए। 2012 में इसे experimentally verify किया गया। Information physics के ऊपर तैरता abstraction नहीं है; वह physics <em>से बनी</em> है। आपका quantum computer भी इसका पालन करता है: हर quantum gate reversible (unitary) है, इसलिए computation की energy cost सिर्फ़ वहीं आती है जहाँ irreversibility आती है — initialization और measurement।</p>
      <p><strong>Contested half</strong>: “physics <em>is</em> information।” Critics जवाब देते हैं — Landauer का अपना dictum दोनों तरफ़ कटता है — कि information “उस चीज़ के बिना कोई sense नहीं बनाती जिसे <em>informed</em> किया जाना है,” और असहज सवाल पूछते हैं: “Matter स्पष्ट रूप से mind के बिना मौजूद हो सकता है, लेकिन mind को matter के बिना मौजूद कहाँ देखते हैं?” क्या “it from bit” गहरी physics है या poetry? ईमानदार जवाब: यह open research program है, result नहीं। और irony नोट कीजिए — <strong>QBism</strong> (पिछला lesson) सहमत है कि information central है लेकिन उसे दुनिया के furniture में नहीं, <em>agent</em> में रखता है।</p>
      <p>लेकिन यहाँ बात serious हो जाती है: नारे पर बहस करने के बजाय, physicists ने quantum theory को information principles से <strong>rebuild</strong> करने की कोशिश की — जैसे Einstein ने relativity के दो crisp postulates से physics rebuild की थी। <strong>Lucien Hardy</strong> (2001) ने दिखाया कि quantum theory systems के combine और transform होने के बारे में पाँच “reasonable axioms” से निकलती है; वह axiom जो इसे classical के बजाय <em>quantum</em> बनाता है, <strong>continuity</strong> है — वह एक शब्द हटा दीजिए और आपको ordinary probability वापस मिल जाती है। <strong>Chiribella, D'Ariano और Perinotti</strong> (2011) ने 6 informational principles से quantum theory derive की, जिनका ताज <strong>purification principle</strong> है: “किसी part के बारे में ignorance हमेशा whole के maximal knowledge के साथ compatible है” — हर mixed state किसी pure entangled state का हिस्सा है। उनका punchline: “Quantum theory purity और reversibility of physical processes के साथ compatible information की एकमात्र standard theory है।”</p>
      <p>सबसे क्रांतिकारी descendant <strong>constructor theory</strong> (Deutsch और Marletto, 2015) है: physics को “initial conditions plus laws of motion” के रूप में लिखना बंद कीजिए और इसे इस बारे में statements के रूप में लिखिए कि कौन-से <em>tasks</em> possible हैं और कौन-से impossible। इस दृष्टिकोण में, <strong>quantum information “superinformation” का special case है</strong> — ऐसी information जिसे आप एक साथ पूरी copy नहीं कर सकते और जिसका हर transformation reversible है — और superinformation से no-cloning theorem, complementarity और objective unpredictability <em>theorems</em> के रूप में निकलते हैं। Status flag, ईमानदारी से: 2026 तक इसने कोई ऐसी confirmed prediction नहीं दी जो सिर्फ़ यह दे सके। यह Deutsch का current great project है — real time में research program के रूप में philosophy।</p>
      <p>तो इस दृष्टिकोण में quantum computer का <em>मतलब</em> क्या है? यह physics है जो information processing को उस सबसे गहरी level पर कर रही है जिसकी theory इजाज़त देती है: machine superinformation manipulate करती है — unclonable, complementary, reversibly transformable — classical bits के बजाय। Wheeler का नारा design principle बन जाता है। और यह इस module का circle close करता है: Deutsch 1985 में computation को physical notion के रूप में पढ़ पाए <em>क्योंकि</em>, तह में, computation और physics एक ही stuff से बने हैं। वह stuff “it” है या “bit,” यही वह सवाल है जो Wheeler हमें दे गए।</p>
      <p class="myth"><strong>आम ग़लतफ़हमी:</strong> “'It from bit' established physics है — scientists ने साबित कर दिया कि reality information से बनी है।” नहीं: settled part Landauer का “information is physical” है। “physics is information” वाली दिशा contested philosophy plus एक active (अधूरी) research program है।</p>
    `,
    deeper: raw`
      <p>Landauer's principle अपने equation का हक़दार है, क्योंकि यह इस lesson का एकमात्र हिस्सा है जो settled experimental physics है। एक bit erase करना — logically irreversible 2→1 map — कम से कम इतना dissipate करना चाहिए</p>
      <p>\[E_{\min} = k_B T \ln 2\]</p>
      <p>per bit (room temperature पर लगभग \\(3 \times 10^{-21}\\) joules, या 0.018 eV)। Bennett (1982) ने इसका इस्तेमाल <strong>Maxwell's demon</strong> को भगाने में किया: demon के measurements reversible हैं, लेकिन दोबारा measure करने के लिए <em>अपनी memory erase करना</em> per bit कम से कम \\(k_B T \ln 2\\) cost करता है — second law सुरक्षित है। Quantum computing के लिए नतीजा architectural है: unitary gates reversible हैं और सिद्धांततः thermodynamically free हैं; heat bill state preparation और measurement पर आता है, irreversible steps पर। (Classical computing हर erased bit पर Landauer's tax चुकाती है; quantum circuits इसे टाल देते हैं।)</p>
      <p>Hardy का reconstruction सबसे साफ़ “information principle” argument है। किसी भी probabilistic theory को दो numbers से characterize कीजिए: \\(N\\), single measurement में distinguishable states की maximum संख्या, और \\(K\\), general state specify करने के लिए ज़रूरी parameters की संख्या। Classical probability: \\(K = N\\)। Quantum theory: \\(K = N^2\\) — qubit को \\(N = 2\\) के लिए 3 real parameters चाहिए (Bloch sphere)। Hardy के पाँच axioms एक choice को छोड़कर सब कुछ fix कर देते हैं: <strong>Axiom 5, continuity</strong> — किन्हीं दो pure states के बीच continuous reversible transformations मौजूद हैं। इसे रखिए: आपको quantum theory मिलती है। “continuous” शब्द हटाइए: आपको classical probability मिलती है। पूरा quantum/classical divide, information carriers के बारे में एक axiom तक सिमट गया। (Zeilinger का 1999 proposal उसी family का है: “elementary system एक bit information carry करता है” — qubit प्रकृति का इस सवाल का जवाब है कि “सबसे सरल information carrier क्या है?”)</p>
      <p>Chiribella–D'Ariano–Perinotti derivation operationally और आगे जाती है। इसका crown jewel, <strong>purification principle</strong>, कहता है कि हर mixed state \\(\\rho_A\\) के लिए एक pure entangled state \\(|\\Psi\\rangle_{AB}\\) मौजूद है जिसके लिए \\(\\mathrm{Tr}_B(|\\Psi\\rangle\\langle\\Psi|) = \\rho_A\\): किसी part के बारे में ignorance हमेशा whole के maximal knowledge के साथ compatible है — entanglement के बारे में Schrödinger का खुद का characterization, quantum mechanics का <em>the</em> characteristic trait। Causality, local discriminability, perfect distinguishability, ideal compression और atomicity of composition जोड़िए, और quantum theory <em>forced</em> हो जाती है — वह “purity और reversibility of physical processes के साथ compatible information की एकमात्र standard theory” है। Classical information theory वह है जो purification हटाने पर मिलती है।</p>
      <p>Constructor theory no-cloning theorem को भी reframe करती है — आपके syllabus का पहला great result — <em>tasks</em> के बारे में statement के रूप में: unknown quantum state clone करना <strong>impossible task</strong> है, Schrödinger's equation के details की वजह से नहीं, बल्कि इसलिए क्योंकि quantum systems <strong>superinformation media</strong> हैं, जिनके लिए सभी attributes को एक साथ copy करना impossible है जबकि हर allowed transformation reversible है। Complementarity, objective unpredictability और locally inaccessible information (entanglement की hidden correlations) उसी तरह निकलते हैं। क्या यह reframing कुछ नया predict करती है, यह open bet बना हुआ है — लेकिन नोट कीजिए कि इसने पहले ही क्या किया: इसने तीन अलग quantum “mysteries” को एक informational structure के consequences में बदल दिया।</p>
      <p>Computing student के लिए through-line: Shannon की classical information, \\(H = -\\sum_i p_i \\log_2 p_i\\), pre-existing facts के बारे में <em>ignorance</em> measure करती है। Quantum information कुछ अजीब-सा measure करती है — ऐसी दुनिया की structure जहाँ, जैसा Wheeler की twenty-questions parable ज़ोर देती है, facts आंशिक रूप से सवालों से <em>created</em> होते हैं। Quantum computer उस तरह की information को natively process करने के लिए बनाई गई पहली machine है। “It from bit” final metaphysics हो या न हो। लेकिन <em>engineering principle</em> के रूप में — information के इर्द-गिर्द machines design कीजिए जिसकी दुनिया अनुमति देती है — इसने पहले ही यह field बना दी है।</p>
      <p><strong>आगे पढ़ने के लिए:</strong> David Deutsch, <em>The Beginning of Infinity</em> (2011) — constructor-theoretic worldview; Jeffrey Bub, <em>Bananaworld: Quantum Mechanics for Primates</em> (2016) — parables के ज़रिए information-theoretic interpretation; John von Neumann, <em>Mathematical Foundations of Quantum Mechanics</em> (1932/1955) — वह axiomatization जिसने measurement problem पैदा किया; Lucien Hardy, “Quantum theory from five reasonable axioms” (2001) — reconstruction program का founding paper; Wheeler के “it from bit” essays (1989/1990)।</p>
    `,
    keyPoints: [
      "Wheeler का “it from bit” (1989/1990): हर “it” — particles, fields, spacetime — yes/no सवालों के answers से derive होता है; participatory universe पूछे जाने तक “indeterminate limbo” में बैठा है (twenty-questions parable)।",
      "Settled half: Landauer (1961) ने साबित किया कि bit erase करने की cost कम से कम k_B T ln 2 है — information is physical (2012 में verified)। Quantum gates reversible हैं; heat bill initialization और measurement पर आता है।",
      "Contested half: “physics is information” philosophy है, fact नहीं — information को किसी चीज़ की ज़रूरत है जिसे informed किया जाए, और QBism information को दुनिया के बजाय agent में रखता है।",
      "Reconstruction program information principles से QM rebuild करता है: Hardy (2001) — K=N² बनाम classical K=N, continuity axiom quantum/classical dividing line के रूप में; Chiribella–D'Ariano–Perinotti (2011) — purification principle plus पाँच operational axioms quantum theory को force करते हैं।",
      "Constructor theory (Deutsch & Marletto, 2015) physics को possible vs impossible tasks के रूप में दोबारा लिखती है; quantum information “superinformation” है, जिससे no-cloning और complementarity theorems के रूप में निकलते हैं — कोई unique confirmed prediction नहीं (2026 तक) वाला open research program।",
    ],
    quiz: [
      {
        q: "Landauer's principle का सटीक content क्या है?",
        options: [
          "Information quantum systems में light से तेज़ travel कर सकती है",
          "Information के एक bit को erase करने की minimum thermodynamic cost k_B T ln 2 है, क्योंकि erasure logically irreversible 2→1 map है",
          "Universe का हर particle ठीक एक bit information carry करता है",
          "Quantum computers bits को free में erase कर सकते हैं क्योंकि gates unitary हैं",
        ],
        answer: 1,
        why: "Landauer (1961, 2012 में verified) “it from bit” का settled half है: information is physical। Cost erasure पर लागू होती है — unitary quantum gates reversible हैं और measurement/initialization तक इससे बचते हैं।",
      },
      {
        q: "Hardy के reconstruction (2001) में कौन-सा axiom quantum और classical probability के बीच dividing line है?",
        options: [
          "वह axiom कि probabilities का sum one होता है",
          "Continuity — pure states के बीच continuous reversible transformations; “continuous” हटाइए और आपको classical probability वापस मिल जाती है",
          "वह axiom कि composite systems मौजूद हैं",
          "Purification principle",
        ],
        answer: 1,
        why: "Hardy ने दिखाया K=N² (quantum) बनाम K=N (classical), और Axiom 5 की continuity ही theory को quantum बनाती है — एक शब्द का फ़र्क़, विशाल नतीजों के साथ।",
      },
      {
        q: "Constructor theory का central move क्या है?",
        options: [
          "Many-worlds decision theory से Born rule derive करना",
          "Physics को initial conditions plus laws of motion के रूप में नहीं, बल्कि इस बारे में statements के रूप में दोबारा लिखना कि कौन-से tasks (transformations) possible हैं बनाम impossible",
          "साबित करना कि information matter से ज़्यादा fundamental है",
          "दिखाना कि quantum computers NP-complete problems solve कर सकते हैं",
        ],
        answer: 1,
        why: "Deutsch & Marletto (2015): information medium attributes की copying support करता है; superinformation media no-cloning और complementarity को theorems के रूप में देते हैं — हालाँकि अभी कोई unique confirmed prediction नहीं है।",
      },
    ],
  },
"nobel-2025-clarke-devoret-martinis": {
  simple: raw`
      <p><strong>7 October 2025</strong> को Royal Swedish Academy of Sciences ने एक ऐसे नोबेल पुरस्कार की घोषणा की, जिसका यह course इंतज़ार कर रहा था। <strong>जॉन क्लार्क, मिशेल डेवोरे और जॉन मार्टिनिस</strong> ने भौतिकी का पुरस्कार जीता — <em>"for the discovery of macroscopic quantum mechanical tunnelling and energy quantisation in an electric circuit"</em> ("electric circuit में macroscopic quantum mechanical tunnelling और energy quantisation की खोज के लिए")। सीधे शब्दों में: उन्होंने साबित किया कि हाथ में पकड़े जा सकने वाले electric circuit में अरबों electrons एक ही quantum particle की तरह व्यवहार कर सकते हैं — और धरती पर हर superconducting qubit उसी खोज से निकला है।</p>
      <p>कहानी शुरू होती है <strong>1984 में, UC Berkeley में जॉन क्लार्क की laboratory</strong> में। टीम छोटी थी: खुद क्लार्क — professor और SQUID pioneer; <strong>मिशेल डेवोरे</strong> — Saclay (France) से आए एक युवा postdoc; और <strong>जॉन मार्टिनिस</strong> — क्लार्क के अपने PhD student। उस समय की मान्यता थी कि quantum mechanics atoms और photons के लिए है — आपके workbench पर रखा circuit तो classical ही होता है, बस। उन्होंने इस मान्यता को ग़लत साबित करने की ठान ली।</p>
      <p>उनका device एक <strong>Josephson junction</strong> था — दो superconductors, जिनके बीच insulating layer इतनी पतली कि electron pairs सीधे उसके आर-पार tunnel कर सकें — जिसे एक circuit में जोड़ा गया और लगभग <strong>0.01 kelvin</strong> तक ठंडा किया गया, deep space से भी ठंडा। उन्होंने दो बातें साबित कीं। पहली: circuit अपनी zero-voltage state से <strong>quantum tunnelling</strong> से बाहर निकल सकता है — एक ऐसे energy barrier को लीक करके पार कर सकता है, जिसे कोई classical physics पार नहीं कर सकती। दूसरी: circuit के energy levels <strong>quantized</strong> थे — atom की तरह अलग-अलग सीढ़ियाँ, न कि एक चिकना continuum। उनकी सबसे बड़ी चाल 1984 की एक calibration trick थी, जिसे <strong>resonant activation</strong> कहते हैं — इसे <strong>डैनियल एस्टेव</strong> (Saclay, France से आए दूसरे visitor) के साथ मिलकर तैयार किया गया था: उन्होंने microwaves से circuit को उसके energy levels के बीच "गुदगुदाया", जिससे साबित हुआ कि ये levels असली हैं — और data इतना साफ़ था कि वह Caldeira–Leggett tunnelling theory से <em>बिना किसी fitted parameter के</em> मेल खाता था। thermal noise को मारने के लिए उन्होंने ऐसे filters बनाए, जो room temperature और sample के बीच microwave noise को <strong>20 orders of magnitude</strong> तक दबा देते थे।</p>
      <p>paper trail असामान्य रूप से साफ़ है। <strong>1984</strong> — डेवोरे, मार्टिनिस, एस्टेव और क्लार्क, <em>Physical Review Letters</em> 53, 1260: resonant-activation calibration। <strong>1985</strong> — मार्टिनिस, डेवोरे और क्लार्क, <em>PRL</em> 55, 1543: किसी macroscopic variable के पहले quantized energy levels, <strong>7 October 1985</strong> को प्रकाशित। <strong>1985</strong> — डेवोरे, मार्टिनिस और क्लार्क, <em>PRL</em> 55, 1908: tunnelling rates theory से मेल खाईं, और हर parameter जगह पर ही measure किया गया था। <strong>1988</strong> — <em>Science</em> 239, 992 में क्लार्क और साथियों का synthesis। यह सब UC Berkeley और Lawrence Berkeley Lab में क्लार्क के group में हुआ — मार्टिनिस PhD student के रूप में, डेवोरे Saclay से leave पर आए postdoc के रूप में। नोबेल की घोषणा <strong>7 October 2025</strong> को हुई: मुख्य paper के ठीक चालीस साल बाद, उसी तारीख़ को। यह कोई योजना नहीं थी; committee इस तरह काम नहीं करती। इतिहास का अंकगणित बस ऐसे ही बैठा।</p>
      <p><strong>यह quantum computing का नोबेल क्यों है:</strong> इस तिकड़ी ने पहला <em>engineerable artificial atom</em> बनाया था — एक ऐसा circuit जिसे आप काग़ज़ पर design कर सकते हैं और जो atom की तरह व्यवहार करता है। सीधी कड़ी Berkeley 1985 से Cooper-pair box (1997) तक, <strong>पहले superconducting qubit</strong> तक (1999, coherence लगभग 10 nanoseconds — NEC में नाकामुरा, पाश्किन और त्साई), flux qubits तक जो clockwise और anticlockwise persistent currents के superposition रखते हैं (2000), phase qubit और quantronium (2002), circuit QED (2004), <strong>transmon</strong> (2007, डेवोरे co-author — आज Google और IBM के processors के अंदर यही chip है), और fluxonium जो coherence को milliseconds की ओर धकेल रहा है। इंसानी कड़ी भी उतनी ही सीधी है: मार्टिनिस <strong>2014 में Google से जुड़े और 2019 के quantum supremacy experiment का नेतृत्व किया</strong> — 53 transmon qubits ने लगभग 200 seconds में वह कर दिखाया, जिसके लिए classically 10,000 years का अनुमान था — फिर April 2020 में छोड़ दिया और 2022 में superconducting-quantum startup <strong>Qolab</strong> के co-founder और CTO बने। डेवोरे अब Google Quantum AI में Chief Scientist for Quantum Hardware हैं, और Google की <strong>Willow</strong> chip (2024/25) ने तब से threshold से नीचे quantum error correction दिखाया है। रास्ते में इस तिकड़ी ने मिलकर Fritz London Memorial Prize (2014) जीता — नोबेल से पहले का क्लासिक संकेत।</p>
      <p>पुरस्कार की बात: 7 October 2025 को Stockholm में घोषणा — खोज को Nobel Committee के chair <strong>ओल्ले एरिक्सन</strong> ने प्रस्तुत किया — और <strong>10 December 2025</strong> को Stockholm Concert Hall में किंग कार्ल XVI गुस्ताफ़ ने प्रदान किया, जहाँ physics presentation speech Professor गोरान जोहानसन ने दी और banquet speech खुद <strong>मिशेल डेवोरे</strong> ने दी। रकम: <strong>11 million SEK, हर एक को एक-तिहाई</strong> — लगभग 3.67 million SEK प्रति व्यक्ति। विजेता: <strong>जॉन क्लार्क</strong> (जन्म 1942, Cambridge, UK; PhD 1968; SQUID pioneer; Berkeley और Lawrence Berkeley Lab में emeritus) — घोषणा के समय 83 वर्ष; <strong>मिशेल डेवोरे</strong> (जन्म 1953, Paris; PhD 1982, Paris-Saclay; Yale, UC Santa Barbara, Google Quantum AI) — 72; <strong>जॉन मार्टिनिस</strong> (जन्म 1958; PhD 1987, Berkeley में क्लार्क के अधीन; UC Santa Barbara) — 67, जो John Stewart Bell Prize (2021) के विजेता भी हैं और <em>Nature's 10</em> (2019) में भी शामिल रहे। क्लार्क की प्रतिक्रिया: <em>"To put it mildly, it was the surprise of my life… it never occurred to me in any way that this might be the basis of a Nobel Prize."</em> ("संक्षेप में कहूँ तो, यह मेरी ज़िंदगी का सबसे बड़ा आश्चर्य था… मेरे दिमाग़ में कभी आया ही नहीं कि यह किसी नोबेल पुरस्कार का आधार बन सकता है।") इस पुरस्कार से Berkeley Lab से जुड़े नोबेल विजेताओं की संख्या <strong>17</strong> हो गई। और समय: <strong>quantum mechanics की शताब्दी</strong> (हाइज़ेनबर्ग, 1925) और UN का International Year of Quantum Science and Technology। एक ईमानदार footnote — नोबेल committee ने कभी नहीं कहा कि quantum year ने चुनाव को प्रभावित किया; यह समय-संबंध commentators का अनुमान है, committee का बयान नहीं।</p>
      <p class="myth"><strong>आम ग़लतफ़हमी:</strong> "उन्हें qubit के आविष्कार के लिए पुरस्कार मिला।" नहीं — पहला superconducting qubit 1999 में आया, उनके experiment के चौदह साल बाद। उन्होंने electric circuits के <em>quantum behavior</em> की खोज की, जिसने qubits को संभव बनाया। नोबेल खोज को पुरस्कृत करता है, उसके बाद हुई engineering को नहीं।</p>
  `,
  deeper: raw`
      <p><strong>Josephson junction</strong> दो superconductors होते हैं, जिनके बीच एक पतली insulating barrier होती है। superconductor के अंदर electrons <strong>Cooper pairs</strong> में बंध जाते हैं, जो एक ही macroscopic quantum phase साझा करते हैं — एक wavefunction से describe किए गए अरबों pairs। pairs barrier के आर-पार tunnel कर सकते हैं, और supercurrent उसके दोनों ओर के phase difference \\(\\delta\\) पर निर्भर करता है: \\(I = I_c \\sin \\delta\\)। यही phase वह macroscopic quantum variable है, जिसे क्लार्क, डेवोरे और मार्टिनिस ने quantized किया।</p>
      <p>junction को current \\(I\\) से bias कीजिए, और phase एक <strong>washboard potential</strong> में रहता है:</p>
      <p>\\[U(\\delta) = -E_J \\cos \\delta - \\frac{\\hbar I}{2e}\\,\\delta, \\qquad E_J = \\frac{\\hbar I_c}{2e}.\\]</p>
      <p>bias current से washboard को झुकाइए, और phase एक well में बैठ जाता है, plasma frequency \\(\\omega_p\\) पर oscillate करता हुआ। classically वह barrier के ऊपर से सिर्फ thermal activation से निकल सकता है — एक ऐसी rate जो temperature गिरने पर exponentially जम जाती है। quantum-mechanically वह barrier के <strong>आर-पार tunnel</strong> भी कर सकता है, एक rate (Caldeira–Leggett) पर जो लगभग \\(\\Gamma \\propto \\exp(-\\text{const} \\times \\Delta U / \\hbar \\omega_p)\\) है — temperature से लगभग स्वतंत्र। 1984–85 का सबसे पक्का सबूत: circuit को 0.01 K की ओर ठंडा करने पर मापी गई escape rate <em>गिरना बंद</em> हो गई — thermal activation तो गिरती रहती — और resonant microwaves ने escape को ठीक predicted level spacings पर बढ़ाया, जिससे साबित हुआ कि well के energy levels discrete थे।</p>
      <p>junction से qubit तक, एक property सबसे ज़्यादा मायने रखती है: <strong>anharmonicity</strong>। cosine potential parabola नहीं है, इसलिए उसके levels <em>बराबर दूरी पर</em> नहीं हैं — जिसका मतलब है कि आप उनमें से दो, \\(|0\\rangle\\) और \\(|1\\rangle\\), को बाक़ी को ग़लती से excite किए बिना address कर सकते हैं। superconducting qubit की पूरी चाल यही है। family tree: <strong>Cooper-pair box</strong> (charge qubit, 1997) \\(E_J/E_C \\sim 1\\) पर काम करता है; <strong>transmon</strong> (2007) \\(E_J/E_C \\gg 1\\) तक धकेलता है, energy bands को चपटा कर देता है ताकि qubit charge noise को लगभग नोटिस ही न करे — वही breakthrough जिसने processors को व्यावहारिक बनाया; <strong>flux qubits</strong> (2000) SQUID loops में clockwise और anticlockwise persistent currents के superposition रखते हैं; <strong>phase qubit</strong> (2002) 1985 के current-biased experiment का सीधा वंशज है; <strong>fluxonium</strong> (2009) एक बड़ा inductance जोड़ता है और millisecond coherence तक पहुँचता है।</p>
      <p><strong>Circuit QED</strong> (2004) ने तस्वीर पूरी की: artificial atom को microwave resonator से couple कीजिए, और आप उसे microwave pulses से control और read out कर सकते हैं — हर आधुनिक superconducting processor के अंदर यही architecture है, lab chips से लेकर Google के Sycamore और IBM की Eagle/Heron lines तक।</p>
      <p>coherence का सफ़र, एक पंक्ति में: ~10 ns (1999) → microseconds (2002) → 100+ µs (आधुनिक transmons) → milliseconds (fluxonium)। engineering के चालीस साल, एक खोज पर खड़े: <em>a circuit can be a quantum object</em> (एक circuit एक quantum object हो सकता है)।</p>
      <p><strong>यह पुरस्कार quantum computing के लिए क्यों मायने रखता है:</strong> qubit <em>है</em> ही एक quantized two-level system, और 2025 का पुरस्कार इस खोज के लिए है कि ऐसा system electric circuit में engineer किया जा सकता है। हर बार जब यह course superconducting qubit के लिए \\(|0\\rangle\\) और \\(|1\\rangle\\) लिखता है, तो वह उसी तरह के energy levels इस्तेमाल कर रहा होता है, जिन्हें क्लार्क, डेवोरे और मार्टिनिस ने 1985 में पहली बार resolve किया था।</p>
  `,
  keyPoints: [
    "7 October 2025 को घोषणा — 7 October 1985 के PRL paper (मार्टिनिस, डेवोरे और क्लार्क, PRL 55, 1543) के ठीक 40 साल बाद — citation के साथ \"for the discovery of macroscopic quantum mechanical tunnelling and energy quantisation in an electric circuit\"; 11M SEK तीनों में बराबर बँटा; 10 December 2025 को Stockholm में प्रदान (presentation speech गोरान जोहानसन ने दी, banquet speech डेवोरे ने)।",
    "paper trail: PRL 53, 1260 (1984, डैनियल एस्टेव के साथ resonant-activation calibration) → PRL 55, 1543 (1985, energy-level quantization) → PRL 55, 1908 (1985, tunnelling rates बनाम theory, कोई fitted parameter नहीं) → Science 239, 992 (1988 synthesis)। filters ने thermal microwave noise को 20 orders of magnitude तक दबाया।",
    "विजेता: जॉन क्लार्क (ज. 1942, Cambridge UK; SQUID pioneer; Berkeley/LBL emeritus) — 83; मिशेल डेवोरे (ज. 1953, Paris; Yale/UCSB; Google Quantum AI में Chief Scientist for Quantum Hardware) — 72; जॉन मार्टिनिस (ज. 1958; UCSB; Google 2014–2020; Qolab co-founder/CTO 2022; John Stewart Bell Prize 2021) — 67।",
    "Berkeley 1984–85: ~0.01 K पर current-biased Josephson junction ने macroscopic quantum tunnelling और quantized energy levels दिखाए — अरबों electrons एक quantum particle की तरह व्यवहार करते हुए।",
    "इस काम ने engineerable artificial atom बनाया: 1999 पहला superconducting qubit (~10 ns) → 2000 flux qubits → 2007 transmon, Google/IBM processors के अंदर की chip (डेवोरे co-author) → fluxonium millisecond coherence की ओर; Google की Willow (2024/25) ने threshold से नीचे error correction दिखाया।",
    "मार्टिनिस ने Google के 2019 quantum supremacy demo का नेतृत्व किया (53 transmons, ~200 s बनाम ~10,000 years); तिकड़ी ने Fritz London Memorial Prize (2014) साझा किया — नोबेल से पहले का संकेत; इस पुरस्कार से Berkeley Lab के associated नोबेल की संख्या 17 हो गई।",
    "समय quantum centenary (1925–2025) और UN International Year of Quantum से टकराया — लेकिन committee ने कभी वर्ष को कारण नहीं बताया; क्लासिक नोबेल देरी तब तक चली जब तक technological payoff undeniable न हो गया।",
  ],
  quiz: [
    {
      q: "क्लार्क, डेवोरे और मार्टिनिस ने 1984–85 में क्या साबित किया?",
      options: [
        "पहला काम करने वाला quantum computer",
        "कि ~0.01 K तक ठंडा किया गया Josephson-junction circuit macroscopic quantum tunnelling और quantized energy levels दिखाता है",
        "144 kilometres पर photons का quantum teleportation",
        "बड़ी संख्याओं को factor करने का एक algorithm",
      ],
      answer: 1,
      why: "उन्होंने दिखाया कि circuit में अरबों electrons एक quantum particle की तरह व्यवहार करते हैं — यह खोज थी, कोई device नहीं। पहला superconducting qubit चौदह साल बाद, 1999 में आया।",
    },
    {
      q: "2007 का transmon इतना बड़ा breakthrough क्यों था?",
      options: [
        "यह quantum tunnelling दिखाने वाला पहला circuit था",
        "इसने E_J/E_C >> 1 तक धकेला, energy bands को चपटा कर दिया ताकि qubit charge noise से लगभग अछूता रहे — जिससे processors व्यावहारिक बने",
        "इसने electric circuits की जगह photons इस्तेमाल किए",
        "इसने macroscopic दूरियों पर entanglement साबित किया",
      ],
      answer: 1,
      why: "डेवोरे transmon paper के co-author थे; charge noise के प्रति इसकी असंवेदनशीलता ही कारण है कि transmons आज Google और IBM के processors चलाते हैं।",
    },
    {
      q: "1984–85 के नतीजे ने skeptics को क्यों क़ायल किया?",
      options: [
        "experiment हज़ार बार दोहराया गया था",
        "resonant-activation spectroscopy ने in-situ calibration दी, और data Caldeira–Leggett theory से बिना किसी fitted parameter के मेल खाता था",
        "एक नोबेल विजेता ने सार्वजनिक रूप से इसका समर्थन किया",
        "यह room temperature पर किया गया था",
      ],
      answer: 1,
      why: "1984 की resonant-activation trick से वे quantized levels को सीधे measure कर सके, और tunnelling rates theory से शून्य free parameters के साथ मेल खाईं — experimental proof का gold standard।",
    },
  ],
},
};
