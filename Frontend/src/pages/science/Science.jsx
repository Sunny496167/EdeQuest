import { useState } from 'react';
import QuizEngine from '../../components/quiz/QuizEngine';
import ScienceCard from '../../components/cards/ScienceCard';
import scienceConcepts from '../../data/science/scienceConcepts';
import scienceQuestions from '../../data/science/scienceQuestions';

function Science() {
    const [showQuiz, setShowQuiz] = useState(false);

    // If quiz mode, show QuizEngine
    if (showQuiz) {
        return (
            <div>
                <QuizEngine
                    title="Science Quiz"
                    subtitle="Test what you learned!"
                    questions={scienceQuestions}
                    subject="science"
                    emoji="🔬"
                />
                {/* Back to Concepts Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowQuiz(false)}
                        className="bg-gray-500 text-white px-8 py-4 rounded-xl text-xl font-bold
                     hover:bg-gray-600 hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                        ← Back to Concepts
                    </button>
                </div>
            </div>
        );
    }

    // Otherwise, show concept cards
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Science Lab 🔬
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Explore amazing science concepts!
                    </p>
                </div>

                {/* Science Topics */}
                <div className="space-y-12">
                    {/* Human Body */}
                    <section>
                        <h2 className="text-3xl font-bold text-pink-600 mb-6">
                            🫀 Human Body
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {scienceConcepts
                                .filter((concept) => concept.topic === 'Human Body')
                                .map((concept) => (
                                    <ScienceCard
                                        key={concept.id}
                                        emoji={concept.emoji}
                                        title={concept.title}
                                        description={concept.description}
                                        color="pink"
                                    />
                                ))}
                        </div>
                    </section>

                    {/* Plants */}
                    <section>
                        <h2 className="text-3xl font-bold text-green-600 mb-6">
                            🌱 Plants
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {scienceConcepts
                                .filter((concept) => concept.topic === 'Plants')
                                .map((concept) => (
                                    <ScienceCard
                                        key={concept.id}
                                        emoji={concept.emoji}
                                        title={concept.title}
                                        description={concept.description}
                                        color="green"
                                    />
                                ))}
                        </div>
                    </section>

                    {/* Space */}
                    <section>
                        <h2 className="text-3xl font-bold text-purple-600 mb-6">
                            🌌 Space
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {scienceConcepts
                                .filter((concept) => concept.topic === 'Space')
                                .map((concept) => (
                                    <ScienceCard
                                        key={concept.id}
                                        emoji={concept.emoji}
                                        title={concept.title}
                                        description={concept.description}
                                        color="purple"
                                    />
                                ))}
                        </div>
                    </section>
                </div>

                {/* Take Quiz Button */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => setShowQuiz(true)}
                        className="bg-violet-600 text-white px-8 py-4 rounded-xl text-xl font-bold
                     hover:bg-purple-700 hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                        Take the Quiz! 📝
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Science;
