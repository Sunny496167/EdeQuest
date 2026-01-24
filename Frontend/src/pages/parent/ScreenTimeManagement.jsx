import React, { useState } from 'react';
import { useParent } from '../../context/ParentContext';
import ChildSelector from '../../components/parent/ChildSelector';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ScreenTimeManagement = () => {
    const { parentData, selectedChild, updateParentalControls, selectedChildId } = useParent();

    const [editMode, setEditMode] = useState(false);
    const [tempSettings, setTempSettings] = useState(selectedChild?.parentalControls.screenTime || {});

    const handleSave = () => {
        updateParentalControls(selectedChildId, 'screenTime', tempSettings);
        setEditMode(false);
    };

    const handleCancel = () => {
        setTempSettings(selectedChild.parentalControls.screenTime);
        setEditMode(false);
    };

    // Calculate weekly data for chart
    const getWeeklyData = () => {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        return days.map((day, index) => ({
            day,
            used: Math.floor(Math.random() * 60) + 20, // Mock data
            limit: selectedChild?.parentalControls.screenTime.dailyLimit || 60
        }));
    };

    const weeklyData = getWeeklyData();

    // Get total screen time for all children
    const totalScreenTime = parentData.children.reduce((sum, child) =>
        sum + child.currentStats.thisWeekScreenTime, 0
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Screen Time Management</h1>
                    <ChildSelector />
                </div>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md p-5 text-white">
                        <p className="text-blue-100 text-sm mb-1">Total (All Children)</p>
                        <p className="text-3xl font-bold">{Math.floor(totalScreenTime / 60)}h {totalScreenTime % 60}m</p>
                        <p className="text-blue-100 text-xs mt-1">This week</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-md p-5 text-white">
                        <p className="text-purple-100 text-sm mb-1">Today</p>
                        <p className="text-3xl font-bold">{selectedChild?.currentStats.todayScreenTime || 0}m</p>
                        <p className="text-purple-100 text-xs mt-1">of {selectedChild?.parentalControls.screenTime.dailyLimit}m limit</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md p-5 text-white">
                        <p className="text-green-100 text-sm mb-1">This Week</p>
                        <p className="text-3xl font-bold">{selectedChild?.currentStats.thisWeekScreenTime || 0}m</p>
                        <p className="text-green-100 text-xs mt-1">of {selectedChild?.parentalControls.screenTime.weeklyLimit}m limit</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-md p-5 text-white">
                        <p className="text-orange-100 text-sm mb-1">Average Daily</p>
                        <p className="text-3xl font-bold">{Math.floor((selectedChild?.currentStats.thisWeekScreenTime || 0) / 7)}m</p>
                        <p className="text-orange-100 text-xs mt-1">per day</p>
                    </div>
                </div>

                {selectedChild && (
                    <>
                        {/* Weekly Chart */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Weekly Screen Time Pattern</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={weeklyData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis dataKey="day" stroke="#6B7280" />
                                    <YAxis stroke="#6B7280" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#fff', border: '2px solid #E5E7EB', borderRadius: '12px' }}
                                    />
                                    <Bar dataKey="used" fill="#8B5CF6" name="Used (min)" radius={[8, 8, 0, 0]} />
                                    <Bar dataKey="limit" fill="#E5E7EB" name="Limit (min)" radius={[8, 8, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Screen Time Settings */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-800">Screen Time Limits</h2>
                                {!editMode ? (
                                    <button
                                        onClick={() => {
                                            setTempSettings(selectedChild.parentalControls.screenTime);
                                            setEditMode(true);
                                        }}
                                        className="px-4 py-2 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                                    >
                                        Edit Settings
                                    </button>
                                ) : (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleCancel}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleSave}
                                            className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Daily Limit */}
                                <div className="p-5 bg-gray-50 rounded-xl">
                                    <label className="block text-sm font-bold text-gray-700 mb-3">Daily Limit (minutes)</label>
                                    {editMode ? (
                                        <input
                                            type="range"
                                            min="15"
                                            max="180"
                                            step="15"
                                            value={tempSettings.dailyLimit}
                                            onChange={(e) => setTempSettings({ ...tempSettings, dailyLimit: Number(e.target.value) })}
                                            className="w-full mb-2"
                                        />
                                    ) : null}
                                    <div className="text-center">
                                        <p className="text-4xl font-bold text-blue-600">
                                            {editMode ? tempSettings.dailyLimit : selectedChild.parentalControls.screenTime.dailyLimit}
                                        </p>
                                        <p className="text-sm text-gray-600 mt-1">minutes per day</p>
                                    </div>
                                </div>

                                {/* Weekly Limit */}
                                <div className="p-5 bg-gray-50 rounded-xl">
                                    <label className="block text-sm font-bold text-gray-700 mb-3">Weekly Limit (minutes)</label>
                                    {editMode ? (
                                        <input
                                            type="range"
                                            min="105"
                                            max="1260"
                                            step="15"
                                            value={tempSettings.weeklyLimit}
                                            onChange={(e) => setTempSettings({ ...tempSettings, weeklyLimit: Number(e.target.value) })}
                                            className="w-full mb-2"
                                        />
                                    ) : null}
                                    <div className="text-center">
                                        <p className="text-4xl font-bold text-purple-600">
                                            {editMode ? tempSettings.weeklyLimit : selectedChild.parentalControls.screenTime.weeklyLimit}
                                        </p>
                                        <p className="text-sm text-gray-600 mt-1">minutes per week</p>
                                    </div>
                                </div>

                                {/* Break Interval */}
                                <div className="p-5 bg-gray-50 rounded-xl">
                                    <label className="block text-sm font-bold text-gray-700 mb-3">Break Reminder Interval</label>
                                    {editMode ? (
                                        <select
                                            value={tempSettings.breakInterval}
                                            onChange={(e) => setTempSettings({ ...tempSettings, breakInterval: Number(e.target.value) })}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                                        >
                                            <option value={15}>15 minutes</option>
                                            <option value={20}>20 minutes</option>
                                            <option value={25}>25 minutes</option>
                                            <option value={30}>30 minutes</option>
                                        </select>
                                    ) : null}
                                    <div className="text-center">
                                        <p className="text-4xl font-bold text-green-600">
                                            {editMode ? tempSettings.breakInterval : selectedChild.parentalControls.screenTime.breakInterval}
                                        </p>
                                        <p className="text-sm text-gray-600 mt-1">minutes</p>
                                    </div>
                                </div>

                                {/* Auto Lock */}
                                <div className="p-5 bg-gray-50 rounded-xl">
                                    <label className="block text-sm font-bold text-gray-700 mb-3">Auto-lock After Limit</label>
                                    <div className="flex items-center justify-center h-20">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={editMode ? tempSettings.autoLockAfterLimit : selectedChild.parentalControls.screenTime.autoLockAfterLimit}
                                                onChange={(e) => editMode && setTempSettings({ ...tempSettings, autoLockAfterLimit: e.target.checked })}
                                                disabled={!editMode}
                                                className="sr-only peer"
                                            />
                                            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                                            <span className="ml-3 text-sm font-medium text-gray-700">
                                                {(editMode ? tempSettings.autoLockAfterLimit : selectedChild.parentalControls.screenTime.autoLockAfterLimit) ? 'Enabled' : 'Disabled'}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Schedule */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Allowed Time Slots</h2>
                            <div className="space-y-4">
                                {selectedChild.parentalControls.screenTime.allowedTimeSlots.map((slot, index) => (
                                    <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">📅</span>
                                                <div>
                                                    <p className="font-bold text-gray-800">{slot.day}</p>
                                                    <p className="text-sm text-gray-600">{slot.start} - {slot.end}</p>
                                                </div>
                                            </div>
                                            {editMode && (
                                                <button className="px-4 py-2 bg-red-100 text-red-600 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors">
                                                    Remove
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {editMode && (
                                    <button className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 font-medium hover:border-blue-400 hover:text-blue-600 transition-colors">
                                        + Add Time Slot
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Quick Templates */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Templates</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <button className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 hover:shadow-md transition-all text-left">
                                    <h3 className="font-bold text-blue-800 mb-1">Weekday Focused</h3>
                                    <p className="text-xs text-gray-600">45 min/day, 4-6 PM</p>
                                </button>
                                <button className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200 hover:shadow-md transition-all text-left">
                                    <h3 className="font-bold text-green-800 mb-1">Weekend Relaxed</h3>
                                    <p className="text-xs text-gray-600">90 min/day, 10 AM-12 PM</p>
                                </button>
                                <button className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200 hover:shadow-md transition-all text-left">
                                    <h3 className="font-bold text-purple-800 mb-1">Vacation Mode</h3>
                                    <p className="text-xs text-gray-600">120 min/day, flexible</p>
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ScreenTimeManagement;
