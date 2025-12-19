import { useSubscription } from '../../context/SubscriptionContext';
import UpgradePrompt from './UpgradePrompt';
import { useState } from 'react';

/**
 * FeatureGate Component
 * Higher-order component that gates premium features
 * Shows upgrade prompt if user doesn't have access
 */
const FeatureGate = ({
    children,
    feature,
    featureName,
    featureDescription,
    fallback = null,
    showPromptOnMount = false
}) => {
    const { checkFeatureAccess, getRequiredPlan } = useSubscription();
    const [showUpgradePrompt, setShowUpgradePrompt] = useState(showPromptOnMount);

    const hasAccess = checkFeatureAccess(feature);
    const requiredPlan = getRequiredPlan(feature);

    // If user has access, render children
    if (hasAccess) {
        return <>{children}</>;
    }

    // If no access and fallback provided, render fallback
    if (fallback) {
        return <>{fallback}</>;
    }

    // Otherwise, show upgrade prompt trigger
    return (
        <>
            <div
                onClick={() => setShowUpgradePrompt(true)}
                className="cursor-pointer relative"
            >
                {/* Overlay to indicate locked feature */}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
                    <div className="text-center text-white p-6">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </div>
                        <p className="font-bold text-lg mb-1">Premium Feature</p>
                        <p className="text-sm opacity-90">Click to unlock</p>
                    </div>
                </div>

                {/* Blurred content preview */}
                <div className="filter blur-sm pointer-events-none">
                    {children}
                </div>
            </div>

            {/* Upgrade Prompt Modal */}
            <UpgradePrompt
                isOpen={showUpgradePrompt}
                onClose={() => setShowUpgradePrompt(false)}
                featureName={featureName}
                featureDescription={featureDescription}
                requiredPlan={requiredPlan}
            />
        </>
    );
};

export default FeatureGate;
