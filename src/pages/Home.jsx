import SubjectCard from '../components/SubjectCard';
import DailyGoalCard from '../components/DailyGoalCard';

function Home() {
    return (
        <div className="py-8 md:py-12">
            {/* Daily Goal Card */}
            <div className="mb-12">
                <DailyGoalCard />
            </div>

            {/* Page Title */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                    Choose Your Adventure 🎯
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-semibold">
                    What would you like to learn today?
                </p>
            </div>

            {/* Subject Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Math Card */}
                <SubjectCard
                    title="Math"
                    emoji="📐"
                    description="Numbers, equations, and problem-solving fun!"
                    color="bg-gradient-to-br from-purple-200 to-purple-100"
                    progress="0%"
                />

                {/* Science Card */}
                <SubjectCard
                    title="Science"
                    emoji="🧪"
                    description="Discover how the world works through experiments!"
                    color="bg-gradient-to-br from-green-200 to-green-100"
                    progress="0%"
                />

                {/* History Card */}
                <SubjectCard
                    title="History"
                    emoji="🏺"
                    description="Travel back in time and explore ancient civilizations!"
                    color="bg-gradient-to-br from-orange-200 to-orange-100"
                    progress="0%"
                />

                {/* Geography Card */}
                <SubjectCard
                    title="Geography"
                    emoji="🌍"
                    description="Explore countries, cultures, and amazing places!"
                    color="bg-gradient-to-br from-blue-200 to-blue-100"
                    progress="0%"
                />
            </div>

            {/* Motivational Section */}
            <div className="mt-16 text-center bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 rounded-2xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-violet-600 mb-3">
                    Ready to Start Learning? 🚀
                </h2>
                <p className="text-lg text-gray-700">
                    Click on any subject above to begin your adventure!
                </p>
            </div>
        </div>
    );
}

export default Home;
