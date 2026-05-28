import { Link, useLocation } from 'react-router';
import { Briefcase, LayoutDashboard, FolderOpen, Award, Bell, MessageSquare, User, LogOut, Search, Users } from 'lucide-react';
import { Badge } from '../ui/badge';

interface NavItem {
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'graduate' | 'employer';
  userName?: string;
}

export default function DashboardLayout({ children, role, userName = 'User' }: DashboardLayoutProps) {
  const location = useLocation();

  const graduateNav: NavItem[] = [
    { label: 'Dashboard', path: '/graduate/dashboard', icon: LayoutDashboard },
    { label: 'Projects', path: '/graduate/projects', icon: Search },
    { label: 'My Projects', path: '/graduate/my-projects', icon: FolderOpen },
    { label: 'Portfolio', path: '/graduate/portfolio', icon: Award },
    { label: 'Notifications', path: '/graduate/notifications', icon: Bell, badge: 3 },
    { label: 'Messages', path: '/graduate/messages', icon: MessageSquare, badge: 2 },
    { label: 'Profile', path: '/graduate/profile', icon: User },
  ];

  const employerNav: NavItem[] = [
    { label: 'Dashboard', path: '/employer/dashboard', icon: LayoutDashboard },
    { label: 'Talent Discovery', path: '/employer/talent-discovery', icon: Users },
    { label: 'My Projects', path: '/employer/projects', icon: FolderOpen },
    { label: 'Notifications', path: '/employer/notifications', icon: Bell, badge: 5 },
    { label: 'Messages', path: '/employer/messages', icon: MessageSquare, badge: 1 },
    { label: 'Profile', path: '/employer/profile', icon: User },
  ];

  const navItems = role === 'graduate' ? graduateNav : employerNav;

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-72 bg-sidebar border-r border-sidebar-border flex flex-col">
        {/* Logo */}
        <div className="h-20 px-6 flex items-center border-b border-sidebar-border">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold">SkillBridge</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={2} />
                <span className="flex-1">{item.label}</span>
                {item.badge && item.badge > 0 && (
                  <Badge variant="destructive" className="h-5 min-w-5 px-1.5 text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center space-x-3 px-4 py-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">{userName.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{userName}</div>
              <div className="text-xs text-muted-foreground capitalize">{role}</div>
            </div>
            <button className="text-muted-foreground hover:text-destructive transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
