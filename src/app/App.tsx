import { BrowserRouter, Routes, Route } from 'react-router';
import { Toaster } from './components/ui/sonner';

// Public pages
import SplashScreen from './components/screens/SplashScreen';
import LandingPage from './components/screens/LandingPage';
import LoginPage from './components/screens/LoginPage';
import RegistrationPage from './components/screens/RegistrationPage';
import RoleSelection from './components/screens/RoleSelection';

// Graduate pages
import SkillsSelection from './components/screens/SkillsSelection';
import GraduateDashboard from './components/screens/GraduateDashboard';
import ProjectMarketplace from './components/screens/ProjectMarketplace';
import ProjectDetails from './components/screens/ProjectDetails';
import ApplicationSuccess from './components/screens/ApplicationSuccess';
import MyProjects from './components/screens/MyProjects';
import UploadOutput from './components/screens/UploadOutput';
import EmployerFeedback from './components/screens/EmployerFeedback';
import DigitalPortfolio from './components/screens/DigitalPortfolio';
import NotificationsPage from './components/screens/NotificationsPage';
import MessagingPage from './components/screens/MessagingPage';
import ProfileSettings from './components/screens/ProfileSettings';

// Employer pages
import EmployerDashboard from './components/screens/EmployerDashboard';
import TalentDiscovery from './components/screens/TalentDiscovery';
import EmployerProjectManagement from './components/screens/EmployerProjectManagement';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/role-selection" element={<RoleSelection />} />

        {/* Graduate Routes */}
        <Route path="/graduate/skills-selection" element={<SkillsSelection />} />
        <Route path="/graduate/dashboard" element={<GraduateDashboard />} />
        <Route path="/graduate/projects" element={<ProjectMarketplace />} />
        <Route path="/graduate/projects/:id" element={<ProjectDetails />} />
        <Route path="/graduate/application-success" element={<ApplicationSuccess />} />
        <Route path="/graduate/my-projects" element={<MyProjects />} />
        <Route path="/graduate/upload-output/:id" element={<UploadOutput />} />
        <Route path="/graduate/feedback/:id" element={<EmployerFeedback />} />
        <Route path="/graduate/portfolio" element={<DigitalPortfolio />} />
        <Route path="/graduate/notifications" element={<NotificationsPage />} />
        <Route path="/graduate/messages" element={<MessagingPage />} />
        <Route path="/graduate/profile" element={<ProfileSettings />} />

        {/* Employer Routes */}
        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
        <Route path="/employer/talent-discovery" element={<TalentDiscovery />} />
        <Route path="/employer/projects" element={<EmployerProjectManagement />} />
        <Route path="/employer/notifications" element={<NotificationsPage />} />
        <Route path="/employer/messages" element={<MessagingPage />} />
        <Route path="/employer/profile" element={<ProfileSettings />} />
      </Routes>
    </BrowserRouter>
  );
}