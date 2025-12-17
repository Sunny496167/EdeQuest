import { useState } from 'react';
import HistoryCard from '../components/HistoryCard';
import HistoryQuiz from '../components/HistoryQuiz';
import civicSenseStories from '../data/civicSenseStories';

function CivicSense() {
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
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Civic Sense & Good Manners 🌟
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Learn about kindness, ethics, and good behavior!
                    </p>
                </div>

                {/* Story Selection View */}
                {!selectedStory && (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                            Choose a Story to Learn 📖
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {civicSenseStories.map((story) => (
                                <HistoryCard
                                    key={story.id}
                                    title={story.title}
                                    emoji={story.emoji}
                                    onClick={() => handleStoryClick(story)}
                                />
                            ))}
                        </div>

                        {/* Encouragement */}
                        <div className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md border-4 border-teal-200">
                            <p className="text-lg text-gray-700">
                                ✨ These stories teach important values like honesty, kindness, and respect!
                            </p>
                        </div>
                    </div>
                )}

                {/* Story View */}
                {selectedStory && !showQuiz && (
                    <div className="max-w-4xl mx-auto">
                        {/* Story Card */}
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-4 border-teal-300">
                            {/* Story Header */}
                            <div className="text-center mb-8">
                                <div className="text-8xl mb-4">{selectedStory.emoji}</div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                                    {selectedStory.title}
                                </h2>
                                <div className="w-32 h-1 bg-teal-400 mx-auto rounded-full"></div>
                            </div>

                            {/* Story Content */}
                            <div className="prose prose-lg max-w-none mb-8">
                                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                                    {selectedStory.story}
                                </p>
                            </div>

                            {/* Moral */}
                            <div className="bg-teal-50 rounded-xl p-6 mb-8 border-2 border-teal-200">
                                <h3 className="text-xl font-bold text-teal-700 mb-2">
                                    💡 Moral of the Story:
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    {selectedStory.moral}
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
                                Let's see what you learned from {selectedStory.title}!
                            </p>
                        </div>

                        <HistoryQuiz quiz={selectedStory.quiz} storyTitle={selectedStory.title} />

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

export default CivicSense;
