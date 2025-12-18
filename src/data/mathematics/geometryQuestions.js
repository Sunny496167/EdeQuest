// Geometry Questions Data - Organized by Difficulty
// Easy: Basic shapes and properties
// Medium: Angles and measurements
// Hard: Area, perimeter, and complex shapes

const geometryQuestions = {
    easy: [
        {
            id: 1,
            question: "How many sides does a triangle have?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "3"
        },
        {
            id: 2,
            question: "How many sides does a square have?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4"
        },
        {
            id: 3,
            question: "What shape is a pizza?",
            options: ["Square", "Triangle", "Circle", "Rectangle"],
            correctAnswer: "Circle"
        },
        {
            id: 4,
            question: "How many corners does a rectangle have?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "4"
        },
        {
            id: 5,
            question: "Which shape has no corners?",
            options: ["Square", "Triangle", "Circle", "Rectangle"],
            correctAnswer: "Circle"
        },
        {
            id: 6,
            question: "How many sides does a pentagon have?",
            options: ["4", "5", "6", "7"],
            correctAnswer: "5"
        },
        {
            id: 7,
            question: "What shape is a door?",
            options: ["Circle", "Triangle", "Rectangle", "Pentagon"],
            correctAnswer: "Rectangle"
        },
        {
            id: 8,
            question: "How many sides does a hexagon have?",
            options: ["5", "6", "7", "8"],
            correctAnswer: "6"
        },
        {
            id: 9,
            question: "All sides of a square are:",
            options: ["Different", "Equal", "Curved", "Parallel only"],
            correctAnswer: "Equal"
        },
        {
            id: 10,
            question: "What is a 3D shape called?",
            options: ["Flat shape", "Solid shape", "Line", "Angle"],
            correctAnswer: "Solid shape"
        }
    ],
    medium: [
        {
            id: 1,
            question: "What is the sum of angles in a triangle?",
            options: ["90°", "180°", "270°", "360°"],
            correctAnswer: "180°"
        },
        {
            id: 2,
            question: "How many degrees in a right angle?",
            options: ["45°", "60°", "90°", "180°"],
            correctAnswer: "90°"
        },
        {
            id: 3,
            question: "What is the perimeter of a square with side 5 cm?",
            options: ["10 cm", "15 cm", "20 cm", "25 cm"],
            correctAnswer: "20 cm"
        },
        {
            id: 4,
            question: "How many faces does a cube have?",
            options: ["4", "5", "6", "8"],
            correctAnswer: "6"
        },
        {
            id: 5,
            question: "What is a line that goes from one corner to the opposite corner called?",
            options: ["Side", "Diagonal", "Radius", "Chord"],
            correctAnswer: "Diagonal"
        },
        {
            id: 6,
            question: "How many degrees in a complete circle?",
            options: ["180°", "270°", "360°", "450°"],
            correctAnswer: "360°"
        },
        {
            id: 7,
            question: "What is half of a circle called?",
            options: ["Quarter", "Semicircle", "Diameter", "Radius"],
            correctAnswer: "Semicircle"
        },
        {
            id: 8,
            question: "How many edges does a cube have?",
            options: ["8", "10", "12", "6"],
            correctAnswer: "12"
        },
        {
            id: 9,
            question: "What type of triangle has all equal sides?",
            options: ["Scalene", "Isosceles", "Equilateral", "Right"],
            correctAnswer: "Equilateral"
        },
        {
            id: 10,
            question: "What is the distance around a circle called?",
            options: ["Diameter", "Radius", "Circumference", "Area"],
            correctAnswer: "Circumference"
        }
    ],
    hard: [
        {
            id: 1,
            question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
            options: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
            correctAnswer: "40 cm²"
        },
        {
            id: 2,
            question: "If a square has an area of 36 cm², what is the length of one side?",
            options: ["4 cm", "6 cm", "9 cm", "12 cm"],
            correctAnswer: "6 cm"
        },
        {
            id: 3,
            question: "What is the area of a triangle with base 10 cm and height 6 cm?",
            options: ["16 cm²", "30 cm²", "60 cm²", "120 cm²"],
            correctAnswer: "30 cm²"
        },
        {
            id: 4,
            question: "How many vertices does a rectangular prism have?",
            options: ["6", "8", "10", "12"],
            correctAnswer: "8"
        },
        {
            id: 5,
            question: "What is the volume of a cube with side 3 cm?",
            options: ["9 cm³", "18 cm³", "27 cm³", "81 cm³"],
            correctAnswer: "27 cm³"
        },
        {
            id: 6,
            question: "If the diameter of a circle is 14 cm, what is the radius?",
            options: ["7 cm", "14 cm", "28 cm", "21 cm"],
            correctAnswer: "7 cm"
        },
        {
            id: 7,
            question: "What is the sum of interior angles in a quadrilateral?",
            options: ["180°", "270°", "360°", "450°"],
            correctAnswer: "360°"
        },
        {
            id: 8,
            question: "What is the perimeter of a rectangle with length 12 cm and width 8 cm?",
            options: ["20 cm", "40 cm", "96 cm", "24 cm"],
            correctAnswer: "40 cm"
        },
        {
            id: 9,
            question: "How many faces does a triangular pyramid have?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4"
        },
        {
            id: 10,
            question: "What is the area of a circle with radius 7 cm? (Use π ≈ 22/7)",
            options: ["44 cm²", "154 cm²", "308 cm²", "22 cm²"],
            correctAnswer: "154 cm²"
        }
    ]
};

export default geometryQuestions;
