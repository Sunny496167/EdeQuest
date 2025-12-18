// Loading Animation Component
// Shows a fun loading animation while content loads

function LoadingAnimation({ message = "Loading..." }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
            <div className="relative">
                {/* Animated Book Icon */}
                <div className="text-8xl animate-bounce">
                    📚
                </div>

                {/* Rotating Stars */}
                <div className="absolute -top-4 -right-4 text-4xl animate-spin-slow">
                    ⭐
                </div>
                <div className="absolute -bottom-4 -left-4 text-3xl animate-spin-reverse">
                    ✨
                </div>
            </div>

            {/* Loading Text */}
            <p className="mt-8 text-2xl font-bold text-violet-600 animate-pulse">
                {message}
            </p>

            {/* Loading Dots */}
            <div className="flex gap-2 mt-4">
                <div className="w-3 h-3 bg-violet-600 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-200"></div>
            </div>
        </div>
    );
}

export default LoadingAnimation;
