function Home() {
    return (
        <div className="text-center py-12 md:py-20">
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
                Welcome to EduQuest 🎉
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-gray-600 font-semibold mb-8">
                Learn. Play. Grow.
            </p>

            {/* Welcome Message */}
            <div className="max-w-2xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                    Get ready for an amazing learning adventure! Explore exciting subjects,
                    solve fun challenges, and discover new things every day.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 
                        hover:scale-105 transition-transform duration-200 shadow-md">
                        <div className="text-5xl mb-3">📚</div>
                        <h3 className="text-xl font-bold text-primary mb-2">Learn</h3>
                        <p className="text-gray-600">
                            Explore exciting topics and expand your knowledge
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-6 
                        hover:scale-105 transition-transform duration-200 shadow-md">
                        <div className="text-5xl mb-3">🎮</div>
                        <h3 className="text-xl font-bold text-primary mb-2">Play</h3>
                        <p className="text-gray-600">
                            Have fun with interactive quizzes and games
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6 
                        hover:scale-105 transition-transform duration-200 shadow-md">
                        <div className="text-5xl mb-3">🌟</div>
                        <h3 className="text-xl font-bold text-primary mb-2">Grow</h3>
                        <p className="text-gray-600">
                            Build confidence and achieve your goals
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
