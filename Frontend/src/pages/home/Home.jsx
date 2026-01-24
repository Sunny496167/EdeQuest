/**
 * HOME PAGE - Now serves as the public landing page
 * ===================================================
 * OPTIMIZATION: This is a simple re-export of the Landing component
 * The Landing page serves as the home page for non-authenticated users
 * Authenticated users are redirected to /dashboard
 */

import Landing from '../marketing/Landing';

// Re-export Landing as Home for the root route
export default Landing;

