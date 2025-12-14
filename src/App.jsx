import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Math from './pages/Math';
import Algebra from './pages/Algebra';
import Science from './pages/Science';
import Geography from './pages/Geography';
import History from './pages/History';
import Progress from './pages/Progress';
import Rewards from './pages/Rewards';
import Settings from './pages/Settings';
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
            <Route path="/progress" element={<Progress />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </GamificationProvider>
    </AccessibilityProvider>
  );
}

export default App;
