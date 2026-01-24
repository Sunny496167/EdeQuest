import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSubscription } from '../../context/SubscriptionContext';
import { PRICING_PLANS, SUBSCRIPTION_TIERS } from '../../data/subscriptionPlans';
import SubscriptionBadge from '../../components/subscription/SubscriptionBadge';
import CancelSubscriptionModal from '../../components/subscription/CancelSubscriptionModal';
import {
    CreditCard,
    Calendar,
    Download,
    TrendingUp,
    Clock,
    BookOpen,
    Award,
    ArrowRight,
    Settings as SettingsIcon
} from 'lucide-react';

/**
 * SubscriptionManagement Page
 * Manage current subscription, view usage stats, and billing history
 */
const SubscriptionManagement = () => {
    const navigate = useNavigate();
    const {
        subscription,
        billingHistory,
        usageStats,
        cancelSubscription,
        getCurrentPlanDetails
    } = useSubscription();

    const [showCancelModal, setShowCancelModal] = useState(false);

    const currentPlan = getCurrentPlanDetails();
    const isFreeUser = subscription?.plan === SUBSCRIPTION_TIERS.FREE;

    const handleUpgrade = () => {
        navigate('/pricing');
    };

    const handleChangePlan = () => {
        navigate('/pricing');
    };

    const handleCancelSubscription = async (reason) => {
        await cancelSubscription(reason);
        setShowCancelModal(false);
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatCurrency = (amount) => {
        return `₹${amount.toLocaleString('en-IN')}`;
    };

    // Free User View
    if (isFreeUser) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Current Plan Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Subscription</h1>
                                <SubscriptionBadge plan={subscription.plan} status={subscription.status} />
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 mb-6">
                            <h3 className="font-semibold text-gray-900 mb-2">Free Plan</h3>
                            <p className="text-gray-600 mb-4">
                                You're currently on the Free plan with limited access to features.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>✓ Access to 3 subjects</li>
                                <li>✓ 5 quizzes per day</li>
                                <li>✓ Basic progress tracking</li>
                            </ul>
                        </div>

                        <button
                            onClick={handleUpgrade}
                            className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            Upgrade to Premium
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Feature Preview */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
                        <h2 className="text-2xl font-bold mb-4">Unlock Premium Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Unlimited Quizzes</h3>
                                    <p className="text-sm opacity-90">Practice as much as you want</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Advanced Analytics</h3>
                                    <p className="text-sm opacity-90">Detailed progress insights</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">All Subjects</h3>
                                    <p className="text-sm opacity-90">Access every subject</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <SettingsIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Personalized Learning</h3>
                                    <p className="text-sm opacity-90">AI-powered recommendations</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-lg font-semibold">
                            Starting at just ₹299/month • 14-day free trial
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Premium/Family User View
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Subscription Management</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Plan Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Current Plan Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Current Plan</h2>
                                    <SubscriptionBadge
                                        plan={subscription.plan}
                                        status={subscription.status}
                                        showStatus={true}
                                    />
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-gray-900">
                                        {formatCurrency(subscription.price)}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        per {subscription.billingCycle === 'monthly' ? 'month' : 'year'}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                    <Calendar className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Next Billing Date</p>
                                        <p className="font-semibold text-gray-900">
                                            {formatDate(subscription.nextBillingDate)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                    <CreditCard className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Payment Method</p>
                                        <p className="font-semibold text-gray-900">
                                            {subscription.paymentMethod?.brand} •••• {subscription.paymentMethod?.last4}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleChangePlan}
                                    className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                                >
                                    Change Plan
                                </button>
                                <button
                                    onClick={() => setShowCancelModal(true)}
                                    className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                                >
                                    Cancel Subscription
                                </button>
                            </div>
                        </div>

                        {/* Usage Statistics */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Statistics</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-900">
                                        {usageStats.quizzesCompleted}
                                    </div>
                                    <div className="text-sm text-gray-600">Quizzes Completed</div>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-lg">
                                    <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-900">
                                        {usageStats.learningTimeMinutes}
                                    </div>
                                    <div className="text-sm text-gray-600">Minutes Learned</div>
                                </div>
                                <div className="text-center p-4 bg-green-50 rounded-lg">
                                    <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-900">
                                        {usageStats.subjectsAccessed}
                                    </div>
                                    <div className="text-sm text-gray-600">Subjects Accessed</div>
                                </div>
                                <div className="text-center p-4 bg-orange-50 rounded-lg">
                                    <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-900">
                                        {usageStats.currentMonthQuizzes}
                                    </div>
                                    <div className="text-sm text-gray-600">This Month</div>
                                </div>
                            </div>
                        </div>

                        {/* Billing History */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing History</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                                                Date
                                            </th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                                                Plan
                                            </th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                                                Amount
                                            </th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                                                Status
                                            </th>
                                            <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                                                Invoice
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {billingHistory.map((invoice) => (
                                            <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 text-sm text-gray-900">
                                                    {formatDate(invoice.date)}
                                                </td>
                                                <td className="py-3 px-4 text-sm text-gray-900 capitalize">
                                                    {invoice.plan}
                                                </td>
                                                <td className="py-3 px-4 text-sm text-gray-900">
                                                    {formatCurrency(invoice.amount)}
                                                </td>
                                                <td className="py-3 px-4">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        {invoice.status}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 text-right">
                                                    <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 ml-auto">
                                                        <Download className="w-4 h-4" />
                                                        <span className="text-sm">Download</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Quick Actions */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <button
                                    onClick={handleChangePlan}
                                    className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all text-left"
                                >
                                    Upgrade to Family Plan
                                </button>
                                <button className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all text-left">
                                    Update Payment Method
                                </button>
                                <button className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all text-left">
                                    View All Invoices
                                </button>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl shadow-lg p-6 text-white">
                            <h3 className="font-bold mb-2">Refer a Friend</h3>
                            <p className="text-sm opacity-90 mb-4">
                                Give ₹100, Get ₹100 when they subscribe
                            </p>
                            <button className="w-full py-2 px-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                                Get Referral Link
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cancel Subscription Modal */}
            <CancelSubscriptionModal
                isOpen={showCancelModal}
                onClose={() => setShowCancelModal(false)}
                onConfirm={handleCancelSubscription}
                currentPlan={currentPlan}
            />
        </div>
    );
};

export default SubscriptionManagement;
