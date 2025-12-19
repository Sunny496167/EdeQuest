import { useState } from 'react';
import { useGamification } from '../../context/GamificationContext';
import DifficultySelector from '../../components/features/DifficultySelector';
import QuizEngine from '../../components/quiz/QuizEngine';
import PronunciationButton from '../../components/features/PronunciationButton';
import hindiQuestions from '../../data/languages/hindiQuestions';
import { hindiAlphabet, popularWords, dailyPhrases } from '../../data/languages/hindiContent';

function Hindi() {
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
                questions={hindiQuestions[selectedDifficulty]}
                subject="hindi"
                difficulty={selectedDifficulty}
                onBack={handleBackToSelection}
            />
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">🇮🇳</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        हिंदी सीखें (Learn Hindi)
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        नमस्ते! Start your Hindi learning journey!
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    <button
                        onClick={() => setActiveTab('alphabet')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'alphabet'
                            ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        📝 Devanagari Alphabet
                    </button>
                    <button
                        onClick={() => setActiveTab('words')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'words'
                            ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        📚 Popular Words
                    </button>
                    <button
                        onClick={() => setActiveTab('phrases')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'phrases'
                            ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        💬 Daily Phrases
                    </button>
                    <button
                        onClick={() => setActiveTab('quiz')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'quiz'
                            ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
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
                            देवनागरी वर्णमाला (Devanagari Alphabet)
                        </h2>

                        {/* Vowels */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">स्वर (Vowels) - 12</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {hindiAlphabet.vowels.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="text-5xl font-bold text-orange-600 mb-2 text-center">
                                            {item.devanagari}
                                        </div>
                                        <div className="text-sm text-gray-700 mb-1 text-center">
                                            <strong>{item.romanization}</strong> ({item.pronunciation})
                                        </div>
                                        <div className="text-xs text-gray-600 text-center">
                                            {item.example}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Consonants */}
                        <div>
                            <h3 className="text-2xl font-bold text-green-600 mb-4">व्यंजन (Consonants) - 34</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {hindiAlphabet.consonants.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="text-4xl font-bold text-green-600 mb-2 text-center">
                                            {item.devanagari}
                                        </div>
                                        <div className="text-sm text-gray-700 mb-1 text-center">
                                            <strong>{item.romanization}</strong>
                                        </div>
                                        <div className="text-xs text-gray-600 text-center">
                                            {item.example}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Popular Words Tab */}
                {activeTab === 'words' && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                            100 लोकप्रिय शब्द (100 Popular Words)
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {popularWords.map((word, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                        <div className="text-2xl font-bold text-orange-600 break-words">{word.hindi}</div>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <PronunciationButton text={word.hindi} language="hi-IN" label="🔊" />
                                            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 whitespace-nowrap">{word.category}</span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-1 italic">
                                        {word.romanization}
                                    </div>
                                    <div className="text-lg text-gray-700 font-semibold">
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
                            100 दैनिक वाक्यांश (100 Daily Phrases)
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {dailyPhrases.map((phrase, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                                        <div className="text-xl font-bold text-green-600 flex-1 break-words">
                                            {phrase.hindi}
                                        </div>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <PronunciationButton text={phrase.hindi} language="hi-IN" label="🔊" />
                                            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 whitespace-nowrap">
                                                {phrase.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2 italic">
                                        {phrase.romanization}
                                    </div>
                                    <div className="text-lg text-gray-700 font-semibold">
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
                                Test Your Hindi Knowledge!
                            </h2>
                            <p className="text-lg text-gray-600">
                                Choose a difficulty level to start the quiz
                            </p>
                        </div>

                        <DifficultySelector
                            selectedLevel={selectedDifficulty}
                            unlockedLevels={unlockedLevels.hindi}
                            onSelect={handleDifficultySelect}
                            subject="hindi"
                        />

                        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Why Learn Hindi? 🇮🇳
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✅ Official language of India</li>
                                <li>✅ Spoken by over 600 million people</li>
                                <li>✅ Rich cultural and literary heritage</li>
                                <li>✅ Gateway to understanding Indian culture</li>
                                <li>✅ Beautiful Devanagari script</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Hindi;
