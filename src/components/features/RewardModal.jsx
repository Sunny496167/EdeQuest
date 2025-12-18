import { motion, AnimatePresence } from 'framer-motion';
import avatarsData from '../../data/common/avatars';

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function RewardModal({ reward, onClose }) {
    if (!reward) return null;

    const avatar = avatarsData.find(a => a.id === reward.avatarId);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                    exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Celebration Header */}
                    <motion.div
                        initial={prefersReducedMotion ? {} : { scale: 0 }}
                        animate={prefersReducedMotion ? {} : { scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4, type: 'spring', stiffness: 200 }}
                        className="text-center mb-6"
                    >
                        <div className="text-6xl mb-4">🎉</div>
                        <h2 className="text-3xl font-bold text-violet-600 mb-2">
                            Congratulations!
                        </h2>
                        <p className="text-xl text-gray-700 font-semibold">
                            {reward.message}
                        </p>
                    </motion.div>

                    {/* Reward Display */}
                    {avatar && (
                        <motion.div
                            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 mb-6 text-center"
                        >
                            <div className="text-8xl mb-3">{avatar.emoji}</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">
                                {avatar.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                                New avatar unlocked!
                            </p>
                        </motion.div>
                    )}

                    {/* Encouragement Message */}
                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0 }}
                        animate={prefersReducedMotion ? {} : { opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className="bg-yellow-100 rounded-xl p-4 mb-6 text-center"
                    >
                        <p className="text-lg font-semibold text-gray-700">
                            Keep up the amazing work! 🌟
                        </p>
                    </motion.div>

                    {/* Close Button */}
                    <motion.button
                        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                        whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                        onClick={onClose}
                        className="w-full bg-violet-600 text-white px-6 py-4 rounded-xl text-xl font-bold
                     hover:bg-purple-700 transition-colors duration-200 shadow-lg"
                    >
                        Awesome! ✨
                    </motion.button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default RewardModal;
