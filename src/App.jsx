import Layout from './components/Layout';
import Progress from './pages/Progress';
import { GamificationProvider } from './context/GamificationContext';

function App() {
  return (
    <GamificationProvider>
      <Layout>
        <Progress />
      </Layout>
    </GamificationProvider>
  );
}

export default App;
