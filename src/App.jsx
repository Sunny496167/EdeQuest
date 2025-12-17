import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Math from './pages/Math';
import Algebra from './pages/Algebra';
import Science from './pages/Science';
import Geography from './pages/Geography';
import History from './pages/History';
import English from './pages/English';
import Hindi from './pages/Hindi';
import Spanish from './pages/Spanish';
import Civics from './pages/Civics';
import CivicSense from './pages/CivicSense';
import LifeSkills from './pages/LifeSkills';
import EnvironmentalStudies from './pages/EnvironmentalStudies';
// New Subjects
import Fractions from './pages/Fractions';
import Geometry from './pages/Geometry';
import Physics from './pages/Physics';
import Chemistry from './pages/Chemistry';
import Biology from './pages/Biology';
import Economics from './pages/Economics';
// Category Pages
import Mathematics from './pages/Mathematics';
import ScienceCategory from './pages/ScienceCategory';
import SocialScience from './pages/SocialScience';
import LanguagesCategory from './pages/LanguagesCategory';
import LifeValues from './pages/LifeValues';
import Progress from './pages/Progress';
import Rewards from './pages/Rewards';
import Settings from './pages/Settings';
import ParentDashboard from './pages/ParentDashboard';
import { GamificationProvider } from './context/GamificationContext';
import { AccessibilityProvider } from './context/AccessibilityContext';

function App() {
  return (
    <AccessibilityProvider>
      <GamificationProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Category Pages */}
            <Route path="/mathematics" element={<Mathematics />} />
            <Route path="/science-category" element={<ScienceCategory />} />
            <Route path="/social-science" element={<SocialScience />} />
            <Route path="/languages" element={<LanguagesCategory />} />
            <Route path="/life-values" element={<LifeValues />} />
            {/* Subject Pages */}
            <Route path="/math" element={<Math />} />
            <Route path="/algebra" element={<Algebra />} />
            <Route path="/fractions" element={<Fractions />} />
            <Route path="/geometry" element={<Geometry />} />
            <Route path="/science" element={<Science />} />
            <Route path="/physics" element={<Physics />} />
            <Route path="/chemistry" element={<Chemistry />} />
            <Route path="/biology" element={<Biology />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/history" element={<History />} />
            <Route path="/economics" element={<Economics />} />
            <Route path="/english" element={<English />} />
            <Route path="/hindi" element={<Hindi />} />
            <Route path="/spanish" element={<Spanish />} />
            <Route path="/civics" element={<Civics />} />
            <Route path="/civic-sense" element={<CivicSense />} />
            <Route path="/life-skills" element={<LifeSkills />} />
            <Route path="/environmental" element={<EnvironmentalStudies />} />
            {/* Other Pages */}
            <Route path="/progress" element={<Progress />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/parent" element={<ParentDashboard />} />
          </Routes>
        </Layout>
      </GamificationProvider>
    </AccessibilityProvider>
  );
}

export default App;
