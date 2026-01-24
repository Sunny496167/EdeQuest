import { useState } from 'react';
import ScienceCard from '../../components/cards/ScienceCard';
import QuizEngine from '../../components/quiz/QuizEngine';
import economicsContent from '../../data/social-science/economicsContent';

function Economics() {
    const [selectedConcept, setSelectedConcept] = useState(null);
    const [showQuiz, setShowQuiz] = useState(false);

    const handleConceptClick = (concept) => {
        setSelectedConcept(concept);
    };

    const handleStartQuiz = () => {
        setShowQuiz(true);
    };

    const handleBackToSelection = () => {
        setShowQuiz(false);
        setSelectedConcept(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {!showQuiz ? (
                    <>
                        <div className="text-center mb-12">
                            <div className="text-6xl mb-4">💰</div>
                            <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                                Economics
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                                Understand money, trade, and resources!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {economicsContent.concepts.map((concept) => (
                                <ScienceCard
                                    key={concept.id}
                                    title={concept.title}
                                    emoji={concept.emoji}
                                    description={concept.description}
                                    onClick={() => handleConceptClick(concept)}
                                />
                            ))}
                        </div>

                        <div className="text-center">
                            <button
                                onClick={handleStartQuiz}
                                className="bg-violet-600 text-white px-8 py-4 rounded-xl font-bold text-lg
                                         hover:bg-violet-700 transition-colors duration-200 shadow-lg"
                            >
                                Take the Economics Quiz! 📝
                            </button>
                        </div>
                    </>
                ) : (
                    <QuizEngine
                        questions={economicsContent.questions}
                        subject="economics"
                        difficulty="easy"
                        onBack={handleBackToSelection}
                    />
                )}
            </div>
        </div>
    );
}

export default Economics;
