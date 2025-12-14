import avatarsData from '../data/avatars';

function RewardModal({ reward, onClose }) {
    if (!reward) return null;

    const avatar = avatarsData.find(a => a.id === reward.avatarId);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                {/* Celebration Header */}
                <div className="text-center mb-6">
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="text-3xl font-bold text-primary mb-2">
                        Congratulations!
                    </h2>
                    <p className="text-xl text-gray-700 font-semibold">
                        {reward.message}
                    </p>
                </div>

                {/* Reward Display */}
                {avatar && (
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 mb-6 text-center">
                        <div className="text-8xl mb-3">{avatar.emoji}</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">
                            {avatar.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                            New avatar unlocked!
                        </p>
                    </div>
                )}

                {/* Encouragement Message */}
                <div className="bg-yellow-100 rounded-xl p-4 mb-6 text-center">
                    <p className="text-lg font-semibold text-gray-700">
                        Keep up the amazing work! 🌟
                    </p>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="w-full bg-primary text-white px-6 py-4 rounded-xl text-xl font-bold
                   hover:bg-purple-700 hover:scale-105 transition-all duration-200 shadow-lg"
                >
                    Awesome! ✨
                </button>
            </div>
        </div>
    );
}

export default RewardModal;
