import AvatarSelector from '../../components/features/AvatarSelector';
import { useGamification } from '../../context/GamificationContext';
import avatarsData from '../../data/common/avatars';

function Rewards() {
    const { selectedAvatar, unlockedAvatars } = useGamification();
    const currentAvatar = avatarsData.find(a => a.id === selectedAvatar);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">🎁</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Your Rewards
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Celebrate your achievements!
                    </p>
                </div>

                {/* Current Avatar Display */}
                {currentAvatar && (
                    <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-2xl p-8 mb-8 text-center shadow-lg">
                        <p className="text-lg font-semibold text-gray-700 mb-4">
                            You are currently:
                        </p>
                        <div className="text-9xl mb-4">{currentAvatar.emoji}</div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            {currentAvatar.name}
                        </h2>
                    </div>
                )}

                {/* Avatar Selector */}
                <AvatarSelector />

                {/* Encouragement Section */}
                <div className="mt-8 bg-white rounded-2xl p-6 shadow-md text-center">
                    <p className="text-lg text-gray-700">
                        🌟 Keep learning to unlock more amazing avatars! 🌟
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        Complete quizzes, earn stars, and achieve your daily goals to unlock special rewards!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Rewards;
