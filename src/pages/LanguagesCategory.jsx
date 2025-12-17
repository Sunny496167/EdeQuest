import SubjectCard from '../components/SubjectCard';

function LanguagesCategory() {
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {/* English */}
                    <SubjectCard
                        title="English"
                        emoji="📖"
                        description="Master grammar, vocabulary, and language skills!"
                        color="bg-gradient-to-br from-indigo-200 to-indigo-100"
                        link="/english"
                    />

                    {/* Hindi */}
                    <SubjectCard
                        title="Hindi"
                        emoji="🇮🇳"
                        description="Learn Hindi language and expand vocabulary!"
                        color="bg-gradient-to-br from-orange-200 to-orange-100"
                        link="/hindi"
                    />
                </div>

                {/* Encouragement Section */}
                <div className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        💬 Learning languages opens doors to new worlds and cultures!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LanguagesCategory;
