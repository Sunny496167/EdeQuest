import { useState } from 'react';
import QuizEngine from '../components/QuizEngine';
import DifficultySelector from '../components/DifficultySelector';
import hindiQuestions from '../data/hindiQuestions';
import { useGamification } from '../context/GamificationContext';

function Hindi() {
    const { getUnlockedLevels } = useGamification();
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [showQuiz, setShowQuiz] = useState(false);

    const unlockedLevels = getUnlockedLevels('hindi');

    // Handle difficulty selection
    const handleDifficultySelect = (difficulty) => {
        setSelectedDifficulty(difficulty);
        setShowQuiz(true);
    };

    // Handle quiz completion
    const handleQuizComplete = () => {
        // Quiz completed
    };

    // Handle back to difficulty selector
    const handleBackToSelector = () => {
        setShowQuiz(false);
        setSelectedDifficulty(null);
    };

    // If quiz is active, show QuizEngine
    if (showQuiz && selectedDifficulty) {
        return (
            <div>
                <QuizEngine
                    title={`हिंदी - ${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}`}
                    subtitle="हिंदी भाषा सीखें और अपनी शब्दावली बढ़ाएं!"
                    questions={hindiQuestions[selectedDifficulty]}
                    subject="hindi"
                    emoji="🇮🇳"
                    difficulty={selectedDifficulty}
                    onComplete={handleQuizComplete}
                />
                {/* Back to Difficulty Selector Button */}
                <div className="text-center mt-8 pb-12">
                    <button
                        onClick={handleBackToSelector}
                        className="bg-gray-500 text-white px-8 py-4 rounded-xl text-xl font-bold
                     hover:bg-gray-600 hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                        ← Change Difficulty
                    </button>
                </div>
            </div>
        );
    }

    // Otherwise, show difficulty selector
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">🇮🇳</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        हिंदी भाषा
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Learn Hindi language and expand your vocabulary!
                    </p>
                </div>

                {/* Difficulty Selector */}
                <DifficultySelector
                    selectedLevel={selectedDifficulty}
                    unlockedLevels={unlockedLevels}
                    onSelect={handleDifficultySelect}
                    subject="hindi"
                />

                {/* Encouragement Section */}
                <div className="mt-8 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        🌟 हिंदी हमारी राष्ट्रभाषा है। इसे सीखें और गर्व महसूस करें!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hindi;
