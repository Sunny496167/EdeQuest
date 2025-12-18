// Enhanced Lottie Loading Component with actual animation file
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/animations/loading.json';

function LottieLoading({ message = "Loading..." }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
            {/* Lottie Animation */}
            <div className="w-64 h-64">
                <Lottie
                    animationData={loadingAnimation}
                    loop={true}
                    autoplay={true}
                />
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

export default LottieLoading;
