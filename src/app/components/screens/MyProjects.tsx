import { Link } from 'react-router';
import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Building2, Clock, Upload, Star } from 'lucide-react';

const activeProjects = [
  {
    id: 1,
    title: 'Design a Landing Page',
    company: 'TechStart Inc.',
    status: 'In Progress',
    progress: 60,
    deadline: '5 days',
  },
  {
    id: 2,
    title: 'Social Media Campaign',
    company: 'Marketing Pro',
    status: 'In Progress',
    progress: 30,
    deadline: '10 days',
  },
  {
    id: 3,
    title: 'Build a REST API',
    company: 'DevCorp',
    status: 'Pending Review',
    progress: 100,
    deadline: 'Submitted',
  },
];

const completedProjects = [
  {
    id: 4,
    title: 'Logo Design',
    company: 'BrandWorks',
    completedDate: 'May 15, 2026',
    rating: 5,
    feedback: 'Excellent work! Very professional and creative.',
  },
  {
    id: 5,
    title: 'Product Photography',
    company: 'E-Commerce Solutions',
    completedDate: 'May 10, 2026',
    rating: 4.5,
    feedback: 'Great photos, delivered on time.',
  },
  {
    id: 6,
    title: 'Content Writing',
    company: 'ContentHub',
    completedDate: 'May 5, 2026',
    rating: 5,
    feedback: 'Outstanding quality and attention to detail.',
  },
];

export default function MyProjects() {
  return (
    <DashboardLayout role="graduate" userName="Sarah Chen">
      <div className="p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">My Projects</h1>
          <p className="text-muted-foreground">Track your active and completed micro-projects</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList>
            <TabsTrigger value="active">Active Projects ({activeProjects.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedProjects.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeProjects.map((project) => (
              <Card key={project.id} className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.company}</p>
                    </div>
                  </div>
                  <Badge variant={project.status === 'Pending Review' ? 'secondary' : 'default'}>
                    {project.status}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>
                        {project.status === 'Pending Review' ? project.deadline : `Deadline: ${project.deadline}`}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {project.status === 'Pending Review' ? (
                        <Button variant="outline" asChild>
                          <Link to={`/graduate/feedback/${project.id}`}>View Feedback</Link>
                        </Button>
                      ) : (
                        <Button asChild>
                          <Link to={`/graduate/upload-output/${project.id}`}>
                            <Upload className="w-4 h-4 mr-2" />
                            Upload Output
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedProjects.map((project) => (
              <Card key={project.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{project.rating}</span>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <p className="text-sm italic text-muted-foreground">"{project.feedback}"</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    Completed on {project.completedDate}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" asChild>
                      <Link to={`/graduate/feedback/${project.id}`}>View Details</Link>
                    </Button>
                    <Button asChild>
                      <Link to="/graduate/portfolio">Add to Portfolio</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
