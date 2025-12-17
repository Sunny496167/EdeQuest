// Fractions Questions Data - Organized by Difficulty
// Easy: Basic fraction concepts and simple operations
// Medium: Comparing and converting fractions
// Hard: Complex fraction operations

const fractionsQuestions = {
    easy: [
        {
            id: 1,
            question: "What fraction of the pizza is shaded if 1 out of 4 slices is shaded?",
            options: ["1/2", "1/4", "1/3", "2/4"],
            correctAnswer: "1/4"
        },
        {
            id: 2,
            question: "What is 1/2 + 1/2?",
            options: ["1", "2/2", "1/4", "2/4"],
            correctAnswer: "1"
        },
        {
            id: 3,
            question: "Which fraction is equal to one half?",
            options: ["2/4", "1/3", "1/5", "3/4"],
            correctAnswer: "2/4"
        },
        {
            id: 4,
            question: "What is 3/4 - 1/4?",
            options: ["2/4", "1/2", "1/4", "3/8"],
            correctAnswer: "1/2"
        },
        {
            id: 5,
            question: "If you eat 2 out of 8 cookies, what fraction did you eat?",
            options: ["2/8", "1/4", "Both are correct", "1/2"],
            correctAnswer: "Both are correct"
        },
        {
            id: 6,
            question: "What is 1/3 + 1/3?",
            options: ["2/3", "1/6", "2/6", "1/3"],
            correctAnswer: "2/3"
        },
        {
            id: 7,
            question: "Which is larger: 1/2 or 1/4?",
            options: ["1/2", "1/4", "They are equal", "Cannot compare"],
            correctAnswer: "1/2"
        },
        {
            id: 8,
            question: "What fraction represents the whole?",
            options: ["1/1", "2/2", "4/4", "All of these"],
            correctAnswer: "All of these"
        },
        {
            id: 9,
            question: "What is 5/5 equal to?",
            options: ["0", "1", "5", "1/5"],
            correctAnswer: "1"
        },
        {
            id: 10,
            question: "If a pie is cut into 6 equal pieces and you take 3, what fraction do you have?",
            options: ["3/6", "1/2", "Both are correct", "6/3"],
            correctAnswer: "Both are correct"
        }
    ],
    medium: [
        {
            id: 1,
            question: "What is 2/3 + 1/3?",
            options: ["3/3", "1", "Both are correct", "3/6"],
            correctAnswer: "Both are correct"
        },
        {
            id: 2,
            question: "Which fraction is equivalent to 3/6?",
            options: ["1/2", "2/3", "3/4", "1/3"],
            correctAnswer: "1/2"
        },
        {
            id: 3,
            question: "What is 5/8 - 2/8?",
            options: ["3/8", "3/16", "7/8", "1/2"],
            correctAnswer: "3/8"
        },
        {
            id: 4,
            question: "Convert 2/4 to simplest form:",
            options: ["1/2", "4/8", "2/4", "1/4"],
            correctAnswer: "1/2"
        },
        {
            id: 5,
            question: "Which is larger: 3/4 or 2/3?",
            options: ["3/4", "2/3", "They are equal", "Cannot compare"],
            correctAnswer: "3/4"
        },
        {
            id: 6,
            question: "What is 1/2 × 2?",
            options: ["1", "1/4", "2", "1/2"],
            correctAnswer: "1"
        },
        {
            id: 7,
            question: "Simplify: 4/8",
            options: ["1/2", "2/4", "1/4", "4/8"],
            correctAnswer: "1/2"
        },
        {
            id: 8,
            question: "What is 3/5 + 1/5?",
            options: ["4/5", "4/10", "2/5", "3/10"],
            correctAnswer: "4/5"
        },
        {
            id: 9,
            question: "Convert 6/12 to simplest form:",
            options: ["1/2", "3/6", "2/4", "6/12"],
            correctAnswer: "1/2"
        },
        {
            id: 10,
            question: "What is 7/10 - 3/10?",
            options: ["4/10", "2/5", "Both are correct", "4/20"],
            correctAnswer: "Both are correct"
        }
    ],
    hard: [
        {
            id: 1,
            question: "What is 2/3 + 1/4?",
            options: ["11/12", "3/7", "8/12", "3/12"],
            correctAnswer: "11/12"
        },
        {
            id: 2,
            question: "What is 3/4 × 2/3?",
            options: ["1/2", "6/12", "Both are correct", "5/7"],
            correctAnswer: "Both are correct"
        },
        {
            id: 3,
            question: "What is 5/6 - 1/3?",
            options: ["1/2", "4/3", "2/3", "4/6"],
            correctAnswer: "1/2"
        },
        {
            id: 4,
            question: "Convert 15/20 to simplest form:",
            options: ["3/4", "5/10", "15/20", "1/2"],
            correctAnswer: "3/4"
        },
        {
            id: 5,
            question: "What is 1/2 ÷ 1/4?",
            options: ["2", "1/8", "1/2", "4"],
            correctAnswer: "2"
        },
        {
            id: 6,
            question: "What is 2/5 + 3/10?",
            options: ["7/10", "5/15", "1/2", "5/10"],
            correctAnswer: "7/10"
        },
        {
            id: 7,
            question: "What is 4/5 × 5/8?",
            options: ["1/2", "20/40", "Both are correct", "9/13"],
            correctAnswer: "Both are correct"
        },
        {
            id: 8,
            question: "Simplify: 18/24",
            options: ["3/4", "9/12", "6/8", "18/24"],
            correctAnswer: "3/4"
        },
        {
            id: 9,
            question: "What is 7/8 - 3/4?",
            options: ["1/8", "4/4", "1/2", "4/8"],
            correctAnswer: "1/8"
        },
        {
            id: 10,
            question: "What is 2/3 ÷ 4/9?",
            options: ["3/2", "1.5", "Both are correct", "8/27"],
            correctAnswer: "Both are correct"
        }
    ]
};

export default fractionsQuestions;
