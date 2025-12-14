import { useState, useEffect, useRef } from 'react';
import { useGamification } from '../context/GamificationContext';

function QuizEngine({ title, subtitle, questions, subject, emoji = '📝', difficulty = 'easy', onComplete }) {
    const { addStar, incrementProgress, unlockBadge, unlockLevel, incrementDailySolved } = useGamification();

    // State management
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);

    // Track if we've already counted this question for daily goal
    const questionCountedRef = useRef(false);

    // Get current question
    const currentQuestion = questions[currentQuestionIndex];

    // Reset questionCounted when moving to next question
    useEffect(() => {
        questionCountedRef.current = false;
    }, [currentQuestionIndex]);

    // Increment daily solved count when question is answered
    useEffect(() => {
        if (isAnswered && !questionCountedRef.current) {
            incrementDailySolved();
            questionCountedRef.current = true;
        }
    }, [isAnswered, incrementDailySolved]);

    // Handle option selection
    const handleOptionClick = (option) => {
        if (isAnswered) return;

        setSelectedOption(option);
        setIsAnswered(true);

        if (option === currentQuestion.correctAnswer) {
            setFeedbackMessage('Excellent! You got it right! 🎉');
            // Award star for correct answer
            addStar();
        } else {
            setFeedbackMessage('Not quite! Keep learning! 💡');
        }

        // Check if this is the last question
        if (currentQuestionIndex === questions.length - 1) {
            // Quiz completed
            setTimeout(() => {
                setFeedbackMessage('🎊 Amazing! You completed the quiz! 🎊');

                // Update progress (10% per quiz completion)
                incrementProgress(subject, 10);

                // Unlock subject badge
                const badgeMap = {
                    math: 'math_explorer',
                    algebra: 'math_explorer',
                    science: 'science_explorer',
                    geography: 'geography_explorer',
                    history: 'history_explorer'
                };

                if (badgeMap[subject]) {
                    unlockBadge(badgeMap[subject]);
                }

                // Unlock first quiz badge
                unlockBadge('first_quiz');

                // Unlock next difficulty level
                if (difficulty === 'easy') {
                    unlockLevel(subject, 'medium');
                } else if (difficulty === 'medium') {
                    unlockLevel(subject, 'hard');
                }

                // Call onComplete callback if provided
                if (onComplete) {
                    onComplete();
                }
            }, 1500); // Delay to show correct/wrong feedback first
        }
    };

    // Move to next question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setFeedbackMessage('');
            setIsAnswered(false);
        }
    };

    // Restart quiz
    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setFeedbackMessage('');
        setIsAnswered(false);
    };

    // Check if quiz is completed
    const isQuizCompleted = currentQuestionIndex === questions.length - 1 && isAnswered;

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Quiz Header */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">{emoji}</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Progress Indicator */}
                <div className="bg-white rounded-2xl p-4 mb-6 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-600">
                            Question {currentQuestionIndex + 1} of {questions.length}
                        </span>
                        <span className="text-sm font-bold text-primary">
                            You're doing great! 🌟
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-primary h-3 rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
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
                            const isSelected = selectedOption === option;
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
                                    onClick={() => handleOptionClick(option)}
                                    disabled={isAnswered}
                                    className={`${buttonStyle} 
                            p-5 rounded-xl text-lg font-semibold text-gray-800
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
                    {feedbackMessage && (
                        <div className={`text-center mb-6 p-4 rounded-xl ${feedbackMessage.includes('Excellent')
                            ? 'bg-green-100 text-green-800'
                            : feedbackMessage.includes('Not quite')
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                            <p className="text-xl font-bold">{feedbackMessage}</p>
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

                    {/* Quiz Completed */}
                    {isQuizCompleted && (
                        <div className="text-center">
                            <button
                                onClick={handleRestart}
                                className="bg-accent text-gray-800 px-8 py-4 rounded-xl text-xl font-bold
                         hover:bg-yellow-400 hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                Retake Quiz 🔄
                            </button>
                        </div>
                    )}
                </div>

                {/* Encouragement Section */}
                <div className="mt-8 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        🌈 Every question you answer makes you smarter! Keep learning!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default QuizEngine;
