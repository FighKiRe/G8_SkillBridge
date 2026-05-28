import { useNavigate, useParams } from 'react-router';
import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Star, Award, TrendingUp, CheckCircle, Download } from 'lucide-react';

export default function EmployerFeedback() {
  const navigate = useNavigate();
  const { id } = useParams();

  const feedback = {
    projectTitle: 'Design a Landing Page',
    company: 'TechStart Inc.',
    rating: 5,
    overallFeedback: 'Outstanding work! The design exceeded our expectations. Sarah demonstrated excellent understanding of our brand and created a beautiful, conversion-focused landing page. Her attention to detail and communication throughout the project was exceptional.',
    skills: [
      { name: 'Design Quality', rating: 5 },
      { name: 'Communication', rating: 5 },
      { name: 'Timeliness', rating: 4.5 },
      { name: 'Professionalism', rating: 5 },
    ],
    badge: 'Top Designer',
    certificate: 'Landing Page Design - Advanced Level',
    stats: {
      deliveryTime: '12 days (2 days early)',
      revisions: '2 minor revisions',
      responseTime: '< 2 hours average',
    },
  };

  return (
    <DashboardLayout role="graduate" userName="Sarah Chen">
      <div className="p-8 max-w-4xl space-y-8">
        {/* Header */}
        <div>
          <Button variant="ghost" onClick={() => navigate('/graduate/my-projects')} className="mb-4">
            ← Back to My Projects
          </Button>
          <h1 className="text-3xl font-bold mb-2">Employer Feedback</h1>
          <p className="text-muted-foreground">{feedback.projectTitle} - {feedback.company}</p>
        </div>

        {/* Overall Rating */}
        <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${i < feedback.rating ? 'fill-yellow-400 text-yellow-400' : 'text-white/40'}`}
                />
              ))}
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{feedback.rating.toFixed(1)} / 5.0</div>
              <div className="text-lg text-white/90">Exceptional Performance</div>
            </div>
          </div>
        </Card>

        {/* Feedback */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4">Overall Feedback</h3>
          <div className="bg-muted/50 rounded-lg p-6">
            <p className="text-muted-foreground leading-relaxed italic">"{feedback.overallFeedback}"</p>
          </div>
        </Card>

        {/* Skill Ratings */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6">Skill Assessment</h3>
          <div className="space-y-6">
            {feedback.skills.map((skill, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`w-4 h-4 ${starIndex < skill.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{skill.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Performance Stats */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6">Performance Metrics</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div className="font-semibold mb-1">{feedback.stats.deliveryTime}</div>
              <div className="text-sm text-muted-foreground">Delivery Time</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold mb-1">{feedback.stats.revisions}</div>
              <div className="text-sm text-muted-foreground">Revisions</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <div className="font-semibold mb-1">{feedback.stats.responseTime}</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6">Earned Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <Badge variant="default" className="mb-2">New Badge</Badge>
                <div className="font-semibold mb-1">{feedback.badge}</div>
                <div className="text-sm text-muted-foreground">
                  Awarded for exceptional design quality and professionalism
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <Badge variant="default" className="mb-2">Certificate</Badge>
                <div className="font-semibold mb-1">{feedback.certificate}</div>
                <Button variant="outline" size="sm" className="mt-2">
                  <Download className="w-4 h-4 mr-2" />
                  Download Certificate
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button size="lg" onClick={() => navigate('/graduate/portfolio')} className="h-12 px-8">
            Add to Portfolio
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate('/graduate/my-projects')} className="h-12 px-8">
            Back to Projects
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
