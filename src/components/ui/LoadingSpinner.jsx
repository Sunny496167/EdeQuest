function LoadingSpinner({ size = 'medium', color = 'violet' }) {
    const sizeClasses = {
        small: 'w-6 h-6',
        medium: 'w-12 h-12',
        large: 'w-16 h-16'
    };

    const colorClasses = {
        violet: 'border-violet-600',
        white: 'border-white',
        purple: 'border-purple-600'
    };

    return (
        <div className="flex items-center justify-center">
            <div className={`${sizeClasses[size]} ${colorClasses[color]} border-4 border-t-transparent rounded-full animate-spin`}></div>
        </div>
    );
}

export default LoadingSpinner;
