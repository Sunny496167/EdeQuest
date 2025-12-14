import { NavLink } from 'react-router-dom';
import { useGamification } from '../context/GamificationContext';
import StarsDisplay from './StarsDisplay';

function Navbar() {
    const { stars, isDailyGoalCompleted } = useGamification();
    const dailyGoalDone = isDailyGoalCompleted();

    // Scroll to top when navigating
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                    <NavLink
                        to="/"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-primary text-white scale-105'
                                : 'text-gray-700 hover:text-primary hover:scale-105'
                            }`
                        }
                    >
                        <span>🏠</span>
                        <span>Home</span>
                    </NavLink>

                    <NavLink
                        to="/math"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-primary text-white scale-105'
                                : 'text-gray-700 hover:text-primary hover:scale-105'
                            }`
                        }
                    >
                        <span>📐</span>
                        <span>Math</span>
                    </NavLink>

                    <NavLink
                        to="/algebra"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-primary text-white scale-105'
                                : 'text-gray-700 hover:text-primary hover:scale-105'
                            }`
                        }
                    >
                        <span>🧮</span>
                        <span>Algebra</span>
                    </NavLink>

                    <NavLink
                        to="/science"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-primary text-white scale-105'
                                : 'text-gray-700 hover:text-primary hover:scale-105'
                            }`
                        }
                    >
                        <span>🔬</span>
                        <span>Science</span>
                    </NavLink>

                    <NavLink
                        to="/geography"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-primary text-white scale-105'
                                : 'text-gray-700 hover:text-primary hover:scale-105'
                            }`
                        }
                    >
                        <span>🌍</span>
                        <span>Geography</span>
                    </NavLink>

                    <NavLink
                        to="/history"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-primary text-white scale-105'
                                : 'text-gray-700 hover:text-primary hover:scale-105'
                            }`
                        }
                    >
                        <span>⏳</span>
                        <span>History</span>
                    </NavLink>

                    <NavLink
                        to="/progress"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-primary text-white scale-105'
                                : 'text-gray-700 hover:text-primary hover:scale-105'
                            }`
                        }
                    >
                        <span>🎯</span>
                        <span>Progress</span>
                    </NavLink>

                    {/* Stars Display */}
                    <StarsDisplay stars={stars} />

                    {/* Daily Goal Indicator */}
                    {dailyGoalDone && (
                        <div className="flex items-center gap-1 text-lg">
                            <span>🎯</span>
                            <span>✅</span>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
