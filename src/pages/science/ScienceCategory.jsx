import SubjectCard from '../../components/cards/SubjectCard';
import { useGamification } from '../../context/GamificationContext';

function ScienceCategory() {
    const { progress } = useGamification();

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">🔬</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Science
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Explore the wonders of science!
                    </p>
                </div>

                {/* Science Subject Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* General Science */}
                    <SubjectCard
                        title="General Science"
                        emoji="🔬"
                        description="Discover how the world works!"
                        color="bg-gradient-to-br from-green-200 to-green-100"
                        link="/science"
                        progress={`${progress.science || 0}%`}
                    />

                    {/* Physics */}
                    <SubjectCard
                        title="Physics"
                        emoji="⚡"
                        description="Learn about forces, energy, and motion!"
                        color="bg-gradient-to-br from-blue-200 to-blue-100"
                        link="/physics"
                        progress={`${progress.physics || 0}%`}
                    />

                    {/* Chemistry */}
                    <SubjectCard
                        title="Chemistry"
                        emoji="🧪"
                        description="Explore atoms, molecules, and reactions!"
                        color="bg-gradient-to-br from-purple-200 to-purple-100"
                        link="/chemistry"
                        progress={`${progress.chemistry || 0}%`}
                    />

                    {/* Biology */}
                    <SubjectCard
                        title="Biology"
                        emoji="🧬"
                        description="Study living things and life processes!"
                        color="bg-gradient-to-br from-teal-200 to-teal-100"
                        link="/biology"
                        progress={`${progress.biology || 0}%`}
                    />
                </div>

                {/* Encouragement Section */}
                <div className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        🔭 Science helps us understand the amazing world around us!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ScienceCategory;
