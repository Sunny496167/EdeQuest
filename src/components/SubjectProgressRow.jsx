function SubjectProgressRow({ subject, emoji, progress, timeSpent, color }) {
    const progressPercentage = Math.min(progress, 100);
    const timeInMinutes = Math.round(timeSpent / 60) || 0; // Convert seconds to minutes

    return (
        <div className="bg-white rounded-xl p-5 shadow-md mb-4">
            <div className="flex items-center justify-between mb-3">
                {/* Subject Name */}
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{emoji}</span>
                    <h3 className="text-xl font-bold text-gray-800">{subject}</h3>
                </div>

                {/* Time Spent */}
                <div className="text-right">
                    <p className="text-sm text-gray-600">Time Spent</p>
                    <p className="text-lg font-bold text-gray-800">{timeInMinutes} min</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                        className={`${color} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>

            {/* Progress Percentage */}
            <div className="text-right">
                <p className="text-sm font-semibold text-gray-700">{progressPercentage}% Complete</p>
            </div>
        </div>
    );
}

export default SubjectProgressRow;
