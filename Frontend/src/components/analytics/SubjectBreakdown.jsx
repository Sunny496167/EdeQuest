import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const SubjectBreakdown = ({ subjects, onSubjectClick }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const COLORS = {
        'Mathematics': '#3B82F6',
        'Science': '#10B981',
        'Social Science': '#8B5CF6',
        'Languages': '#F59E0B',
        'Life Skills': '#EC4899'
    };

    // Prepare data for pie chart
    const chartData = subjects.map(subject => ({
        name: subject.subject,
        value: subject.timeSpent,
        percentage: subject.progress,
        quizzes: subject.totalQuizzes,
        accuracy: subject.accuracy
    }));

    const totalTime = chartData.reduce((sum, item) => sum + item.value, 0);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">{data.name}</p>
                    <p className="text-sm text-gray-600">
                        Time: <span className="font-semibold">{data.value} min</span>
                    </p>
                    <p className="text-sm text-gray-600">
                        Quizzes: <span className="font-semibold">{data.quizzes}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                        Accuracy: <span className="font-semibold">{data.accuracy.toFixed(1)}%</span>
                    </p>
                    <p className="text-sm text-gray-600">
                        Progress: <span className="font-semibold">{data.percentage}%</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        if (percent < 0.05) return null; // Don't show label if too small

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                className="font-semibold text-sm"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const onPieLeave = () => {
        setActiveIndex(null);
    };

    const handleClick = (data) => {
        if (onSubjectClick) {
            onSubjectClick(data.name);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Subject Distribution</h3>

            <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomLabel}
                            outerRadius={100}
                            innerRadius={60}
                            fill="#8884d8"
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                            onMouseLeave={onPieLeave}
                            onClick={handleClick}
                            animationDuration={1000}
                        >
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[entry.name] || '#6B7280'}
                                    opacity={activeIndex === null || activeIndex === index ? 1 : 0.6}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Center text showing total */}
            <div className="text-center -mt-56 pointer-events-none">
                <p className="text-3xl font-bold text-gray-900">{totalTime}</p>
                <p className="text-sm text-gray-600">Total Minutes</p>
            </div>

            {/* Subject legend with stats */}
            <div className="mt-6 space-y-3">
                {chartData.map((subject, index) => (
                    <div
                        key={subject.name}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => handleClick(subject)}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: COLORS[subject.name] }}
                            ></div>
                            <div>
                                <p className="font-semibold text-gray-900">{subject.name}</p>
                                <p className="text-sm text-gray-600">
                                    {subject.quizzes} quizzes • {subject.accuracy.toFixed(1)}% accuracy
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-gray-900">{subject.value} min</p>
                            <p className="text-sm text-gray-600">
                                {((subject.value / totalTime) * 100).toFixed(1)}%
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubjectBreakdown;
