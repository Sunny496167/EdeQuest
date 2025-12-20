import React, { useState } from 'react';
import { Trophy, Star, Flame, Award, Target, Sunrise, Share2, Filter } from 'lucide-react';

const AchievementTimeline = ({ achievements }) => {
    const [filter, setFilter] = useState('all');

    const iconMap = {
        trophy: Trophy,
        star: Star,
        flame: Flame,
        award: Award,
        target: Target,
        sunrise: Sunrise
    };

    const categoryColors = {
        milestone: 'bg-blue-100 text-blue-600 border-blue-300',
        streak: 'bg-orange-100 text-orange-600 border-orange-300',
        subject: 'bg-purple-100 text-purple-600 border-purple-300',
        performance: 'bg-green-100 text-green-600 border-green-300',
        special: 'bg-pink-100 text-pink-600 border-pink-300'
    };

    const categories = ['all', 'milestone', 'streak', 'subject', 'performance', 'special'];

    const filteredAchievements = filter === 'all'
        ? achievements
        : achievements.filter(a => a.category === filter);

    const sortedAchievements = [...filteredAchievements].sort((a, b) =>
        new Date(b.unlockedAt) - new Date(a.unlockedAt)
    );

    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Achievements</h3>
                    <p className="text-sm text-gray-600">{achievements.length} unlocked</p>
                </div>
                <Trophy className="w-8 h-8 text-yellow-500" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${filter === cat
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            {/* Timeline */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
                {sortedAchievements.map((achievement, index) => {
                    const Icon = iconMap[achievement.icon] || Trophy;
                    const colorClass = categoryColors[achievement.category] || categoryColors.milestone;

                    return (
                        <div key={achievement.id} className="relative">
                            {/* Timeline line */}
                            {index < sortedAchievements.length - 1 && (
                                <div className="absolute left-6 top-14 w-0.5 h-full bg-gray-200"></div>
                            )}

                            {/* Achievement card */}
                            <div className="flex gap-4 group">
                                {/* Icon */}
                                <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center ${colorClass} z-10`}>
                                    <Icon className="w-6 h-6" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-6">
                                    <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-gray-100 transition-colors">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                                                <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                                            </div>
                                            <button className="p-2 hover:bg-white rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                                                <Share2 className="w-4 h-4 text-gray-600" />
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between mt-3">
                                            <span className={`text-xs px-2 py-1 rounded-full ${colorClass}`}>
                                                {achievement.category}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {new Date(achievement.unlockedAt).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Empty state */}
            {sortedAchievements.length === 0 && (
                <div className="text-center py-8">
                    <Trophy className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">No achievements in this category yet</p>
                </div>
            )}

            {/* Next achievement preview */}
            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-dashed border-yellow-400 flex items-center justify-center">
                        <Star className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-900">Next Achievement</p>
                        <p className="text-xs text-gray-600">Complete 50 more quizzes to unlock "Quiz Master"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementTimeline;
