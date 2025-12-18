import { useState } from 'react';
import QuizEngine from '../../components/quiz/QuizEngine';
import ScienceCard from '../../components/cards/ScienceCard';
import environmentalStudies from '../../data/life-skills/environmentalStudies';

function EnvironmentalStudies() {
    const [showQuiz, setShowQuiz] = useState(false);

    // If quiz mode, show QuizEngine
    if (showQuiz) {
        return (
            <div>
                <QuizEngine
                    title="Environmental Studies Quiz"
                    subtitle="Test your knowledge about nature and conservation!"
                    questions={environmentalStudies.questions}
                    subject="environmental"
                    emoji="🌍"
                    difficulty="easy"
                />
                {/* Back to Concepts Button */}
                <div className="text-center mt-8 pb-12">
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
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Environmental Studies 🌍
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Learn to protect our planet and nature!
                    </p>
                </div>

                {/* Environmental Topics */}
                <div className="space-y-12">
                    {/* Conservation */}
                    <section>
                        <h2 className="text-3xl font-bold text-green-600 mb-6">
                            💧 Conservation
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {environmentalStudies.concepts
                                .filter((concept) => concept.topic === 'Conservation')
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

                    {/* Nature & Wildlife */}
                    <section>
                        <h2 className="text-3xl font-bold text-emerald-600 mb-6">
                            🌳 Nature & Wildlife
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {environmentalStudies.concepts
                                .filter((concept) => concept.topic === 'Nature' || concept.topic === 'Wildlife')
                                .map((concept) => (
                                    <ScienceCard
                                        key={concept.id}
                                        emoji={concept.emoji}
                                        title={concept.title}
                                        description={concept.description}
                                        color="emerald"
                                    />
                                ))}
                        </div>
                    </section>

                    {/* Sustainability */}
                    <section>
                        <h2 className="text-3xl font-bold text-teal-600 mb-6">
                            ♻️ Sustainability & Cleanliness
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {environmentalStudies.concepts
                                .filter((concept) => concept.topic === 'Sustainability' || concept.topic === 'Cleanliness')
                                .map((concept) => (
                                    <ScienceCard
                                        key={concept.id}
                                        emoji={concept.emoji}
                                        title={concept.title}
                                        description={concept.description}
                                        color="teal"
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

                {/* Encouragement Section */}
                <div className="mt-8 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        🌱 Protecting the environment is everyone's responsibility. Start today!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default EnvironmentalStudies;
