import { useState } from 'react';
import { useGamification } from '../../context/GamificationContext';
import DifficultySelector from '../../components/features/DifficultySelector';
import QuizEngine from '../../components/quiz/QuizEngine';
import PronunciationButton from '../../components/features/PronunciationButton';
import bengaliQuestions from '../../data/languages/bengaliQuestions';
import { bengaliAlphabet, popularWords, dailyPhrases } from '../../data/languages/bengaliContent';

function Bengali() {
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
                questions={bengaliQuestions[selectedDifficulty]}
                subject="bengali"
                difficulty={selectedDifficulty}
                onBack={handleBackToSelection}
            />
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">🇧🇩</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        বাংলা শিখুন (Learn Bengali)
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        নমস্কার! Start your Bengali learning journey!
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    <button onClick={() => setActiveTab('alphabet')} className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'alphabet' ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                        📝 Bengali Alphabet
                    </button>
                    <button onClick={() => setActiveTab('words')} className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'words' ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                        📚 Popular Words
                    </button>
                    <button onClick={() => setActiveTab('phrases')} className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'phrases' ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                        💬 Daily Phrases
                    </button>
                    <button onClick={() => setActiveTab('quiz')} className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'quiz' ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                        🎯 Take Quiz
                    </button>
                </div>

                {activeTab === 'alphabet' && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">বাংলা বর্ণমালা (Bengali Alphabet)</h2>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-green-600 mb-4">স্বরবর্ণ (Vowels) - 11</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {bengaliAlphabet.vowels.map((item, index) => (
                                    <div key={index} className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
                                        <div className="text-5xl font-bold text-green-600 mb-2 text-center">{item.bengali}</div>
                                        <div className="text-sm text-gray-700 mb-1 text-center"><strong>{item.romanization}</strong> ({item.pronunciation})</div>
                                        <div className="text-xs text-gray-600 text-center">{item.example}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-teal-600 mb-4">ব্যঞ্জনবর্ণ (Consonants) - 39</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {bengaliAlphabet.consonants.map((item, index) => (
                                    <div key={index} className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
                                        <div className="text-4xl font-bold text-teal-600 mb-2 text-center">{item.bengali}</div>
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">১০০ জনপ্রিয় শব্দ (100 Popular Words)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {popularWords.map((word, index) => (
                                <div key={index} className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                        <div className="text-2xl font-bold text-green-600 break-words">{word.bengali}</div>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <PronunciationButton text={word.bengali} language="bn-IN" label="🔊" />
                                            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 whitespace-nowrap">{word.category}</span>
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">১০০ দৈনিক বাক্যাংশ (100 Daily Phrases)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {dailyPhrases.map((phrase, index) => (
                                <div key={index} className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                                        <div className="text-xl font-bold text-teal-600 flex-1 break-words">{phrase.bengali}</div>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <PronunciationButton text={phrase.bengali} language="bn-IN" label="🔊" />
                                            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 whitespace-nowrap">{phrase.category}</span>
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
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Test Your Bengali Knowledge!</h2>
                            <p className="text-lg text-gray-600">Choose a difficulty level to start the quiz</p>
                        </div>
                        <DifficultySelector selectedLevel={selectedDifficulty} unlockedLevels={unlockedLevels.bengali} onSelect={handleDifficultySelect} subject="bengali" />
                        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Learn Bengali? 🇧🇩</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✅ 7th most spoken language in the world</li>
                                <li>✅ Spoken by over 265 million people</li>
                                <li>✅ Rich literary tradition (Rabindranath Tagore)</li>
                                <li>✅ Official language of Bangladesh and West Bengal</li>
                                <li>✅ Beautiful script derived from ancient Brahmi</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Bengali;
