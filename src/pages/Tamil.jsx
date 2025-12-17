import { useState } from 'react';
import { useGamification } from '../context/GamificationContext';
import DifficultySelector from '../components/DifficultySelector';
import QuizEngine from '../components/QuizEngine';
import PronunciationButton from '../components/PronunciationButton';
import tamilQuestions from '../data/tamilQuestions';
import { tamilAlphabet, popularWords, dailyPhrases } from '../data/tamilContent';

function Tamil() {
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
                questions={tamilQuestions[selectedDifficulty]}
                subject="tamil"
                difficulty={selectedDifficulty}
                onBack={handleBackToSelection}
            />
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">🇮🇳</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        தமிழ் கற்க (Learn Tamil)
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        வணக்கம்! Start your Tamil learning journey!
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    <button onClick={() => setActiveTab('alphabet')} className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'alphabet' ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                        📝 Tamil Alphabet
                    </button>
                    <button onClick={() => setActiveTab('words')} className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'words' ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                        📚 Popular Words
                    </button>
                    <button onClick={() => setActiveTab('phrases')} className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'phrases' ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                        💬 Daily Phrases
                    </button>
                    <button onClick={() => setActiveTab('quiz')} className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'quiz' ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                        🎯 Take Quiz
                    </button>
                </div>

                {activeTab === 'alphabet' && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">தமிழ் எழுத்துக்கள் (Tamil Alphabet)</h2>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-red-600 mb-4">உயிரெழுத்து (Vowels) - 12</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {tamilAlphabet.vowels.map((item, index) => (
                                    <div key={index} className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
                                        <div className="text-5xl font-bold text-red-600 mb-2 text-center">{item.tamil}</div>
                                        <div className="text-sm text-gray-700 mb-1 text-center"><strong>{item.romanization}</strong> ({item.pronunciation})</div>
                                        <div className="text-xs text-gray-600 text-center">{item.example}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">மெய்யெழுத்து (Consonants) - 18</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {tamilAlphabet.consonants.map((item, index) => (
                                    <div key={index} className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
                                        <div className="text-4xl font-bold text-orange-600 mb-2 text-center">{item.tamil}</div>
                                        <div className="text-sm text-gray-700 mb-1 text-center"><strong>{item.romanization}</strong></div>
                                        <div className="text-xs text-gray-600 text-center">{item.example}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'words' && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">100 பிரபலமான சொற்கள் (100 Popular Words)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {popularWords.map((word, index) => (
                                <div key={index} className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="text-2xl font-bold text-red-600">{word.tamil}</div>
                                        <div className="flex items-center gap-2">
                                            <PronunciationButton text={word.tamil} language="ta-IN" label="🔊" />
                                            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">{word.category}</span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-1 italic">{word.romanization}</div>
                                    <div className="text-lg text-gray-700 font-semibold">{word.english}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'phrases' && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">100 தினசரி சொற்றொடர்கள் (100 Daily Phrases)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {dailyPhrases.map((phrase, index) => (
                                <div key={index} className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="text-xl font-bold text-orange-600 flex-1">{phrase.tamil}</div>
                                        <div className="flex items-center gap-2">
                                            <PronunciationButton text={phrase.tamil} language="ta-IN" label="🔊" />
                                            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 ml-2">{phrase.category}</span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2 italic">{phrase.romanization}</div>
                                    <div className="text-lg text-gray-700 font-semibold">{phrase.english}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'quiz' && (
                    <div>
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Test Your Tamil Knowledge!</h2>
                            <p className="text-lg text-gray-600">Choose a difficulty level to start the quiz</p>
                        </div>
                        <DifficultySelector selectedLevel={selectedDifficulty} unlockedLevels={unlockedLevels.tamil} onSelect={handleDifficultySelect} subject="tamil" />
                        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Learn Tamil? 🇮🇳</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✅ One of the oldest living languages (5000+ years)</li>
                                <li>✅ Spoken by over 80 million people</li>
                                <li>✅ Classical language status</li>
                                <li>✅ Official in India, Sri Lanka, Singapore</li>
                                <li>✅ Rich literary and cultural heritage</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tamil;
