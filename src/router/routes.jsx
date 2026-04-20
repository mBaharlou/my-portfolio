import MainLayout from '../components/layout/MainLayout';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import SkillsPage from '../pages/SkillsPage';
import WorksPage from '../pages/WorksPage';

export const appRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'works', element: <WorksPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
];
