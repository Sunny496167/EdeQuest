import { useState } from 'react';
import ScienceCard from '../components/ScienceCard';
import scienceConcepts from '../data/scienceConcepts';
import scienceQuestions from '../data/scienceQuestions';

function Science() {
    // Quiz state management
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);

    // Get current question
    const currentQuestion = scienceQuestions[currentQuestionIndex];

    // Handle answer selection
    const handleAnswerClick = (option) => {
        if (isAnswered) return;

        setSelectedAnswer(option);
        setIsAnswered(true);

        if (option === currentQuestion.correctAnswer) {
            setFeedback('Excellent! You got it right! 🎉');
        } else {
            setFeedback('Not quite! Keep learning! 💡');
        }
    };

    // Move to next question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < scienceQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setFeedback('');
            setIsAnswered(false);
        } else {
            setFeedback('🎊 Amazing! You completed the Science Quiz! 🎊');
        }
    };

    // Check if quiz is completed
    const isQuizCompleted = currentQuestionIndex === scienceQuestions.length - 1 && isAnswered;

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                        Science Lab 🔬
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Explore, learn, and test your knowledge!
                    </p>
                </div>

                {/* Science Concepts Section */}
                {!showQuiz && (
                    <div className="mb-12">
                        {scienceConcepts.map((topicGroup, index) => (
                            <div key={index} className="mb-12">
                                {/* Topic Heading */}
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                                    {topicGroup.topic}
                                </h2>

                                {/* Concept Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {topicGroup.concepts.map((concept) => (
                                        <ScienceCard
                                            key={concept.id}
                                            title={concept.title}
                                            description={concept.description}
                                            emoji={concept.emoji}
                                            color={topicGroup.color}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Start Quiz Button */}
                        <div className="text-center mt-16">
                            <button
                                onClick={() => setShowQuiz(true)}
                                className="bg-primary text-white px-10 py-5 rounded-2xl text-2xl font-bold
                         hover:bg-purple-700 hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                Ready for the Quiz? 🧪
                            </button>
                        </div>
                    </div>
                )}

                {/* Quiz Section */}
                {showQuiz && (
                    <div className="max-w-3xl mx-auto">
                        {/* Progress Indicator */}
                        <div className="bg-white rounded-2xl p-4 mb-6 shadow-md">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-semibold text-gray-600">
                                    Question {currentQuestionIndex + 1} of {scienceQuestions.length}
                                </span>
                                <span className="text-sm font-bold text-primary">
                                    You're doing great! 🌟
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-primary h-3 rounded-full transition-all duration-300"
                                    style={{ width: `${((currentQuestionIndex + 1) / scienceQuestions.length) * 100}%` }}
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
                            <div className="grid grid-cols-1 gap-4 mb-6">
                                {currentQuestion.options.map((option, index) => {
                                    const isSelected = selectedAnswer === option;
                                    const isCorrect = option === currentQuestion.correctAnswer;

                                    let buttonStyle = 'bg-gradient-to-r from-green-100 to-green-50 hover:from-green-200 hover:to-green-100';

                                    if (isAnswered) {
                                        if (isSelected && isCorrect) {
                                            buttonStyle = 'bg-gradient-to-r from-green-300 to-green-200';
                                        } else if (isSelected && !isCorrect) {
                                            buttonStyle = 'bg-gradient-to-r from-red-200 to-red-100';
                                        } else if (isCorrect) {
                                            buttonStyle = 'bg-gradient-to-r from-green-200 to-green-100';
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
                                ${!isAnswered ? 'hover:scale-102 hover:shadow-lg cursor-pointer' : 'cursor-not-allowed'}
                                ${isSelected ? 'ring-4 ring-primary' : ''}
                                shadow-md text-left`}
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
                                        className="bg-primary text-white px-8 py-4 rounded-xl text-xl font-bold
                             hover:bg-purple-700 hover:scale-105 transition-all duration-200 shadow-lg"
                                    >
                                        Next Question ➡️
                                    </button>
                                </div>
                            )}

                            {/* Quiz Completed */}
                            {isQuizCompleted && (
                                <div className="text-center space-y-4">
                                    <button
                                        onClick={() => {
                                            setCurrentQuestionIndex(0);
                                            setSelectedAnswer(null);
                                            setFeedback('');
                                            setIsAnswered(false);
                                        }}
                                        className="bg-accent text-gray-800 px-8 py-4 rounded-xl text-xl font-bold
                             hover:bg-yellow-400 hover:scale-105 transition-all duration-200 shadow-lg mr-4"
                                    >
                                        Retake Quiz 🔄
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowQuiz(false);
                                            setCurrentQuestionIndex(0);
                                            setSelectedAnswer(null);
                                            setFeedback('');
                                            setIsAnswered(false);
                                        }}
                                        className="bg-primary text-white px-8 py-4 rounded-xl text-xl font-bold
                             hover:bg-purple-700 hover:scale-105 transition-all duration-200 shadow-lg"
                                    >
                                        Back to Concepts 📚
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Encouragement Section */}
                {!showQuiz && (
                    <div className="mt-8 text-center bg-white rounded-2xl p-6 shadow-md">
                        <p className="text-lg text-gray-700">
                            🔬 Science is all around us! Keep exploring and asking questions!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Science;
