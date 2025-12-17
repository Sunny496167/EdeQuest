import SubjectCard from '../components/SubjectCard';
import { useGamification } from '../context/GamificationContext';

function SocialScience() {
    const { progress } = useGamification();

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">🌍</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Social Science
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Learn about people, places, and societies!
                    </p>
                </div>

                {/* Social Science Subject Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* History */}
                    <SubjectCard
                        title="History"
                        emoji="⏳"
                        description="Travel back in time!"
                        color="bg-gradient-to-br from-orange-200 to-orange-100"
                        link="/history"
                        progress={`${progress.history || 0}%`}
                    />

                    {/* Geography */}
                    <SubjectCard
                        title="Geography"
                        emoji="🌍"
                        description="Explore countries and cultures!"
                        color="bg-gradient-to-br from-blue-200 to-blue-100"
                        link="/geography"
                        progress={`${progress.geography || 0}%`}
                    />

                    {/* Civics */}
                    <SubjectCard
                        title="Civics"
                        emoji="⚖️"
                        description="Learn about government and rights!"
                        color="bg-gradient-to-br from-cyan-200 to-cyan-100"
                        link="/civics"
                        progress={`${progress.civics || 0}%`}
                    />

                    {/* Economics */}
                    <SubjectCard
                        title="Economics"
                        emoji="💰"
                        description="Understand money and trade!"
                        color="bg-gradient-to-br from-yellow-200 to-yellow-100"
                        link="/economics"
                        progress={`${progress.economics || 0}%`}
                    />
                </div>

                {/* Encouragement Section */}
                <div className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        📚 Understanding society helps us become better citizens!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SocialScience;
