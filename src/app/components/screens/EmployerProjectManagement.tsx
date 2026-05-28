import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Plus, Users, Eye, CheckCircle, Clock, XCircle } from 'lucide-react';
import { toast } from 'sonner';

const activeProjects = [
  {
    id: 1,
    title: 'Design a Landing Page',
    status: 'Active',
    applicants: 12,
    approved: 3,
    inReview: 2,
    posted: '5 days ago',
  },
  {
    id: 2,
    title: 'Social Media Campaign',
    status: 'Active',
    applicants: 8,
    approved: 2,
    inReview: 1,
    posted: '1 week ago',
  },
  {
    id: 3,
    title: 'Build a REST API',
    status: 'Active',
    applicants: 15,
    approved: 1,
    inReview: 3,
    posted: '2 weeks ago',
  },
];

const completedProjects = [
  {
    id: 4,
    title: 'Logo Design',
    completedDate: 'May 20, 2026',
    graduate: 'Emily Watson',
    rating: 5,
  },
  {
    id: 5,
    title: 'Product Photography',
    completedDate: 'May 15, 2026',
    graduate: 'James Lee',
    rating: 4.5,
  },
  {
    id: 6,
    title: 'Video Tutorial Series',
    completedDate: 'May 10, 2026',
    graduate: 'Maria Santos',
    rating: 5,
  },
];

const applicants = [
  {
    id: 1,
    name: 'Sarah Chen',
    project: 'Design a Landing Page',
    appliedDate: '2 days ago',
    status: 'pending',
    rating: 4.8,
    completedProjects: 12,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    project: 'Build a REST API',
    appliedDate: '3 days ago',
    status: 'pending',
    rating: 4.9,
    completedProjects: 15,
  },
  {
    id: 3,
    name: 'David Kim',
    project: 'Social Media Campaign',
    appliedDate: '1 week ago',
    status: 'pending',
    rating: 4.7,
    completedProjects: 10,
  },
];

export default function EmployerProjectManagement() {
  const [localApplicants, setLocalApplicants] = useState(applicants);

  const handleApprove = (applicantId: number) => {
    setLocalApplicants(prev =>
      prev.map(a => a.id === applicantId ? { ...a, status: 'approved' } : a)
    );
    toast.success('Applicant approved!');
  };

  const handleReject = (applicantId: number) => {
    setLocalApplicants(prev =>
      prev.map(a => a.id === applicantId ? { ...a, status: 'rejected' } : a)
    );
    toast.error('Applicant rejected');
  };

  return (
    <DashboardLayout role="employer" userName="TechStart Inc.">
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Project Management</h1>
            <p className="text-muted-foreground">Manage your projects and review applications</p>
          </div>
          <Button size="lg" className="h-12">
            <Plus className="w-5 h-5 mr-2" />
            Create New Project
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList>
            <TabsTrigger value="active">Active Projects ({activeProjects.length})</TabsTrigger>
            <TabsTrigger value="applications">Applications ({localApplicants.filter(a => a.status === 'pending').length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedProjects.length})</TabsTrigger>
          </TabsList>

          {/* Active Projects */}
          <TabsContent value="active" className="space-y-4">
            {activeProjects.map((project) => (
              <Card key={project.id} className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">Posted {project.posted}</p>
                  </div>
                  <Badge variant="default">{project.status}</Badge>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <Card className="p-4 bg-muted/50">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold">{project.applicants}</div>
                    <div className="text-xs text-muted-foreground">Total Applicants</div>
                  </Card>
                  <Card className="p-4 bg-accent/5">
                    <div className="flex items-center justify-between mb-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-2xl font-bold">{project.approved}</div>
                    <div className="text-xs text-muted-foreground">Approved</div>
                  </Card>
                  <Card className="p-4 bg-primary/5">
                    <div className="flex items-center justify-between mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{project.inReview}</div>
                    <div className="text-xs text-muted-foreground">In Review</div>
                  </Card>
                  <Card className="p-4 bg-muted/50">
                    <div className="flex items-center justify-between mb-2">
                      <Eye className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold">{project.applicants * 15}</div>
                    <div className="text-xs text-muted-foreground">Views</div>
                  </Card>
                </div>

                <div className="flex items-center space-x-3">
                  <Button variant="outline">View Applicants</Button>
                  <Button variant="outline">Edit Project</Button>
                  <Button variant="ghost" className="text-destructive">Close Project</Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Applications */}
          <TabsContent value="applications" className="space-y-4">
            {localApplicants.map((applicant) => (
              <Card key={applicant.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-lg font-semibold">
                      {applicant.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{applicant.name}</h3>
                      <p className="text-sm text-muted-foreground">Applied to: {applicant.project}</p>
                      <p className="text-xs text-muted-foreground mt-1">{applicant.appliedDate}</p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      applicant.status === 'approved' ? 'default' :
                      applicant.status === 'rejected' ? 'destructive' :
                      'secondary'
                    }
                  >
                    {applicant.status === 'pending' ? 'Pending Review' :
                     applicant.status === 'approved' ? 'Approved' :
                     'Rejected'}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-muted/50 rounded-lg">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Rating</div>
                    <div className="text-xl font-semibold">{applicant.rating} / 5.0</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Completed Projects</div>
                    <div className="text-xl font-semibold">{applicant.completedProjects}</div>
                  </div>
                </div>

                {applicant.status === 'pending' ? (
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View Portfolio
                    </Button>
                    <Button
                      variant="outline"
                      className="text-destructive hover:bg-destructive hover:text-white"
                      onClick={() => handleReject(applicant.id)}
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Reject
                    </Button>
                    <Button onClick={() => handleApprove(applicant.id)}>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Approve
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View Portfolio
                    </Button>
                    {applicant.status === 'approved' && (
                      <Button variant="outline">Send Message</Button>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </TabsContent>

          {/* Completed Projects */}
          <TabsContent value="completed" className="space-y-4">
            {completedProjects.map((project) => (
              <Card key={project.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">Completed by: {project.graduate}</p>
                    <p className="text-xs text-muted-foreground mt-1">Completed on {project.completedDate}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-5 h-5 ${i < project.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </div>
                      ))}
                    </div>
                    <span className="font-semibold ml-2">{project.rating}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Button variant="outline">View Deliverables</Button>
                  <Button variant="outline">View Graduate Profile</Button>
                  <Button>Invite to New Project</Button>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
