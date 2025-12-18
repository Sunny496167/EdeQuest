import { useGamification } from '../../context/GamificationContext';
import BadgeCard from '../../components/ui/BadgeCard';
import ProgressBar from '../../components/ui/ProgressBar';

function Progress() {
    const { stars, getAllBadges, progress } = useGamification();

    const allBadges = getAllBadges();
    const unlockedCount = allBadges.filter(b => b.unlocked).length;

    // Subject data - All 17 subjects organized by category
    const subjectsByCategory = {
        mathematics: [
            { name: 'Basic Math', key: 'math', emoji: '🔢' },
            { name: 'Algebra', key: 'algebra', emoji: '🧮' },
            { name: 'Fractions', key: 'fractions', emoji: '🍕' },
            { name: 'Geometry', key: 'geometry', emoji: '📐' }
        ],
        science: [
            { name: 'General Science', key: 'science', emoji: '🔬' },
            { name: 'Physics', key: 'physics', emoji: '⚡' },
            { name: 'Chemistry', key: 'chemistry', emoji: '🧪' },
            { name: 'Biology', key: 'biology', emoji: '🧬' }
        ],
        socialScience: [
            { name: 'History', key: 'history', emoji: '⏳' },
            { name: 'Geography', key: 'geography', emoji: '🌍' },
            { name: 'Civics', key: 'civics', emoji: '⚖️' },
            { name: 'Economics', key: 'economics', emoji: '💰' }
        ],
        languages: [
            { name: 'English', key: 'english', emoji: '📚' },
            { name: 'Hindi', key: 'hindi', emoji: '🇮🇳' },
            { name: 'Spanish', key: 'spanish', emoji: '🇪🇸' },
            { name: 'Bengali', key: 'bengali', emoji: '🇧🇩' },
            { name: 'Tamil', key: 'tamil', emoji: '🏛️' }
        ],
        lifeValues: [
            { name: 'Civic Sense', key: 'civicsense', emoji: '🌟' },
            { name: 'Life Skills', key: 'lifeskills', emoji: '🧠' },
            { name: 'Environmental Studies', key: 'environmental', emoji: '🌱' }
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Your Progress 🎯
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Track your learning journey!
                    </p>
                </div>

                {/* Stars Summary */}
                <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 text-center">
                    <div className="text-8xl mb-4">⭐</div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {stars} {stars === 1 ? 'Star' : 'Stars'} Earned!
                    </h2>
                    <p className="text-lg text-gray-600">
                        Keep answering questions correctly to earn more stars!
                    </p>
                </div>

                {/* Badges Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Badges 🏆
                        </h2>
                        <span className="text-lg font-semibold text-violet-600">
                            {unlockedCount} / {allBadges.length} Unlocked
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {allBadges.map((badge) => (
                            <BadgeCard
                                key={badge.id}
                                badge={badge}
                                unlocked={badge.unlocked}
                            />
                        ))}
                    </div>
                </section>

                {/* Progress Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Subject Progress 📊
                    </h2>

                    {/* Mathematics */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-violet-600 mb-4">Mathematics</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {subjectsByCategory.mathematics.map((subject) => (
                                <ProgressBar
                                    key={subject.key}
                                    subject={subject.name}
                                    percentage={progress[subject.key] || 0}
                                    emoji={subject.emoji}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Science */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-blue-600 mb-4">Science</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {subjectsByCategory.science.map((subject) => (
                                <ProgressBar
                                    key={subject.key}
                                    subject={subject.name}
                                    percentage={progress[subject.key] || 0}
                                    emoji={subject.emoji}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Social Science */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">Social Science</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {subjectsByCategory.socialScience.map((subject) => (
                                <ProgressBar
                                    key={subject.key}
                                    subject={subject.name}
                                    percentage={progress[subject.key] || 0}
                                    emoji={subject.emoji}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-pink-600 mb-4">Languages</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {subjectsByCategory.languages.map((subject) => (
                                <ProgressBar
                                    key={subject.key}
                                    subject={subject.name}
                                    percentage={progress[subject.key] || 0}
                                    emoji={subject.emoji}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Life & Values */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-orange-600 mb-4">Life & Values</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {subjectsByCategory.lifeValues.map((subject) => (
                                <ProgressBar
                                    key={subject.key}
                                    subject={subject.name}
                                    percentage={progress[subject.key] || 0}
                                    emoji={subject.emoji}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Encouragement Section */}
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                    <p className="text-lg text-gray-700">
                        🌈 Every question you answer makes you smarter! Keep learning and having fun!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Progress;
