import SubjectCard from '../components/SubjectCard';

function LifeValues() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">🌟</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Life & Values
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Develop character, values, and life skills!
                    </p>
                </div>

                {/* Life & Values Subject Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Civic Sense */}
                    <SubjectCard
                        title="Civic Sense"
                        emoji="✨"
                        description="Learn good manners, ethics, and kindness!"
                        color="bg-gradient-to-br from-teal-200 to-teal-100"
                        link="/civic-sense"
                    />

                    {/* Life Skills */}
                    <SubjectCard
                        title="Life Skills"
                        emoji="🧠"
                        description="Problem-solving and emotional intelligence!"
                        color="bg-gradient-to-br from-rose-200 to-rose-100"
                        link="/life-skills"
                    />

                    {/* Environmental Studies */}
                    <SubjectCard
                        title="Environmental"
                        emoji="🌱"
                        description="Learn to protect our planet and nature!"
                        color="bg-gradient-to-br from-emerald-200 to-emerald-100"
                        link="/environmental"
                    />
                </div>

                {/* Encouragement Section */}
                <div className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        💖 Building character and values makes you a better person!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LifeValues;
