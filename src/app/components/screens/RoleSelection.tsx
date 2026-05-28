import { useNavigate } from 'react-router';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { GraduationCap, Building2 } from 'lucide-react';

export default function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to SkillBridge!</h1>
          <p className="text-xl text-muted-foreground">How would you like to continue?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => navigate('/graduate/dashboard')}>
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <GraduationCap className="w-12 h-12 text-primary" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Continue as Graduate</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Browse projects, build experience, create your portfolio, and get discovered by employers.
                </p>
              </div>
              <Button className="w-full h-12 text-base" onClick={() => navigate('/graduate/dashboard')}>
                Enter Graduate Dashboard
              </Button>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => navigate('/employer/dashboard')}>
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Building2 className="w-12 h-12 text-accent" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Continue as Employer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Post micro-projects, discover talent, manage applications, and build your team.
                </p>
              </div>
              <Button className="w-full h-12 text-base" onClick={() => navigate('/employer/dashboard')}>
                Enter Employer Dashboard
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
