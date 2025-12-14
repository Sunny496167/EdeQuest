import AvatarCard from './AvatarCard';
import { useGamification } from '../context/GamificationContext';
import avatarsData from '../data/avatars';

function AvatarSelector() {
    const { unlockedAvatars, selectedAvatar, selectAvatar } = useGamification();

    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg">
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Choose Your Avatar
                </h2>
                <p className="text-lg text-gray-600">
                    Unlock more avatars by completing challenges! 🎯
                </p>
            </div>

            {/* Currently Selected Avatar */}
            {selectedAvatar && (
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6 mb-8 text-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                        Your Current Avatar
                    </p>
                    <div className="text-8xl mb-2">
                        {avatarsData.find(a => a.id === selectedAvatar)?.emoji}
                    </div>
                    <p className="text-xl font-bold text-gray-800">
                        {avatarsData.find(a => a.id === selectedAvatar)?.name}
                    </p>
                </div>
            )}

            {/* Avatar Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {avatarsData.map((avatar) => {
                    const isUnlocked = unlockedAvatars.includes(avatar.id);
                    const isSelected = selectedAvatar === avatar.id;

                    return (
                        <AvatarCard
                            key={avatar.id}
                            avatar={avatar}
                            isUnlocked={isUnlocked}
                            isSelected={isSelected}
                            onSelect={selectAvatar}
                        />
                    );
                })}
            </div>

            {/* Unlock Progress */}
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    {unlockedAvatars.length} / {avatarsData.length} avatars unlocked
                </p>
            </div>
        </div>
    );
}

export default AvatarSelector;
