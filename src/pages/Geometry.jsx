import { useState } from 'react';
import DifficultySelector from '../components/DifficultySelector';
import QuizEngine from '../components/QuizEngine';
import geometryQuestions from '../data/geometryQuestions';

function Geometry() {
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
                        {/* Page Header */}
                        <div className="text-center mb-12">
                            <div className="text-6xl mb-4">📐</div>
                            <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                                Geometry
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                                Explore shapes, angles, and measurements!
                            </p>
                        </div>

                        {/* Difficulty Selection */}
                        <DifficultySelector
                            onSelectDifficulty={handleDifficultySelect}
                            subject="geometry"
                        />

                        {/* Info Section */}
                        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                What is Geometry? 🤔
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Geometry is the study of shapes, sizes, and positions. It helps us
                                understand the world around us - from buildings to nature!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-800 mb-2">📊 Easy Level</h3>
                                    <p className="text-sm text-gray-700">
                                        Basic shapes and their properties
                                    </p>
                                </div>
                                <div className="bg-cyan-100 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-800 mb-2">📈 Medium Level</h3>
                                    <p className="text-sm text-gray-700">
                                        Angles, measurements, and 3D shapes
                                    </p>
                                </div>
                                <div className="bg-teal-100 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-800 mb-2">🎯 Hard Level</h3>
                                    <p className="text-sm text-gray-700">
                                        Area, perimeter, volume calculations
                                    </p>
                                </div>
                                <div className="bg-purple-100 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-800 mb-2">✨ Fun Fact</h3>
                                    <p className="text-sm text-gray-700">
                                        Ancient Egyptians used geometry to build pyramids!
                                    </p>
                                </div>
                            </div>
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
