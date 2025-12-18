import { useState } from 'react';
import { useGamification } from '../../context/GamificationContext';
import DifficultySelector from '../../components/features/DifficultySelector';
import QuizEngine from '../../components/quiz/QuizEngine';
import PronunciationButton from '../../components/features/PronunciationButton';
import spanishQuestions from '../../data/languages/spanishQuestions';
import { spanishAlphabet, popularWords, dailyPhrases } from '../../data/languages/spanishContent';

function Spanish() {
    const { unlockedLevels } = useGamification();
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [activeTab, setActiveTab] = useState('alphabet');

    const handleDifficultySelect = (difficulty) => {
        setSelectedDifficulty(difficulty);
    };

    const handleBackToSelection = () => {
        setSelectedDifficulty(null);
    };

    if (selectedDifficulty) {
        return (
            <QuizEngine
                questions={spanishQuestions[selectedDifficulty]}
                subject="spanish"
                difficulty={selectedDifficulty}
                onBack={handleBackToSelection}
            />
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">🇪🇸</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Learn Spanish
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        ¡Hola! Start your Spanish learning journey!
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    <button
                        onClick={() => setActiveTab('alphabet')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'alphabet'
                            ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        📝 Alphabet
                    </button>
                    <button
                        onClick={() => setActiveTab('words')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'words'
                            ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        📚 Popular Words
                    </button>
                    <button
                        onClick={() => setActiveTab('phrases')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'phrases'
                            ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        💬 Daily Phrases
                    </button>
                    <button
                        onClick={() => setActiveTab('quiz')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'quiz'
                            ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        🎯 Take Quiz
                    </button>
                </div>

                {/* Alphabet Tab */}
                {activeTab === 'alphabet' && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                            Spanish Alphabet (27 Letters)
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {spanishAlphabet.map((item) => (
                                <div
                                    key={item.letter}
                                    className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
                                >
                                    <div className="text-4xl font-bold text-violet-600 mb-2">
                                        {item.letter}
                                    </div>
                                    <div className="text-sm text-gray-700 mb-1">
                                        <strong>Pronunciation:</strong> {item.pronunciation}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {item.example}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Popular Words Tab */}
                {activeTab === 'words' && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                            100 Popular Spanish Words
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {popularWords.map((word, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="text-2xl font-bold text-violet-600">
                                            {word.spanish}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <PronunciationButton text={word.spanish} language="es-ES" label="🔊" />
                                            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                                                {word.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-lg text-gray-700">
                                        {word.english}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Daily Phrases Tab */}
                {activeTab === 'phrases' && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                            100 Daily Spanish Phrases
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {dailyPhrases.map((phrase, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="text-xl font-bold text-violet-600 flex-1">
                                            {phrase.spanish}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <PronunciationButton text={phrase.spanish} language="es-ES" label="🔊" />
                                            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 ml-2">
                                                {phrase.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-lg text-gray-700">
                                        {phrase.english}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Quiz Tab */}
                {activeTab === 'quiz' && (
                    <div>
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Test Your Spanish Knowledge!
                            </h2>
                            <p className="text-lg text-gray-600">
                                Choose a difficulty level to start the quiz
                            </p>
                        </div>

                        <DifficultySelector
                            selectedLevel={selectedDifficulty}
                            unlockedLevels={unlockedLevels.spanish}
                            onSelect={handleDifficultySelect}
                            subject="spanish"
                        />

                        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Why Learn Spanish? 🌍
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✅ Spoken by over 500 million people worldwide</li>
                                <li>✅ Official language in 21 countries</li>
                                <li>✅ Second most spoken language globally</li>
                                <li>✅ Opens doors to amazing cultures and opportunities</li>
                                <li>✅ Relatively easy for English speakers to learn</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Spanish;
