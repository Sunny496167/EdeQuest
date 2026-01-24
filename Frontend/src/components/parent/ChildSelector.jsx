import React from 'react';
import { useParent } from '../../context/ParentContext';

const ChildSelector = ({ className = '' }) => {
    const { parentData, selectedChildId, setSelectedChildId } = useParent();

    return (
        <div className={`relative ${className}`}>
            <select
                value={selectedChildId}
                onChange={(e) => setSelectedChildId(e.target.value)}
                className="w-full px-4 py-3 pr-10 bg-white border-2 border-gray-200 rounded-xl font-medium text-gray-800 cursor-pointer hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
            >
                {parentData.children.map((child) => (
                    <option key={child.childId} value={child.childId}>
                        {child.avatar} {child.name} - Grade {child.grade}
                    </option>
                ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
};

export default ChildSelector;
