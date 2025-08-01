import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter } from 'lucide-react';
import { Button } from '@cms/ui/components/button';
import { Card, CardContent, CardHeader, CardTitle } from '@cms/ui/components/card';
import { Checkbox } from '@cms/ui/components/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@cms/ui/components/select';
import { Separator } from '@cms/ui/components/separator';
import CourseCard from '../components/CourseCard';
import { getAllCourses } from '../api/mockData';
import type { Course } from '../store/wishlistStore';

const categories = [
  'Development',
  'Business',
  'Finance & Accounting',
  'IT & Software',
  'Design',
  'Marketing',
  'Photography',
  'Health & Fitness',
  'Music',
  'Teaching',
];

const ratingFilters = [
  { label: '4.5 & up', value: 4.5 },
  { label: '4.0 & up', value: 4.0 },
  { label: '3.5 & up', value: 3.5 },
  { label: '3.0 & up', value: 3.0 },
];

const sortOptions = [
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-low' },
  { label: 'Price: High to Low', value: 'price-high' },
];

export default function ExplorePage() {
  const [searchParams] = useSearchParams();
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('popular');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    const allCourses = getAllCourses();
    setCourses(allCourses);

    // Apply initial filters based on URL params
    let filtered = [...allCourses];

    const category = searchParams.get('category');
    const search = searchParams.get('search');

    if (category) {
      filtered = filtered.filter((course) => course.category === category);
      setSelectedCategories([category]);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchLower) ||
          course.description.toLowerCase().includes(searchLower) ||
          course.instructor.toLowerCase().includes(searchLower)
      );
    }

    setFilteredCourses(filtered);
  }, [searchParams]);

  useEffect(() => {
    let filtered = [...courses];

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((course) => selectedCategories.includes(course.category));
    }

    // Apply rating filter
    if (selectedRating) {
      filtered = filtered.filter((course) => course.rating >= selectedRating);
    }

    // Apply sorting
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Assuming newer courses have higher IDs
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        // Most popular (by reviews)
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    setFilteredCourses(filtered);
  }, [courses, selectedCategories, selectedRating, sortBy]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((c) => c !== category)
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedRating(null);
    setSortBy('popular');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full mb-4"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters ({selectedCategories.length + (selectedRating ? 1 : 0)})
            </Button>
          </div>

          {/* Filters Sidebar */}
          <div className={`lg:w-72 xl:w-80 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Filters</CardTitle>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Rating Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Rating</h3>
                  <div className="space-y-2">
                    {ratingFilters.map((filter) => (
                      <div key={filter.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={`rating-${filter.value}`}
                          checked={selectedRating === filter.value}
                          onCheckedChange={(checked) =>
                            setSelectedRating(checked ? filter.value : null)
                          }
                        />
                        <label htmlFor={`rating-${filter.value}`} className="text-sm">
                          {filter.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Category Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Topic</h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) =>
                            handleCategoryChange(category, checked as boolean)
                          }
                        />
                        <label htmlFor={category} className="text-sm">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course List */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                {filteredCourses.length} courses found
              </h1>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <span className="text-sm text-gray-600 hidden sm:inline">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} variant="list" />
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No courses found matching your filters.</p>
                <Button variant="outline" onClick={clearFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
