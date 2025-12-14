import { useGamification } from '../context/GamificationContext';
import BadgeCard from '../components/BadgeCard';
import ProgressBar from '../components/ProgressBar';

function Progress() {
    const { stars, getAllBadges, progress } = useGamification();

    const allBadges = getAllBadges();
    const unlockedCount = allBadges.filter(b => b.unlocked).length;

    // Subject data
    const subjects = [
        { name: 'Math', key: 'math', emoji: '🔢' },
        { name: 'Algebra', key: 'algebra', emoji: '🧮' },
        { name: 'Science', key: 'science', emoji: '🔬' },
        { name: 'Geography', key: 'geography', emoji: '🌍' },
        { name: 'History', key: 'history', emoji: '⏳' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
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
                        <span className="text-lg font-semibold text-primary">
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

                    <div className="grid grid-cols-1 gap-6">
                        {subjects.map((subject) => (
                            <ProgressBar
                                key={subject.key}
                                subject={subject.name}
                                percentage={progress[subject.key]}
                                emoji={subject.emoji}
                            />
                        ))}
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
