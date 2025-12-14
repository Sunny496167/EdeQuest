import { useEffect } from 'react';
import { useGamification } from '../context/GamificationContext';

/**
 * Custom hook to track time spent on a subject page
 * Automatically starts tracking on mount and stops on unmount
 * 
 * @param {string} subject - The subject name (e.g., 'math', 'science')
 */
function useTimeTracking(subject) {
    const { startTracking, stopTracking } = useGamification();

    useEffect(() => {
        // Start tracking when component mounts
        startTracking(subject);

        // Stop tracking when component unmounts
        return () => {
            stopTracking(subject);
        };
    }, [subject, startTracking, stopTracking]);
}

export default useTimeTracking;
