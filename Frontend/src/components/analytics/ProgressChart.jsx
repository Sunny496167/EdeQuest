import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

const ProgressChart = ({ data, dateRange = '30', onDateRangeChange }) => {
    const [activeMetric, setActiveMetric] = useState('accuracy');

    const metrics = [
        { key: 'accuracy', label: 'Accuracy %', color: '#3B82F6', unit: '%' },
        { key: 'quizzes', label: 'Quizzes', color: '#10B981', unit: '' },
        { key: 'timeSpent', label: 'Time (min)', color: '#8B5CF6', unit: ' min' }
    ];

    const dateRanges = [
        { value: '7', label: '7 Days' },
        { value: '30', label: '30 Days' },
        { value: '90', label: '3 Months' }
    ];

    // Prepare chart data based on date range
    const getChartData = () => {
        const days = parseInt(dateRange);
        const filteredData = data.slice(-days);

        // Group by week if more than 30 days
        if (days > 30) {
            const weeklyData = [];
            for (let i = 0; i < filteredData.length; i += 7) {
                const week = filteredData.slice(i, i + 7);
                const activeDays = week.filter(d => d.quizzes > 0);

                if (activeDays.length > 0) {
                    weeklyData.push({
                        date: new Date(week[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                        accuracy: parseFloat((activeDays.reduce((sum, d) => sum + d.accuracy, 0) / activeDays.length).toFixed(1)),
                        quizzes: week.reduce((sum, d) => sum + d.quizzes, 0),
                        timeSpent: week.reduce((sum, d) => sum + d.timeSpent, 0)
                    });
                }
            }
            return weeklyData;
        }

        // Daily data for 30 days or less
        return filteredData
            .filter(d => d.quizzes > 0)
            .map(d => ({
                date: new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                accuracy: parseFloat(d.accuracy.toFixed(1)),
                quizzes: d.quizzes,
                timeSpent: d.timeSpent
            }));
    };

    const chartData = getChartData();
    const currentMetric = metrics.find(m => m.key === activeMetric);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">{payload[0].payload.date}</p>
                    {metrics.map(metric => (
                        <p key={metric.key} className="text-sm" style={{ color: metric.color }}>
                            {metric.label}: <span className="font-semibold">
                                {payload[0].payload[metric.key]}{metric.unit}
                            </span>
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h3 className="text-xl font-bold text-gray-900">Progress Over Time</h3>

                <div className="flex flex-wrap gap-2">
                    {/* Date Range Selector */}
                    <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                        {dateRanges.map(range => (
                            <button
                                key={range.value}
                                onClick={() => onDateRangeChange && onDateRangeChange(range.value)}
                                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${dateRange === range.value
                                        ? 'bg-white text-blue-600 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {range.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Metric Selector */}
            <div className="flex flex-wrap gap-2 mb-6">
                {metrics.map(metric => (
                    <button
                        key={metric.key}
                        onClick={() => setActiveMetric(metric.key)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeMetric === metric.key
                                ? 'shadow-md'
                                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                            }`}
                        style={{
                            backgroundColor: activeMetric === metric.key ? metric.color : undefined,
                            color: activeMetric === metric.key ? 'white' : undefined
                        }}
                    >
                        {metric.label}
                    </button>
                ))}
            </div>

            {/* Chart */}
            <div className="w-full h-80">
                {chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={currentMetric.color} stopOpacity={0.3} />
                                    <stop offset="95%" stopColor={currentMetric.color} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis
                                dataKey="date"
                                stroke="#6B7280"
                                style={{ fontSize: '12px' }}
                                angle={-45}
                                textAnchor="end"
                                height={80}
                            />
                            <YAxis
                                stroke="#6B7280"
                                style={{ fontSize: '12px' }}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey={activeMetric}
                                stroke={currentMetric.color}
                                strokeWidth={3}
                                fill="url(#colorGradient)"
                                animationDuration={1000}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        <p>No data available for the selected period</p>
                    </div>
                )}
            </div>

            {/* Legend */}
            <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-4 justify-center">
                    {metrics.map(metric => (
                        <div key={metric.key} className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: metric.color }}
                            ></div>
                            <span className="text-sm text-gray-600">{metric.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgressChart;
