import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Camera, Save } from 'lucide-react';
import { toast } from 'sonner';

const availableSkills = [
  'UI/UX Design',
  'Web Development',
  'Graphic Design',
  'Marketing',
  'Writing',
  'Video Editing',
  'Photography',
  'Data Entry',
];

export default function ProfileSettings() {
  const [selectedSkills, setSelectedSkills] = useState(['UI/UX Design', 'Web Development', 'Figma']);
  const [formData, setFormData] = useState({
    firstName: 'Sarah',
    lastName: 'Chen',
    email: 'sarah.chen@email.com',
    phone: '+63 912 345 6789',
    location: 'Manila, Philippines',
    bio: 'Recent graduate passionate about creating intuitive and beautiful digital experiences.',
    university: 'University of the Philippines - Diliman',
    degree: 'Bachelor of Science in Computer Science',
    graduationYear: '2025',
  });
  const [notifications, setNotifications] = useState({
    emailNewProjects: true,
    emailMessages: true,
    emailApplicationUpdates: true,
    emailWeeklySummary: false,
  });

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSave = () => {
    toast.success('Profile updated successfully!');
  };

  return (
    <DashboardLayout role="graduate" userName="Sarah Chen">
      <div className="p-8 space-y-8 max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your account information and preferences</p>
        </div>

        {/* Profile Picture */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6">Profile Picture</h3>
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
              SC
            </div>
            <div>
              <Button variant="outline">
                <Camera className="w-4 h-4 mr-2" />
                Upload Photo
              </Button>
              <p className="text-sm text-muted-foreground mt-2">JPG, PNG or GIF. Max size 2MB.</p>
            </div>
          </div>
        </Card>

        {/* Personal Information */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6">Personal Information</h3>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={4}
              />
            </div>
          </div>
        </Card>

        {/* Education */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6">Educational Attainment</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="university">University / College</Label>
              <Input
                id="university"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="degree">Degree</Label>
                <Input
                  id="degree"
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input
                  id="graduationYear"
                  value={formData.graduationYear}
                  onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Skills */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {availableSkills.map((skill) => {
              const isSelected = selectedSkills.includes(skill);
              return (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                    isSelected
                      ? 'border-primary bg-primary text-white'
                      : 'border-border bg-white hover:border-primary/50'
                  }`}
                >
                  {skill}
                </button>
              );
            })}
          </div>
          <div className="mt-6 pt-6 border-t">
            <p className="text-sm font-medium mb-3">Selected Skills ({selectedSkills.length})</p>
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map(skill => (
                <Badge key={skill} variant="default" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6">Notification Preferences</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium mb-1">New Project Matches</div>
                <div className="text-sm text-muted-foreground">Get notified about projects matching your skills</div>
              </div>
              <Switch
                checked={notifications.emailNewProjects}
                onCheckedChange={(checked) => setNotifications({ ...notifications, emailNewProjects: checked })}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium mb-1">Messages</div>
                <div className="text-sm text-muted-foreground">Get notified when employers send you messages</div>
              </div>
              <Switch
                checked={notifications.emailMessages}
                onCheckedChange={(checked) => setNotifications({ ...notifications, emailMessages: checked })}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium mb-1">Application Updates</div>
                <div className="text-sm text-muted-foreground">Get notified about application status changes</div>
              </div>
              <Switch
                checked={notifications.emailApplicationUpdates}
                onCheckedChange={(checked) => setNotifications({ ...notifications, emailApplicationUpdates: checked })}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium mb-1">Weekly Summary</div>
                <div className="text-sm text-muted-foreground">Receive a weekly summary of your activity</div>
              </div>
              <Switch
                checked={notifications.emailWeeklySummary}
                onCheckedChange={(checked) => setNotifications({ ...notifications, emailWeeklySummary: checked })}
              />
            </div>
          </div>
        </Card>

        {/* Password */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6">Change Password</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
            <Button variant="outline">Update Password</Button>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex items-center justify-between">
          <Button variant="outline" size="lg">Cancel</Button>
          <Button size="lg" onClick={handleSave} className="h-12 px-8">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        {/* Danger Zone */}
        <Card className="p-6 border-destructive/50">
          <h3 className="font-semibold text-lg text-destructive mb-4">Danger Zone</h3>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium mb-1">Delete Account</div>
              <div className="text-sm text-muted-foreground">Permanently delete your account and all data</div>
            </div>
            <Button variant="destructive" size="lg">
              Delete Account
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
