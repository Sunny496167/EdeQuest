import { useSubscription } from '../context/SubscriptionContext';
import { useState } from 'react';

/**
 * Custom hook for checking feature access and showing upgrade prompts
 * @param {string} featureId - The feature ID to check access for
 * @returns {object} - Object containing access info and upgrade prompt controls
 */
export const useFeatureAccess = (featureId) => {
    const {
        checkFeatureAccess,
        getRequiredPlan,
        subscription
    } = useSubscription();

    const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);

    // Check if user has access to the feature
    const canAccess = checkFeatureAccess(featureId);

    // Get the minimum plan required for this feature
    const requiredPlan = getRequiredPlan(featureId);

    // Get current plan
    const currentPlan = subscription?.plan;

    // Function to trigger upgrade prompt
    const triggerUpgradePrompt = () => {
        if (!canAccess) {
            setShowUpgradePrompt(true);
        }
    };

    // Function to close upgrade prompt
    const closeUpgradePrompt = () => {
        setShowUpgradePrompt(false);
    };

    return {
        canAccess,
        requiredPlan,
        currentPlan,
        showUpgradePrompt,
        triggerUpgradePrompt,
        closeUpgradePrompt
    };
};

export default useFeatureAccess;
