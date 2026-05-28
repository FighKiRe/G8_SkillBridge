import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Upload, File, X } from 'lucide-react';
import { toast } from 'sonner';

export default function UploadOutput() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<string[]>([]);

  const handleFileAdd = () => {
    setFiles([...files, `design-mockup-${files.length + 1}.fig`]);
  };

  const handleFileRemove = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Project output submitted successfully!');
    setTimeout(() => {
      navigate('/graduate/my-projects');
    }, 1500);
  };

  return (
    <DashboardLayout role="graduate" userName="Sarah Chen">
      <div className="p-8 max-w-4xl space-y-8">
        {/* Header */}
        <div>
          <Button variant="ghost" onClick={() => navigate('/graduate/my-projects')} className="mb-4">
            ← Back to My Projects
          </Button>
          <h1 className="text-3xl font-bold mb-2">Upload Project Output</h1>
          <p className="text-muted-foreground">Design a Landing Page - TechStart Inc.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload */}
          <Card className="p-8">
            <Label className="text-lg mb-4 block">Project Files</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground">
                    Figma files, PDFs, images, or zip archives (max 50MB)
                  </p>
                </div>
                <Button type="button" onClick={handleFileAdd}>
                  Select Files
                </Button>
              </div>
            </div>

            {files.length > 0 && (
              <div className="mt-6 space-y-2">
                <Label className="text-sm">Uploaded Files ({files.length})</Label>
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <File className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{file}</div>
                        <div className="text-xs text-muted-foreground">2.4 MB</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleFileRemove(index)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Description */}
          <Card className="p-6">
            <div className="space-y-3">
              <Label htmlFor="description" className="text-lg">
                Project Description
              </Label>
              <p className="text-sm text-muted-foreground">
                Describe your work, approach, and any important details the employer should know
              </p>
              <Textarea
                id="description"
                placeholder="I created a modern landing page design that focuses on conversion and user engagement. The design includes..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                required
              />
            </div>
          </Card>

          {/* Submit */}
          <Card className="p-6 bg-gradient-to-r from-primary to-primary/80 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-1">Ready to Submit?</h3>
                <p className="text-white/90 text-sm">
                  Make sure you've uploaded all deliverables before submitting
                </p>
              </div>
              <Button
                type="submit"
                size="lg"
                variant="secondary"
                disabled={files.length === 0 || !description}
                className="h-12 px-8"
              >
                Submit for Review
              </Button>
            </div>
          </Card>
        </form>
      </div>
    </DashboardLayout>
  );
}
