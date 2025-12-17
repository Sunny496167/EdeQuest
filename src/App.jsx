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
import Civics from './pages/Civics';
import CivicSense from './pages/CivicSense';
import LifeSkills from './pages/LifeSkills';
import EnvironmentalStudies from './pages/EnvironmentalStudies';
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
            <Route path="/math" element={<Math />} />
            <Route path="/algebra" element={<Algebra />} />
            <Route path="/science" element={<Science />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/history" element={<History />} />
            <Route path="/english" element={<English />} />
            <Route path="/hindi" element={<Hindi />} />
            <Route path="/civics" element={<Civics />} />
            <Route path="/civic-sense" element={<CivicSense />} />
            <Route path="/life-skills" element={<LifeSkills />} />
            <Route path="/environmental" element={<EnvironmentalStudies />} />
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
