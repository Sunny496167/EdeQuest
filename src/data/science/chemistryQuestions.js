// Chemistry Questions Data - Organized by Difficulty
// Easy: Basic chemistry concepts
// Medium: Elements, compounds, and reactions
// Hard: Chemical equations and advanced concepts

const chemistryQuestions = {
    easy: [
        {
            id: 1,
            question: "What is water made of?",
            options: ["Hydrogen only", "Oxygen only", "Hydrogen and Oxygen", "Carbon and Oxygen"],
            correctAnswer: "Hydrogen and Oxygen"
        },
        {
            id: 2,
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "H2"],
            correctAnswer: "H2O"
        },
        {
            id: 3,
            question: "What do we breathe in?",
            options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
            correctAnswer: "Oxygen"
        },
        {
            id: 4,
            question: "What is the smallest unit of matter?",
            options: ["Molecule", "Atom", "Cell", "Particle"],
            correctAnswer: "Atom"
        },
        {
            id: 5,
            question: "What is table salt made of?",
            options: ["Sugar", "Sodium and Chlorine", "Water", "Carbon"],
            correctAnswer: "Sodium and Chlorine"
        },
        {
            id: 6,
            question: "What gas do plants release?",
            options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
            correctAnswer: "Oxygen"
        },
        {
            id: 7,
            question: "What is the chemical symbol for oxygen?",
            options: ["O", "O2", "Ox", "OX"],
            correctAnswer: "O2"
        },
        {
            id: 8,
            question: "What happens when you mix vinegar and baking soda?",
            options: ["Nothing", "It fizzes", "It freezes", "It burns"],
            correctAnswer: "It fizzes"
        },
        {
            id: 9,
            question: "What is rust?",
            options: ["Iron oxide", "Gold", "Silver", "Copper"],
            correctAnswer: "Iron oxide"
        },
        {
            id: 10,
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            correctAnswer: "Nitrogen"
        }
    ],
    medium: [
        {
            id: 1,
            question: "What is the chemical symbol for carbon dioxide?",
            options: ["CO", "CO2", "C2O", "O2C"],
            correctAnswer: "CO2"
        },
        {
            id: 2,
            question: "What are the three states of matter?",
            options: [
                "Solid, Liquid, Gas",
                "Hot, Cold, Warm",
                "Big, Small, Medium",
                "Hard, Soft, Rough"
            ],
            correctAnswer: "Solid, Liquid, Gas"
        },
        {
            id: 3,
            question: "What is the pH of pure water?",
            options: ["0", "7", "14", "10"],
            correctAnswer: "7"
        },
        {
            id: 4,
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correctAnswer: "Au"
        },
        {
            id: 5,
            question: "What do we call a substance that speeds up a chemical reaction?",
            options: ["Inhibitor", "Catalyst", "Reactant", "Product"],
            correctAnswer: "Catalyst"
        },
        {
            id: 6,
            question: "What is the atomic number of carbon?",
            options: ["4", "6", "8", "12"],
            correctAnswer: "6"
        },
        {
            id: 7,
            question: "What type of bond forms when atoms share electrons?",
            options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
            correctAnswer: "Covalent bond"
        },
        {
            id: 8,
            question: "What is the chemical formula for table salt?",
            options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
            correctAnswer: "NaCl"
        },
        {
            id: 9,
            question: "What is an acid?",
            options: [
                "pH greater than 7",
                "pH less than 7",
                "pH equal to 7",
                "pH of 14"
            ],
            correctAnswer: "pH less than 7"
        },
        {
            id: 10,
            question: "What is photosynthesis?",
            options: [
                "Plants making food using sunlight",
                "Animals eating plants",
                "Water evaporating",
                "Rocks breaking down"
            ],
            correctAnswer: "Plants making food using sunlight"
        }
    ],
    hard: [
        {
            id: 1,
            question: "What is Avogadro's number?",
            options: ["6.02 × 10²³", "3.14 × 10²³", "9.8 × 10²³", "1.6 × 10²³"],
            correctAnswer: "6.02 × 10²³"
        },
        {
            id: 2,
            question: "What is the electron configuration of oxygen?",
            options: ["1s² 2s² 2p⁴", "1s² 2s² 2p⁶", "1s² 2s² 2p²", "1s² 2s² 2p³"],
            correctAnswer: "1s² 2s² 2p⁴"
        },
        {
            id: 3,
            question: "What is the molar mass of water (H2O)?",
            options: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
            correctAnswer: "18 g/mol"
        },
        {
            id: 4,
            question: "What type of reaction is combustion?",
            options: ["Endothermic", "Exothermic", "Neutral", "Reversible"],
            correctAnswer: "Exothermic"
        },
        {
            id: 5,
            question: "What is the oxidation state of oxygen in H2O?",
            options: ["-2", "-1", "0", "+2"],
            correctAnswer: "-2"
        },
        {
            id: 6,
            question: "What is the Law of Conservation of Mass?",
            options: [
                "Mass can be created",
                "Mass can be destroyed",
                "Mass is neither created nor destroyed in a chemical reaction",
                "Mass always increases"
            ],
            correctAnswer: "Mass is neither created nor destroyed in a chemical reaction"
        },
        {
            id: 7,
            question: "What is an isotope?",
            options: [
                "Atoms with same protons, different neutrons",
                "Atoms with same neutrons, different protons",
                "Atoms with same electrons",
                "Different elements"
            ],
            correctAnswer: "Atoms with same protons, different neutrons"
        },
        {
            id: 8,
            question: "What is the noble gas configuration?",
            options: [
                "Full outer electron shell",
                "Empty outer shell",
                "One electron in outer shell",
                "Seven electrons in outer shell"
            ],
            correctAnswer: "Full outer electron shell"
        },
        {
            id: 9,
            question: "What is a redox reaction?",
            options: [
                "Reduction only",
                "Oxidation only",
                "Both oxidation and reduction",
                "Neither oxidation nor reduction"
            ],
            correctAnswer: "Both oxidation and reduction"
        },
        {
            id: 10,
            question: "What is the ideal gas law equation?",
            options: ["PV = nRT", "F = ma", "E = mc²", "V = IR"],
            correctAnswer: "PV = nRT"
        }
    ]
};

export default chemistryQuestions;
