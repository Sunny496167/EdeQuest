import React from 'react';
import { Target, Clock, BookOpen, TrendingUp } from 'lucide-react';

const MonthlyGoalProgress = ({ goals }) => {
    const calculateProgress = (completed, goal) => {
        return Math.min((completed / goal) * 100, 100);
    };

    const getProgressColor = (progress) => {
        if (progress >= 100) return 'text-green-600';
        if (progress >= 75) return 'text-blue-600';
        if (progress >= 50) return 'text-yellow-600';
        return 'text-orange-600';
    };

    const getProgressBgColor = (progress) => {
        if (progress >= 100) return 'bg-green-600';
        if (progress >= 75) return 'bg-blue-600';
        if (progress >= 50) return 'bg-yellow-600';
        return 'bg-orange-600';
    };

    const goalItems = [
        {
            icon: Clock,
            label: 'Learning Time',
            completed: goals.completedMinutes,
            goal: goals.goalMinutes,
            unit: 'min',
            color: 'blue'
        },
        {
            icon: BookOpen,
            label: 'Quizzes',
            completed: goals.completedQuizzes,
            goal: goals.goalQuizzes,
            unit: '',
            color: 'purple'
        },
        {
            icon: TrendingUp,
            label: 'Accuracy',
            completed: goals.currentAccuracy,
            goal: goals.targetAccuracy,
            unit: '%',
            color: 'green'
        },
        {
            icon: Target,
            label: 'Active Days',
            completed: goals.daysActive,
            goal: goals.goalDaysActive,
            unit: 'days',
            color: 'orange'
        }
    ];

    const CircularProgress = ({ progress, size = 120, strokeWidth = 8, color }) => {
        const radius = (size - strokeWidth) / 2;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (progress / 100) * circumference;

        return (
            <svg width={size} height={size} className="transform -rotate-90">
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#E5E7EB"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                {/* Progress circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                />
            </svg>
        );
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Monthly Goals</h3>
                    <p className="text-sm text-gray-600">{goals.month}</p>
                </div>
                <Target className="w-8 h-8 text-blue-600" />
            </div>

            {/* Goals Grid */}
            <div className="grid grid-cols-2 gap-4">
                {goalItems.map((item, index) => {
                    const Icon = item.icon;
                    const progress = calculateProgress(item.completed, item.goal);
                    const progressColor = getProgressColor(progress);
                    const progressBg = getProgressBgColor(progress);

                    const colorMap = {
                        blue: '#3B82F6',
                        purple: '#8B5CF6',
                        green: '#10B981',
                        orange: '#F59E0B'
                    };

                    return (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {/* Icon and Label */}
                            <div className="flex items-center gap-2 mb-3">
                                <Icon className={`w-5 h-5 ${progressColor}`} />
                                <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                            </div>

                            {/* Circular Progress */}
                            <div className="relative w-24 h-24 mx-auto mb-3">
                                <CircularProgress
                                    progress={progress}
                                    size={96}
                                    strokeWidth={8}
                                    color={colorMap[item.color]}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className={`text-xl font-bold ${progressColor}`}>
                                            {Math.round(progress)}%
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Details */}
                            <div className="text-center">
                                <p className="text-lg font-bold text-gray-900">
                                    {item.completed}{item.unit}
                                </p>
                                <p className="text-xs text-gray-600">
                                    of {item.goal}{item.unit}
                                </p>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${progressBg} transition-all duration-1000 ease-out`}
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>

                            {/* Status */}
                            {progress >= 100 ? (
                                <p className="text-xs text-green-600 font-semibold text-center mt-2">
                                    ✓ Goal Achieved!
                                </p>
                            ) : (
                                <p className="text-xs text-gray-600 text-center mt-2">
                                    {item.goal - item.completed}{item.unit} to go
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Overall Progress */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-900">Overall Progress</p>
                    <p className="text-sm font-bold text-blue-600">
                        {Math.round(goalItems.reduce((sum, item) =>
                            sum + calculateProgress(item.completed, item.goal), 0) / goalItems.length)}%
                    </p>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000 ease-out"
                        style={{
                            width: `${goalItems.reduce((sum, item) =>
                                sum + calculateProgress(item.completed, item.goal), 0) / goalItems.length}%`
                        }}
                    ></div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                    {goalItems.filter(item => calculateProgress(item.completed, item.goal) >= 100).length} of {goalItems.length} goals completed
                </p>
            </div>
        </div>
    );
};

export default MonthlyGoalProgress;
