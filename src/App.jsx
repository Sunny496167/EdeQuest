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
            <Route path="/bengali" element={<Bengali />} />
            <Route path="/tamil" element={<Tamil />} />
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
