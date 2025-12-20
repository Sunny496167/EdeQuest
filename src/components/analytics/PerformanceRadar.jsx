import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

const PerformanceRadar = ({ subjects }) => {
    // Prepare data for radar chart
    const chartData = subjects.map(subject => ({
        subject: subject.subject,
        accuracy: subject.accuracy,
        progress: subject.progress,
        fullMark: 100
    }));

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">{data.subject}</p>
                    <p className="text-sm text-blue-600">
                        Accuracy: <span className="font-semibold">{data.accuracy.toFixed(1)}%</span>
                    </p>
                    <p className="text-sm text-purple-600">
                        Progress: <span className="font-semibold">{data.progress}%</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Subject Performance</h3>

            <div className="w-full h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={chartData}>
                        <PolarGrid stroke="#E5E7EB" />
                        <PolarAngleAxis
                            dataKey="subject"
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                        />
                        <PolarRadiusAxis
                            angle={90}
                            domain={[0, 100]}
                            tick={{ fill: '#6B7280', fontSize: 10 }}
                        />
                        <Radar
                            name="Accuracy"
                            dataKey="accuracy"
                            stroke="#3B82F6"
                            fill="#3B82F6"
                            fillOpacity={0.5}
                            animationDuration={1000}
                        />
                        <Radar
                            name="Progress"
                            dataKey="progress"
                            stroke="#8B5CF6"
                            fill="#8B5CF6"
                            fillOpacity={0.3}
                            animationDuration={1000}
                        />
                        <Tooltip content={<CustomTooltip />} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="mt-4 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600">Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-600">Progress</span>
                </div>
            </div>

            {/* Subject stats */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subjects.map(subject => (
                    <div key={subject.subject} className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-1">{subject.subject}</p>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">
                                Accuracy: <span className="font-semibold text-blue-600">{subject.accuracy.toFixed(1)}%</span>
                            </span>
                            <span className="text-gray-600">
                                Progress: <span className="font-semibold text-purple-600">{subject.progress}%</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerformanceRadar;
