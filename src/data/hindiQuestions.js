// Hindi Questions Data - Organized by Difficulty
// Easy: Basic words and meanings
// Medium: Simple sentences and grammar
// Hard: Advanced vocabulary and sentence formation

const hindiQuestions = {
    easy: [
        {
            id: 1,
            question: "'किताब' का अंग्रेजी में क्या अर्थ है?",
            options: ["Pen", "Book", "Table", "Chair"],
            correctAnswer: "Book"
        },
        {
            id: 2,
            question: "'पानी' का अंग्रेजी में क्या अर्थ है?",
            options: ["Fire", "Water", "Air", "Earth"],
            correctAnswer: "Water"
        },
        {
            id: 3,
            question: "'सूरज' का अंग्रेजी में क्या अर्थ है?",
            options: ["Moon", "Star", "Sun", "Sky"],
            correctAnswer: "Sun"
        },
        {
            id: 4,
            question: "'फूल' का अंग्रेजी में क्या अर्थ है?",
            options: ["Tree", "Leaf", "Flower", "Fruit"],
            correctAnswer: "Flower"
        },
        {
            id: 5,
            question: "'माता' का अंग्रेजी में क्या अर्थ है?",
            options: ["Father", "Mother", "Brother", "Sister"],
            correctAnswer: "Mother"
        },
        {
            id: 6,
            question: "कौन सा शब्द सही है?",
            options: ["किताब", "कितब", "कीताब", "कितअब"],
            correctAnswer: "किताब"
        },
        {
            id: 7,
            question: "'लाल' रंग को अंग्रेजी में क्या कहते हैं?",
            options: ["Blue", "Red", "Green", "Yellow"],
            correctAnswer: "Red"
        },
        {
            id: 8,
            question: "'एक' का अंग्रेजी में क्या अर्थ है?",
            options: ["One", "Two", "Three", "Four"],
            correctAnswer: "One"
        },
        {
            id: 9,
            question: "'घर' का अंग्रेजी में क्या अर्थ है?",
            options: ["School", "House", "Market", "Garden"],
            correctAnswer: "House"
        },
        {
            id: 10,
            question: "'बच्चा' का अंग्रेजी में क्या अर्थ है?",
            options: ["Adult", "Child", "Old", "Young"],
            correctAnswer: "Child"
        }
    ],
    medium: [
        {
            id: 1,
            question: "सही वाक्य चुनें:",
            options: [
                "मैं स्कूल जाता हूँ",
                "मैं स्कूल जाते हैं",
                "मैं स्कूल जाती हूँ",
                "मैं स्कूल जाना"
            ],
            correctAnswer: "मैं स्कूल जाता हूँ"
        },
        {
            id: 2,
            question: "'खुश' का विलोम शब्द क्या है?",
            options: ["प्रसन्न", "दुखी", "हँसना", "मुस्कुराना"],
            correctAnswer: "दुखी"
        },
        {
            id: 3,
            question: "'बड़ा' का विलोम शब्द क्या है?",
            options: ["विशाल", "छोटा", "लंबा", "मोटा"],
            correctAnswer: "छोटा"
        },
        {
            id: 4,
            question: "कौन सा शब्द क्रिया है?",
            options: ["किताब", "दौड़ना", "लाल", "सुंदर"],
            correctAnswer: "दौड़ना"
        },
        {
            id: 5,
            question: "'सुबह' का विलोम शब्द क्या है?",
            options: ["दोपहर", "शाम", "रात", "दिन"],
            correctAnswer: "शाम"
        },
        {
            id: 6,
            question: "सही वर्तनी चुनें:",
            options: ["विद्यालय", "विधालय", "विद्यालय", "बिद्यालय"],
            correctAnswer: "विद्यालय"
        },
        {
            id: 7,
            question: "'मित्र' का पर्यायवाची शब्द क्या है?",
            options: ["शत्रु", "दोस्त", "भाई", "पिता"],
            correctAnswer: "दोस्त"
        },
        {
            id: 8,
            question: "कौन सा शब्द संज्ञा है?",
            options: ["दौड़ना", "सुंदर", "पुस्तक", "धीरे"],
            correctAnswer: "पुस्तक"
        },
        {
            id: 9,
            question: "'नदी' का बहुवचन क्या है?",
            options: ["नदियाँ", "नदीयाँ", "नदिया", "नदीएँ"],
            correctAnswer: "नदियाँ"
        },
        {
            id: 10,
            question: "सही वाक्य चुनें:",
            options: [
                "वह पढ़ता है",
                "वह पढ़ते हैं",
                "वह पढ़ती हैं",
                "वह पढ़ना"
            ],
            correctAnswer: "वह पढ़ता है"
        }
    ],
    hard: [
        {
            id: 1,
            question: "'परिश्रम' का पर्यायवाची शब्द क्या है?",
            options: ["आलस्य", "मेहनत", "खेल", "विश्राम"],
            correctAnswer: "मेहनत"
        },
        {
            id: 2,
            question: "मुहावरे का सही अर्थ चुनें: 'आँखों में धूल झोंकना'",
            options: [
                "धूल डालना",
                "धोखा देना",
                "आँखें बंद करना",
                "रोना"
            ],
            correctAnswer: "धोखा देना"
        },
        {
            id: 3,
            question: "'ज्ञान' का विशेषण रूप क्या है?",
            options: ["ज्ञानी", "ज्ञानवान", "ज्ञानपूर्ण", "सभी सही हैं"],
            correctAnswer: "सभी सही हैं"
        },
        {
            id: 4,
            question: "सही संधि चुनें: 'सूर्य + उदय'",
            options: ["सूर्योदय", "सूर्युदय", "सूरजोदय", "सूर्यउदय"],
            correctAnswer: "सूर्योदय"
        },
        {
            id: 5,
            question: "'निर्भय' में कौन सा उपसर्ग है?",
            options: ["निर", "निः", "नि", "भय"],
            correctAnswer: "निर"
        },
        {
            id: 6,
            question: "'सत्य' का विलोम शब्द क्या है?",
            options: ["झूठ", "असत्य", "मिथ्या", "सभी सही हैं"],
            correctAnswer: "सभी सही हैं"
        },
        {
            id: 7,
            question: "कौन सा शब्द तत्सम है?",
            options: ["आग", "सूर्य", "दूध", "घर"],
            correctAnswer: "सूर्य"
        },
        {
            id: 8,
            question: "'हाथी' का विशेषण क्या है?",
            options: ["हाथीवाला", "हस्ती", "गजराज", "विशाल"],
            correctAnswer: "विशाल"
        },
        {
            id: 9,
            question: "सही समास चुनें: 'राजपुत्र'",
            options: ["तत्पुरुष समास", "द्वंद्व समास", "कर्मधारय समास", "बहुव्रीहि समास"],
            correctAnswer: "तत्पुरुष समास"
        },
        {
            id: 10,
            question: "'अनुशासन' का क्या अर्थ है?",
            options: [
                "स्वतंत्रता",
                "नियमों का पालन",
                "विद्रोह",
                "खेल"
            ],
            correctAnswer: "नियमों का पालन"
        }
    ]
};

export default hindiQuestions;
