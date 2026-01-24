// Animated Badge Component
// Shows badges with celebration animations

import { motion } from 'framer-motion';

function AnimatedBadge({ badge, index }) {
    return (
        <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative group"
        >
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover-lift">
                {/* Badge Emoji with Glow */}
                <div className="text-6xl mb-3 text-center animate-float group-hover:animate-wiggle">
                    {badge.emoji}
                </div>

                {/* Sparkle Effect */}
                <div className="absolute top-2 right-2 text-2xl opacity-0 group-hover:opacity-100 animate-spin-slow">
                    ✨
                </div>

                {/* Badge Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    {badge.name}
                </h3>

                {/* Badge Description */}
                <p className="text-sm text-gray-600 text-center">
                    {badge.description}
                </p>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
        </motion.div>
    );
}

export default AnimatedBadge;
