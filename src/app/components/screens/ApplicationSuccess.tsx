import { useNavigate } from 'react-router';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { CheckCircle } from 'lucide-react';

export default function ApplicationSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <Card className="max-w-lg w-full p-12 text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-accent" strokeWidth={2} />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold">Application Submitted!</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You successfully applied to this micro-project. The employer will review your application and
            portfolio, and you'll receive a notification when they respond.
          </p>
        </div>

        <div className="pt-6 space-y-3">
          <Button size="lg" onClick={() => navigate('/graduate/my-projects')} className="w-full h-12">
            Go to My Projects
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate('/graduate/dashboard')} className="w-full h-12">
            Return to Dashboard
          </Button>
        </div>
      </Card>
    </div>
  );
}
