import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGamification } from '../../context/GamificationContext';
import { useAuth } from '../../context/AuthContext';
import { useSubscription } from '../../context/SubscriptionContext';
import StarsDisplay from '../ui/StarsDisplay';
import SubscriptionBadge from '../subscription/SubscriptionBadge';
import avatars from '../../data/common/avatars';

function Navbar() {
    const { stars, isDailyGoalCompleted } = useGamification();
    const { user, logout } = useAuth();
    const { subscription, getTrialInfo } = useSubscription();
    const navigate = useNavigate();
    const dailyGoalDone = isDailyGoalCompleted();
    const trialInfo = getTrialInfo();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    // Scroll to top when navigating
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShowMobileMenu(false); // Close mobile menu on navigation
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
            <div className="flex items-center justify-between">
                {/* Logo/Brand */}
                <div className="flex items-center gap-2">
                    <span className="text-3xl">🎒</span>
                    <h1 className="text-2xl font-bold text-violet-600">EduQuest</h1>
                </div>

                {/* Hamburger Menu Button (Mobile) */}
                <button
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-violet-50 transition-colors"
                    aria-label="Toggle menu"
                >
                    <div className="flex flex-col gap-1.5">
                        <span className={`block w-6 h-0.5 bg-violet-600 transition-all duration-300 ${showMobileMenu ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-violet-600 transition-all duration-300 ${showMobileMenu ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-violet-600 transition-all duration-300 ${showMobileMenu ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-wrap items-center justify-center gap-4 md:gap-6">
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

                                <NavLink
                                    to="/subscription"
                                    onClick={() => {
                                        handleClick();
                                        setShowUserMenu(false);
                                    }}
                                    className="flex items-center gap-2 px-4 py-3 hover:bg-violet-50 transition-colors"
                                >
                                    <span>💎</span>
                                    <div className="flex-1">
                                        <span className="font-semibold text-gray-700">Subscription</span>
                                        {subscription && (
                                            <div className="mt-1">
                                                <SubscriptionBadge plan={subscription.plan} size="sm" />
                                            </div>
                                        )}
                                    </div>
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

            {/* Mobile Menu */}
            {showMobileMenu && (
                <div className="md:hidden mt-4 pt-4 border-t-2 border-gray-200 animate-fadeIn">
                    <div className="flex flex-col gap-2">
                        {/* User Info */}
                        <div className="flex items-center gap-3 px-3 py-2 bg-violet-50 rounded-lg mb-2">
                            <span className="text-3xl">{userAvatar?.emoji || '😊'}</span>
                            <div>
                                <p className="font-bold text-gray-800">{user?.name || 'User'}</p>
                                <p className="text-sm text-gray-600">{user?.email}</p>
                            </div>
                        </div>

                        {/* Stars and Daily Goal */}
                        <div className="flex items-center justify-between px-3 py-2 bg-yellow-50 rounded-lg mb-2">
                            <StarsDisplay stars={stars} />
                            {dailyGoalDone && (
                                <div className="flex items-center gap-1 text-lg">
                                    <span>🎯</span>
                                    <span>✅</span>
                                </div>
                            )}
                        </div>

                        {/* Navigation Links */}
                        <NavLink
                            to="/"
                            onClick={handleClick}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                    ? 'bg-violet-600 text-white'
                                    : 'text-gray-700 hover:bg-violet-50'
                                }`
                            }
                        >
                            <span>🏠</span>
                            <span>Home</span>
                        </NavLink>

                        <NavLink
                            to="/mathematics"
                            onClick={handleClick}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                    ? 'bg-violet-600 text-white'
                                    : 'text-gray-700 hover:bg-violet-50'
                                }`
                            }
                        >
                            <span>📐</span>
                            <span>Mathematics</span>
                        </NavLink>

                        <NavLink
                            to="/science-category"
                            onClick={handleClick}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                    ? 'bg-violet-600 text-white'
                                    : 'text-gray-700 hover:bg-violet-50'
                                }`
                            }
                        >
                            <span>🔬</span>
                            <span>Science</span>
                        </NavLink>

                        <NavLink
                            to="/social-science"
                            onClick={handleClick}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                    ? 'bg-violet-600 text-white'
                                    : 'text-gray-700 hover:bg-violet-50'
                                }`
                            }
                        >
                            <span>🌍</span>
                            <span>Social Science</span>
                        </NavLink>

                        <NavLink
                            to="/languages"
                            onClick={handleClick}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                    ? 'bg-violet-600 text-white'
                                    : 'text-gray-700 hover:bg-violet-50'
                                }`
                            }
                        >
                            <span>📚</span>
                            <span>Languages</span>
                        </NavLink>

                        <NavLink
                            to="/life-values"
                            onClick={handleClick}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                    ? 'bg-violet-600 text-white'
                                    : 'text-gray-700 hover:bg-violet-50'
                                }`
                            }
                        >
                            <span>🌟</span>
                            <span>Life & Values</span>
                        </NavLink>

                        <div className="h-px bg-gray-300 my-2"></div>

                        <NavLink
                            to="/progress"
                            onClick={handleClick}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                    ? 'bg-violet-600 text-white'
                                    : 'text-gray-700 hover:bg-violet-50'
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
                                    ? 'bg-violet-600 text-white'
                                    : 'text-gray-700 hover:bg-violet-50'
                                }`
                            }
                        >
                            <span>🎁</span>
                            <span>Rewards</span>
                        </NavLink>

                        <NavLink
                            to="/settings"
                            onClick={handleClick}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                    ? 'bg-violet-600 text-white'
                                    : 'text-gray-700 hover:bg-violet-50'
                                }`
                            }
                        >
                            <span>⚙️</span>
                            <span>Settings</span>
                        </NavLink>

                        <NavLink
                            to="/subscription"
                            onClick={handleClick}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                    ? 'bg-violet-600 text-white'
                                    : 'text-gray-700 hover:bg-violet-50'
                                }`
                            }
                        >
                            <span>💎</span>
                            <div className="flex-1">
                                <span>Subscription</span>
                                {subscription && (
                                    <div className="mt-1">
                                        <SubscriptionBadge plan={subscription.plan} size="sm" />
                                    </div>
                                )}
                            </div>
                        </NavLink>

                        {user?.role === 'parent' && (
                            <NavLink
                                to="/parent"
                                onClick={handleClick}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                                        ? 'bg-violet-600 text-white'
                                        : 'text-gray-700 hover:bg-violet-50'
                                    }`
                                }
                            >
                                <span>👨‍👩‍👧</span>
                                <span>Parent Dashboard</span>
                            </NavLink>
                        )}

                        <div className="h-px bg-gray-300 my-2"></div>

                        <button
                            onClick={() => {
                                setShowMobileMenu(false);
                                handleLogout();
                            }}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 text-red-600 hover:bg-red-50"
                        >
                            <span>🚪</span>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
