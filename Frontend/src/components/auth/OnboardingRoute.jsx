import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function OnboardingRoute({ children }) {
    const { isAuthenticated, user } = useAuth();

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Redirect to home if onboarding already completed
    if (user && user.onboardingCompleted) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default OnboardingRoute;
