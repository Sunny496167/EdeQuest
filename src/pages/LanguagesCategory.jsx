import SubjectCard from '../components/SubjectCard';
import { useGamification } from '../context/GamificationContext';

function LanguagesCategory() {
    const { progress } = useGamification();

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">📚</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Languages
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Master languages and communication!
                    </p>
                </div>

                {/* Language Subject Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* English */}
                    <SubjectCard
                        title="English"
                        emoji="📚"
                        description="Master grammar and vocabulary!"
                        color="bg-gradient-to-br from-indigo-200 to-indigo-100"
                        link="/english"
                        progress={`${progress.english || 0}%`}
                    />

                    {/* Hindi */}
                    <SubjectCard
                        title="Hindi"
                        emoji="🇮🇳"
                        description="Learn Hindi language!"
                        color="bg-gradient-to-br from-yellow-200 to-yellow-100"
                        link="/hindi"
                        progress={`${progress.hindi || 0}%`}
                    />

                    {/* Spanish */}
                    <SubjectCard
                        title="Spanish"
                        emoji="🇪🇸"
                        description="¡Hola! Learn Spanish!"
                        color="bg-gradient-to-br from-red-200 to-orange-100"
                        link="/spanish"
                        progress={`${progress.spanish || 0}%`}
                    />

                    {/* Bengali */}
                    <SubjectCard
                        title="Bengali"
                        emoji="🇧🇩"
                        description="নমস্কার! Learn Bengali!"
                        color="bg-gradient-to-br from-green-200 to-teal-100"
                        link="/bengali"
                        progress={`${progress.bengali || 0}%`}
                    />

                    {/* Tamil */}
                    <SubjectCard
                        title="Tamil"
                        emoji="🏛️"
                        description="வணக்கம்! Learn Tamil!"
                        color="bg-gradient-to-br from-orange-200 to-red-100"
                        link="/tamil"
                        progress={`${progress.tamil || 0}%`}
                    />
                </div>

                {/* Encouragement Section */}
                <div className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        🗣️ Learning languages opens doors to new worlds!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LanguagesCategory;
