import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create Auth Context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [lastVisitedPath, setLastVisitedPath] = useState('/');

    // Auto-login for development (remove in production)
    useEffect(() => {
        // Check if we should auto-login (for development)
        const isDevelopment = import.meta.env.DEV || window.location.hostname === 'localhost';

        if (isDevelopment && !isAuthenticated) {
            // Auto-login with a mock user
            const mockUser = {
                id: 'dev_user_123',
                name: 'Test Parent',
                email: 'parent@test.com',
                role: 'parent', // Set as parent for testing parent portal
                avatar: 1,
                gradeLevel: 5,
                interests: [],
                dailyGoal: 30,
                createdAt: new Date().toISOString(),
                onboardingCompleted: true
            };

            setUser(mockUser);
            setIsAuthenticated(true);
        }
    }, []);


    // Mock login function - accepts any email/password
    const login = async (email, password) => {
        setIsLoading(true);

        // Simulate API call delay (1-2 seconds)
        await new Promise(resolve => setTimeout(resolve, 1500));

        try {
            // Basic validation
            if (!email || !password) {
                throw new Error('Email and password are required');
            }

            // Create mock user (accept any credentials)
            const mockUser = {
                id: `user_${Date.now()}`,
                name: email.split('@')[0], // Use email prefix as name
                email: email,
                role: 'student',
                avatar: 1, // Default avatar
                gradeLevel: 5,
                interests: [],
                dailyGoal: 30,
                createdAt: new Date().toISOString(),
                onboardingCompleted: true // Skip onboarding for login
            };

            setUser(mockUser);
            setIsAuthenticated(true);
            setIsLoading(false);

            return { success: true, user: mockUser };
        } catch (error) {
            setIsLoading(false);
            return { success: false, error: error.message };
        }
    };

    // Mock signup function
    const signup = async (userData) => {
        setIsLoading(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        try {
            // Validate required fields
            if (!userData.name || !userData.email || !userData.password) {
                throw new Error('Name, email, and password are required');
            }

            // Create new user
            const newUser = {
                id: `user_${Date.now()}`,
                name: userData.name,
                email: userData.email,
                role: userData.role || 'student',
                avatar: 1, // Default avatar, will be updated in onboarding
                gradeLevel: userData.gradeLevel || 5,
                interests: userData.interests || [],
                dailyGoal: 30, // Default, will be updated in onboarding
                createdAt: new Date().toISOString(),
                onboardingCompleted: false // New users need onboarding
            };

            setUser(newUser);
            setIsAuthenticated(true);
            setIsLoading(false);

            return { success: true, user: newUser };
        } catch (error) {
            setIsLoading(false);
            return { success: false, error: error.message };
        }
    };

    // Logout function
    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        setLastVisitedPath('/');
    };

    // Update user profile
    const updateUser = (updates) => {
        setUser(prev => ({
            ...prev,
            ...updates
        }));
    };

    // Complete onboarding
    const completeOnboarding = (onboardingData) => {
        setUser(prev => ({
            ...prev,
            avatar: onboardingData.avatar || prev.avatar,
            dailyGoal: onboardingData.dailyGoal || prev.dailyGoal,
            onboardingCompleted: true
        }));
    };

    // Store last visited path for redirect after login
    const saveLastVisitedPath = (path) => {
        // Don't save auth-related paths
        if (!path.startsWith('/login') &&
            !path.startsWith('/signup') &&
            !path.startsWith('/forgot-password') &&
            !path.startsWith('/onboarding')) {
            setLastVisitedPath(path);
        }
    };

    const value = {
        user,
        isAuthenticated,
        isLoading,
        lastVisitedPath,
        login,
        signup,
        logout,
        updateUser,
        completeOnboarding,
        saveLastVisitedPath
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
