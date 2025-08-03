import { Badge, Captions, Settings, } from "lucide-react";
import { Star } from "lucide-react";
import { Button } from "@cms/ui/components/button";
import { useLocation, useNavigate } from "react-router";
import { useCourseStore } from '../store/course-store';

const CourseIntro = () => {

  const { courseData } = useCourseStore();

  console.log("course data ",courseData)
    // const location = useLocation();
    // const { data } = location.state || {};
    const navigate = useNavigate();

   // console.log(data);
        return (

          <>
            <div className="max-w-7xl mx-auto bg-black text-white p-6 space-y-4">
              <h1 className="text-3xl font-bold text-white">
                {/* Angular - The Complete Guide (2025 Edition) */}
                {courseData.course.name}
              </h1>

              <p className="text-gray-300">
                {/* Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the
                successor of Angular.js */}
                {courseData.course.description}
              </p>

              <div className="flex items-center space-x-4">
                <Badge className="bg-teal-500 text-white">Bestseller</Badge>

                <div className="flex items-center text-yellow-400">

                  <span className="font-semibold text-lg">
                    {courseData.course.rating.averageRating}
                  </span>
                  <Star className="w-4 h-4 ml-1 fill-yellow-400" />
                </div>
                <span className="text-gray-400">
                  {courseData.course.totalEnrolledStudents} enrolled
                </span>
              </div>


              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>⚙️Updated at {courseData?.course.updatedAt}</span>
                <span>🌐 English</span>
                <span> English [CC] </span>
              </div>
            </div>
            <Button onClick={() => navigate(`/course-lesson`)} className=" p-5">
              enrol
            </Button>
          </>
        );
};

export default CourseIntro;
