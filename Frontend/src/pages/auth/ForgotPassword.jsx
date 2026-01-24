import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../components/auth/FormInput';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email
        if (!email) {
            setError('Email is required');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setShowSuccess(true);
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (error) setError('');
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
                    <p className="text-gray-600 text-lg">Don't worry, we'll help you! 🔑</p>
                </div>

                {/* Forgot Password Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {!showSuccess ? (
                        <>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Forgot Password?</h2>
                            <p className="text-gray-600 text-center mb-6">
                                Enter your email address and we'll send you a link to reset your password.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <FormInput
                                    label="Email"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    error={error}
                                    required
                                    autoComplete="email"
                                    disabled={isSubmitting}
                                />

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-violet-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-violet-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 mb-4"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <LoadingSpinner size="small" color="white" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        'Send Reset Link'
                                    )}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center animate-fade-in">
                            <div className="text-6xl mb-4">✅</div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Check Your Email!</h2>
                            <p className="text-gray-600 mb-6">
                                We've sent a password reset link to <strong>{email}</strong>
                            </p>
                            <p className="text-sm text-gray-500 mb-6">
                                Didn't receive the email? Check your spam folder or try again.
                            </p>
                        </div>
                    )}

                    {/* Back to Login Link */}
                    <Link
                        to="/login"
                        className="block text-center text-violet-600 hover:text-violet-700 font-bold transition-colors"
                    >
                        ← Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
