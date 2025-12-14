import { useGamification } from '../context/GamificationContext';
import StarsDisplay from './StarsDisplay';
function Navbar() {
    const navItems = [
        { name: 'Home', emoji: '🏠' },
        { name: 'Math', emoji: '🔢' },
        { name: 'Science', emoji: '🔬' },
        { name: 'History', emoji: '📜' },
        { name: 'Geography', emoji: '🌍' },
    ];

    const { stars } = useGamification();

    return (
        <nav className="bg-white shadow-md rounded-2xl p-4 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo/Brand */}
                <div className="flex items-center gap-2">
                    <span className="text-3xl">🎒</span>
                    <h1 className="text-2xl font-bold text-primary">EduQuest</h1>
                </div>

                {/* Navigation Items */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    <a
                        href="#"
                        className="flex items-center gap-2 text-gray-700 hover:text-primary hover:scale-105 transition-all duration-200 font-semibold"
                    >
                        <span>🏠</span>
                        <span>Home</span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-gray-700 hover:text-primary hover:scale-105 transition-all duration-200 font-semibold"
                    >
                        <span>🔢</span>
                        <span>Math</span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-gray-700 hover:text-primary hover:scale-105 transition-all duration-200 font-semibold"
                    >
                        <span>🔬</span>
                        <span>Science</span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-gray-700 hover:text-primary hover:scale-105 transition-all duration-200 font-semibold"
                    >
                        <span>📜</span>
                        <span>History</span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-gray-700 hover:text-primary hover:scale-105 transition-all duration-200 font-semibold"
                    >
                        <span>🌍</span>
                        <span>Geography</span>
                    </a>

                    {/* Stars Display */}
                    <StarsDisplay stars={stars} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
