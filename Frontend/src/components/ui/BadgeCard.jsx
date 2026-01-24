function BadgeCard({ badge, unlocked }) {
    return (
        <div
            className={`rounded-2xl p-6 shadow-md transition-all duration-300
                ${unlocked
                    ? 'bg-gradient-to-br from-yellow-200 to-yellow-100 hover:shadow-lg hover:scale-105'
                    : 'bg-gray-200 opacity-50'
                }`}
        >
            {/* Badge Emoji */}
            <div className={`text-6xl mb-3 text-center ${!unlocked && 'grayscale'}`}>
                {badge.emoji}
            </div>

            {/* Badge Name */}
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {badge.name}
            </h3>

            {/* Badge Description */}
            <p className="text-sm text-gray-600 text-center mb-3">
                {badge.description}
            </p>

            {/* Status */}
            <div className="text-center">
                {unlocked ? (
                    <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        UNLOCKED ✓
                    </span>
                ) : (
                    <span className="inline-block bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                        LOCKED 🔒
                    </span>
                )}
            </div>

            {/* Unlock Condition (for locked badges) */}
            {!unlocked && (
                <p className="text-xs text-gray-500 text-center mt-3 italic">
                    {badge.unlockCondition}
                </p>
            )}
        </div>
    );
}

export default BadgeCard;
