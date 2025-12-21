import React, { useState } from 'react';
import { useParent } from '../../context/ParentContext';
import ChildSelector from '../../components/parent/ChildSelector';
import GoalProgressCard from '../../components/parent/GoalProgressCard';

const GoalsAndRewards = () => {
    const { selectedChild, selectedChildId, addGoal, updateGoal, deleteGoal } = useParent();
    const [showAddGoal, setShowAddGoal] = useState(false);
    const [newGoal, setNewGoal] = useState({
        type: 'subject_improvement',
        title: '',
        subject: '',
        targetAccuracy: 80,
        target: 30,
        deadline: ''
    });

    const handleAddGoal = () => {
        const goalData = {
            ...newGoal,
            current: 0,
            currentAccuracy: selectedChild.currentStats.overallAccuracy,
            currentAverage: 0,
            status: 'on_track',
            createdBy: 'parent'
        };
        addGoal(selectedChildId, goalData);
        setShowAddGoal(false);
        setNewGoal({
            type: 'subject_improvement',
            title: '',
            subject: '',
            targetAccuracy: 80,
            target: 30,
            deadline: ''
        });
    };

    const handleDeleteGoal = (goalId) => {
        if (window.confirm('Are you sure you want to delete this goal?')) {
            deleteGoal(selectedChildId, goalId);
        }
    };

    const goalTypes = [
        { value: 'subject_improvement', label: 'Subject Improvement', icon: '📚' },
        { value: 'daily_practice', label: 'Daily Practice', icon: '⏰' },
        { value: 'screen_time', label: 'Screen Time Management', icon: '⏱️' },
        { value: 'streak', label: 'Learning Streak', icon: '🔥' },
        { value: 'quiz_target', label: 'Quiz Target', icon: '📝' },
        { value: 'skill_mastery', label: 'Skill Mastery', icon: '🎯' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Goals & Rewards</h1>
                            <p className="text-gray-600">Set goals and track progress</p>
                        </div>
                        <button
                            onClick={() => setShowAddGoal(true)}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-md"
                        >
                            + Set New Goal
                        </button>
                    </div>
                    <ChildSelector />
                </div>

                {selectedChild && (
                    <>
                        {/* Active Goals */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Active Goals</h2>
                            {selectedChild.parentSetGoals.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {selectedChild.parentSetGoals.map((goal) => (
                                        <GoalProgressCard
                                            key={goal.goalId}
                                            goal={goal}
                                            onDelete={handleDeleteGoal}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 text-lg mb-4">No goals set yet</p>
                                    <button
                                        onClick={() => setShowAddGoal(true)}
                                        className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                                    >
                                        Set First Goal
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Goal Templates */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Goal Templates</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {goalTypes.map((type) => (
                                    <button
                                        key={type.value}
                                        onClick={() => {
                                            setNewGoal({ ...newGoal, type: type.value, title: type.label });
                                            setShowAddGoal(true);
                                        }}
                                        className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all text-left"
                                    >
                                        <span className="text-3xl mb-2 block">{type.icon}</span>
                                        <h3 className="font-bold text-gray-800">{type.label}</h3>
                                        <p className="text-xs text-gray-600 mt-1">Quick start template</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Rewards System */}
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-6 border-2 border-yellow-200">
                            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🏆</span>
                                Rewards System
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Virtual Rewards */}
                                <div className="bg-white rounded-xl p-5 border-2 border-yellow-200">
                                    <h3 className="font-bold text-gray-800 mb-4">Virtual Rewards</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">🎨</span>
                                                <span className="text-sm font-medium">New Avatar</span>
                                            </div>
                                            <span className="text-xs text-gray-600">100 pts</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">⭐</span>
                                                <span className="text-sm font-medium">Special Badge</span>
                                            </div>
                                            <span className="text-xs text-gray-600">50 pts</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">🎁</span>
                                                <span className="text-sm font-medium">Bonus XP</span>
                                            </div>
                                            <span className="text-xs text-gray-600">25 pts</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Real-world Rewards */}
                                <div className="bg-white rounded-xl p-5 border-2 border-orange-200">
                                    <h3 className="font-bold text-gray-800 mb-4">Real-world Rewards</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">🎮</span>
                                                <span className="text-sm font-medium">Extra Playtime</span>
                                            </div>
                                            <span className="text-xs text-gray-600">200 pts</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">🍕</span>
                                                <span className="text-sm font-medium">Favorite Meal</span>
                                            </div>
                                            <span className="text-xs text-gray-600">150 pts</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">📚</span>
                                                <span className="text-sm font-medium">New Book</span>
                                            </div>
                                            <span className="text-xs text-gray-600">300 pts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-white rounded-xl border-2 border-yellow-200">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-gray-800">Current Points Balance:</span>
                                    <span className="text-2xl font-bold text-yellow-600">450 pts</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Add Goal Modal */}
                {showAddGoal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6 border-b-2 border-gray-100">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-gray-800">Set New Goal</h2>
                                    <button
                                        onClick={() => setShowAddGoal(false)}
                                        className="text-gray-400 hover:text-gray-600 text-2xl"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                {/* Goal Type */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Goal Type</label>
                                    <select
                                        value={newGoal.type}
                                        onChange={(e) => setNewGoal({ ...newGoal, type: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {goalTypes.map((type) => (
                                            <option key={type.value} value={type.value}>{type.icon} {type.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Goal Title */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Goal Title</label>
                                    <input
                                        type="text"
                                        value={newGoal.title}
                                        onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter goal title"
                                    />
                                </div>

                                {/* Subject (if subject improvement) */}
                                {newGoal.type === 'subject_improvement' && (
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                                        <select
                                            value={newGoal.subject}
                                            onChange={(e) => setNewGoal({ ...newGoal, subject: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select subject</option>
                                            <option value="Mathematics">Mathematics</option>
                                            <option value="Science">Science</option>
                                            <option value="English">English</option>
                                            <option value="History">History</option>
                                            <option value="Geography">Geography</option>
                                        </select>
                                    </div>
                                )}

                                {/* Target */}
                                {newGoal.type === 'subject_improvement' ? (
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Target Accuracy (%)</label>
                                        <input
                                            type="number"
                                            value={newGoal.targetAccuracy}
                                            onChange={(e) => setNewGoal({ ...newGoal, targetAccuracy: Number(e.target.value) })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            min="0"
                                            max="100"
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Target</label>
                                        <input
                                            type="number"
                                            value={newGoal.target}
                                            onChange={(e) => setNewGoal({ ...newGoal, target: Number(e.target.value) })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                )}

                                {/* Deadline */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Deadline</label>
                                    <input
                                        type="date"
                                        value={newGoal.deadline}
                                        onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <button
                                        onClick={() => setShowAddGoal(false)}
                                        className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleAddGoal}
                                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all"
                                    >
                                        Create Goal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GoalsAndRewards;
