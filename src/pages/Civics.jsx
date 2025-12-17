import { useState } from 'react';
import QuizEngine from '../components/QuizEngine';
import ScienceCard from '../components/ScienceCard';
import civicsContent from '../data/civicsContent';

function Civics() {
    const [showQuiz, setShowQuiz] = useState(false);

    // If quiz mode, show QuizEngine
    if (showQuiz) {
        return (
            <div>
                <QuizEngine
                    title="Civics Quiz"
                    subtitle="Test your knowledge about government and citizenship!"
                    questions={civicsContent.questions}
                    subject="civics"
                    emoji="⚖️"
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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Civics & Citizenship ⚖️
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Learn about government, rights, and responsibilities!
                    </p>
                </div>

                {/* Civics Topics */}
                <div className="space-y-12">
                    {/* Government */}
                    <section>
                        <h2 className="text-3xl font-bold text-indigo-600 mb-6">
                            🏛️ Government & Democracy
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {civicsContent.concepts
                                .filter((concept) => concept.topic === 'Government')
                                .map((concept) => (
                                    <ScienceCard
                                        key={concept.id}
                                        emoji={concept.emoji}
                                        title={concept.title}
                                        description={concept.description}
                                        color="indigo"
                                    />
                                ))}
                        </div>
                    </section>

                    {/* Rights */}
                    <section>
                        <h2 className="text-3xl font-bold text-blue-600 mb-6">
                            ⚖️ Rights & Freedom
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {civicsContent.concepts
                                .filter((concept) => concept.topic === 'Rights')
                                .map((concept) => (
                                    <ScienceCard
                                        key={concept.id}
                                        emoji={concept.emoji}
                                        title={concept.title}
                                        description={concept.description}
                                        color="blue"
                                    />
                                ))}
                        </div>
                    </section>

                    {/* Responsibilities */}
                    <section>
                        <h2 className="text-3xl font-bold text-purple-600 mb-6">
                            🤝 Duties & Responsibilities
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {civicsContent.concepts
                                .filter((concept) => concept.topic === 'Responsibilities')
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

                {/* Encouragement Section */}
                <div className="mt-8 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        🗳️ Understanding civics helps you become a responsible citizen!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Civics;
