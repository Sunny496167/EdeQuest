import { useState } from 'react';
import algebraQuestions from '../data/algebraQuestions';

function Algebra() {
    // State management
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedValue, setSelectedValue] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);
    const [showHint, setShowHint] = useState(false);

    // Get current question
    const currentQuestion = algebraQuestions[currentQuestionIndex];

    // Generate answer options (correct answer ± 2)
    const generateOptions = () => {
        const correct = currentQuestion.answer;
        const options = new Set([correct]);

        // Add nearby numbers
        for (let i = 1; i <= 3; i++) {
            if (correct - i > 0) options.add(correct - i);
            if (correct + i <= 10) options.add(correct + i);
        }

        // Convert to array and sort
        return Array.from(options).sort((a, b) => a - b).slice(0, 4);
    };

    const answerOptions = generateOptions();

    // Handle answer selection
    const handleAnswerClick = (value) => {
        if (isAnswered) return; // Prevent changing answer

        setSelectedValue(value);
        setIsAnswered(true);

        // Check if answer is correct
        if (value === currentQuestion.answer) {
            setFeedback('Perfect! You found x! 🎉');
        } else {
            setFeedback('Not quite! Try the hint below 💡');
            setShowHint(true);
        }
    };

    // Move to next question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < algebraQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedValue(null);
            setFeedback('');
            setIsAnswered(false);
            setShowHint(false);
        } else {
            // All questions completed
            setFeedback('🎊 Awesome! You solved all the algebra puzzles! 🎊');
        }
    };

    // Check if quiz is completed
    const isQuizCompleted = currentQuestionIndex === algebraQuestions.length - 1 && isAnswered;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                        Algebra Adventure 🧠
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-2">
                        Find the value of x!
                    </p>
                    <p className="text-lg text-gray-600">
                        x is a mystery number. Let's find it! 🔍
                    </p>
                </div>

                {/* Progress Indicator */}
                <div className="bg-white rounded-2xl p-4 mb-6 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-600">
                            Puzzle {currentQuestionIndex + 1} of {algebraQuestions.length}
                        </span>
                        <span className="text-sm font-bold text-primary">
                            You're a math detective! 🕵️
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-primary h-3 rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuestionIndex + 1) / algebraQuestions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Equation Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    {/* Equation Display */}
                    <div className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                        <p className="text-center text-gray-600 mb-2 font-semibold">
                            Solve this equation:
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center">
                            {currentQuestion.equation}
                        </h2>
                    </div>

                    {/* Explanation */}
                    <div className="mb-6 text-center">
                        <p className="text-lg text-gray-700">
                            What number should <span className="font-bold text-primary text-2xl">x</span> be?
                        </p>
                    </div>

                    {/* Answer Options */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {answerOptions.map((value) => {
                            const isSelected = selectedValue === value;
                            const isCorrect = value === currentQuestion.answer;

                            // Determine button styling
                            let buttonStyle = 'bg-gradient-to-br from-purple-100 to-purple-50 hover:from-purple-200 hover:to-purple-100';

                            if (isAnswered) {
                                if (isSelected && isCorrect) {
                                    buttonStyle = 'bg-gradient-to-br from-green-200 to-green-100';
                                } else if (isSelected && !isCorrect) {
                                    buttonStyle = 'bg-gradient-to-br from-yellow-200 to-yellow-100';
                                } else if (isCorrect) {
                                    buttonStyle = 'bg-gradient-to-br from-green-100 to-green-50';
                                }
                            }

                            return (
                                <button
                                    key={value}
                                    onClick={() => handleAnswerClick(value)}
                                    disabled={isAnswered}
                                    className={`${buttonStyle} 
                            p-6 rounded-xl text-3xl font-bold text-gray-800
                            transition-all duration-200
                            ${!isAnswered ? 'hover:scale-110 hover:shadow-lg cursor-pointer' : 'cursor-not-allowed'}
                            ${isSelected ? 'ring-4 ring-primary' : ''}
                            shadow-md`}
                                >
                                    {value}
                                </button>
                            );
                        })}
                    </div>

                    {/* Feedback Message */}
                    {feedback && (
                        <div className={`text-center mb-6 p-4 rounded-xl ${feedback.includes('Perfect')
                                ? 'bg-green-100 text-green-800'
                                : feedback.includes('Not quite')
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-purple-100 text-purple-800'
                            }`}>
                            <p className="text-xl font-bold">{feedback}</p>
                        </div>
                    )}

                    {/* Hint Section */}
                    {showHint && (
                        <div className="mb-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">💡</span>
                                <div>
                                    <p className="font-bold text-blue-800 mb-1">Hint:</p>
                                    <p className="text-blue-700">{currentQuestion.hint}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Next Question Button */}
                    {isAnswered && !isQuizCompleted && (
                        <div className="text-center">
                            <button
                                onClick={handleNextQuestion}
                                className="bg-primary text-white px-8 py-4 rounded-xl text-xl font-bold
                         hover:bg-purple-700 hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                Next Puzzle ➡️
                            </button>
                        </div>
                    )}

                    {/* Quiz Completed Message */}
                    {isQuizCompleted && (
                        <div className="text-center">
                            <button
                                onClick={() => {
                                    setCurrentQuestionIndex(0);
                                    setSelectedValue(null);
                                    setFeedback('');
                                    setIsAnswered(false);
                                    setShowHint(false);
                                }}
                                className="bg-accent text-gray-800 px-8 py-4 rounded-xl text-xl font-bold
                         hover:bg-yellow-400 hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                Solve Again 🔄
                            </button>
                        </div>
                    )}
                </div>

                {/* Encouragement Section */}
                <div className="mt-8 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        🌟 Algebra is like solving puzzles! The more you practice, the easier it gets!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Algebra;
