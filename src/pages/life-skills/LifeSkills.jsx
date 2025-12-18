import { useState } from 'react';
import QuizEngine from '../../components/quiz/QuizEngine';
import ScienceCard from '../../components/cards/ScienceCard';
import lifeSkillsScenarios from '../../data/life-skills/lifeSkillsScenarios';

function LifeSkills() {
    const [showQuiz, setShowQuiz] = useState(false);

    // If quiz mode, show QuizEngine
    if (showQuiz) {
        return (
            <div>
                <QuizEngine
                    title="Life Skills Quiz"
                    subtitle="Make smart decisions and solve problems wisely!"
                    questions={lifeSkillsScenarios.questions}
                    subject="lifeskills"
                    emoji="🧠"
                    difficulty="easy"
                />
                {/* Back to Scenarios Button */}
                <div className="text-center mt-8 pb-12">
                    <button
                        onClick={() => setShowQuiz(false)}
                        className="bg-gray-500 text-white px-8 py-4 rounded-xl text-xl font-bold
                     hover:bg-gray-600 hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                        ← Back to Scenarios
                    </button>
                </div>
            </div>
        );
    }

    // Otherwise, show scenario cards
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Life Skills 🧠
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Learn problem-solving, decision-making, and emotional intelligence!
                    </p>
                </div>

                {/* Life Skills Topics */}
                <div className="space-y-12">
                    {/* Emotional Intelligence */}
                    <section>
                        <h2 className="text-3xl font-bold text-pink-600 mb-6">
                            😊 Emotional Intelligence
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {lifeSkillsScenarios.scenarios
                                .filter((scenario) => scenario.topic === 'Emotional Intelligence')
                                .map((scenario) => (
                                    <ScienceCard
                                        key={scenario.id}
                                        emoji={scenario.emoji}
                                        title={scenario.title}
                                        description={scenario.description}
                                        color="pink"
                                    />
                                ))}
                        </div>
                    </section>

                    {/* Problem Solving */}
                    <section>
                        <h2 className="text-3xl font-bold text-rose-600 mb-6">
                            🧩 Critical Thinking & Problem Solving
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {lifeSkillsScenarios.scenarios
                                .filter((scenario) => scenario.topic === 'Critical Thinking')
                                .map((scenario) => (
                                    <ScienceCard
                                        key={scenario.id}
                                        emoji={scenario.emoji}
                                        title={scenario.title}
                                        description={scenario.description}
                                        color="rose"
                                    />
                                ))}
                        </div>
                    </section>

                    {/* Communication & Teamwork */}
                    <section>
                        <h2 className="text-3xl font-bold text-red-600 mb-6">
                            💬 Communication & Collaboration
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {lifeSkillsScenarios.scenarios
                                .filter((scenario) =>
                                    scenario.topic === 'Communication' ||
                                    scenario.topic === 'Collaboration' ||
                                    scenario.topic === 'Decision Making' ||
                                    scenario.topic === 'Organization'
                                )
                                .map((scenario) => (
                                    <ScienceCard
                                        key={scenario.id}
                                        emoji={scenario.emoji}
                                        title={scenario.title}
                                        description={scenario.description}
                                        color="red"
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
                        💪 Life skills help you succeed in school, friendships, and life!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LifeSkills;
