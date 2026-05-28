import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Search, Clock, Award, Building2, Filter } from 'lucide-react';
import { Link } from 'react-router';

const allProjects = [
  {
    id: 1,
    title: 'Design a Landing Page',
    company: 'TechStart Inc.',
    duration: '2 weeks',
    difficulty: 'Intermediate',
    reward: 'Certificate',
    skills: ['UI/UX Design', 'Figma'],
    description: 'Create a modern landing page for a SaaS product',
  },
  {
    id: 2,
    title: 'Social Media Campaign',
    company: 'Marketing Pro',
    duration: '1 week',
    difficulty: 'Beginner',
    reward: 'Badge + Certificate',
    skills: ['Marketing', 'Content Writing'],
    description: 'Develop and execute a social media campaign',
  },
  {
    id: 3,
    title: 'Build a REST API',
    company: 'DevCorp',
    duration: '3 weeks',
    difficulty: 'Advanced',
    reward: 'Certificate + Portfolio Feature',
    skills: ['Web Development', 'Node.js'],
    description: 'Create a RESTful API with authentication',
  },
  {
    id: 4,
    title: 'Logo Design for Startup',
    company: 'BrandWorks',
    duration: '1 week',
    difficulty: 'Beginner',
    reward: 'Certificate',
    skills: ['Graphic Design', 'Branding'],
    description: 'Design a professional logo and brand identity',
  },
  {
    id: 5,
    title: 'Product Photography',
    company: 'E-Commerce Solutions',
    duration: '2 weeks',
    difficulty: 'Intermediate',
    reward: 'Certificate + Payment',
    skills: ['Photography', 'Editing'],
    description: 'Shoot and edit product photos for online store',
  },
  {
    id: 6,
    title: 'Video Tutorial Series',
    company: 'EduTech',
    duration: '4 weeks',
    difficulty: 'Advanced',
    reward: 'Certificate + Bonus',
    skills: ['Video Editing', 'Teaching'],
    description: 'Create educational video content for online course',
  },
];

export default function ProjectMarketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDifficulty = difficultyFilter === 'all' || project.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <DashboardLayout role="graduate" userName="Sarah Chen">
      <div className="p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Project Marketplace</h1>
          <p className="text-muted-foreground">Browse and apply to micro-projects from top companies</p>
        </div>

        {/* Search and Filters */}
        <Card className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search projects, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.company}</p>
                  </div>
                </div>
                <Badge
                  variant={project.difficulty === 'Beginner' ? 'secondary' : project.difficulty === 'Intermediate' ? 'default' : 'destructive'}
                >
                  {project.difficulty}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, i) => (
                  <Badge key={i} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>{project.reward}</span>
                  </div>
                </div>
                <Button asChild>
                  <Link to={`/graduate/projects/${project.id}`}>View Details</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No projects found matching your criteria. Try adjusting your filters.</p>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
