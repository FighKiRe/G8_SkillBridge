import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Code, Palette, TrendingUp, PenTool, Video, FileText, Database, Camera } from 'lucide-react';

const skills = [
  { id: 1, name: 'UI/UX Design', icon: Palette },
  { id: 2, name: 'Web Development', icon: Code },
  { id: 3, name: 'Graphic Design', icon: PenTool },
  { id: 4, name: 'Marketing', icon: TrendingUp },
  { id: 5, name: 'Writing', icon: FileText },
  { id: 6, name: 'Video Editing', icon: Video },
  { id: 7, name: 'Data Entry', icon: Database },
  { id: 8, name: 'Photography', icon: Camera },
];

export default function SkillsSelection() {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);

  const toggleSkill = (skillId: number) => {
    setSelectedSkills(prev =>
      prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleContinue = () => {
    navigate('/graduate/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">What are your skills?</h1>
          <p className="text-xl text-muted-foreground">Select all that apply. You can update these later.</p>
        </div>

        <Card className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => {
              const Icon = skill.icon;
              const isSelected = selectedSkills.includes(skill.id);
              return (
                <button
                  key={skill.id}
                  onClick={() => toggleSkill(skill.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-primary bg-primary text-white'
                      : 'border-border bg-white hover:border-primary/50'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <Icon className="w-8 h-8" strokeWidth={2} />
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedSkills.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <p className="text-sm font-medium mb-3">Selected Skills ({selectedSkills.length})</p>
              <div className="flex flex-wrap gap-2">
                {selectedSkills.map(skillId => {
                  const skill = skills.find(s => s.id === skillId);
                  return skill ? (
                    <Badge key={skillId} variant="default" className="px-3 py-1">
                      {skill.name}
                    </Badge>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </Card>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleContinue}
            disabled={selectedSkills.length === 0}
            className="h-12 px-8 text-base"
          >
            Continue to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
