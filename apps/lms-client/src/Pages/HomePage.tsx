import { Button } from '@cms/ui/components/button';
import { Card, CardContent } from '@cms/ui/components/card';
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router";
import SubNavigation from '../components/SubNavigation';
import { 
  getUserCourses, 
  getTrendingCourses, 
  getRecommendedTopics } from '../api/mockData';


const HomePage = () => {

  const userCourses = getUserCourses();
  const trendingCourses = getTrendingCourses();
  const recommendedTopics = getRecommendedTopics();

  const navigate = useNavigate();

  const handleTopicClick = (topic: string) => {
      navigate(`/courses?search=${encodeURIComponent(topic)}`);
  };

  return (
    <>
      <SubNavigation />
      <div className="min-h-screen bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Trending Courses Section */}
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Trending courses in Development
              </h2>
              <Button variant="outline" size="sm" asChild>
                <a href="/courses?category=Development">View All</a>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {trendingCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>

          {/* Topics Recommended for You */}
          <section className="mb-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6">
              Topics recommended for you
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {recommendedTopics.map((topic) => (
                <Card
                  key={topic}
                  className="cursor-pointer hover:shadow-md transition-shadow group"
                  onClick={() => handleTopicClick(topic)}
                >
                  <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {topic}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
