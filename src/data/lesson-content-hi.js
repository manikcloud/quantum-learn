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
};
