/**
 * SubscriptionBadge Component
 * Shows current subscription plan as a badge
 */
const SubscriptionBadge = ({ plan, status, size = 'md', showStatus = false }) => {
    const getBadgeStyles = () => {
        switch (plan) {
            case 'premium':
                return 'bg-gradient-to-r from-blue-500 to-purple-600 text-white';
            case 'family':
                return 'bg-gradient-to-r from-green-500 to-teal-600 text-white';
            case 'free':
            default:
                return 'bg-gray-200 text-gray-700';
        }
    };

    const getStatusStyles = () => {
        switch (status) {
            case 'trial':
                return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'active':
                return 'bg-green-100 text-green-800 border-green-300';
            case 'cancelled':
                return 'bg-red-100 text-red-800 border-red-300';
            case 'expired':
                return 'bg-gray-100 text-gray-800 border-gray-300';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    const getSizeClasses = () => {
        switch (size) {
            case 'sm':
                return 'px-2 py-0.5 text-xs';
            case 'lg':
                return 'px-4 py-2 text-base';
            case 'md':
            default:
                return 'px-3 py-1 text-sm';
        }
    };

    const planName = plan.charAt(0).toUpperCase() + plan.slice(1);
    const statusName = status ? status.charAt(0).toUpperCase() + status.slice(1) : '';

    return (
        <div className="flex items-center gap-2">
            <span
                className={`inline-flex items-center rounded-full font-semibold ${getBadgeStyles()} ${getSizeClasses()}`}
            >
                {planName}
            </span>
            {showStatus && status && (
                <span
                    className={`inline-flex items-center rounded-full font-medium border ${getStatusStyles()} ${getSizeClasses()}`}
                >
                    {statusName}
                </span>
            )}
        </div>
    );
};

export default SubscriptionBadge;
