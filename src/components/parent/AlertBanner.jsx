import React from 'react';

const AlertBanner = ({ alerts, onAcknowledge }) => {
    if (!alerts || alerts.length === 0) return null;

    const unacknowledgedAlerts = alerts.filter(alert => !alert.acknowledged);
    if (unacknowledgedAlerts.length === 0) return null;

    const getSeverityColor = (severity) => {
        switch (severity) {
            case 'high':
                return 'bg-red-50 border-red-300 text-red-800';
            case 'medium':
                return 'bg-yellow-50 border-yellow-300 text-yellow-800';
            case 'low':
                return 'bg-blue-50 border-blue-300 text-blue-800';
            default:
                return 'bg-gray-50 border-gray-300 text-gray-800';
        }
    };

    const getSeverityIcon = (severity) => {
        switch (severity) {
            case 'high':
                return '🚨';
            case 'medium':
                return '⚠️';
            case 'low':
                return 'ℹ️';
            default:
                return '📌';
        }
    };

    return (
        <div className="space-y-3">
            {unacknowledgedAlerts.map((alert) => (
                <div
                    key={alert.alertId}
                    className={`border-2 rounded-xl p-4 ${getSeverityColor(alert.severity)}`}
                >
                    <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0">{getSeverityIcon(alert.severity)}</span>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <div>
                                    <h4 className="font-bold text-sm md:text-base">
                                        {alert.type.replace(/_/g, ' ').toUpperCase()}
                                    </h4>
                                    {alert.subject && (
                                        <span className="inline-block mt-1 px-2 py-1 bg-white rounded-md text-xs font-medium">
                                            {alert.subject}
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs opacity-75 flex-shrink-0">
                                    {new Date(alert.timestamp).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="text-sm mb-3">{alert.message}</p>

                            {alert.recommendations && alert.recommendations.length > 0 && (
                                <div className="mb-3 p-3 bg-white bg-opacity-50 rounded-lg">
                                    <p className="text-xs font-semibold mb-2">Recommendations:</p>
                                    <ul className="text-xs space-y-1">
                                        {alert.recommendations.map((rec, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="flex-shrink-0">•</span>
                                                <span>{rec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {onAcknowledge && (
                                <button
                                    onClick={() => onAcknowledge(alert.alertId)}
                                    className="px-4 py-2 bg-white rounded-lg text-sm font-medium hover:shadow-md transition-all"
                                >
                                    Acknowledge
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AlertBanner;
