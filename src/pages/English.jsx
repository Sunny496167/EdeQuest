import { useState } from 'react';
import { useGamification } from '../context/GamificationContext';
import DifficultySelector from '../components/DifficultySelector';
import QuizEngine from '../components/QuizEngine';
import PronunciationButton from '../components/PronunciationButton';
import englishQuestions from '../data/englishQuestions';
import { englishAlphabet, popularWords, dailyPhrases } from '../data/englishContent';

function English() {
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
                questions={englishQuestions[selectedDifficulty]}
                subject="english"
                difficulty={selectedDifficulty}
                onBack={handleBackToSelection}
            />
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">📚</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Learn English
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Master the global language of communication!
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    <button
                        onClick={() => setActiveTab('alphabet')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'alphabet'
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        📝 Alphabet (A-Z)
                    </button>
                    <button
                        onClick={() => setActiveTab('words')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'words'
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        📚 Popular Words
                    </button>
                    <button
                        onClick={() => setActiveTab('phrases')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'phrases'
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        💬 Daily Phrases
                    </button>
                    <button
                        onClick={() => setActiveTab('quiz')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'quiz'
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
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
                            English Alphabet (26 Letters)
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {englishAlphabet.map((item) => (
                                <div
                                    key={item.letter}
                                    className={`rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 ${item.type === 'vowel'
                                        ? 'bg-gradient-to-br from-purple-100 to-pink-100'
                                        : 'bg-gradient-to-br from-blue-100 to-indigo-100'
                                        }`}
                                >
                                    <div className={`text-5xl font-bold mb-2 text-center ${item.type === 'vowel' ? 'text-purple-600' : 'text-indigo-600'
                                        }`}>
                                        {item.letter}
                                    </div>
                                    <div className="text-sm text-gray-700 mb-1 text-center">
                                        <strong>{item.pronunciation}</strong>
                                    </div>
                                    <div className="text-xs text-gray-600 text-center">
                                        {item.example}
                                    </div>
                                    <div className="text-xs text-center mt-2">
                                        <span className={`px-2 py-1 rounded-full text-white ${item.type === 'vowel' ? 'bg-purple-500' : 'bg-indigo-500'
                                            }`}>
                                            {item.type}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                            <p className="text-gray-700 text-center">
                                <strong>Vowels (5):</strong> A, E, I, O, U •
                                <strong className="ml-2">Consonants (21):</strong> All other letters
                            </p>
                        </div>
                    </div>
                )}

                {/* Popular Words Tab */}
                {activeTab === 'words' && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                            100 Popular English Words
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {popularWords.map((word, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="text-2xl font-bold text-indigo-600">
                                            {word.word}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <PronunciationButton text={word.word} language="en-US" label="🔊" />
                                            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                                                {word.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        {word.meaning}
                                    </div>
                                    <div className="text-sm text-gray-700 italic">
                                        "{word.example}"
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
                            100 Daily English Phrases
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {dailyPhrases.map((phrase, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="text-xl font-bold text-blue-600 flex-1">
                                            {phrase.phrase}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <PronunciationButton text={phrase.phrase} language="en-US" label="🔊" />
                                            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 ml-2">
                                                {phrase.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        <strong>Usage:</strong> {phrase.usage}
                                    </div>
                                    <div className="text-sm text-gray-700 italic">
                                        "{phrase.example}"
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
                                Test Your English Knowledge!
                            </h2>
                            <p className="text-lg text-gray-600">
                                Choose a difficulty level to start the quiz
                            </p>
                        </div>

                        <DifficultySelector
                            selectedLevel={selectedDifficulty}
                            unlockedLevels={unlockedLevels.english}
                            onSelect={handleDifficultySelect}
                            subject="english"
                        />

                        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Why Learn English? 🌍
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✅ Most widely spoken language globally</li>
                                <li>✅ Language of international business and science</li>
                                <li>✅ Opens doors to global opportunities</li>
                                <li>✅ Access to vast knowledge and entertainment</li>
                                <li>✅ Essential for academic and career success</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default English;
