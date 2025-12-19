import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSubscription } from '../../context/SubscriptionContext';
import { Check, Download, Home, Sparkles, ArrowRight } from 'lucide-react';

/**
 * PaymentSuccess Page
 * Success page after subscription with confetti animation
 */
const PaymentSuccess = () => {
    const navigate = useNavigate();
    const { subscription, getCurrentPlanDetails } = useSubscription();
    const [showConfetti, setShowConfetti] = useState(true);

    const currentPlan = getCurrentPlanDetails();

    useEffect(() => {
        // Trigger confetti animation
        if (showConfetti) {
            createConfetti();
            const timer = setTimeout(() => setShowConfetti(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [showConfetti]);

    // Simple confetti effect using CSS animations
    const createConfetti = () => {
        const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];
        const confettiContainer = document.getElementById('confetti-container');

        if (!confettiContainer) return;

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confettiContainer.appendChild(confetti);
        }
    };

    const handleStartLearning = () => {
        navigate('/');
    };

    const handleExplorePremium = () => {
        navigate('/subscription');
    };

    const handleDownloadInvoice = () => {
        // Mock download
        alert('Invoice downloaded successfully!');
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const premiumFeatures = [
        'Unlimited quiz access',
        'All subjects unlocked',
        'Advanced progress analytics',
        'Personalized learning paths',
        'Ad-free experience',
        'Downloadable certificates',
        'Priority support',
        'Custom avatars',
        'Offline mode'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 py-12 px-4 relative overflow-hidden">
            {/* Confetti Container */}
            <div id="confetti-container" className="fixed inset-0 pointer-events-none z-50"></div>

            <div className="max-w-4xl mx-auto">
                {/* Success Animation */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6 animate-bounce">
                        <Check className="w-12 h-12 text-white" strokeWidth={3} />
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Welcome to {currentPlan?.name}! 🎉
                    </h1>
                    <p className="text-xl text-gray-600">
                        Your subscription is now active. Let's start your learning journey!
                    </p>
                </div>

                {/* Account Details Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Subscription Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Plan</p>
                            <p className="text-lg font-bold text-gray-900">{currentPlan?.name}</p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Billing Cycle</p>
                            <p className="text-lg font-bold text-gray-900 capitalize">
                                {subscription?.billingCycle}
                            </p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Amount</p>
                            <p className="text-lg font-bold text-gray-900">
                                ₹{subscription?.price?.toLocaleString('en-IN')}
                            </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Next Billing Date</p>
                            <p className="text-lg font-bold text-gray-900">
                                {formatDate(subscription?.nextBillingDate)}
                            </p>
                        </div>
                    </div>

                    {subscription?.status === 'trial' && (
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-5 h-5 text-yellow-600" />
                                <p className="font-semibold text-yellow-900">Free Trial Active</p>
                            </div>
                            <p className="text-sm text-yellow-800">
                                Your 14-day free trial has started. You won't be charged until{' '}
                                {formatDate(subscription?.trialEndsAt)}
                            </p>
                        </div>
                    )}

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">
                            📧 A confirmation email has been sent to your registered email address
                        </p>
                        <p className="text-sm text-gray-600">
                            💳 Payment method: {subscription?.paymentMethod?.brand} •••• {subscription?.paymentMethod?.last4}
                        </p>
                    </div>
                </div>

                {/* Unlocked Features */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white mb-8">
                    <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                        <Sparkles className="w-8 h-8" />
                        Features Unlocked
                    </h2>
                    <p className="text-lg opacity-90 mb-6">
                        You now have access to all premium features!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {premiumFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 bg-white/10 rounded-lg p-3 backdrop-blur-sm"
                            >
                                <Check className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <button
                        onClick={handleStartLearning}
                        className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all text-center group"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                            <Home className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Start Learning</h3>
                        <p className="text-sm text-gray-600">Go to dashboard</p>
                    </button>

                    <button
                        onClick={handleExplorePremium}
                        className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all text-center group"
                    >
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                            <Sparkles className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Explore Features</h3>
                        <p className="text-sm text-gray-600">See what's new</p>
                    </button>

                    <button
                        onClick={handleDownloadInvoice}
                        className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all text-center group"
                    >
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                            <Download className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Download Invoice</h3>
                        <p className="text-sm text-gray-600">Get receipt</p>
                    </button>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button
                        onClick={handleStartLearning}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                    >
                        Start Your Learning Journey
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Confetti CSS */}
            <style>{`
        .confetti {
          position: fixed;
          width: 10px;
          height: 10px;
          top: -10px;
          z-index: 9999;
          animation: confetti-fall linear forwards;
        }

        @keyframes confetti-fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
};

export default PaymentSuccess;
