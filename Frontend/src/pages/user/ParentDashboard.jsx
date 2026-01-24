import { useGamification } from '../../context/GamificationContext';
import TimeStatCard from '../../components/cards/TimeStatCard';
import SubjectProgressRow from '../../components/cards/SubjectProgressRow';

function ParentDashboard() {
    const { stars, completedQuizzes, progress, timeSpent, lastActiveDate } = useGamification();

    // Calculate total time spent across all subjects (in seconds)
    const totalTimeSeconds = Object.values(timeSpent).reduce((sum, time) => sum + time, 0);
    const totalTimeMinutes = Math.round(totalTimeSeconds / 60);
    const totalTimeHours = Math.floor(totalTimeMinutes / 60);
    const remainingMinutes = totalTimeMinutes % 60;

    // Format total time display
    const totalTimeDisplay = totalTimeHours > 0
        ? `${totalTimeHours}h ${remainingMinutes}m`
        : `${totalTimeMinutes} min`;

    // Subject data with emojis and colors
    const subjects = [
        { name: 'Math', key: 'math', emoji: '📐', color: 'bg-purple-500' },
        { name: 'Algebra', key: 'algebra', emoji: '🧮', color: 'bg-blue-500' },
        { name: 'Science', key: 'science', emoji: '🔬', color: 'bg-green-500' },
        { name: 'Geography', key: 'geography', emoji: '🌍', color: 'bg-cyan-500' },
        { name: 'History', key: 'history', emoji: '⏳', color: 'bg-orange-500' }
    ];

    // Format last active date
    const formatDate = (dateString) => {
        if (!dateString) return 'Not yet';
        const date = new Date(dateString);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === yesterday.toDateString()) {
            return 'Yesterday';
        } else {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">👨‍👩‍👧</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                        Parent Dashboard
                    </h1>
                    <p className="text-xl text-gray-600">
                        Learning overview (read-only)
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <TimeStatCard
                        title="Total Stars"
                        value={stars}
                        icon="⭐"
                        color="bg-yellow-100"
                    />
                    <TimeStatCard
                        title="Quizzes Completed"
                        value={completedQuizzes}
                        icon="✅"
                        color="bg-green-100"
                    />
                    <TimeStatCard
                        title="Total Time"
                        value={totalTimeDisplay}
                        icon="⏱️"
                        color="bg-blue-100"
                    />
                </div>

                {/* Subject-wise Progress */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Subject Progress
                    </h2>
                    <div>
                        {subjects.map((subject) => (
                            <SubjectProgressRow
                                key={subject.key}
                                subject={subject.name}
                                emoji={subject.emoji}
                                progress={progress[subject.key] || 0}
                                timeSpent={timeSpent[subject.key] || 0}
                                color={subject.color}
                            />
                        ))}
                    </div>
                </div>

                {/* Activity Overview */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Activity Overview
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Last Active */}
                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 text-center">
                            <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                Last Active
                            </p>
                            <p className="text-2xl font-bold text-gray-800">
                                {formatDate(lastActiveDate)}
                            </p>
                        </div>

                        {/* Total Learning Time */}
                        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 text-center">
                            <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                Total Learning Time
                            </p>
                            <p className="text-2xl font-bold text-gray-800">
                                {totalTimeDisplay}
                            </p>
                        </div>
                    </div>

                    {/* Encouraging Message */}
                    <div className="mt-8 bg-yellow-50 rounded-xl p-6 text-center">
                        <p className="text-lg text-gray-700">
                            💡 <strong>Remember:</strong> Every child learns at their own pace.
                            Consistency and effort matter more than speed!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParentDashboard;
