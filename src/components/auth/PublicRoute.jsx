import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function PublicRoute({ children }) {
    const { isAuthenticated, user } = useAuth();

    // Redirect authenticated users to dashboard
    if (isAuthenticated) {
        // If onboarding not completed, redirect to onboarding
        if (user && !user.onboardingCompleted) {
            return <Navigate to="/onboarding" replace />;
        }
        return <Navigate to="/dashboard" replace />;
    }

    return children;
}

export default PublicRoute;
