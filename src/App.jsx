import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Math from './pages/mathematics/Math';
import Algebra from './pages/mathematics/Algebra';
import Science from './pages/science/Science';
import Geography from './pages/social-science/Geography';
import History from './pages/social-science/History';
import English from './pages/languages/English';
import Hindi from './pages/languages/Hindi';
import Spanish from './pages/languages/Spanish';
import Bengali from './pages/languages/Bengali';
import Tamil from './pages/languages/Tamil';
import Civics from './pages/social-science/Civics';
import CivicSense from './pages/life-skills/CivicSense';
import LifeSkills from './pages/life-skills/LifeSkills';
import EnvironmentalStudies from './pages/life-skills/EnvironmentalStudies';
// New Subjects
import Fractions from './pages/mathematics/Fractions';
import Geometry from './pages/mathematics/Geometry';
import Physics from './pages/science/Physics';
import Chemistry from './pages/science/Chemistry';
import Biology from './pages/science/Biology';
import Economics from './pages/social-science/Economics';
// Category Pages
import Mathematics from './pages/mathematics/Mathematics';
import ScienceCategory from './pages/science/ScienceCategory';
import SocialScience from './pages/social-science/SocialScience';
import LanguagesCategory from './pages/languages/LanguagesCategory';
import LifeValues from './pages/life-skills/LifeValues';
import Progress from './pages/user/Progress';
import Rewards from './pages/user/Rewards';
import Settings from './pages/user/Settings';
import ParentDashboard from './pages/user/ParentDashboard';
// Authentication Pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import OnboardingFlow from './pages/auth/OnboardingFlow';
// Contexts
import { GamificationProvider } from './context/GamificationContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { AuthProvider } from './context/AuthContext';
// Route Protection
import ProtectedRoute from './components/auth/ProtectedRoute';
import PublicRoute from './components/auth/PublicRoute';
import OnboardingRoute from './components/auth/OnboardingRoute';

function App() {
  return (
    <AccessibilityProvider>
      <AuthProvider>
        <GamificationProvider>
          <Routes>
            {/* Public Authentication Routes */}
            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path="/signup" element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            } />
            <Route path="/forgot-password" element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            } />

            {/* Onboarding Route */}
            <Route path="/onboarding" element={
              <OnboardingRoute>
                <OnboardingFlow />
              </OnboardingRoute>
            } />

            {/* Protected Routes with Layout */}
            <Route path="/" element={
              <ProtectedRoute>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            } />

            {/* Category Pages */}
            <Route path="/mathematics" element={
              <ProtectedRoute>
                <Layout>
                  <Mathematics />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/science-category" element={
              <ProtectedRoute>
                <Layout>
                  <ScienceCategory />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/social-science" element={
              <ProtectedRoute>
                <Layout>
                  <SocialScience />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/languages" element={
              <ProtectedRoute>
                <Layout>
                  <LanguagesCategory />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/life-values" element={
              <ProtectedRoute>
                <Layout>
                  <LifeValues />
                </Layout>
              </ProtectedRoute>
            } />

            {/* Subject Pages */}
            <Route path="/math" element={
              <ProtectedRoute>
                <Layout>
                  <Math />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/algebra" element={
              <ProtectedRoute>
                <Layout>
                  <Algebra />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/fractions" element={
              <ProtectedRoute>
                <Layout>
                  <Fractions />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/geometry" element={
              <ProtectedRoute>
                <Layout>
                  <Geometry />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/science" element={
              <ProtectedRoute>
                <Layout>
                  <Science />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/physics" element={
              <ProtectedRoute>
                <Layout>
                  <Physics />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/chemistry" element={
              <ProtectedRoute>
                <Layout>
                  <Chemistry />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/biology" element={
              <ProtectedRoute>
                <Layout>
                  <Biology />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/geography" element={
              <ProtectedRoute>
                <Layout>
                  <Geography />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/history" element={
              <ProtectedRoute>
                <Layout>
                  <History />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/economics" element={
              <ProtectedRoute>
                <Layout>
                  <Economics />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/english" element={
              <ProtectedRoute>
                <Layout>
                  <English />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/hindi" element={
              <ProtectedRoute>
                <Layout>
                  <Hindi />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/spanish" element={
              <ProtectedRoute>
                <Layout>
                  <Spanish />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/bengali" element={
              <ProtectedRoute>
                <Layout>
                  <Bengali />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/tamil" element={
              <ProtectedRoute>
                <Layout>
                  <Tamil />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/civics" element={
              <ProtectedRoute>
                <Layout>
                  <Civics />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/civic-sense" element={
              <ProtectedRoute>
                <Layout>
                  <CivicSense />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/life-skills" element={
              <ProtectedRoute>
                <Layout>
                  <LifeSkills />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/environmental" element={
              <ProtectedRoute>
                <Layout>
                  <EnvironmentalStudies />
                </Layout>
              </ProtectedRoute>
            } />

            {/* User Pages */}
            <Route path="/progress" element={
              <ProtectedRoute>
                <Layout>
                  <Progress />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/rewards" element={
              <ProtectedRoute>
                <Layout>
                  <Rewards />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Layout>
                  <Settings />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/parent" element={
              <ProtectedRoute>
                <Layout>
                  <ParentDashboard />
                </Layout>
              </ProtectedRoute>
            } />
          </Routes>
        </GamificationProvider>
      </AuthProvider>
    </AccessibilityProvider>
  );
}

export default App;

