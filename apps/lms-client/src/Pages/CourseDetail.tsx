import CourseContent from '../components/CourseContent';
import CourseIntro from '../components/CourseIntro';
import InstructorSection from '../components/InstructorSection';
import CourseDetailInfo from '../components/CourseDetailBefore';
import { mockCourseDetailResponse } from '../api/mockDataCourse';

const CourseDetail = () => {
  return (
    <div className=''>
      <div>
        <CourseIntro />
      </div>

      <>  
        <div className="max-w-xl px-8 ml-80">
          <CourseDetailInfo courseDetail={mockCourseDetailResponse} />
          <CourseContent />
          <InstructorSection/>
        </div>
      </>
    </div>
  );
};

export default CourseDetail;
