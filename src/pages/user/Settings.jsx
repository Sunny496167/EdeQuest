import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AccessibilityToggle from '../../components/features/AccessibilityToggle';
import avatars from '../../data/common/avatars';

function Settings() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout? You will need to log in again to access your account.')) {
            logout();
            navigate('/login');
        }
    };

    // Get user's avatar
    const userAvatar = avatars.find(a => a.id === user?.avatar);

    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 via-blue-50 to-pink-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">⚙️</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Settings
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Make EduQuest work best for you!
                    </p>
                </div>

                {/* User Profile Section */}
                <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span>👤</span>
                        <span>Your Profile</span>
                    </h2>
                    <div className="flex items-center gap-6 mb-4">
                        <div className="text-6xl">{userAvatar?.emoji || '😊'}</div>
                        <div>
                            <p className="text-xl font-bold text-gray-800">{user?.name}</p>
                            <p className="text-gray-600">{user?.email}</p>
                            <p className="text-sm text-gray-500 mt-1">
                                {user?.role === 'student' ? '🎓 Student' : '👨‍👩‍👧 Parent'} • Grade {user?.gradeLevel}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Daily Learning Goal:</p>
                        <p className="text-lg text-violet-600 font-bold">{user?.dailyGoal} minutes per day</p>
                    </div>
                </div>

                {/* Accessibility Toggle */}
                <AccessibilityToggle />

                {/* Info Section */}
                <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                        About These Settings
                    </h2>
                    <div className="text-left space-y-3 text-gray-700">
                        <p>
                            <strong>🔍 Big Text:</strong> Makes all text larger and easier to read.
                        </p>
                        <p>
                            <strong>🎨 High Contrast:</strong> Makes colors stronger so everything is easier to see.
                        </p>
                        <p>
                            <strong>⌨️ Keyboard Navigation:</strong> You can use Tab to move between buttons and Enter/Space to click them!
                        </p>
                    </div>
                </div>

                {/* Logout Section */}
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Account Actions
                    </h2>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-600 transition-all duration-200 hover:scale-105 flex items-center gap-2 mx-auto"
                    >
                        <span>🚪</span>
                        <span>Logout</span>
                    </button>
                    <p className="text-sm text-gray-500 mt-3">
                        You'll need to log in again to access your account
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Settings;
