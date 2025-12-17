import { useState } from 'react';
import { useGamification } from '../context/GamificationContext';
import DifficultySelector from '../components/DifficultySelector';
import QuizEngine from '../components/QuizEngine';
import geometryQuestions from '../data/geometryQuestions';

function Geometry() {
    const { unlockedLevels } = useGamification();
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const handleDifficultySelect = (difficulty) => {
        setSelectedDifficulty(difficulty);
    };

    const handleBackToSelection = () => {
        setSelectedDifficulty(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {!selectedDifficulty ? (
                    <>
                        <div className="text-center mb-12">
                            <div className="text-6xl mb-4">📐</div>
                            <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                                Geometry
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                                Explore shapes, angles, and measurements!
                            </p>
                        </div>

                        <DifficultySelector
                            selectedLevel={selectedDifficulty}
                            unlockedLevels={unlockedLevels.geometry}
                            onSelect={handleDifficultySelect}
                            subject="geometry"
                        />

                        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                What is Geometry? 🤔
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Geometry is the study of shapes, sizes, and positions. It helps us
                                understand the world around us - from buildings to nature!
                            </p>
                        </div>
                    </>
                ) : (
                    <QuizEngine
                        questions={geometryQuestions[selectedDifficulty]}
                        subject="geometry"
                        difficulty={selectedDifficulty}
                        onBack={handleBackToSelection}
                    />
                )}
            </div>
        </div>
    );
}

export default Geometry;
