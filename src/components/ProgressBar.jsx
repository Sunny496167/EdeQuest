function ProgressBar({ subject, percentage, emoji }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-md">
            {/* Subject Header */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{emoji}</span>
                    <h3 className="text-xl font-bold text-gray-800">{subject}</h3>
                </div>
                <span className="text-lg font-bold text-violet-600">{percentage}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                    className="bg-gradient-to-r from-primary to-purple-400 h-4 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>

            {/* Encouragement Text */}
            <p className="text-sm text-gray-600 mt-3 text-center">
                {percentage === 0 && "Start your journey! 🚀"}
                {percentage > 0 && percentage < 50 && "Keep going! You're doing great! 💪"}
                {percentage >= 50 && percentage < 100 && "Awesome progress! Almost there! 🌟"}
                {percentage === 100 && "Completed! You're a champion! 🏆"}
            </p>
        </div>
    );
}

export default ProgressBar;
