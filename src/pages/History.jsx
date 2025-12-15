import { useState } from 'react';
import HistoryCard from '../components/HistoryCard';
import HistoryQuiz from '../components/HistoryQuiz';
import historyStories from '../data/historyStories';

function History() {
    // State management
    const [selectedStory, setSelectedStory] = useState(null);
    const [showQuiz, setShowQuiz] = useState(false);

    // Handle story card click
    const handleStoryClick = (story) => {
        setSelectedStory(story);
        setShowQuiz(false);
    };

    // Handle back to stories
    const handleBackToStories = () => {
        setSelectedStory(null);
        setShowQuiz(false);
    };

    // Handle start quiz
    const handleStartQuiz = () => {
        setShowQuiz(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        History Time Machine ⏳
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Travel to the past and learn amazing stories!
                    </p>
                </div>

                {/* Story Selection View */}
                {!selectedStory && (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                            Choose Your Time Period 🕰️
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {historyStories.map((story) => (
                                <HistoryCard
                                    key={story.id}
                                    title={story.title}
                                    emoji={story.emoji}
                                    onClick={() => handleStoryClick(story)}
                                />
                            ))}
                        </div>

                        {/* Encouragement */}
                        <div className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md border-4 border-amber-200">
                            <p className="text-lg text-gray-700">
                                📜 History is full of amazing stories! Click on a card to begin your journey!
                            </p>
                        </div>
                    </div>
                )}

                {/* Story View */}
                {selectedStory && !showQuiz && (
                    <div className="max-w-4xl mx-auto">
                        {/* Story Card */}
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-4 border-amber-300">
                            {/* Story Header */}
                            <div className="text-center mb-8">
                                <div className="text-8xl mb-4">{selectedStory.emoji}</div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                                    {selectedStory.title}
                                </h2>
                                <div className="w-32 h-1 bg-amber-400 mx-auto rounded-full"></div>
                            </div>

                            {/* Story Content */}
                            <div className="prose prose-lg max-w-none mb-8">
                                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                                    {selectedStory.story}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                <button
                                    onClick={handleBackToStories}
                                    className="bg-gray-500 text-white px-8 py-4 rounded-xl text-xl font-bold
                           hover:bg-gray-600 hover:scale-105 transition-all duration-200 shadow-lg"
                                >
                                    ← Back to Stories
                                </button>
                                <button
                                    onClick={handleStartQuiz}
                                    className="bg-violet-600 text-white px-8 py-4 rounded-xl text-xl font-bold
                           hover:bg-purple-700 hover:scale-105 transition-all duration-200 shadow-lg"
                                >
                                    Take the Quiz! 📝
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Quiz View */}
                {selectedStory && showQuiz && (
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                Quiz Time! 📝
                            </h2>
                            <p className="text-lg text-gray-600">
                                Let's see what you learned about {selectedStory.title}!
                            </p>
                        </div>

                        <HistoryQuiz quiz={selectedStory.quiz} />

                        {/* Back Button */}
                        <div className="text-center mt-8">
                            <button
                                onClick={handleBackToStories}
                                className="bg-gray-500 text-white px-8 py-4 rounded-xl text-xl font-bold
                         hover:bg-gray-600 hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                ← Explore More Stories
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default History;
