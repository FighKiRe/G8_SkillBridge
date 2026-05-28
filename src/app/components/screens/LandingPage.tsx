import { Link } from 'react-router';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Briefcase, Target, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold text-foreground">SkillBridge</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Supporting SDG 8: Decent Work and Economic Growth
            </div>
            <h1 className="text-6xl font-bold leading-tight">
              Build Experience.<br />
              Build Your Future.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bridge the gap between education and employment. Gain real-world experience through
              micro-projects, build your portfolio, and get discovered by top employers.
            </p>
            <div className="flex items-center space-x-4">
              <Button size="lg" asChild className="h-14 px-8 text-base">
                <Link to="/register">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base">
                <Link to="/login">Login</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-foreground">1,500+</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">5,000+</div>
                <div className="text-sm text-muted-foreground">Graduates</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">250+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
              <div className="w-4/5 h-4/5 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <Briefcase className="w-32 h-32 text-primary" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How SkillBridge Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A modern platform designed to solve unemployment and skills mismatch among fresh graduates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Complete Micro-Projects</h3>
              <p className="text-muted-foreground leading-relaxed">
                Work on real-world projects posted by companies. Gain practical experience in your field.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gain Real Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build valuable work experience even without formal employment. Perfect for fresh graduates.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Build Digital Portfolio</h3>
              <p className="text-muted-foreground leading-relaxed">
                Showcase your work, certificates, and employer feedback in a professional portfolio.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Discovered</h3>
              <p className="text-muted-foreground leading-relaxed">
                Top employers search our talent pool. Get project invitations and job opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">For Fresh Graduates</h2>
            <div className="space-y-4">
              {[
                'Solve unemployment through practical experience',
                'Bridge the gap between education and industry',
                'Overcome "no experience" barrier to employment',
                'Build a portfolio that showcases real work',
                'Earn certificates and employer endorsements',
                'Get discovered by hiring companies'
              ].map((benefit, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="p-12 bg-gradient-to-br from-primary to-primary/80 text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Start?</h3>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of graduates building their careers through real-world projects.
            </p>
            <Button size="lg" variant="secondary" asChild className="h-14 px-8 text-base">
              <Link to="/register">Create Free Account</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">SkillBridge</span>
            </div>
            <p className="text-muted-foreground">© 2026 SkillBridge. Building futures together.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
