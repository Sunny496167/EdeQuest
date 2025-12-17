// Physics Questions Data - Organized by Difficulty
// Easy: Basic physics concepts
// Medium: Forces, energy, and motion
// Hard: Advanced physics principles

const physicsQuestions = {
    easy: [
        {
            id: 1,
            question: "What makes things fall to the ground?",
            options: ["Wind", "Gravity", "Magnetism", "Electricity"],
            correctAnswer: "Gravity"
        },
        {
            id: 2,
            question: "What do we call energy from the sun?",
            options: ["Wind energy", "Solar energy", "Water energy", "Sound energy"],
            correctAnswer: "Solar energy"
        },
        {
            id: 3,
            question: "What happens when you push a ball?",
            options: ["It stays still", "It moves", "It disappears", "It grows"],
            correctAnswer: "It moves"
        },
        {
            id: 4,
            question: "What do magnets attract?",
            options: ["Wood", "Plastic", "Iron", "Paper"],
            correctAnswer: "Iron"
        },
        {
            id: 5,
            question: "What travels faster: light or sound?",
            options: ["Light", "Sound", "Same speed", "Neither travels"],
            correctAnswer: "Light"
        },
        {
            id: 6,
            question: "What do we need to see things?",
            options: ["Sound", "Light", "Wind", "Heat"],
            correctAnswer: "Light"
        },
        {
            id: 7,
            question: "What makes a ball bounce?",
            options: ["Gravity", "Elasticity", "Magnetism", "Electricity"],
            correctAnswer: "Elasticity"
        },
        {
            id: 8,
            question: "What is the opposite of hot?",
            options: ["Warm", "Cool", "Cold", "Freezing"],
            correctAnswer: "Cold"
        },
        {
            id: 9,
            question: "What do we call the force that slows things down?",
            options: ["Gravity", "Friction", "Magnetism", "Push"],
            correctAnswer: "Friction"
        },
        {
            id: 10,
            question: "What form of energy do we get from food?",
            options: ["Light energy", "Sound energy", "Chemical energy", "Wind energy"],
            correctAnswer: "Chemical energy"
        }
    ],
    medium: [
        {
            id: 1,
            question: "What is the unit of force?",
            options: ["Meter", "Newton", "Kilogram", "Second"],
            correctAnswer: "Newton"
        },
        {
            id: 2,
            question: "What type of energy does a moving car have?",
            options: ["Potential energy", "Kinetic energy", "Sound energy", "Light energy"],
            correctAnswer: "Kinetic energy"
        },
        {
            id: 3,
            question: "What happens to water when it freezes?",
            options: ["Becomes gas", "Becomes solid", "Stays liquid", "Disappears"],
            correctAnswer: "Becomes solid"
        },
        {
            id: 4,
            question: "What is the speed of light approximately?",
            options: ["300 km/s", "3,000 km/s", "30,000 km/s", "300,000 km/s"],
            correctAnswer: "300,000 km/s"
        },
        {
            id: 5,
            question: "What do we call materials that allow electricity to pass through?",
            options: ["Insulators", "Conductors", "Resistors", "Capacitors"],
            correctAnswer: "Conductors"
        },
        {
            id: 6,
            question: "What is the center of an atom called?",
            options: ["Electron", "Proton", "Nucleus", "Neutron"],
            correctAnswer: "Nucleus"
        },
        {
            id: 7,
            question: "What type of energy is stored in a stretched rubber band?",
            options: ["Kinetic energy", "Potential energy", "Heat energy", "Sound energy"],
            correctAnswer: "Potential energy"
        },
        {
            id: 8,
            question: "What do opposite poles of magnets do?",
            options: ["Repel", "Attract", "Nothing", "Explode"],
            correctAnswer: "Attract"
        },
        {
            id: 9,
            question: "What is the unit of electrical current?",
            options: ["Volt", "Ampere", "Ohm", "Watt"],
            correctAnswer: "Ampere"
        },
        {
            id: 10,
            question: "What causes day and night on Earth?",
            options: ["Earth's rotation", "Moon's rotation", "Sun's rotation", "Earth's revolution"],
            correctAnswer: "Earth's rotation"
        }
    ],
    hard: [
        {
            id: 1,
            question: "What is Newton's First Law of Motion?",
            options: [
                "Force equals mass times acceleration",
                "An object at rest stays at rest unless acted upon",
                "Every action has an equal and opposite reaction",
                "Energy cannot be created or destroyed"
            ],
            correctAnswer: "An object at rest stays at rest unless acted upon"
        },
        {
            id: 2,
            question: "What is the formula for kinetic energy?",
            options: ["KE = mv", "KE = 1/2 mv²", "KE = mgh", "KE = mc²"],
            correctAnswer: "KE = 1/2 mv²"
        },
        {
            id: 3,
            question: "What is the acceleration due to gravity on Earth?",
            options: ["9.8 m/s", "9.8 m/s²", "98 m/s²", "0.98 m/s²"],
            correctAnswer: "9.8 m/s²"
        },
        {
            id: 4,
            question: "What type of wave is sound?",
            options: ["Transverse wave", "Longitudinal wave", "Electromagnetic wave", "Standing wave"],
            correctAnswer: "Longitudinal wave"
        },
        {
            id: 5,
            question: "What is Ohm's Law?",
            options: ["V = IR", "F = ma", "E = mc²", "P = IV"],
            correctAnswer: "V = IR"
        },
        {
            id: 6,
            question: "What is the unit of power?",
            options: ["Joule", "Newton", "Watt", "Volt"],
            correctAnswer: "Watt"
        },
        {
            id: 7,
            question: "What happens to the volume of a gas when pressure increases (at constant temperature)?",
            options: ["Increases", "Decreases", "Stays same", "Doubles"],
            correctAnswer: "Decreases"
        },
        {
            id: 8,
            question: "What is the principle behind a lever?",
            options: [
                "Conservation of energy",
                "Mechanical advantage",
                "Both are correct",
                "Newton's third law"
            ],
            correctAnswer: "Both are correct"
        },
        {
            id: 9,
            question: "What is the relationship between frequency and wavelength?",
            options: [
                "Directly proportional",
                "Inversely proportional",
                "No relationship",
                "Exponential"
            ],
            correctAnswer: "Inversely proportional"
        },
        {
            id: 10,
            question: "What is the Law of Conservation of Energy?",
            options: [
                "Energy can be created",
                "Energy can be destroyed",
                "Energy cannot be created or destroyed, only transformed",
                "Energy always increases"
            ],
            correctAnswer: "Energy cannot be created or destroyed, only transformed"
        }
    ]
};

export default physicsQuestions;
