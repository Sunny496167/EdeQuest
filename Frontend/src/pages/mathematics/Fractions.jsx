import { useState } from 'react';
import { useGamification } from '../../context/GamificationContext';
import DifficultySelector from '../../components/features/DifficultySelector';
import QuizEngine from '../../components/quiz/QuizEngine';
import fractionsQuestions from '../../data/mathematics/fractionsQuestions';

function Fractions() {
    const { unlockedLevels } = useGamification();
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const handleDifficultySelect = (difficulty) => {
        setSelectedDifficulty(difficulty);
    };

    const handleBackToSelection = () => {
        setSelectedDifficulty(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {!selectedDifficulty ? (
                    <>
                        {/* Page Header */}
                        <div className="text-center mb-12">
                            <div className="text-6xl mb-4">🍕</div>
                            <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                                Fractions
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                                Learn about parts of a whole!
                            </p>
                        </div>

                        {/* Difficulty Selection */}
                        <DifficultySelector
                            selectedLevel={selectedDifficulty}
                            unlockedLevels={unlockedLevels.fractions}
                            onSelect={handleDifficultySelect}
                            subject="fractions"
                        />

                        {/* Info Section */}
                        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                What are Fractions? 🤔
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Fractions represent parts of a whole. When you cut a pizza into slices,
                                each slice is a fraction of the whole pizza!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-pink-100 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-800 mb-2">📊 Easy Level</h3>
                                    <p className="text-sm text-gray-700">
                                        Basic fractions and simple operations
                                    </p>
                                </div>
                                <div className="bg-rose-100 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-800 mb-2">📈 Medium Level</h3>
                                    <p className="text-sm text-gray-700">
                                        Comparing and converting fractions
                                    </p>
                                </div>
                                <div className="bg-red-100 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-800 mb-2">🎯 Hard Level</h3>
                                    <p className="text-sm text-gray-700">
                                        Complex fraction operations
                                    </p>
                                </div>
                                <div className="bg-purple-100 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-800 mb-2">✨ Fun Fact</h3>
                                    <p className="text-sm text-gray-700">
                                        Fractions are used in cooking, music, and sports!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <QuizEngine
                        questions={fractionsQuestions[selectedDifficulty]}
                        subject="fractions"
                        difficulty={selectedDifficulty}
                        onBack={handleBackToSelection}
                    />
                )}
            </div>
        </div>
    );
}

export default Fractions;
