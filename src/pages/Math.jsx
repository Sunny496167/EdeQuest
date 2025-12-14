import { useState } from 'react';
import mathQuestions from '../data/mathQuestions';

function Math() {
    // State management
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);

    // Get current question
    const currentQuestion = mathQuestions[currentQuestionIndex];

    // Handle answer selection
    const handleAnswerClick = (option) => {
        if (isAnswered) return; // Prevent changing answer after selection

        setSelectedAnswer(option);
        setIsAnswered(true);

        // Check if answer is correct
        if (option === currentQuestion.correctAnswer) {
            setFeedback('Great job! 🎉');
        } else {
            setFeedback('Try again 💡');
        }
    };

    // Move to next question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < mathQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setFeedback('');
            setIsAnswered(false);
        } else {
            // All questions completed
            setFeedback('🎊 Amazing! You completed all questions! 🎊');
        }
    };

    // Check if quiz is completed
    const isQuizCompleted = currentQuestionIndex === mathQuestions.length - 1 && isAnswered;

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                        Math Zone 📐
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Solve the puzzle to earn stars!
                    </p>
                </div>

                {/* Progress Indicator */}
                <div className="bg-white rounded-2xl p-4 mb-6 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-600">
                            Question {currentQuestionIndex + 1} of {mathQuestions.length}
                        </span>
                        <span className="text-sm font-bold text-primary">
                            Keep going! 🌟
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-primary h-3 rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuestionIndex + 1) / mathQuestions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Question Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    {/* Question Text */}
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
                            {currentQuestion.question}
                        </h2>
                    </div>

                    {/* Answer Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {currentQuestion.options.map((option, index) => {
                            const isSelected = selectedAnswer === option;
                            const isCorrect = option === currentQuestion.correctAnswer;

                            // Determine button styling
                            let buttonStyle = 'bg-gradient-to-r from-purple-100 to-purple-50 hover:from-purple-200 hover:to-purple-100';

                            if (isAnswered) {
                                if (isSelected && isCorrect) {
                                    buttonStyle = 'bg-gradient-to-r from-green-200 to-green-100';
                                } else if (isSelected && !isCorrect) {
                                    buttonStyle = 'bg-gradient-to-r from-red-200 to-red-100';
                                } else if (isCorrect) {
                                    buttonStyle = 'bg-gradient-to-r from-green-100 to-green-50';
                                }
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerClick(option)}
                                    disabled={isAnswered}
                                    className={`${buttonStyle} 
                            p-6 rounded-xl text-xl font-bold text-gray-800
                            transition-all duration-200
                            ${!isAnswered ? 'hover:scale-105 hover:shadow-lg cursor-pointer' : 'cursor-not-allowed'}
                            ${isSelected ? 'ring-4 ring-primary' : ''}
                            shadow-md`}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>

                    {/* Feedback Message */}
                    {feedback && (
                        <div className={`text-center mb-6 p-4 rounded-xl ${feedback.includes('Great job')
                                ? 'bg-green-100 text-green-800'
                                : feedback.includes('Try again')
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-purple-100 text-purple-800'
                            }`}>
                            <p className="text-xl font-bold">{feedback}</p>
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
                                Next Question ➡️
                            </button>
                        </div>
                    )}

                    {/* Quiz Completed Message */}
                    {isQuizCompleted && (
                        <div className="text-center">
                            <button
                                onClick={() => {
                                    setCurrentQuestionIndex(0);
                                    setSelectedAnswer(null);
                                    setFeedback('');
                                    setIsAnswered(false);
                                }}
                                className="bg-accent text-gray-800 px-8 py-4 rounded-xl text-xl font-bold
                         hover:bg-yellow-400 hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                Start Over 🔄
                            </button>
                        </div>
                    )}
                </div>

                {/* Encouragement Section */}
                <div className="mt-8 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        💪 You're doing great! Keep practicing to become a math champion!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Math;
