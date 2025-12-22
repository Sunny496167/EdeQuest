import React, { useState, useEffect } from 'react';
import { Trophy, Flame, Star, Target } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionHeading from './shared/SectionHeading';

/**
 * GAMIFICATION PREVIEW - Show engagement features
 * ================================================
 * PERFORMANCE OPTIMIZATION:
 * - Animations only run when section is visible
 * - Uses CSS animations for XP bar (GPU-accelerated)
 * - Lightweight emoji instead of image assets
 * 
 * CONVERSION OPTIMIZATION:
 * - Addresses "will my child use it?" objection
 * - Shows game mechanics that make learning fun
 * - Live animations demonstrate engagement
 */

const GamificationPreview = () => {
    const { isVisible, elementRef } = useScrollAnimation();
    const [xpProgress, setXpProgress] = useState(0);

    // OPTIMIZATION: XP bar animation only when visible
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setXpProgress(75), 300);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const badges = [
        { emoji: '🏆', name: 'Math Master', rarity: 'gold' },
        { emoji: '⭐', name: 'Perfect Score', rarity: 'silver' },
        { emoji: '🔥', name: '7-Day Streak', rarity: 'bronze' },
        { emoji: '🎯', name: 'Goal Crusher', rarity: 'gold' },
        { emoji: '📚', name: 'Bookworm', rarity: 'silver' },
        { emoji: '🚀', name: 'Fast Learner', rarity: 'bronze' }
    ];

    const features = [
        { icon: Star, text: 'Earn XP for every lesson completed' },
        { icon: Trophy, text: 'Unlock 100+ achievement badges' },
        { icon: Target, text: 'Complete daily challenges' },
        { icon: Flame, text: 'Build learning streaks' }
    ];

    return (
        <section
            ref={elementRef}
            className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Learning That Feels Like Playing"
                    subtitle="Game mechanics that keep kids engaged and motivated"
                    className="[&>h2]:text-white [&>p]:text-purple-200"
                />

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Visual Demo */}
                    <div className={`
            transform transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
                        {/* XP Bar */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-semibold">Level 12</span>
                                <span className="text-yellow-300">750 / 1000 XP</span>
                            </div>
                            <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                                {/* OPTIMIZATION: CSS transition for smooth animation */}
                                <div
                                    className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 transition-all duration-1000 ease-out"
                                    style={{ width: `${xpProgress}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Badge Collection */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Trophy className="w-5 h-5 text-yellow-400" />
                                Recent Achievements
                            </h4>
                            <div className="grid grid-cols-3 gap-4">
                                {badges.map((badge, index) => (
                                    <div
                                        key={index}
                                        className={`
                      bg-gradient-to-br ${badge.rarity === 'gold' ? 'from-yellow-400 to-orange-500' :
                                                badge.rarity === 'silver' ? 'from-gray-300 to-gray-400' :
                                                    'from-orange-400 to-red-500'
                                            }
                      rounded-lg p-4 text-center transform transition-all duration-500
                      hover:scale-110 hover:rotate-6
                      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                    `}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        <div className="text-3xl mb-1">{badge.emoji}</div>
                                        <div className="text-xs font-semibold text-gray-900">
                                            {badge.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Daily Challenge */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <h4 className="font-bold mb-3 flex items-center gap-2">
                                <Target className="w-5 h-5 text-green-400" />
                                Today's Challenge
                            </h4>
                            <div className="flex items-center justify-between">
                                <span>Complete 5 Math lessons</span>
                                <span className="text-green-400 font-bold">3/5</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                                <div className="h-full bg-green-400 w-3/5"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Features List */}
                    <div className={`
            transform transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}>
                        <div className="space-y-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-300"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-semibold">{feature.text}</p>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-6 text-gray-900">
                                <div className="flex items-center gap-3 mb-2">
                                    <Flame className="w-8 h-8" />
                                    <div>
                                        <div className="text-2xl font-bold">47 Day Streak! 🔥</div>
                                        <div className="text-sm">Keep it going!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GamificationPreview;
