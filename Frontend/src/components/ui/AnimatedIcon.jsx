// Animated Subject Icon Component
// Uses Lottie for interactive subject icons

import Lottie from 'lottie-react';
import { useState } from 'react';

// Simple icon animation configurations
const iconAnimations = {
    math: {
        loop: true,
        autoplay: false,
        animationData: {
            v: "5.7.4",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "Math Icon",
            layers: []
        }
    },
    science: {
        loop: true,
        autoplay: false,
        animationData: {
            v: "5.7.4",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "Science Icon",
            layers: []
        }
    }
};

function AnimatedIcon({ subject, emoji, size = 64 }) {
    const [isHovered, setIsHovered] = useState(false);

    // For now, use emoji with Lottie-style animations
    // In production, you would fetch actual Lottie files from LottieFiles.com
    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: size, height: size }}
        >
            <div
                className={`text-center transition-all duration-300 ${isHovered ? 'animate-wiggle scale-110' : 'animate-float'
                    }`}
                style={{ fontSize: size }}
            >
                {emoji}
            </div>

            {/* Sparkle effect on hover */}
            {isHovered && (
                <div className="absolute -top-2 -right-2 text-2xl animate-spin-slow">
                    ✨
                </div>
            )}
        </div>
    );
}

export default AnimatedIcon;
