import { useState } from 'react';
import flagsQuiz from '../data/flagsQuiz';

function FlagQuiz() {
    // State management
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);

    // Get current question
    const currentQuestion = flagsQuiz[currentQuestionIndex];

    // Handle answer selection
    const handleAnswerClick = (option) => {
        if (isAnswered) return;

        setSelectedAnswer(option);
        setIsAnswered(true);

        if (option === currentQuestion.correctAnswer) {
            setFeedback('Perfect! You know your flags! 🎉');
        } else {
            setFeedback('Not quite! Keep exploring! 🌍');
        }
    };

    // Move to next question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < flagsQuiz.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setFeedback('');
            setIsAnswered(false);
        } else {
            setFeedback('🎊 Amazing! You completed the flag quiz! 🎊');
        }
    };

    // Check if quiz is completed
    const isQuizCompleted = currentQuestionIndex === flagsQuiz.length - 1 && isAnswered;

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Indicator */}
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-md">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-600">
                        Flag {currentQuestionIndex + 1} of {flagsQuiz.length}
                    </span>
                    <span className="text-sm font-bold text-violet-600">
                        World Explorer! 🗺️
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className="bg-violet-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestionIndex + 1) / flagsQuiz.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Quiz Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                {/* Flag Display */}
                <div className="mb-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
                    <p className="text-center text-gray-600 mb-4 font-semibold text-lg">
                        Which country does this flag belong to?
                    </p>
                    <div className="text-9xl text-center">
                        {currentQuestion.flag}
                    </div>
                </div>

                {/* Answer Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedAnswer === option;
                        const isCorrect = option === currentQuestion.correctAnswer;

                        let buttonStyle = 'bg-gradient-to-br from-blue-100 to-blue-50 hover:from-blue-200 hover:to-blue-100';

                        if (isAnswered) {
                            if (isSelected && isCorrect) {
                                buttonStyle = 'bg-gradient-to-br from-green-300 to-green-200';
                            } else if (isSelected && !isCorrect) {
                                buttonStyle = 'bg-gradient-to-br from-red-200 to-red-100';
                            } else if (isCorrect) {
                                buttonStyle = 'bg-gradient-to-br from-green-200 to-green-100';
                            }
                        }

                        return (
                            <button
                                key={index}
                                onClick={() => handleAnswerClick(option)}
                                disabled={isAnswered}
                                className={`${buttonStyle} 
                          p-5 rounded-xl text-xl font-bold text-gray-800
                          transition-all duration-200
                          ${!isAnswered ? 'hover:scale-105 hover:shadow-lg cursor-pointer' : 'cursor-not-allowed'}
                          ${isSelected ? 'ring-4 ring-violet-600' : ''}
                          shadow-md`}
                            >
                                {option}
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

                {/* Next Question Button */}
                {isAnswered && !isQuizCompleted && (
                    <div className="text-center">
                        <button
                            onClick={handleNextQuestion}
                            className="bg-violet-600 text-white px-8 py-4 rounded-xl text-xl font-bold
                       hover:bg-purple-700 hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Next Flag ➡️
                        </button>
                    </div>
                )}

                {/* Quiz Completed */}
                {isQuizCompleted && (
                    <div className="text-center">
                        <button
                            onClick={() => {
                                setCurrentQuestionIndex(0);
                                setSelectedAnswer(null);
                                setFeedback('');
                                setIsAnswered(false);
                            }}
                            className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl text-xl font-bold
                       hover:bg-yellow-400 hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Play Again 🔄
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FlagQuiz;
