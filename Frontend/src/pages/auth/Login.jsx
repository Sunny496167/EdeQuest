import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import FormInput from '../../components/auth/FormInput';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

function Login() {
    const navigate = useNavigate();
    const { login, lastVisitedPath } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        const result = await login(formData.email, formData.password);

        if (result.success) {
            setShowSuccess(true);
            // Redirect after showing success message
            setTimeout(() => {
                navigate(lastVisitedPath || '/');
            }, 1000);
        } else {
            setErrors({ general: result.error });
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-yellow-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-5xl">🎒</span>
                        <h1 className="text-4xl font-bold text-violet-600">EduQuest</h1>
                    </div>
                    <p className="text-gray-600 text-lg">Welcome back! Let's continue learning 🌟</p>
                </div>

                {/* Login Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login to Your Account</h2>

                    {errors.general && (
                        <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-sm">
                            ⚠️ {errors.general}
                        </div>
                    )}

                    {showSuccess && (
                        <div className="mb-4 p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-700 text-sm animate-fade-in">
                            ✅ Login successful! Redirecting...
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            error={errors.email}
                            required
                            autoComplete="email"
                            disabled={isSubmitting}
                        />

                        <FormInput
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            error={errors.password}
                            required
                            autoComplete="current-password"
                            disabled={isSubmitting}
                        />

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className="w-4 h-4 text-violet-600 rounded focus:ring-2 focus:ring-violet-500"
                                />
                                <span className="text-sm text-gray-600">Remember me</span>
                            </label>

                            <Link
                                to="/forgot-password"
                                className="text-sm text-violet-600 hover:text-violet-700 font-semibold transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-violet-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-violet-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <LoadingSpinner size="small" color="white" />
                                    <span>Logging in...</span>
                                </>
                            ) : (
                                'Login'
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-4">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500">or continue with</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Social Login Buttons (UI only) */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <button
                            type="button"
                            disabled={isSubmitting}
                            className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-300 rounded-lg hover:border-violet-400 hover:bg-violet-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="text-xl">🔵</span>
                            <span className="font-semibold text-gray-700">Google</span>
                        </button>
                        <button
                            type="button"
                            disabled={isSubmitting}
                            className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-300 rounded-lg hover:border-violet-400 hover:bg-violet-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="text-xl">📘</span>
                            <span className="font-semibold text-gray-700">Facebook</span>
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="text-center text-gray-600">
                        Don't have an account?{' '}
                        <Link
                            to="/signup"
                            className="text-violet-600 hover:text-violet-700 font-bold transition-colors"
                        >
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
