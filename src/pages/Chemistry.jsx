import { useState } from 'react';
import DifficultySelector from '../components/DifficultySelector';
import QuizEngine from '../components/QuizEngine';
import chemistryQuestions from '../data/chemistryQuestions';

function Chemistry() {
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const handleDifficultySelect = (difficulty) => {
        setSelectedDifficulty(difficulty);
    };

    const handleBackToSelection = () => {
        setSelectedDifficulty(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {!selectedDifficulty ? (
                    <>
                        <div className="text-center mb-12">
                            <div className="text-6xl mb-4">🧪</div>
                            <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                                Chemistry
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                                Explore atoms, molecules, and reactions!
                            </p>
                        </div>

                        <DifficultySelector
                            onSelectDifficulty={handleDifficultySelect}
                            subject="chemistry"
                        />

                        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                What is Chemistry? 🤔
                            </h2>
                            <p className="text-gray-700">
                                Chemistry is the study of matter and how it changes. Everything around you is made of chemicals!
                            </p>
                        </div>
                    </>
                ) : (
                    <QuizEngine
                        questions={chemistryQuestions[selectedDifficulty]}
                        subject="chemistry"
                        difficulty={selectedDifficulty}
                        onBack={handleBackToSelection}
                    />
                )}
            </div>
        </div>
    );
}

export default Chemistry;
