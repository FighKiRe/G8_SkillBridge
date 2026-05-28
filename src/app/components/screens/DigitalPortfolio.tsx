import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Award, Star, GraduationCap, Briefcase, Share2, Download, Mail, MapPin, Calendar } from 'lucide-react';

export default function DigitalPortfolio() {
  return (
    <DashboardLayout role="graduate" userName="Sarah Chen">
      <div className="p-8 space-y-8">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Digital Portfolio</h1>
            <p className="text-muted-foreground">Your professional profile and work showcase</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button>
              <Share2 className="w-4 h-4 mr-2" />
              Share Portfolio
            </Button>
          </div>
        </div>

        {/* Profile Card */}
        <Card className="p-8">
          <div className="flex items-start space-x-6">
            <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
              SC
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">Sarah Chen</h2>
              <p className="text-xl text-muted-foreground mb-4">UI/UX Designer & Web Developer</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>sarah.chen@email.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Manila, Philippines</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined May 2025</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Recent graduate passionate about creating intuitive and beautiful digital experiences.
                Completed 12 real-world projects through SkillBridge, gaining hands-on experience in
                UI/UX design, web development, and digital marketing. Eager to contribute to innovative
                teams and continue growing as a designer and developer.
              </p>
            </div>
          </div>
        </Card>

        {/* Stats Row */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold mb-1">12</div>
            <div className="text-sm text-muted-foreground">Completed Projects</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="text-3xl font-bold">4.8</span>
            </div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold mb-1">8</div>
            <div className="text-sm text-muted-foreground">Companies Worked With</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold mb-1">156</div>
            <div className="text-sm text-muted-foreground">Hours of Experience</div>
          </Card>
        </div>

        {/* Skills & Certifications */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <span>Skills</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {['UI/UX Design', 'Figma', 'Web Development', 'React', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'User Research'].map((skill, i) => (
                <Badge key={i} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center space-x-2">
              <Award className="w-5 h-5 text-accent" />
              <span>Certifications & Badges</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium">Top Designer</div>
                    <div className="text-xs text-muted-foreground">TechStart Inc.</div>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Web Development - Advanced</div>
                    <div className="text-xs text-muted-foreground">DevCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Education */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6 flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span>Educational Attainment</span>
          </h3>
          <div className="space-y-6">
            <div>
              <div className="font-semibold text-lg">Bachelor of Science in Computer Science</div>
              <div className="text-muted-foreground mb-2">University of the Philippines - Diliman</div>
              <div className="text-sm text-muted-foreground">2021 - 2025 • GPA: 3.7/4.0</div>
            </div>
          </div>
        </Card>

        {/* Completed Projects */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6 flex items-center space-x-2">
            <Briefcase className="w-5 h-5 text-primary" />
            <span>Completed Projects</span>
          </h3>
          <div className="space-y-6">
            {[
              {
                title: 'Landing Page Design',
                company: 'TechStart Inc.',
                date: 'May 2026',
                rating: 5,
                description: 'Created a modern, conversion-focused landing page for a SaaS product',
              },
              {
                title: 'REST API Development',
                company: 'DevCorp',
                date: 'April 2026',
                rating: 4.5,
                description: 'Built a secure RESTful API with authentication and database integration',
              },
              {
                title: 'Logo & Brand Identity',
                company: 'BrandWorks',
                date: 'March 2026',
                rating: 5,
                description: 'Designed complete brand identity including logo, color palette, and guidelines',
              },
            ].map((project, i) => (
              <div key={i}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{project.title}</div>
                    <div className="text-sm text-muted-foreground">{project.company} • {project.date}</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{project.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                {i < 2 && <Separator />}
              </div>
            ))}
          </div>
        </Card>

        {/* Employer Ratings */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6">Employer Ratings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Design Quality</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">5.0</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Communication</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">4.9</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Timeliness</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">4.7</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Professionalism</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
