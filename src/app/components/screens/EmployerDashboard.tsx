import { Link } from 'react-router';
import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Briefcase, Users, Eye, Star, TrendingUp, ArrowRight, GraduationCap } from 'lucide-react';

export default function EmployerDashboard() {
  const recentApplicants = [
    {
      id: 1,
      name: 'Sarah Chen',
      skills: ['UI/UX Design', 'Figma'],
      rating: 4.8,
      projects: 12,
      project: 'Landing Page Design',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      skills: ['Web Development', 'React'],
      rating: 4.9,
      projects: 15,
      project: 'REST API Development',
    },
    {
      id: 3,
      name: 'Emily Watson',
      skills: ['Marketing', 'Content Writing'],
      rating: 4.7,
      projects: 10,
      project: 'Social Media Campaign',
    },
  ];

  return (
    <DashboardLayout role="employer" userName="TechStart Inc.">
      <div className="p-8 space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, TechStart!</h1>
          <p className="text-muted-foreground">Manage your projects and discover talented graduates</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">8</div>
            <div className="text-sm text-muted-foreground">Active Projects</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">24</div>
            <div className="text-sm text-muted-foreground">Total Applicants</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">156</div>
            <div className="text-sm text-muted-foreground">Profile Views</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">18</div>
            <div className="text-sm text-muted-foreground">Completed Projects</div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Button size="lg" asChild className="h-14">
              <Link to="/employer/projects">
                <Briefcase className="w-5 h-5 mr-2" />
                Post New Project
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14">
              <Link to="/employer/talent-discovery">
                <Users className="w-5 h-5 mr-2" />
                Discover Talent
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14">
              <Link to="/employer/projects">
                <Eye className="w-5 h-5 mr-2" />
                View Applications
              </Link>
            </Button>
          </div>
        </Card>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Applicants */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recent Applicants</h2>
              <Button variant="ghost" asChild>
                <Link to="/employer/projects">
                  View All <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {recentApplicants.map((applicant) => (
                <Card key={applicant.id} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-lg font-semibold">
                        {applicant.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{applicant.name}</h3>
                        <p className="text-sm text-muted-foreground">Applied to: {applicant.project}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{applicant.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {applicant.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground">
                      {applicant.projects} completed projects
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button size="sm">Review Application</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Performance */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Project Performance</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Completion Rate</span>
                    <span className="text-sm font-semibold">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Average Rating</span>
                    <span className="text-sm font-semibold">4.7/5.0</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">On-Time Delivery</span>
                    <span className="text-sm font-semibold">88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
              </div>
            </Card>

            {/* Top Candidates */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center space-x-2">
                <Star className="w-5 h-5 text-accent" />
                <span>Top Candidates</span>
              </h3>
              <div className="space-y-3">
                {['Sarah Chen', 'Michael Rodriguez', 'Emily Watson'].map((name, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{name}</div>
                        <div className="text-xs text-muted-foreground">{4.7 + (i * 0.1)} rating</div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">View</Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Platform Insights */}
            <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
              <h3 className="font-semibold mb-4">Platform Insights</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold">2,450</div>
                  <div className="text-sm text-white/80">Active graduates</div>
                </div>
                <div className="w-full h-px bg-white/20"></div>
                <div>
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm text-white/80">Match success rate</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
