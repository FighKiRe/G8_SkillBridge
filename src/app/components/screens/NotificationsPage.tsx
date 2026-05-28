import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Eye, Briefcase, Star, MessageSquare, CheckCircle, User } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'profile_view',
    title: 'Employer Viewed Your Profile',
    message: 'TechStart Inc. viewed your portfolio',
    time: '2 hours ago',
    unread: true,
    icon: Eye,
  },
  {
    id: 2,
    type: 'new_project',
    title: 'New Project Available',
    message: 'A new UI/UX Design project matching your skills is available',
    time: '5 hours ago',
    unread: true,
    icon: Briefcase,
  },
  {
    id: 3,
    type: 'application_approved',
    title: 'Application Approved',
    message: 'Your application for "Social Media Campaign" was approved',
    time: '1 day ago',
    unread: true,
    icon: CheckCircle,
  },
  {
    id: 4,
    type: 'feedback_received',
    title: 'Feedback Received',
    message: 'BrandWorks left a 5-star review on your completed project',
    time: '2 days ago',
    unread: false,
    icon: Star,
  },
  {
    id: 5,
    type: 'project_invitation',
    title: 'Project Invitation',
    message: 'DevCorp invited you to apply for "Build a REST API"',
    time: '3 days ago',
    unread: false,
    icon: Briefcase,
  },
  {
    id: 6,
    type: 'message',
    title: 'New Message',
    message: 'Marketing Pro sent you a message about your application',
    time: '4 days ago',
    unread: false,
    icon: MessageSquare,
  },
];

export default function NotificationsPage() {
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <DashboardLayout role="graduate" userName="Sarah Chen">
      <div className="p-8 space-y-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">
              {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
            </p>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline">Mark All as Read</Button>
          )}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <Card
                key={notification.id}
                className={`p-6 transition-all duration-200 hover:shadow-md ${
                  notification.unread ? 'bg-primary/5 border-primary/20' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    notification.type === 'profile_view' ? 'bg-primary/10' :
                    notification.type === 'new_project' ? 'bg-accent/10' :
                    notification.type === 'application_approved' ? 'bg-accent/10' :
                    notification.type === 'feedback_received' ? 'bg-yellow-100' :
                    notification.type === 'project_invitation' ? 'bg-primary/10' :
                    'bg-muted'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      notification.type === 'profile_view' ? 'text-primary' :
                      notification.type === 'new_project' ? 'text-accent' :
                      notification.type === 'application_approved' ? 'text-accent' :
                      notification.type === 'feedback_received' ? 'text-yellow-600' :
                      notification.type === 'project_invitation' ? 'text-primary' :
                      'text-muted-foreground'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold">{notification.title}</h3>
                      {notification.unread && (
                        <Badge variant="default" className="ml-2">New</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-2">{notification.message}</p>
                    <p className="text-sm text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {notifications.length === 0 && (
          <Card className="p-12 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">All Caught Up!</h3>
            <p className="text-muted-foreground">You have no notifications at this time.</p>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
