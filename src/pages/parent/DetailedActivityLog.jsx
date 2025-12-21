import React, { useState } from 'react';
import { useParent } from '../../context/ParentContext';
import ActivityLogItem from '../../components/parent/ActivityLogItem';
import ChildSelector from '../../components/parent/ChildSelector';

const DetailedActivityLog = () => {
    const { selectedChildId, getActivityHistory, activityHistory } = useParent();

    const [dateRange, setDateRange] = useState(7);
    const [activityType, setActivityType] = useState('all');
    const [subjectFilter, setSubjectFilter] = useState('all');
    const [sortBy, setSortBy] = useState('newest');
    const [searchQuery, setSearchQuery] = useState('');

    // Get all activities for selected child
    const allActivities = activityHistory[selectedChildId] || [];

    // Apply filters
    let filteredActivities = allActivities.filter(activity => {
        const activityDate = new Date(activity.timestamp);
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - dateRange);
        return activityDate >= cutoffDate;
    });

    // Filter by type
    if (activityType !== 'all') {
        filteredActivities = filteredActivities.filter(a => a.type === activityType);
    }

    // Filter by subject
    if (subjectFilter !== 'all') {
        filteredActivities = filteredActivities.filter(a => a.subject === subjectFilter);
    }

    // Search filter
    if (searchQuery) {
        filteredActivities = filteredActivities.filter(a =>
            (a.topic && a.topic.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (a.subject && a.subject.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (a.achievement && a.achievement.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }

    // Sort
    filteredActivities.sort((a, b) => {
        if (sortBy === 'newest') {
            return new Date(b.timestamp) - new Date(a.timestamp);
        } else if (sortBy === 'oldest') {
            return new Date(a.timestamp) - new Date(b.timestamp);
        } else if (sortBy === 'highest_score') {
            const scoreA = a.details?.accuracy || 0;
            const scoreB = b.details?.accuracy || 0;
            return scoreB - scoreA;
        }
        return 0;
    });

    // Get unique subjects
    const subjects = [...new Set(allActivities.filter(a => a.subject).map(a => a.subject))];

    // Calculate stats
    const totalActivities = filteredActivities.length;
    const quizzes = filteredActivities.filter(a => a.type === 'quiz_completed');
    const avgAccuracy = quizzes.length > 0
        ? Math.round(quizzes.reduce((sum, q) => sum + (q.details?.accuracy || 0), 0) / quizzes.length)
        : 0;
    const totalTime = filteredActivities.reduce((sum, a) => {
        if (a.details?.timeSpent) return sum + a.details.timeSpent;
        if (a.timeSpent) return sum + a.timeSpent;
        return sum;
    }, 0);

    const handleExport = (format) => {
        console.log(`Exporting to ${format}...`);
        // In real app, this would generate and download the file
        alert(`Export to ${format} functionality would be implemented here`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Detailed Activity Log</h1>
                    <ChildSelector />
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl shadow-md p-4 border-2 border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">Total Activities</p>
                        <p className="text-3xl font-bold text-blue-600">{totalActivities}</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-4 border-2 border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">Quizzes Completed</p>
                        <p className="text-3xl font-bold text-green-600">{quizzes.length}</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-4 border-2 border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">Average Accuracy</p>
                        <p className="text-3xl font-bold text-purple-600">{avgAccuracy}%</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-4 border-2 border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">Total Time</p>
                        <p className="text-3xl font-bold text-orange-600">{Math.floor(totalTime / 60)}h {totalTime % 60}m</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Filters & Search</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        {/* Date Range */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                            <select
                                value={dateRange}
                                onChange={(e) => setDateRange(Number(e.target.value))}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value={7}>Last 7 Days</option>
                                <option value={14}>Last 14 Days</option>
                                <option value={30}>Last 30 Days</option>
                                <option value={90}>Last 90 Days</option>
                            </select>
                        </div>

                        {/* Activity Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Activity Type</label>
                            <select
                                value={activityType}
                                onChange={(e) => setActivityType(e.target.value)}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="all">All Types</option>
                                <option value="quiz_completed">Quizzes</option>
                                <option value="lesson_viewed">Lessons</option>
                                <option value="achievement_unlocked">Achievements</option>
                                <option value="login">Logins</option>
                            </select>
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <select
                                value={subjectFilter}
                                onChange={(e) => setSubjectFilter(e.target.value)}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="all">All Subjects</option>
                                {subjects.map(subject => (
                                    <option key={subject} value={subject}>{subject}</option>
                                ))}
                            </select>
                        </div>

                        {/* Sort */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="highest_score">Highest Score</option>
                            </select>
                        </div>

                        {/* Search */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by topic, subject, or achievement..."
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Export Buttons */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => handleExport('CSV')}
                            className="px-4 py-2 bg-green-50 text-green-600 rounded-lg font-medium hover:bg-green-100 transition-colors text-sm"
                        >
                            📊 Export CSV
                        </button>
                        <button
                            onClick={() => handleExport('PDF')}
                            className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors text-sm"
                        >
                            📄 Export PDF
                        </button>
                        <button
                            onClick={() => {
                                setActivityType('all');
                                setSubjectFilter('all');
                                setSearchQuery('');
                                setSortBy('newest');
                                setDateRange(7);
                            }}
                            className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
                        >
                            🔄 Reset Filters
                        </button>
                    </div>
                </div>

                {/* Activity List */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-800">
                            Activity Log ({filteredActivities.length} {filteredActivities.length === 1 ? 'entry' : 'entries'})
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {filteredActivities.length > 0 ? (
                            filteredActivities.map((activity) => (
                                <ActivityLogItem key={activity.activityId} activity={activity} />
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg mb-2">No activities found</p>
                                <p className="text-gray-400 text-sm">Try adjusting your filters or date range</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedActivityLog;
