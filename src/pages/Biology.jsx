import { useState } from 'react';
import DifficultySelector from '../components/DifficultySelector';
import QuizEngine from '../components/QuizEngine';
import biologyQuestions from '../data/biologyQuestions';

function Biology() {
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const handleDifficultySelect = (difficulty) => {
        setSelectedDifficulty(difficulty);
    };

    const handleBackToSelection = () => {
        setSelectedDifficulty(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {!selectedDifficulty ? (
                    <>
                        <div className="text-center mb-12">
                            <div className="text-6xl mb-4">🧬</div>
                            <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                                Biology
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                                Study living things and life processes!
                            </p>
                        </div>

                        <DifficultySelector
                            onSelectDifficulty={handleDifficultySelect}
                            subject="biology"
                        />

                        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                What is Biology? 🤔
                            </h2>
                            <p className="text-gray-700">
                                Biology is the study of life! Learn about plants, animals, cells, and how living things work.
                            </p>
                        </div>
                    </>
                ) : (
                    <QuizEngine
                        questions={biologyQuestions[selectedDifficulty]}
                        subject="biology"
                        difficulty={selectedDifficulty}
                        onBack={handleBackToSelection}
                    />
                )}
            </div>
        </div>
    );
}

export default Biology;
