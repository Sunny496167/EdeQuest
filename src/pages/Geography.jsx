import ContinentCard from '../components/ContinentCard';
import FlagQuiz from '../components/FlagQuiz';
import continents from '../data/continents';
import flagsQuiz from '../data/flagsQuiz';

function Geography() {
    // Define colors for continent cards
    const continentColors = [
        'bg-gradient-to-br from-yellow-200 to-yellow-100',
        'bg-gradient-to-br from-orange-200 to-orange-100',
        'bg-gradient-to-br from-blue-200 to-blue-100',
        'bg-gradient-to-br from-green-200 to-green-100',
        'bg-gradient-to-br from-pink-200 to-pink-100',
        'bg-gradient-to-br from-purple-200 to-purple-100',
        'bg-gradient-to-br from-cyan-200 to-cyan-100'
    ];

    // Countries for flag learning section
    const countries = [
        { name: "India", flag: "🇮🇳" },
        { name: "USA", flag: "🇺🇸" },
        { name: "UK", flag: "🇬🇧" },
        { name: "Japan", flag: "🇯🇵" },
        { name: "France", flag: "🇫🇷" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                        Geography World 🌍
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Explore the Earth and its countries!
                    </p>
                </div>

                {/* Continents Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        The 7 Continents 🗺️
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {continents.map((continent, index) => (
                            <ContinentCard
                                key={continent.id}
                                name={continent.name}
                                emoji={continent.emoji}
                                shortDescription={continent.shortDescription}
                                color={continentColors[index]}
                            />
                        ))}
                    </div>
                </section>

                {/* Divider */}
                <div className="border-t-4 border-primary rounded-full mb-16"></div>

                {/* Flags Learning Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Country Flags 🏳️
                    </h2>
                    <p className="text-center text-gray-600 mb-8 text-lg">
                        Learn to recognize these flags from around the world!
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {countries.map((country, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg 
                         hover:scale-105 transition-all duration-300"
                            >
                                <div className="text-7xl text-center mb-4">
                                    {country.flag}
                                </div>
                                <p className="text-xl font-bold text-gray-800 text-center">
                                    {country.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Divider */}
                <div className="border-t-4 border-primary rounded-full mb-16"></div>

                {/* Guess the Country Game */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Guess the Country! 🎯
                    </h2>
                    <p className="text-center text-gray-600 mb-8 text-lg">
                        Can you match the flag to the correct country?
                    </p>
                    <FlagQuiz />
                </section>

                {/* Encouragement Section */}
                <div className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        🌏 The world is full of amazing places! Keep exploring and learning!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Geography;
