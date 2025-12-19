function PasswordStrengthIndicator({ password }) {
    // Calculate password strength
    const calculateStrength = (pwd) => {
        if (!pwd) return { score: 0, label: '', color: '' };

        let score = 0;

        // Length check
        if (pwd.length >= 8) score += 1;
        if (pwd.length >= 12) score += 1;

        // Character variety checks
        if (/[a-z]/.test(pwd)) score += 1; // lowercase
        if (/[A-Z]/.test(pwd)) score += 1; // uppercase
        if (/[0-9]/.test(pwd)) score += 1; // numbers
        if (/[^a-zA-Z0-9]/.test(pwd)) score += 1; // special chars

        // Determine strength level
        if (score <= 2) {
            return { score, label: 'Weak', color: 'bg-red-500' };
        } else if (score <= 4) {
            return { score, label: 'Medium', color: 'bg-yellow-500' };
        } else {
            return { score, label: 'Strong', color: 'bg-green-500' };
        }
    };

    const strength = calculateStrength(password);

    if (!password) return null;

    return (
        <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Password Strength:</span>
                <span className={`text-sm font-bold ${strength.label === 'Weak' ? 'text-red-600' :
                        strength.label === 'Medium' ? 'text-yellow-600' :
                            'text-green-600'
                    }`}>
                    {strength.label}
                </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className={`h-full ${strength.color} transition-all duration-300`}
                    style={{ width: `${(strength.score / 6) * 100}%` }}
                ></div>
            </div>
        </div>
    );
}

export default PasswordStrengthIndicator;
