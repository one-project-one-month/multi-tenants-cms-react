import CourseContent from '../components/CourseContent';
import CourseIntro from '../components/CourseIntro';
import InstructorSection from '../components/InstructorSection';
import CourseDetailInfo from '../components/CourseDetailBefore';
import { mockCourseDetailResponse } from '../api/mockDataCourse';

const CourseDetail = () => {
  return (
    <div>
      <div>
        <CourseIntro />
      </div>
      <>
        <div>
          <CourseDetailInfo courseDetail={mockCourseDetailResponse} />
        </div>
        <div className="max-w-xl mx-auto p-8">
          <CourseContent />
        </div>
        <InstructorSection />
      </>
    </div>
  );
};

export default CourseDetail;
