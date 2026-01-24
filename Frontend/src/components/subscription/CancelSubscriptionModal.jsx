import { X, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

/**
 * CancelSubscriptionModal Component
 * Confirmation modal for subscription cancellation with retention offer
 */
const CancelSubscriptionModal = ({ isOpen, onClose, onConfirm, currentPlan }) => {
    const [reason, setReason] = useState('');
    const [showRetentionOffer, setShowRetentionOffer] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);

    if (!isOpen) return null;

    const handleCancel = async () => {
        setIsProcessing(true);
        await onConfirm(reason);
        setIsProcessing(false);
        onClose();
    };

    const handleAcceptOffer = () => {
        // Close modal without cancelling
        onClose();
    };

    const cancellationReasons = [
        'Too expensive',
        'Not using it enough',
        'Missing features I need',
        'Found a better alternative',
        'Technical issues',
        'Other'
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slideUp">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                            <AlertTriangle className="w-6 h-6 text-red-600" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Cancel Subscription</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {showRetentionOffer ? (
                        // Retention Offer
                        <div className="space-y-4">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 text-center">
                                <h3 className="text-2xl font-bold mb-2">Wait! Special Offer</h3>
                                <p className="text-lg mb-4">Get 20% off your next billing cycle if you stay!</p>
                                <div className="text-3xl font-bold mb-2">₹{Math.round(currentPlan?.price * 0.8)}</div>
                                <p className="text-sm opacity-90">
                                    Instead of ₹{currentPlan?.price} for your next billing cycle
                                </p>
                            </div>

                            <p className="text-gray-700 text-center">
                                We'd love to keep you as a member. This exclusive offer is only available right now!
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleAcceptOffer}
                                    className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
                                >
                                    Accept Offer & Stay
                                </button>
                                <button
                                    onClick={() => setShowRetentionOffer(false)}
                                    className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                                >
                                    No Thanks
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Cancellation Form
                        <div className="space-y-4">
                            <p className="text-gray-700">
                                We're sorry to see you go. Your subscription will remain active until the end of your
                                current billing period.
                            </p>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Help us improve - Why are you cancelling?
                                </label>
                                <select
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Select a reason...</option>
                                    {cancellationReasons.map((r) => (
                                        <option key={r} value={r}>
                                            {r}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <h4 className="font-semibold text-yellow-900 mb-2">What you'll lose:</h4>
                                <ul className="text-sm text-yellow-800 space-y-1">
                                    <li>• Unlimited quiz access</li>
                                    <li>• All subjects unlocked</li>
                                    <li>• Advanced analytics</li>
                                    <li>• Personalized learning paths</li>
                                    <li>• Ad-free experience</li>
                                </ul>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={onClose}
                                    className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                                >
                                    Keep Subscription
                                </button>
                                <button
                                    onClick={handleCancel}
                                    disabled={isProcessing}
                                    className="flex-1 py-3 px-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isProcessing ? 'Processing...' : 'Confirm Cancellation'}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CancelSubscriptionModal;
