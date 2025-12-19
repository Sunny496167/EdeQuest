import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGamification } from '../../context/GamificationContext';
import { useAuth } from '../../context/AuthContext';
import StarsDisplay from '../ui/StarsDisplay';
import avatars from '../../data/common/avatars';

function Navbar() {
    const { stars, isDailyGoalCompleted } = useGamification();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const dailyGoalDone = isDailyGoalCompleted();
    const [showUserMenu, setShowUserMenu] = useState(false);

    // Scroll to top when navigating
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            logout();
            navigate('/login');
        }
    };

    // Get user's avatar emoji
    const userAvatar = avatars.find(a => a.id === user?.avatar);

    return (
        <nav className="bg-white shadow-md rounded-2xl p-4 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo/Brand */}
                <div className="flex items-center gap-2">
                    <span className="text-3xl">🎒</span>
                    <h1 className="text-2xl font-bold text-violet-600">EduQuest</h1>
                </div>

                {/* Navigation Items */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    {/* Home */}
                    <NavLink
                        to="/"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-violet-600 text-white scale-105'
                                : 'text-gray-700 hover:text-violet-600 hover:scale-105'
                            }`
                        }
                    >
                        <span>🏠</span>
                        <span>Home</span>
                    </NavLink>

                    {/* Separator */}
                    <div className="hidden md:block h-8 w-px bg-gray-300"></div>

                    {/* Mathematics Category */}
                    <NavLink
                        to="/mathematics"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-violet-600 text-white scale-105'
                                : 'text-gray-700 hover:text-violet-600 hover:scale-105'
                            }`
                        }
                    >
                        <span>📐</span>
                        <span>Mathematics</span>
                    </NavLink>

                    {/* Science Category */}
                    <NavLink
                        to="/science-category"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-violet-600 text-white scale-105'
                                : 'text-gray-700 hover:text-violet-600 hover:scale-105'
                            }`
                        }
                    >
                        <span>🔬</span>
                        <span>Science</span>
                    </NavLink>

                    {/* Social Science Category */}
                    <NavLink
                        to="/social-science"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-violet-600 text-white scale-105'
                                : 'text-gray-700 hover:text-violet-600 hover:scale-105'
                            }`
                        }
                    >
                        <span>🌍</span>
                        <span>Social Science</span>
                    </NavLink>

                    {/* Languages Category */}
                    <NavLink
                        to="/languages"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-violet-600 text-white scale-105'
                                : 'text-gray-700 hover:text-violet-600 hover:scale-105'
                            }`
                        }
                    >
                        <span>📚</span>
                        <span>Languages</span>
                    </NavLink>

                    {/* Life & Values Category */}
                    <NavLink
                        to="/life-values"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-violet-600 text-white scale-105'
                                : 'text-gray-700 hover:text-violet-600 hover:scale-105'
                            }`
                        }
                    >
                        <span>🌟</span>
                        <span>Life & Values</span>
                    </NavLink>

                    {/* Separator */}
                    <div className="hidden md:block h-8 w-px bg-gray-300"></div>

                    {/* Progress & Rewards */}
                    <NavLink
                        to="/progress"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-violet-600 text-white scale-105'
                                : 'text-gray-700 hover:text-violet-600 hover:scale-105'
                            }`
                        }
                    >
                        <span>🎯</span>
                        <span>Progress</span>
                    </NavLink>

                    <NavLink
                        to="/rewards"
                        onClick={handleClick}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                ? 'bg-violet-600 text-white scale-105'
                                : 'text-gray-700 hover:text-violet-600 hover:scale-105'
                            }`
                        }
                    >
                        <span>🎁</span>
                        <span>Rewards</span>
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

                    {/* Separator */}
                    <div className="hidden md:block h-8 w-px bg-gray-300"></div>

                    {/* User Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-violet-50 border-2 border-violet-200"
                        >
                            <span className="text-2xl">{userAvatar?.emoji || '😊'}</span>
                            <span className="text-gray-700">{user?.name || 'User'}</span>
                            <span className="text-gray-500">{showUserMenu ? '▲' : '▼'}</span>
                        </button>

                        {/* Dropdown Menu */}
                        {showUserMenu && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border-2 border-gray-200 z-50">
                                <NavLink
                                    to="/settings"
                                    onClick={() => {
                                        handleClick();
                                        setShowUserMenu(false);
                                    }}
                                    className="flex items-center gap-2 px-4 py-3 hover:bg-violet-50 transition-colors rounded-t-lg"
                                >
                                    <span>⚙️</span>
                                    <span className="font-semibold text-gray-700">Settings</span>
                                </NavLink>

                                {user?.role === 'parent' && (
                                    <NavLink
                                        to="/parent"
                                        onClick={() => {
                                            handleClick();
                                            setShowUserMenu(false);
                                        }}
                                        className="flex items-center gap-2 px-4 py-3 hover:bg-violet-50 transition-colors"
                                    >
                                        <span>👨‍👩‍👧</span>
                                        <span className="font-semibold text-gray-700">Parent Dashboard</span>
                                    </NavLink>
                                )}

                                <button
                                    onClick={() => {
                                        setShowUserMenu(false);
                                        handleLogout();
                                    }}
                                    className="w-full flex items-center gap-2 px-4 py-3 hover:bg-red-50 transition-colors rounded-b-lg text-left"
                                >
                                    <span>🚪</span>
                                    <span className="font-semibold text-red-600">Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

