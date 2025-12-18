// Enhanced Lottie Success Component with actual animation file
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import successAnimation from '../../assets/animations/success.json';

function LottieSuccess({ onComplete }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            if (onComplete) onComplete();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
            <div className="bg-white rounded-3xl p-12 text-center shadow-2xl animate-bounceIn max-w-md relative">
                {/* Lottie Animation */}
                <div className="w-64 h-64 mx-auto">
                    <Lottie
                        animationData={successAnimation}
                        loop={true}
                        autoplay={true}
                    />
                </div>

                {/* Success Message */}
                <h2 className="text-4xl font-bold text-violet-600 mb-4 animate-slideUp">
                    Amazing Work! 🎉
                </h2>
                <p className="text-xl text-gray-700 animate-slideUp delay-100">
                    You're doing great! Keep learning!
                </p>

                {/* Confetti Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-confetti"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `-10%`,
                                animationDelay: `${Math.random() * 0.5}s`,
                                fontSize: `${Math.random() * 20 + 10}px`
                            }}
                        >
                            {['🎊', '🎉', '⭐', '✨', '🌟', '🎈'][Math.floor(Math.random() * 6)]}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LottieSuccess;
