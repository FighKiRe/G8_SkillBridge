import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { TrendingUp, Award, Briefcase, Clock, ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router';

export default function GraduateDashboard() {
  const projects = [
    {
      id: 1,
      title: 'Design a Landing Page',
      company: 'TechStart Inc.',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      reward: 'Certificate',
      skills: ['UI/UX Design', 'Figma'],
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      company: 'Marketing Pro',
      duration: '1 week',
      difficulty: 'Beginner',
      reward: 'Badge + Certificate',
      skills: ['Marketing', 'Content Writing'],
    },
    {
      id: 3,
      title: 'Build a REST API',
      company: 'DevCorp',
      duration: '3 weeks',
      difficulty: 'Advanced',
      reward: 'Certificate + Portfolio Feature',
      skills: ['Web Development', 'Node.js'],
    },
  ];

  return (
    <DashboardLayout role="graduate" userName="Sarah Chen">
      <div className="p-8 space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground">Continue building your experience and portfolio</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">5</div>
            <div className="text-sm text-muted-foreground">Active Projects</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">12</div>
            <div className="text-sm text-muted-foreground">Completed Projects</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">4.8</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">3</div>
            <div className="text-sm text-muted-foreground">Pending Reviews</div>
          </Card>
        </div>

        {/* Profile Completion */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Complete Your Profile</h3>
              <p className="text-sm text-muted-foreground">75% completed - Add your portfolio to reach 100%</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/graduate/profile">Update Profile</Link>
            </Button>
          </div>
          <Progress value={75} className="h-2" />
        </Card>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recommended Projects */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recommended Projects</h2>
              <Button variant="ghost" asChild>
                <Link to="/graduate/projects">
                  View All <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <Card key={project.id} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.company}</p>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant={project.difficulty === 'Beginner' ? 'secondary' : project.difficulty === 'Intermediate' ? 'default' : 'destructive'}
                    >
                      {project.difficulty}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, i) => (
                      <Badge key={i} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{project.reward}</span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link to={`/graduate/projects/${project.id}`}>View Details</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Deadlines */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Upcoming Deadlines</span>
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="font-medium mb-1">Landing Page Design</div>
                  <div className="text-sm text-muted-foreground mb-2">Due in 3 days</div>
                  <Progress value={60} className="h-1.5" />
                </div>
                <div className="pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="font-medium mb-1">Social Media Campaign</div>
                  <div className="text-sm text-muted-foreground mb-2">Due in 5 days</div>
                  <Progress value={30} className="h-1.5" />
                </div>
                <div className="pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="font-medium mb-1">REST API Development</div>
                  <div className="text-sm text-muted-foreground mb-2">Due in 1 week</div>
                  <Progress value={15} className="h-1.5" />
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
              <h3 className="font-semibold mb-4">Your Impact</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold">156 hours</div>
                  <div className="text-sm text-white/80">Total work experience</div>
                </div>
                <div className="w-full h-px bg-white/20"></div>
                <div>
                  <div className="text-2xl font-bold">8 companies</div>
                  <div className="text-sm text-white/80">Have viewed your profile</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
