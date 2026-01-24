import React, { useState } from 'react';
import { useParent } from '../../context/ParentContext';
import ChildSelector from '../../components/parent/ChildSelector';

const ContentControls = () => {
    const { selectedChild, updateParentalControls, selectedChildId } = useParent();
    const [editMode, setEditMode] = useState(false);

    if (!selectedChild) return null;

    const { contentRestrictions, features, safetySettings } = selectedChild.parentalControls;

    const handleToggleFeature = (feature) => {
        if (editMode) {
            updateParentalControls(selectedChildId, 'features', {
                ...features,
                [feature]: !features[feature]
            });
        }
    };

    const handleSafetyChange = (setting, value) => {
        if (editMode) {
            updateParentalControls(selectedChildId, 'safetySettings', {
                ...safetySettings,
                [setting]: value
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Content Controls</h1>
                            <p className="text-gray-600">Manage content access and restrictions</p>
                        </div>
                        <button
                            onClick={() => setEditMode(!editMode)}
                            className={`px-6 py-3 font-semibold rounded-xl transition-all ${editMode
                                    ? 'bg-green-500 text-white hover:bg-green-600'
                                    : 'bg-blue-500 text-white hover:bg-blue-600'
                                }`}
                        >
                            {editMode ? '✓ Save Changes' : 'Edit Settings'}
                        </button>
                    </div>
                    <ChildSelector />
                </div>

                {/* Difficulty Level */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Difficulty Level Range</h2>
                    <div className="p-5 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-gray-700">Min Grade Level:</span>
                            <span className="text-2xl font-bold text-blue-600">{contentRestrictions.difficultyRange.min}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Max Grade Level:</span>
                            <span className="text-2xl font-bold text-purple-600">{contentRestrictions.difficultyRange.max}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">
                            Content will be limited to grades {contentRestrictions.difficultyRange.min} through {contentRestrictions.difficultyRange.max}
                        </p>
                    </div>
                </div>

                {/* Feature Controls */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Feature Controls</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(features).map(([feature, enabled]) => (
                            <div key={feature} className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-gray-800 capitalize">
                                            {feature.replace(/([A-Z])/g, ' $1').trim()}
                                        </h3>
                                        <p className="text-xs text-gray-600 mt-1">
                                            {feature === 'allowChat' && 'Enable messaging features'}
                                            {feature === 'allowLeaderboard' && 'Show leaderboard rankings'}
                                            {feature === 'allowFriends' && 'Allow friend connections'}
                                            {feature === 'allowChallenges' && 'Enable challenge mode'}
                                            {feature === 'showAds' && 'Display advertisements'}
                                        </p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={enabled}
                                            onChange={() => handleToggleFeature(feature)}
                                            disabled={!editMode}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Safety Settings */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Safety Settings</h2>
                    <div className="space-y-4">
                        {/* Content Filter */}
                        <div className="p-4 bg-gray-50 rounded-xl">
                            <label className="block text-sm font-bold text-gray-700 mb-3">Content Filter Level</label>
                            <select
                                value={safetySettings.contentFilter}
                                onChange={(e) => handleSafetyChange('contentFilter', e.target.value)}
                                disabled={!editMode}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="strict">Strict - Maximum filtering</option>
                                <option value="moderate">Moderate - Balanced approach</option>
                                <option value="off">Off - No filtering</option>
                            </select>
                        </div>

                        {/* Other Safety Toggles */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">Hide Personal Info</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={safetySettings.hidePersonalInfo}
                                            onChange={(e) => handleSafetyChange('hidePersonalInfo', e.target.checked)}
                                            disabled={!editMode}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">Restrict Sharing</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={safetySettings.restrictSharing}
                                            onChange={(e) => handleSafetyChange('restrictSharing', e.target.checked)}
                                            disabled={!editMode}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">Password for Settings</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={safetySettings.requirePasswordForSettings}
                                            onChange={(e) => handleSafetyChange('requirePasswordForSettings', e.target.checked)}
                                            disabled={!editMode}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">Age-Appropriate Content</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={contentRestrictions.ageAppropriate}
                                            disabled
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Banner */}
                <div className="bg-blue-50 rounded-2xl shadow-md p-6 border-2 border-blue-200">
                    <div className="flex items-start gap-3">
                        <span className="text-2xl">ℹ️</span>
                        <div>
                            <h3 className="font-bold text-blue-800 mb-2">About Content Controls</h3>
                            <p className="text-sm text-blue-700">
                                These settings help create a safe learning environment for your child. Content filters are applied automatically based on age and grade level. You can customize additional restrictions as needed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentControls;
