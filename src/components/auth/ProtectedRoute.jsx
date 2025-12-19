import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LoadingSpinner from '../ui/LoadingSpinner';

function ProtectedRoute({ children }) {
    const { isAuthenticated, user, isLoading, saveLastVisitedPath } = useAuth();
    const location = useLocation();

    // Save the current path for redirect after login
    if (!isAuthenticated && location.pathname !== '/login') {
        saveLastVisitedPath(location.pathname);
    }

    // Show loading spinner while checking auth state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-yellow-50 flex items-center justify-center">
                <LoadingSpinner size="large" color="violet" />
            </div>
        );
    }

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Redirect to onboarding if not completed
    if (user && !user.onboardingCompleted && location.pathname !== '/onboarding') {
        return <Navigate to="/onboarding" replace />;
    }

    return children;
}

export default ProtectedRoute;
