import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import FeatureList from './FeatureList';

/**
 * PricingCard Component
 * Reusable pricing card for subscription plans
 */
const PricingCard = ({
    plan,
    billingCycle = 'monthly',
    isCurrentPlan = false,
    onSelectPlan,
    featured = false
}) => {
    const navigate = useNavigate();

    const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    const monthlyEquivalent = billingCycle === 'yearly' ? Math.round(price / 12) : price;

    const handleSelectPlan = () => {
        if (onSelectPlan) {
            onSelectPlan(plan.id, billingCycle);
        } else {
            navigate('/pricing');
        }
    };

    const getGradientClass = () => {
        if (featured) {
            return plan.gradient;
        }
        return 'from-white to-gray-50';
    };

    const getButtonClass = () => {
        if (isCurrentPlan) {
            return 'bg-gray-300 text-gray-700 cursor-not-allowed';
        }
        if (plan.id === 'free') {
            return 'bg-gray-800 hover:bg-gray-900 text-white';
        }
        if (plan.id === 'premium') {
            return 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white';
        }
        return 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white';
    };

    return (
        <div
            className={`relative rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${featured ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
                }`}
        >
            {/* Badge */}
            {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        {plan.badge}
                    </span>
                </div>
            )}

            {/* Card Content */}
            <div
                className={`p-8 rounded-2xl bg-gradient-to-br ${getGradientClass()} ${featured ? 'text-white' : 'text-gray-900'
                    }`}
            >
                {/* Plan Name */}
                <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>
                        {plan.name}
                    </h3>
                    <p className={`text-sm ${featured ? 'text-white/90' : 'text-gray-600'}`}>
                        {plan.tagline}
                    </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                        <span className={`text-5xl font-bold ${featured ? 'text-white' : 'text-gray-900'}`}>
                            ₹{monthlyEquivalent}
                        </span>
                        <span className={`text-lg ${featured ? 'text-white/80' : 'text-gray-600'}`}>
                            /month
                        </span>
                    </div>
                    {billingCycle === 'yearly' && price > 0 && (
                        <p className={`text-sm mt-2 ${featured ? 'text-white/80' : 'text-gray-600'}`}>
                            Billed ₹{price} annually
                        </p>
                    )}
                    {isCurrentPlan && (
                        <span className="inline-block mt-3 px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                            Current Plan
                        </span>
                    )}
                </div>

                {/* CTA Button */}
                <button
                    onClick={handleSelectPlan}
                    disabled={isCurrentPlan}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 mb-8 ${getButtonClass()}`}
                >
                    {isCurrentPlan ? 'Current Plan' : plan.cta}
                    {!isCurrentPlan && <ArrowRight className="w-5 h-5" />}
                </button>

                {/* Features */}
                <div className={featured ? 'text-white' : ''}>
                    <FeatureList features={plan.features} />
                </div>

                {/* Locked Features (for Free plan) */}
                {plan.lockedFeatures && plan.lockedFeatures.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-300">
                        <p className="text-sm font-semibold text-gray-600 mb-3">Unlock with Premium:</p>
                        <FeatureList features={plan.lockedFeatures} locked={true} />
                    </div>
                )}

                {/* Premium Features Included (for Family plan) */}
                {plan.includesPremium && (
                    <div className="mt-6 pt-6 border-t border-white/20">
                        <p className={`text-sm font-semibold mb-2 ${featured ? 'text-white' : 'text-gray-700'}`}>
                            ✅ Everything in Premium, plus:
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PricingCard;
