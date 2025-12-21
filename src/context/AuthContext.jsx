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
    const [isLoading, setIsLoading] = useState(true); // Start as loading
    const [lastVisitedPath, setLastVisitedPath] = useState('/');

    // Initialize auth state from localStorage or auto-login
    useEffect(() => {
        const initializeAuth = () => {
            // Check if we should auto-login (for development)
            const isDevelopment = import.meta.env.DEV || window.location.hostname === 'localhost';

            // First, try to load from localStorage
            const storedUser = localStorage.getItem('user');

            if (storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    setUser(parsedUser);
                    setIsAuthenticated(true);
                    setIsLoading(false);
                    return;
                } catch (error) {
                    console.error('Failed to parse stored user:', error);
                    localStorage.removeItem('user');
                }
            }

            // If no stored user and in development, auto-login
            if (isDevelopment) {
                const mockUser = {
                    id: 'dev_user_123',
                    name: 'Test Parent',
                    email: 'parent@test.com',
                    role: 'parent',
                    avatar: 1,
                    gradeLevel: 5,
                    interests: [],
                    dailyGoal: 30,
                    createdAt: new Date().toISOString(),
                    onboardingCompleted: true
                };

                // Store in localStorage for persistence
                localStorage.setItem('user', JSON.stringify(mockUser));
                setUser(mockUser);
                setIsAuthenticated(true);
            }

            setIsLoading(false);
        };

        initializeAuth();
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

            // Store in localStorage
            localStorage.setItem('user', JSON.stringify(mockUser));
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

            // Store in localStorage
            localStorage.setItem('user', JSON.stringify(newUser));
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
        localStorage.removeItem('user');
        setUser(null);
        setIsAuthenticated(false);
        setLastVisitedPath('/');
    };

    // Update user profile
    const updateUser = (updates) => {
        const updatedUser = {
            ...user,
            ...updates
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
    };

    // Complete onboarding
    const completeOnboarding = (onboardingData) => {
        const updatedUser = {
            ...user,
            avatar: onboardingData.avatar || user.avatar,
            dailyGoal: onboardingData.dailyGoal || user.dailyGoal,
            onboardingCompleted: true
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
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
