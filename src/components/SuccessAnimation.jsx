// Animated Success Component using CSS animations
// This component shows a celebration animation when users complete quizzes

import { useEffect, useState } from 'react';

function SuccessAnimation({ onComplete }) {
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
            <div className="bg-white rounded-3xl p-12 text-center shadow-2xl animate-bounceIn">
                {/* Animated Stars */}
                <div className="relative mb-6">
                    <div className="text-8xl animate-spin-slow">⭐</div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce delay-100">
                        ✨
                    </div>
                    <div className="absolute top-0 right-0 text-5xl animate-ping delay-200">
                        🌟
                    </div>
                </div>

                {/* Success Message */}
                <h2 className="text-4xl font-bold text-violet-600 mb-4 animate-slideUp">
                    Amazing Work! 🎉
                </h2>
                <p className="text-xl text-gray-700 animate-slideUp delay-100">
                    You're doing great! Keep learning!
                </p>

                {/* Confetti Effect */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
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
                            {['🎊', '🎉', '⭐', '✨', '🌟'][Math.floor(Math.random() * 5)]}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SuccessAnimation;
