import { useNavigate, useParams } from 'react-router';
import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Building2, Clock, Award, Calendar, CheckCircle, Bookmark } from 'lucide-react';

export default function ProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const project = {
    id: id,
    title: 'Design a Landing Page',
    company: 'TechStart Inc.',
    duration: '2 weeks',
    difficulty: 'Intermediate',
    reward: 'Certificate + Portfolio Feature',
    skills: ['UI/UX Design', 'Figma', 'Responsive Design'],
    description: 'We are looking for a talented designer to create a modern, conversion-focused landing page for our new SaaS product. The design should be clean, professional, and optimized for user engagement.',
    requirements: [
      'Proficiency in Figma or similar design tools',
      'Understanding of UX principles and best practices',
      'Experience with responsive design',
      'Ability to create high-fidelity mockups',
      'Knowledge of modern web design trends',
    ],
    deliverables: [
      'High-fidelity landing page design (desktop and mobile)',
      'Complete Figma file with all assets',
      'Design system documentation',
      'Exported assets ready for development',
    ],
    timeline: [
      { phase: 'Initial Design', days: '1-3 days' },
      { phase: 'Feedback & Iteration', days: '4-7 days' },
      { phase: 'Final Refinements', days: '8-10 days' },
      { phase: 'Handoff & Documentation', days: '11-14 days' },
    ],
    companyInfo: {
      name: 'TechStart Inc.',
      industry: 'Software Development',
      size: '50-100 employees',
      about: 'TechStart is a fast-growing SaaS company building innovative solutions for modern businesses. We value creativity, collaboration, and continuous learning.',
    },
  };

  const handleApply = () => {
    navigate('/graduate/application-success');
  };

  return (
    <DashboardLayout role="graduate" userName="Sarah Chen">
      <div className="p-8 space-y-8 max-w-5xl">
        {/* Header */}
        <div>
          <Button variant="ghost" onClick={() => navigate('/graduate/projects')} className="mb-4">
            ← Back to Projects
          </Button>

          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                <p className="text-lg text-muted-foreground">{project.company}</p>
              </div>
            </div>
            <Badge variant={project.difficulty === 'Beginner' ? 'secondary' : project.difficulty === 'Intermediate' ? 'default' : 'destructive'} className="text-sm px-3 py-1">
              {project.difficulty}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>{project.duration}</span>
            </div>
            <div className="w-px h-5 bg-border"></div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Award className="w-5 h-5" />
              <span>{project.reward}</span>
            </div>
            <div className="w-px h-5 bg-border"></div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span>Posted 2 days ago</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button size="lg" onClick={handleApply} className="h-12 px-8">
            Apply to Project
          </Button>
          <Button size="lg" variant="outline" className="h-12">
            <Bookmark className="w-4 h-4 mr-2" />
            Save Project
          </Button>
        </div>

        {/* Skills */}
        <Card className="p-6">
          <h3 className="font-semibold mb-3">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, i) => (
              <Badge key={i} variant="secondary" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Description */}
        <Card className="p-6">
          <h3 className="font-semibold mb-3 text-lg">Project Description</h3>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </Card>

        {/* Requirements */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4 text-lg">Requirements</h3>
          <div className="space-y-3">
            {project.requirements.map((req, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{req}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Deliverables */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4 text-lg">Deliverables</h3>
          <div className="space-y-3">
            {project.deliverables.map((deliverable, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-primary">{i + 1}</span>
                </div>
                <span className="text-muted-foreground">{deliverable}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Timeline */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4 text-lg">Project Timeline</h3>
          <div className="space-y-4">
            {project.timeline.map((phase, i) => (
              <div key={i}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">{i + 1}</span>
                    </div>
                    <div>
                      <div className="font-medium">{phase.phase}</div>
                      <div className="text-sm text-muted-foreground">{phase.days}</div>
                    </div>
                  </div>
                </div>
                {i < project.timeline.length - 1 && <Separator className="my-3" />}
              </div>
            ))}
          </div>
        </Card>

        {/* Company Info */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4 text-lg">About {project.companyInfo.name}</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Industry</div>
              <div className="font-medium">{project.companyInfo.industry}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Company Size</div>
              <div className="font-medium">{project.companyInfo.size}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Projects Posted</div>
              <div className="font-medium">24 projects</div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">{project.companyInfo.about}</p>
        </Card>

        {/* Bottom CTA */}
        <Card className="p-6 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-xl mb-2">Ready to Apply?</h3>
              <p className="text-white/90">Start building your experience today</p>
            </div>
            <Button size="lg" variant="secondary" onClick={handleApply} className="h-12 px-8">
              Apply Now
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
