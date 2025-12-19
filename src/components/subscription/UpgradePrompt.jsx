import { X, Crown, Sparkles, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * UpgradePrompt Component
 * Modal shown when user tries to access premium features
 */
const UpgradePrompt = ({ isOpen, onClose, featureName, featureDescription, requiredPlan = 'premium' }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleUpgrade = () => {
        navigate('/pricing');
        onClose();
    };

    const handleStartTrial = () => {
        navigate('/pricing');
        onClose();
    };

    const premiumBenefits = [
        'Unlimited quiz access',
        'All subjects unlocked',
        'Advanced progress analytics',
        'Personalized learning paths',
        'Ad-free experience',
        'Downloadable certificates'
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Header with Gradient */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-t-2xl text-center relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                            <Crown className="w-8 h-8 text-yellow-300" />
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Unlock This Feature</h2>
                        <p className="text-lg opacity-90">Upgrade to Premium to access</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    {/* Feature Info */}
                    {featureName && (
                        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <h3 className="font-bold text-blue-900 mb-1 flex items-center gap-2">
                                <Sparkles className="w-5 h-5" />
                                {featureName}
                            </h3>
                            {featureDescription && (
                                <p className="text-sm text-blue-800">{featureDescription}</p>
                            )}
                        </div>
                    )}

                    {/* Premium Benefits */}
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-4">
                            Get Premium and unlock:
                        </h3>
                        <ul className="space-y-3">
                            {premiumBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pricing Preview */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                            <span className="text-3xl font-bold text-gray-900">₹299</span>
                            <span className="text-gray-600">/month</span>
                        </div>
                        <p className="text-center text-sm text-gray-600">
                            or ₹2,999/year (save 17%)
                        </p>
                        <div className="mt-3 text-center">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                                <Sparkles className="w-4 h-4" />
                                14-Day Free Trial
                            </span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                        <button
                            onClick={handleStartTrial}
                            className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            Start 14-Day Free Trial
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleUpgrade}
                            className="w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                        >
                            View All Plans
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full py-2 text-gray-500 hover:text-gray-700 transition-colors text-sm"
                        >
                            Maybe Later
                        </button>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-500">
                            ✓ No credit card required • ✓ Cancel anytime • ✓ 30-day money-back guarantee
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpgradePrompt;
