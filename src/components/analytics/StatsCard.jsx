import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const StatsCard = ({
    value,
    label,
    icon: Icon,
    trend,
    trendValue,
    comparison,
    color = 'blue',
    loading = false
}) => {
    const [displayValue, setDisplayValue] = useState(0);

    // Animated counter effect
    useEffect(() => {
        if (loading) return;

        const numericValue = typeof value === 'string' ? parseFloat(value) : value;
        if (isNaN(numericValue)) {
            setDisplayValue(value);
            return;
        }

        let start = 0;
        const end = numericValue;
        const duration = 1000; // 1 second
        const increment = end / (duration / 16); // 60fps

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setDisplayValue(end);
                clearInterval(timer);
            } else {
                setDisplayValue(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value, loading]);

    const getTrendIcon = () => {
        if (!trend) return null;
        if (trend === 'up') return <TrendingUp className="w-4 h-4" />;
        if (trend === 'down') return <TrendingDown className="w-4 h-4" />;
        return <Minus className="w-4 h-4" />;
    };

    const getTrendColor = () => {
        if (!trend) return 'text-gray-500';
        if (trend === 'up') return 'text-green-600';
        if (trend === 'down') return 'text-red-600';
        return 'text-gray-500';
    };

    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600 border-blue-200',
        green: 'bg-green-50 text-green-600 border-green-200',
        purple: 'bg-purple-50 text-purple-600 border-purple-200',
        orange: 'bg-orange-50 text-orange-600 border-orange-200',
        pink: 'bg-pink-50 text-pink-600 border-pink-200',
        red: 'bg-red-50 text-red-600 border-red-200'
    };

    if (loading) {
        return (
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 animate-pulse">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-20 mb-3"></div>
                        <div className="h-8 bg-gray-200 rounded w-24 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-32"></div>
                    </div>
                    <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {typeof displayValue === 'number' && !isNaN(displayValue)
                            ? displayValue.toLocaleString()
                            : value}
                    </h3>

                    {(trend || comparison) && (
                        <div className="flex items-center gap-2 text-sm">
                            {trend && (
                                <span className={`flex items-center gap-1 font-medium ${getTrendColor()}`}>
                                    {getTrendIcon()}
                                    {trendValue}
                                </span>
                            )}
                            {comparison && (
                                <span className="text-gray-500">{comparison}</span>
                            )}
                        </div>
                    )}
                </div>

                {Icon && (
                    <div className={`p-3 rounded-lg ${colorClasses[color] || colorClasses.blue}`}>
                        <Icon className="w-6 h-6" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatsCard;
