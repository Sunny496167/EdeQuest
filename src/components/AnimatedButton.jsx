// Animated Button Component
// Reusable button with hover animations and effects

function AnimatedButton({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    icon,
    disabled = false
}) {
    const baseClasses = "font-bold rounded-xl transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";

    const variantClasses = {
        primary: "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-2xl hover-lift",
        secondary: "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-2xl hover-lift",
        success: "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-2xl hover-lift",
        outline: "border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white hover-lift"
    };

    const sizeClasses = {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg"
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
        >
            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

            {/* Button Content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {icon && <span className="text-xl group-hover:animate-wiggle">{icon}</span>}
                {children}
            </span>

            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-white group-hover:animate-ping"></div>
        </button>
    );
}

export default AnimatedButton;
