import React, { useState } from 'react';
import { useParent } from '../../context/ParentContext';
import ChildProfileCard from '../../components/parent/ChildProfileCard';

const ChildProfileManagement = () => {
    const { parentData, updateChildData } = useParent();
    const [showAddChild, setShowAddChild] = useState(false);
    const [selectedChild, setSelectedChild] = useState(null);
    const [formStep, setFormStep] = useState(1);

    const [newChildData, setNewChildData] = useState({
        name: '',
        age: '',
        grade: '',
        dateOfBirth: '',
        school: '',
        avatar: '👦'
    });

    const avatarOptions = ['👦', '👧', '🧒', '👶', '🧑', '👨', '👩'];

    const handleAddChild = () => {
        // In real app, this would call API
        console.log('Adding child:', newChildData);
        setShowAddChild(false);
        setFormStep(1);
        setNewChildData({
            name: '',
            age: '',
            grade: '',
            dateOfBirth: '',
            school: '',
            avatar: '👦'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Manage Children Profiles</h1>
                            <p className="text-gray-600">View and manage your children's learning profiles</p>
                        </div>
                        <button
                            onClick={() => setShowAddChild(true)}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-md"
                        >
                            + Add New Child
                        </button>
                    </div>
                </div>

                {/* Children Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {parentData.children.map((child) => (
                        <ChildProfileCard key={child.childId} child={child} />
                    ))}
                </div>

                {/* Add Child Modal */}
                {showAddChild && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6 border-b-2 border-gray-100">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-gray-800">Add New Child</h2>
                                    <button
                                        onClick={() => {
                                            setShowAddChild(false);
                                            setFormStep(1);
                                        }}
                                        className="text-gray-400 hover:text-gray-600 text-2xl"
                                    >
                                        ×
                                    </button>
                                </div>
                                {/* Progress Steps */}
                                <div className="flex items-center gap-2 mt-4">
                                    {[1, 2, 3, 4].map((step) => (
                                        <div key={step} className="flex-1">
                                            <div className={`h-2 rounded-full ${step <= formStep ? 'bg-blue-500' : 'bg-gray-200'}`} />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600 mt-2">Step {formStep} of 4</p>
                            </div>

                            <div className="p-6">
                                {/* Step 1: Basic Info */}
                                {formStep === 1 && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">Basic Information</h3>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Child's Name *</label>
                                            <input
                                                type="text"
                                                value={newChildData.name}
                                                onChange={(e) => setNewChildData({ ...newChildData, name: e.target.value })}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter child's name"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                                                <input
                                                    type="number"
                                                    value={newChildData.age}
                                                    onChange={(e) => setNewChildData({ ...newChildData, age: e.target.value })}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Age"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Grade *</label>
                                                <input
                                                    type="number"
                                                    value={newChildData.grade}
                                                    onChange={(e) => setNewChildData({ ...newChildData, grade: e.target.value })}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Grade"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                                            <input
                                                type="date"
                                                value={newChildData.dateOfBirth}
                                                onChange={(e) => setNewChildData({ ...newChildData, dateOfBirth: e.target.value })}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: School Info */}
                                {formStep === 2 && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">School Information</h3>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                                            <input
                                                type="text"
                                                value={newChildData.school}
                                                onChange={(e) => setNewChildData({ ...newChildData, school: e.target.value })}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter school name"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Avatar Selection */}
                                {formStep === 3 && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">Choose Avatar</h3>
                                        <div className="grid grid-cols-4 gap-4">
                                            {avatarOptions.map((avatar) => (
                                                <button
                                                    key={avatar}
                                                    onClick={() => setNewChildData({ ...newChildData, avatar })}
                                                    className={`text-6xl p-4 rounded-xl border-4 transition-all ${newChildData.avatar === avatar
                                                            ? 'border-blue-500 bg-blue-50 scale-110'
                                                            : 'border-gray-200 hover:border-blue-300'
                                                        }`}
                                                >
                                                    {avatar}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Review */}
                                {formStep === 4 && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">Review & Confirm</h3>
                                        <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                                            <div className="flex items-center gap-4">
                                                <span className="text-6xl">{newChildData.avatar}</span>
                                                <div>
                                                    <p className="text-xl font-bold text-gray-800">{newChildData.name}</p>
                                                    <p className="text-gray-600">Age {newChildData.age} • Grade {newChildData.grade}</p>
                                                </div>
                                            </div>
                                            <div className="border-t-2 border-gray-200 pt-3 space-y-2">
                                                <p className="text-sm"><span className="font-semibold">Date of Birth:</span> {newChildData.dateOfBirth}</p>
                                                <p className="text-sm"><span className="font-semibold">School:</span> {newChildData.school || 'Not specified'}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex gap-3 mt-6">
                                    {formStep > 1 && (
                                        <button
                                            onClick={() => setFormStep(formStep - 1)}
                                            className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                                        >
                                            Back
                                        </button>
                                    )}
                                    {formStep < 4 ? (
                                        <button
                                            onClick={() => setFormStep(formStep + 1)}
                                            className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all"
                                        >
                                            Next
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleAddChild}
                                            className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all"
                                        >
                                            Add Child
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Bulk Actions */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Bulk Actions</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <button className="px-4 py-3 bg-blue-50 text-blue-600 rounded-xl font-medium hover:bg-blue-100 transition-colors">
                            Apply Screen Time to All
                        </button>
                        <button className="px-4 py-3 bg-purple-50 text-purple-600 rounded-xl font-medium hover:bg-purple-100 transition-colors">
                            Copy Parental Controls
                        </button>
                        <button className="px-4 py-3 bg-green-50 text-green-600 rounded-xl font-medium hover:bg-green-100 transition-colors">
                            Generate Combined Report
                        </button>
                        <button className="px-4 py-3 bg-orange-50 text-orange-600 rounded-xl font-medium hover:bg-orange-100 transition-colors">
                            Set Family Goal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChildProfileManagement;
