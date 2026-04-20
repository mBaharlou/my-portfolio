import { AnimatePresence } from 'framer-motion';
import { useLocation, useRoutes } from 'react-router-dom';
import { appRoutes } from './router/routes';

function App() {
  const location = useLocation();
  const element = useRoutes(appRoutes);

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>{element}</div>
    </AnimatePresence>
  );
}

export default App;
