import { motion } from 'framer-motion';
import { useGamification } from '../context/GamificationContext';

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
                    <motion.span
                        initial={prefersReducedMotion ? {} : { scale: 0 }}
                        animate={prefersReducedMotion ? {} : { scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                        className="text-3xl"
                    >
                        🎉
                    </motion.span>
                )}
            </div>

            {/* Progress Text */}
            <div className="mb-3">
                <p className="text-lg font-semibold text-gray-700">
                    {dailySolvedCount} / {dailyGoalTarget} questions solved
                </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white rounded-full h-4 mb-4 shadow-inner overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 h-4 rounded-full"
                ></motion.div>
            </div>

            {/* Status Message */}
            {isCompleted ? (
                <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="bg-white rounded-xl p-4 text-center"
                >
                    <p className="text-xl font-bold text-purple-600">
                        🎊 Awesome! You completed today's goal! 🎊
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                        Keep up the amazing work!
                    </p>
                </motion.div>
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
