function AvatarCard({ avatar, isUnlocked, isSelected, onSelect }) {
    return (
        <button
            onClick={() => isUnlocked && onSelect(avatar.id)}
            disabled={!isUnlocked}
            className={`
        relative p-6 rounded-2xl text-center transition-all duration-200
        ${isUnlocked
                    ? 'bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 hover:scale-105 hover:shadow-lg cursor-pointer'
                    : 'bg-gray-200 opacity-50 cursor-not-allowed'
                }
        ${isSelected ? 'ring-4 ring-primary scale-105 shadow-xl' : 'shadow-md'}
      `}
        >
            {/* Avatar Emoji */}
            <div className={`text-6xl mb-3 ${!isUnlocked && 'grayscale'}`}>
                {isUnlocked ? avatar.emoji : '🔒'}
            </div>

            {/* Avatar Name */}
            <h3 className="text-lg font-bold text-gray-800 mb-2">
                {avatar.name}
            </h3>

            {/* Status */}
            {isUnlocked ? (
                isSelected ? (
                    <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        SELECTED
                    </div>
                ) : (
                    <p className="text-sm text-gray-600">
                        Click to select
                    </p>
                )
            ) : (
                <p className="text-xs text-gray-500 italic">
                    {avatar.unlockCondition}
                </p>
            )}
        </button>
    );
}

export default AvatarCard;
