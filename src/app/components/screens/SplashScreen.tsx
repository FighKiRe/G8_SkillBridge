import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Briefcase } from 'lucide-react';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <Briefcase className="w-10 h-10 text-primary" strokeWidth={2.5} />
          </div>
          <h1 className="text-5xl font-bold text-white">SkillBridge</h1>
        </div>
        <p className="text-xl text-white/90 font-medium">Build Experience. Build Your Future.</p>
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
