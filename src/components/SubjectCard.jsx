function SubjectCard({ title, emoji, description, color, progress = "0% Complete" }) {
    return (
        <div
            className={`${color} rounded-2xl p-6 shadow-md 
                  hover:shadow-lg hover:scale-105 
                  transition-all duration-300 
                  cursor-pointer`}
        >
            {/* Emoji Icon */}
            <div className="text-6xl mb-4 text-center">
                {emoji}
            </div>

            {/* Subject Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-center mb-4 min-h-[3rem]">
                {description}
            </p>

            {/* Progress Indicator */}
            <div className="mt-4 pt-4 border-t border-gray-300">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-600">Progress:</span>
                    <span className="text-sm font-bold text-gray-800">{progress}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white rounded-full h-2 mt-2">
                    <div
                        className="bg-gray-800 h-2 rounded-full"
                        style={{ width: progress }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default SubjectCard;
