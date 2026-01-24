import SubjectCard from '../../components/cards/SubjectCard';
import { useGamification } from '../../context/GamificationContext';

function LifeValues() {
    const { progress } = useGamification();

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">🌟</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Life & Values
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Build character and life skills!
                    </p>
                </div>

                {/* Life & Values Subject Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Civic Sense */}
                    <SubjectCard
                        title="Civic Sense"
                        emoji="🌟"
                        description="Learn good manners and values!"
                        color="bg-gradient-to-br from-pink-200 to-pink-100"
                        link="/civic-sense"
                        progress={`${progress.civicsense || 0}%`}
                    />

                    {/* Life Skills */}
                    <SubjectCard
                        title="Life Skills"
                        emoji="🧠"
                        description="Build emotional intelligence!"
                        color="bg-gradient-to-br from-teal-200 to-teal-100"
                        link="/life-skills"
                        progress={`${progress.lifeskills || 0}%`}
                    />

                    {/* Environmental Studies */}
                    <SubjectCard
                        title="Environmental Studies"
                        emoji="🌱"
                        description="Learn to protect our planet!"
                        color="bg-gradient-to-br from-green-200 to-green-100"
                        link="/environmental"
                        progress={`${progress.environmental || 0}%`}
                    />
                </div>

                {/* Encouragement Section */}
                <div className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        💚 These skills help you become a better person!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LifeValues;
