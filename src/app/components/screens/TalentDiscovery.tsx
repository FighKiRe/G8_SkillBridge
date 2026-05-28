import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Search, Star, Award, Briefcase, Filter, GraduationCap, Mail } from 'lucide-react';

const candidates = [
  {
    id: 1,
    name: 'Sarah Chen',
    education: 'BS Computer Science, UP Diliman',
    skills: ['UI/UX Design', 'Figma', 'React', 'Tailwind CSS'],
    rating: 4.8,
    completedProjects: 12,
    certificates: 3,
    portfolioPreview: 'Specialized in modern web design with focus on user experience',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    education: 'BS Information Technology, Ateneo',
    skills: ['Web Development', 'Node.js', 'React', 'MongoDB'],
    rating: 4.9,
    completedProjects: 15,
    certificates: 5,
    portfolioPreview: 'Full-stack developer with strong backend expertise',
  },
  {
    id: 3,
    name: 'Emily Watson',
    education: 'BA Marketing, DLSU',
    skills: ['Marketing', 'Content Writing', 'Social Media', 'SEO'],
    rating: 4.7,
    completedProjects: 10,
    certificates: 2,
    portfolioPreview: 'Creative marketer with proven track record in digital campaigns',
  },
  {
    id: 4,
    name: 'James Lee',
    education: 'BS Computer Engineering, UST',
    skills: ['Data Analysis', 'Python', 'Excel', 'SQL'],
    rating: 4.6,
    completedProjects: 8,
    certificates: 4,
    portfolioPreview: 'Data-driven analyst with strong problem-solving skills',
  },
  {
    id: 5,
    name: 'Maria Santos',
    education: 'BA Communication Arts, UP Diliman',
    skills: ['Video Editing', 'Photography', 'Graphic Design'],
    rating: 4.8,
    completedProjects: 14,
    certificates: 3,
    portfolioPreview: 'Creative content creator with multimedia expertise',
  },
  {
    id: 6,
    name: 'David Kim',
    education: 'BS Software Engineering, Mapua',
    skills: ['Mobile Development', 'Flutter', 'Firebase', 'UI Design'],
    rating: 4.9,
    completedProjects: 11,
    certificates: 6,
    portfolioPreview: 'Mobile-first developer building innovative apps',
  },
];

export default function TalentDiscovery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         candidate.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         candidate.education.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = ratingFilter === 'all' || candidate.rating >= parseFloat(ratingFilter);
    return matchesSearch && matchesRating;
  });

  return (
    <DashboardLayout role="employer" userName="TechStart Inc.">
      <div className="p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Talent Discovery</h1>
          <p className="text-muted-foreground">Find and connect with talented graduates</p>
        </div>

        {/* Search and Filters */}
        <Card className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by name, skills, or education..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Minimum Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="4.5">4.5+ Stars</SelectItem>
                <SelectItem value="4.7">4.7+ Stars</SelectItem>
                <SelectItem value="4.8">4.8+ Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Found <span className="font-semibold text-foreground">{filteredCandidates.length}</span> candidates
          </p>
        </div>

        {/* Candidates Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredCandidates.map((candidate) => (
            <Card key={candidate.id} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-semibold flex-shrink-0">
                    {candidate.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{candidate.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4" />
                      <span>{candidate.education}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{candidate.rating}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{candidate.portfolioPreview}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {candidate.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted/50 rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="text-lg font-semibold">{candidate.completedProjects}</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Award className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="text-lg font-semibold">{candidate.certificates}</div>
                  <div className="text-xs text-muted-foreground">Certificates</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Star className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="text-lg font-semibold">{candidate.rating}</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline" className="flex-1">
                  View Portfolio
                </Button>
                <Button variant="outline">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button className="flex-1">
                  Invite to Project
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredCandidates.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No candidates found matching your criteria. Try adjusting your filters.</p>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
