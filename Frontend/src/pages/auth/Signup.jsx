import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import FormInput from '../../components/auth/FormInput';
import PasswordStrengthIndicator from '../../components/auth/PasswordStrengthIndicator';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

function Signup() {
    const navigate = useNavigate();
    const { signup } = useAuth();

    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        // Step 1
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        // Step 2
        role: 'student',
        gradeLevel: '5',
        // Step 3
        interests: [],
        termsAccepted: false
    });

    const [errors, setErrors] = useState({});

    const subjects = [
        { id: 'mathematics', name: 'Mathematics', emoji: '📐' },
        { id: 'science', name: 'Science', emoji: '🔬' },
        { id: 'geography', name: 'Geography', emoji: '🌍' },
        { id: 'history', name: 'History', emoji: '⏳' },
        { id: 'english', name: 'English', emoji: '📚' },
        { id: 'hindi', name: 'Hindi', emoji: '🇮🇳' },
        { id: 'civics', name: 'Civics', emoji: '⚖️' },
        { id: 'lifeskills', name: 'Life Skills', emoji: '🧠' }
    ];

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

    const toggleInterest = (subjectId) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(subjectId)
                ? prev.interests.filter(id => id !== subjectId)
                : [...prev.interests, subjectId]
        }));
        if (errors.interests) {
            setErrors(prev => ({ ...prev, interests: '' }));
        }
    };

    const validateStep1 = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};

        if (!formData.role) {
            newErrors.role = 'Please select a user type';
        }

        if (!formData.gradeLevel) {
            newErrors.gradeLevel = 'Please select a grade level';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep3 = () => {
        const newErrors = {};

        if (formData.interests.length === 0) {
            newErrors.interests = 'Please select at least one subject';
        }

        if (!formData.termsAccepted) {
            newErrors.termsAccepted = 'You must accept the terms and conditions';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        let isValid = false;

        if (currentStep === 1) {
            isValid = validateStep1();
        } else if (currentStep === 2) {
            isValid = validateStep2();
        }

        if (isValid) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateStep3()) return;

        setIsSubmitting(true);

        const result = await signup({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role,
            gradeLevel: parseInt(formData.gradeLevel),
            interests: formData.interests
        });

        if (result.success) {
            // Redirect to onboarding
            navigate('/onboarding');
        } else {
            setErrors({ general: result.error });
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-yellow-50 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-5xl">🎒</span>
                        <h1 className="text-4xl font-bold text-violet-600">EduQuest</h1>
                    </div>
                    <p className="text-gray-600 text-lg">Join us and start your learning adventure! 🚀</p>
                </div>

                {/* Signup Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Progress Indicator */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-gray-600">Step {currentStep} of 3</span>
                            <span className="text-sm font-semibold text-violet-600">{Math.round((currentStep / 3) * 100)}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-violet-600 transition-all duration-500"
                                style={{ width: `${(currentStep / 3) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        {currentStep === 1 && 'Create Your Account'}
                        {currentStep === 2 && 'Tell Us About Yourself'}
                        {currentStep === 3 && 'Choose Your Interests'}
                    </h2>

                    {errors.general && (
                        <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-sm">
                            ⚠️ {errors.general}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Basic Info */}
                        {currentStep === 1 && (
                            <div className="animate-fade-in">
                                <FormInput
                                    label="Full Name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    error={errors.name}
                                    required
                                    autoComplete="name"
                                />

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
                                />

                                <FormInput
                                    label="Password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a strong password"
                                    error={errors.password}
                                    required
                                    autoComplete="new-password"
                                />

                                <PasswordStrengthIndicator password={formData.password} />

                                <FormInput
                                    label="Confirm Password"
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Re-enter your password"
                                    error={errors.confirmPassword}
                                    required
                                    autoComplete="new-password"
                                />
                            </div>
                        )}

                        {/* Step 2: User Profile */}
                        {currentStep === 2 && (
                            <div className="animate-fade-in">
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        I am a... <span className="text-red-500">*</span>
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className={`flex flex-col items-center gap-2 p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${formData.role === 'student'
                                                ? 'border-violet-600 bg-violet-50'
                                                : 'border-gray-300 hover:border-violet-400'
                                            }`}>
                                            <input
                                                type="radio"
                                                name="role"
                                                value="student"
                                                checked={formData.role === 'student'}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <span className="text-4xl">🎓</span>
                                            <span className="font-bold text-gray-800">Student</span>
                                        </label>

                                        <label className={`flex flex-col items-center gap-2 p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${formData.role === 'parent'
                                                ? 'border-violet-600 bg-violet-50'
                                                : 'border-gray-300 hover:border-violet-400'
                                            }`}>
                                            <input
                                                type="radio"
                                                name="role"
                                                value="parent"
                                                checked={formData.role === 'parent'}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <span className="text-4xl">👨‍👩‍👧</span>
                                            <span className="font-bold text-gray-800">Parent</span>
                                        </label>
                                    </div>
                                    {errors.role && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                            <span>⚠️</span>
                                            <span>{errors.role}</span>
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="gradeLevel" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Grade Level <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="gradeLevel"
                                        name="gradeLevel"
                                        value={formData.gradeLevel}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-200"
                                    >
                                        {[...Array(12)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                Grade {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.gradeLevel && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                            <span>⚠️</span>
                                            <span>{errors.gradeLevel}</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Step 3: Interests */}
                        {currentStep === 3 && (
                            <div className="animate-fade-in">
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        What subjects interest you? <span className="text-red-500">*</span>
                                    </label>
                                    <p className="text-sm text-gray-600 mb-4">Select at least one subject you'd like to learn</p>

                                    <div className="grid grid-cols-2 gap-3">
                                        {subjects.map(subject => (
                                            <button
                                                key={subject.id}
                                                type="button"
                                                onClick={() => toggleInterest(subject.id)}
                                                className={`flex items-center gap-3 p-4 border-2 rounded-lg transition-all duration-200 ${formData.interests.includes(subject.id)
                                                        ? 'border-violet-600 bg-violet-50'
                                                        : 'border-gray-300 hover:border-violet-400'
                                                    }`}
                                            >
                                                <span className="text-2xl">{subject.emoji}</span>
                                                <span className="font-semibold text-gray-800">{subject.name}</span>
                                                {formData.interests.includes(subject.id) && (
                                                    <span className="ml-auto text-violet-600">✓</span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                    {errors.interests && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                            <span>⚠️</span>
                                            <span>{errors.interests}</span>
                                        </p>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="termsAccepted"
                                            checked={formData.termsAccepted}
                                            onChange={handleChange}
                                            className="mt-1 w-5 h-5 text-violet-600 rounded focus:ring-2 focus:ring-violet-500"
                                        />
                                        <span className="text-sm text-gray-600">
                                            I accept the{' '}
                                            <a href="#" className="text-violet-600 hover:text-violet-700 font-semibold">
                                                Terms and Conditions
                                            </a>{' '}
                                            and{' '}
                                            <a href="#" className="text-violet-600 hover:text-violet-700 font-semibold">
                                                Privacy Policy
                                            </a>
                                        </span>
                                    </label>
                                    {errors.termsAccepted && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                            <span>⚠️</span>
                                            <span>{errors.termsAccepted}</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 mt-8">
                            {currentStep > 1 && (
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    disabled={isSubmitting}
                                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-bold text-lg hover:bg-gray-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    ← Back
                                </button>
                            )}

                            {currentStep < 3 ? (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="flex-1 bg-violet-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-violet-700 transition-all duration-200 hover:scale-105"
                                >
                                    Next →
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 bg-violet-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-violet-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <LoadingSpinner size="small" color="white" />
                                            <span>Creating Account...</span>
                                        </>
                                    ) : (
                                        'Sign Up'
                                    )}
                                </button>
                            )}
                        </div>
                    </form>

                    {/* Login Link */}
                    <p className="text-center text-gray-600 mt-6">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="text-violet-600 hover:text-violet-700 font-bold transition-colors"
                        >
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
