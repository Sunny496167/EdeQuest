import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import {
    SUBSCRIPTION_TIERS,
    BILLING_CYCLES,
    SUBSCRIPTION_STATUS,
    FEATURES,
    PRICING_PLANS,
    isPlanFeatureIncluded
} from '../data/subscriptionPlans';

// Create Subscription Context
const SubscriptionContext = createContext();

// Custom hook to use subscription context
export const useSubscription = () => {
    const context = useContext(SubscriptionContext);
    if (!context) {
        throw new Error('useSubscription must be used within SubscriptionProvider');
    }
    return context;
};

// Helper function to calculate trial end date
const calculateTrialEndDate = (startDate, trialDays) => {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + trialDays);
    return endDate.toISOString();
};

// Helper function to calculate next billing date
const calculateNextBillingDate = (startDate, billingCycle) => {
    const nextDate = new Date(startDate);
    if (billingCycle === BILLING_CYCLES.MONTHLY) {
        nextDate.setMonth(nextDate.getMonth() + 1);
    } else {
        nextDate.setFullYear(nextDate.getFullYear() + 1);
    }
    return nextDate.toISOString();
};

// Helper function to check if trial is active
const isTrialActive = (subscription) => {
    if (!subscription.trialEndsAt) return false;
    const now = new Date();
    const trialEnd = new Date(subscription.trialEndsAt);
    return now < trialEnd;
};

// Helper function to get trial days remaining
const getTrialDaysRemaining = (trialEndsAt) => {
    if (!trialEndsAt) return 0;
    const now = new Date();
    const trialEnd = new Date(trialEndsAt);
    const diffTime = trialEnd - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
};

// Mock billing history generator
const generateBillingHistory = (subscription) => {
    const history = [];
    const currentDate = new Date();

    // Generate 3-4 past invoices
    for (let i = 1; i <= 3; i++) {
        const invoiceDate = new Date(currentDate);
        if (subscription.billingCycle === BILLING_CYCLES.MONTHLY) {
            invoiceDate.setMonth(invoiceDate.getMonth() - i);
        } else {
            invoiceDate.setFullYear(invoiceDate.getFullYear() - i);
        }

        history.push({
            id: `INV-${Date.now()}-${i}`,
            date: invoiceDate.toISOString(),
            amount: subscription.price,
            currency: subscription.currency,
            status: 'paid',
            plan: subscription.plan,
            billingCycle: subscription.billingCycle,
            downloadUrl: '#' // Mock download URL
        });
    }

    return history.reverse();
};

// Subscription Provider Component
export const SubscriptionProvider = ({ children }) => {
    const { user, updateUser } = useAuth();

    // Initialize subscription state
    const [subscription, setSubscription] = useState(null);
    const [billingHistory, setBillingHistory] = useState([]);
    const [usageStats, setUsageStats] = useState({
        quizzesCompleted: 0,
        learningTimeMinutes: 0,
        subjectsAccessed: 0,
        currentMonthQuizzes: 0
    });

    // Initialize subscription when user logs in
    useEffect(() => {
        if (user) {
            // Check if user already has subscription data
            if (user.subscription) {
                setSubscription(user.subscription);
                setBillingHistory(generateBillingHistory(user.subscription));
            } else {
                // Initialize with free plan for new users
                const freeSubscription = {
                    userId: user.id,
                    plan: SUBSCRIPTION_TIERS.FREE,
                    status: SUBSCRIPTION_STATUS.ACTIVE,
                    billingCycle: BILLING_CYCLES.MONTHLY,
                    price: 0,
                    currency: 'INR',
                    startDate: new Date().toISOString(),
                    nextBillingDate: null,
                    trialEndsAt: null,
                    isTrialActive: false,
                    autoRenew: true,
                    paymentMethod: null,
                    features: PRICING_PLANS[SUBSCRIPTION_TIERS.FREE].features.map(f => f.id)
                };

                setSubscription(freeSubscription);
                updateUser({ subscription: freeSubscription });
            }
        }
    }, [user]);

    // Subscribe to a plan
    const subscribeToPlan = async (planTier, billingCycle = BILLING_CYCLES.MONTHLY) => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        const plan = PRICING_PLANS[planTier];
        const startDate = new Date().toISOString();
        const price = billingCycle === BILLING_CYCLES.MONTHLY ? plan.monthlyPrice : plan.yearlyPrice;

        // Determine if trial should be activated
        const shouldStartTrial = plan.trialDays > 0 && subscription.plan === SUBSCRIPTION_TIERS.FREE;

        const newSubscription = {
            userId: user.id,
            plan: planTier,
            status: shouldStartTrial ? SUBSCRIPTION_STATUS.TRIAL : SUBSCRIPTION_STATUS.ACTIVE,
            billingCycle: billingCycle,
            price: price,
            currency: 'INR',
            startDate: startDate,
            nextBillingDate: calculateNextBillingDate(startDate, billingCycle),
            trialEndsAt: shouldStartTrial ? calculateTrialEndDate(startDate, plan.trialDays) : null,
            isTrialActive: shouldStartTrial,
            autoRenew: true,
            paymentMethod: {
                type: 'card',
                last4: '4242',
                brand: 'Visa',
                expiryMonth: 12,
                expiryYear: 2025
            },
            features: plan.features.map(f => f.id)
        };

        // If Family plan, include Premium features too
        if (planTier === SUBSCRIPTION_TIERS.FAMILY) {
            const premiumFeatures = PRICING_PLANS[SUBSCRIPTION_TIERS.PREMIUM].features.map(f => f.id);
            newSubscription.features = [...new Set([...newSubscription.features, ...premiumFeatures])];
        }

        setSubscription(newSubscription);
        updateUser({ subscription: newSubscription });

        // Generate billing history
        setBillingHistory(generateBillingHistory(newSubscription));

        return { success: true, subscription: newSubscription };
    };

    // Cancel subscription
    const cancelSubscription = async (reason = '') => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const updatedSubscription = {
            ...subscription,
            status: SUBSCRIPTION_STATUS.CANCELLED,
            autoRenew: false,
            cancellationReason: reason,
            cancelledAt: new Date().toISOString()
        };

        setSubscription(updatedSubscription);
        updateUser({ subscription: updatedSubscription });

        return { success: true };
    };

    // Upgrade plan
    const upgradePlan = async (newPlanTier, billingCycle) => {
        return await subscribeToPlan(newPlanTier, billingCycle);
    };

    // Downgrade plan
    const downgradePlan = async (newPlanTier) => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Downgrade takes effect at end of billing period
        const updatedSubscription = {
            ...subscription,
            pendingDowngrade: newPlanTier,
            downgradeEffectiveDate: subscription.nextBillingDate
        };

        setSubscription(updatedSubscription);
        updateUser({ subscription: updatedSubscription });

        return { success: true };
    };

    // Reactivate cancelled subscription
    const reactivateSubscription = async () => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const updatedSubscription = {
            ...subscription,
            status: SUBSCRIPTION_STATUS.ACTIVE,
            autoRenew: true,
            cancellationReason: null,
            cancelledAt: null
        };

        setSubscription(updatedSubscription);
        updateUser({ subscription: updatedSubscription });

        return { success: true };
    };

    // Check if user has access to a specific feature
    const checkFeatureAccess = (featureId) => {
        if (!subscription) return false;

        // Check if feature is in user's subscription features
        return subscription.features.includes(featureId);
    };

    // Get required plan for a feature
    const getRequiredPlan = (featureId) => {
        // Check each plan to find minimum tier that includes feature
        if (isPlanFeatureIncluded(SUBSCRIPTION_TIERS.FREE, featureId)) {
            return SUBSCRIPTION_TIERS.FREE;
        }
        if (isPlanFeatureIncluded(SUBSCRIPTION_TIERS.PREMIUM, featureId)) {
            return SUBSCRIPTION_TIERS.PREMIUM;
        }
        if (isPlanFeatureIncluded(SUBSCRIPTION_TIERS.FAMILY, featureId)) {
            return SUBSCRIPTION_TIERS.FAMILY;
        }
        return null;
    };

    // Update usage statistics
    const updateUsageStats = (stats) => {
        setUsageStats(prev => ({
            ...prev,
            ...stats
        }));
    };

    // Increment quiz count (for daily limit tracking)
    const incrementQuizCount = () => {
        setUsageStats(prev => ({
            ...prev,
            currentMonthQuizzes: prev.currentMonthQuizzes + 1,
            quizzesCompleted: prev.quizzesCompleted + 1
        }));
    };

    // Check if user has reached daily quiz limit (for free users)
    const hasReachedQuizLimit = () => {
        if (subscription?.plan !== SUBSCRIPTION_TIERS.FREE) {
            return false; // Premium and Family have unlimited quizzes
        }

        // Free users limited to 5 quizzes per day
        // For simplicity, we'll track monthly count here
        // In production, you'd track daily count with date reset
        return usageStats.currentMonthQuizzes >= 5;
    };

    // Get current plan details
    const getCurrentPlanDetails = () => {
        if (!subscription) return null;
        return PRICING_PLANS[subscription.plan];
    };

    // Check if subscription is active
    const isSubscriptionActive = () => {
        if (!subscription) return false;
        return subscription.status === SUBSCRIPTION_STATUS.ACTIVE ||
            subscription.status === SUBSCRIPTION_STATUS.TRIAL;
    };

    // Get trial info
    const getTrialInfo = () => {
        if (!subscription || !subscription.trialEndsAt) {
            return { isActive: false, daysRemaining: 0 };
        }

        return {
            isActive: isTrialActive(subscription),
            daysRemaining: getTrialDaysRemaining(subscription.trialEndsAt),
            endsAt: subscription.trialEndsAt
        };
    };

    const value = {
        // State
        subscription,
        billingHistory,
        usageStats,

        // Actions
        subscribeToPlan,
        cancelSubscription,
        upgradePlan,
        downgradePlan,
        reactivateSubscription,
        updateUsageStats,
        incrementQuizCount,

        // Helpers
        checkFeatureAccess,
        getRequiredPlan,
        getCurrentPlanDetails,
        isSubscriptionActive,
        hasReachedQuizLimit,
        getTrialInfo,

        // Constants
        SUBSCRIPTION_TIERS,
        BILLING_CYCLES,
        SUBSCRIPTION_STATUS,
        FEATURES
    };

    return (
        <SubscriptionContext.Provider value={value}>
            {children}
        </SubscriptionContext.Provider>
    );
};
