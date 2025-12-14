import { useGamification } from '../context/GamificationContext';

function DailyGoalCard() {
    const { dailyGoalTarget, dailySolvedCount, isDailyGoalCompleted } = useGamification();

    const isCompleted = isDailyGoalCompleted();
    const progressPercentage = Math.min((dailySolvedCount / dailyGoalTarget) * 100, 100);

    return (
        <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 rounded-2xl p-6 shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <span>🎯</span>
                    <span>Daily Goal</span>
                </h2>
                {isCompleted && (
                    <span className="text-3xl animate-bounce">🎉</span>
                )}
            </div>

            {/* Progress Text */}
            <div className="mb-3">
                <p className="text-lg font-semibold text-gray-700">
                    {dailySolvedCount} / {dailyGoalTarget} questions solved
                </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white rounded-full h-4 mb-4 shadow-inner">
                <div
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 h-4 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>

            {/* Status Message */}
            {isCompleted ? (
                <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-xl font-bold text-purple-600">
                        🎊 Awesome! You completed today's goal! 🎊
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                        Keep up the amazing work!
                    </p>
                </div>
            ) : (
                <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-lg font-semibold text-gray-700">
                        {dailyGoalTarget - dailySolvedCount === 1
                            ? "Just 1 more question to go! 💪"
                            : dailyGoalTarget - dailySolvedCount <= 3
                                ? `Only ${dailyGoalTarget - dailySolvedCount} more questions! You're almost there! 🌟`
                                : `${dailyGoalTarget - dailySolvedCount} questions left. You can do it! 🚀`}
                    </p>
                </div>
            )}
        </div>
    );
}

export default DailyGoalCard;
