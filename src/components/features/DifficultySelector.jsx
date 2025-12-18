function DifficultySelector({ selectedLevel, unlockedLevels, onSelect, subject }) {
    const levels = [
        {
            id: 'easy',
            name: 'Easy',
            emoji: '🟢',
            color: 'from-green-200 to-green-100',
            hoverColor: 'hover:from-green-300 hover:to-green-200'
        },
        {
            id: 'medium',
            name: 'Medium',
            emoji: '🟡',
            color: 'from-yellow-200 to-yellow-100',
            hoverColor: 'hover:from-yellow-300 hover:to-yellow-200'
        },
        {
            id: 'hard',
            name: 'Hard',
            emoji: '🔴',
            color: 'from-red-200 to-red-100',
            hoverColor: 'hover:from-red-300 hover:to-red-200'
        }
    ];

    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Choose Your Difficulty Level
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {levels.map((level) => {
                    // Safety check: if unlockedLevels is undefined, default to ['easy']
                    const safeUnlockedLevels = unlockedLevels || ['easy'];
                    const isUnlocked = safeUnlockedLevels.includes(level.id);
                    const isSelected = selectedLevel === level.id;

                    return (
                        <button
                            key={level.id}
                            onClick={() => isUnlocked && onSelect(level.id)}
                            disabled={!isUnlocked}
                            className={`
                relative p-6 rounded-xl text-center transition-all duration-200
                ${isUnlocked
                                    ? `bg-gradient-to-br ${level.color} ${level.hoverColor} hover:scale-105 hover:shadow-lg cursor-pointer`
                                    : 'bg-gray-200 opacity-50 cursor-not-allowed'
                                }
                ${isSelected ? 'ring-4 ring-violet-600 scale-105' : ''}
                shadow-md
              `}
                        >
                            {/* Emoji */}
                            <div className={`text-6xl mb-3 ${!isUnlocked && 'grayscale'}`}>
                                {isUnlocked ? level.emoji : '🔒'}
                            </div>

                            {/* Level Name */}
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                {level.name}
                            </h3>

                            {/* Status */}
                            {isUnlocked ? (
                                <p className="text-sm text-gray-600 font-semibold">
                                    Click to start!
                                </p>
                            ) : (
                                <p className="text-sm text-gray-500 italic">
                                    Complete {level.id === 'medium' ? 'Easy' : 'Medium'} to unlock
                                </p>
                            )}

                            {/* Selected Indicator */}
                            {isSelected && (
                                <div className="absolute top-2 right-2 bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    SELECTED
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Encouragement */}
            <div className="mt-6 text-center">
                <p className="text-gray-600">
                    🌟 Start with Easy and unlock harder levels as you progress!
                </p>
            </div>
        </div>
    );
}

export default DifficultySelector;
