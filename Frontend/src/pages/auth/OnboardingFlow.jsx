import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import avatars from '../../data/common/avatars';

function OnboardingFlow() {
    const navigate = useNavigate();
    const { user, completeOnboarding } = useAuth();

    const [currentScreen, setCurrentScreen] = useState(1);
    const [selectedAvatar, setSelectedAvatar] = useState(1);
    const [dailyGoal, setDailyGoal] = useState(30);

    const dailyGoalOptions = [
        { value: 15, label: '15 min', emoji: '🌱', description: 'Just starting out' },
        { value: 30, label: '30 min', emoji: '🌟', description: 'Recommended', recommended: true },
        { value: 45, label: '45 min', emoji: '🚀', description: 'Ambitious learner' },
        { value: 60, label: '60 min', emoji: '🏆', description: 'Super dedicated' }
    ];

    const features = [
        { emoji: '📝', title: 'Interactive Quizzes', description: 'Test your knowledge with fun quizzes' },
        { emoji: '🏆', title: 'Earn Badges', description: 'Unlock achievements as you learn' },
        { emoji: '⭐', title: 'Collect Stars', description: 'Get rewarded for correct answers' },
        { emoji: '📊', title: 'Track Progress', description: 'See how much you\'ve learned' }
    ];

    const handleNext = () => {
        setCurrentScreen(prev => prev + 1);
    };

    const handleBack = () => {
        setCurrentScreen(prev => prev - 1);
    };

    const handleSkip = () => {
        // Complete onboarding with defaults
        completeOnboarding({
            avatar: selectedAvatar,
            dailyGoal: dailyGoal
        });
        navigate('/');
    };

    const handleComplete = () => {
        // Save onboarding data
        completeOnboarding({
            avatar: selectedAvatar,
            dailyGoal: dailyGoal
        });
        navigate('/');
    };

    // Get default unlocked avatars
    const availableAvatars = avatars.filter(avatar => avatar.isDefaultUnlocked);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-yellow-50 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
                    {/* Skip Button */}
                    <button
                        onClick={handleSkip}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-semibold transition-colors"
                    >
                        Skip →
                    </button>

                    {/* Screen 1: Welcome */}
                    {currentScreen === 1 && (
                        <div className="text-center animate-fade-in">
                            <div className="text-6xl mb-6">🎉</div>
                            <h1 className="text-4xl font-bold text-violet-600 mb-4">
                                Welcome, {user?.name}!
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                We're so excited to have you join EduQuest! 🚀
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Let's take a quick tour to get you started on your learning adventure.
                            </p>
                            <button
                                onClick={handleNext}
                                className="bg-violet-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-violet-700 transition-all duration-200 hover:scale-105"
                            >
                                Let's Go! →
                            </button>
                        </div>
                    )}

                    {/* Screen 2: Avatar Selection */}
                    {currentScreen === 2 && (
                        <div className="animate-fade-in">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                                Choose Your Avatar
                            </h2>
                            <p className="text-gray-600 text-center mb-8">
                                Pick an avatar that represents you! You can unlock more as you learn.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {availableAvatars.map(avatar => (
                                    <button
                                        key={avatar.id}
                                        onClick={() => setSelectedAvatar(avatar.id)}
                                        className={`flex flex-col items-center gap-2 p-6 border-2 rounded-lg transition-all duration-200 ${selectedAvatar === avatar.id
                                                ? 'border-violet-600 bg-violet-50 scale-105'
                                                : 'border-gray-300 hover:border-violet-400'
                                            }`}
                                    >
                                        <span className="text-5xl">{avatar.emoji}</span>
                                        <span className="font-semibold text-sm text-gray-800 text-center">
                                            {avatar.name}
                                        </span>
                                        {selectedAvatar === avatar.id && (
                                            <span className="text-violet-600 text-xl">✓</span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={handleBack}
                                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-bold text-lg hover:bg-gray-300 transition-all duration-200"
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="flex-1 bg-violet-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-violet-700 transition-all duration-200 hover:scale-105"
                                >
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Screen 3: Daily Goal */}
                    {currentScreen === 3 && (
                        <div className="animate-fade-in">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                                Set Your Daily Goal
                            </h2>
                            <p className="text-gray-600 text-center mb-8">
                                How much time do you want to spend learning each day?
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {dailyGoalOptions.map(option => (
                                    <button
                                        key={option.value}
                                        onClick={() => setDailyGoal(option.value)}
                                        className={`flex flex-col items-center gap-2 p-6 border-2 rounded-lg transition-all duration-200 relative ${dailyGoal === option.value
                                                ? 'border-violet-600 bg-violet-50 scale-105'
                                                : 'border-gray-300 hover:border-violet-400'
                                            }`}
                                    >
                                        {option.recommended && (
                                            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                                                Recommended
                                            </span>
                                        )}
                                        <span className="text-4xl">{option.emoji}</span>
                                        <span className="font-bold text-2xl text-gray-800">{option.label}</span>
                                        <span className="text-sm text-gray-600">{option.description}</span>
                                        {dailyGoal === option.value && (
                                            <span className="text-violet-600 text-xl mt-2">✓</span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={handleBack}
                                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-bold text-lg hover:bg-gray-300 transition-all duration-200"
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="flex-1 bg-violet-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-violet-700 transition-all duration-200 hover:scale-105"
                                >
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Screen 4: Features Tour */}
                    {currentScreen === 4 && (
                        <div className="animate-fade-in">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                                What You Can Do
                            </h2>
                            <p className="text-gray-600 text-center mb-8">
                                Here's what makes EduQuest awesome!
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg"
                                    >
                                        <span className="text-4xl">{feature.emoji}</span>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-800 mb-1">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={handleBack}
                                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-bold text-lg hover:bg-gray-300 transition-all duration-200"
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={handleComplete}
                                    className="flex-1 bg-violet-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-violet-700 transition-all duration-200 hover:scale-105"
                                >
                                    Start Learning! 🚀
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[1, 2, 3, 4].map(screen => (
                            <div
                                key={screen}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentScreen === screen
                                        ? 'bg-violet-600 w-8'
                                        : 'bg-gray-300'
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnboardingFlow;
