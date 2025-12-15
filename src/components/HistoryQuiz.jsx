import { useState } from 'react';

function HistoryQuiz({ quiz }) {
    // State management
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);

    // Get current question
    const currentQuestion = quiz[currentQuestionIndex];

    // Handle answer selection
    const handleAnswerClick = (option) => {
        if (isAnswered) return;

        setSelectedAnswer(option);
        setIsAnswered(true);

        if (option === currentQuestion.correctAnswer) {
            setFeedback('Excellent! You learned well! 🎉');
        } else {
            setFeedback('Not quite! Read the story again! 📚');
        }
    };

    // Move to next question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setFeedback('');
            setIsAnswered(false);
        } else {
            setFeedback('🎊 Amazing! You completed the quiz! 🎊');
        }
    };

    // Check if quiz is completed
    const isQuizCompleted = currentQuestionIndex === quiz.length - 1 && isAnswered;

    return (
        <div>
            {/* Progress Indicator */}
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-md">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-600">
                        Question {currentQuestionIndex + 1} of {quiz.length}
                    </span>
                    <span className="text-sm font-bold text-violet-600">
                        Time Traveler! ⏳
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className="bg-violet-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestionIndex + 1) / quiz.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Quiz Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-4 border-amber-200">
                {/* Question Text */}
                <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
                        {currentQuestion.question}
                    </h3>
                </div>

                {/* Answer Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedAnswer === option;
                        const isCorrect = option === currentQuestion.correctAnswer;

                        let buttonStyle = 'bg-gradient-to-br from-amber-100 to-amber-50 hover:from-amber-200 hover:to-amber-100';

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
                          p-5 rounded-xl text-lg font-semibold text-gray-800
                          transition-all duration-200
                          ${!isAnswered ? 'hover:scale-105 hover:shadow-lg cursor-pointer' : 'cursor-not-allowed'}
                          ${isSelected ? 'ring-4 ring-violet-600' : ''}
                          shadow-md border-2 border-amber-300`}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>

                {/* Feedback Message */}
                {feedback && (
                    <div className={`text-center mb-6 p-4 rounded-xl ${feedback.includes('Excellent')
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
                            Next Question ➡️
                        </button>
                    </div>
                )}

                {/* Quiz Completed Message */}
                {isQuizCompleted && (
                    <div className="text-center">
                        <p className="text-lg text-gray-600 mb-4">
                            Great job learning about history! 📜
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HistoryQuiz;
