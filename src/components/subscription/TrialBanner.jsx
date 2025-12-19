import { X, Clock, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * TrialBanner Component
 * Shows trial status with days remaining and upgrade CTA
 */
const TrialBanner = ({ daysRemaining, onDismiss }) => {
    const [isDismissed, setIsDismissed] = useState(false);
    const navigate = useNavigate();

    if (isDismissed) return null;

    const handleDismiss = () => {
        setIsDismissed(true);
        if (onDismiss) onDismiss();
    };

    const handleUpgrade = () => {
        navigate('/pricing');
    };

    const getUrgencyColor = () => {
        if (daysRemaining <= 3) return 'from-red-500 to-orange-500';
        if (daysRemaining <= 7) return 'from-yellow-500 to-orange-500';
        return 'from-blue-500 to-purple-600';
    };

    return (
        <div className={`bg-gradient-to-r ${getUrgencyColor()} text-white shadow-lg animate-slideDown`}>
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Left: Trial Info */}
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-sm sm:text-base">
                                {daysRemaining === 1 ? (
                                    <>
                                        <span className="animate-pulse">⚠️</span> Last day of your free trial!
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-4 h-4 inline mr-1" />
                                        {daysRemaining} days left in your free trial
                                    </>
                                )}
                            </p>
                            <p className="text-xs sm:text-sm opacity-90">
                                Upgrade now to continue enjoying premium features
                            </p>
                        </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleUpgrade}
                            className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm whitespace-nowrap"
                        >
                            Upgrade Now
                        </button>
                        <button
                            onClick={handleDismiss}
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                            aria-label="Dismiss banner"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrialBanner;
