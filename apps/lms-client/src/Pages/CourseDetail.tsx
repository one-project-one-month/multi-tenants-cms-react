import CourseContent from '../components/CourseContent';
import CourseIntro from '../components/CourseIntro';
import InstructorSection from '../components/InstructorSection';

const CourseDetail = () => {
  return (
    <div>
      <div>
        <CourseIntro />
      </div>
      <>  
        "This is the part of content details"
        <div className="max-w-xl mx-auto p-8">
          <CourseContent />
        </div>
        <InstructorSection/>
      </>
    </div>
  );
};

export default CourseDetail;
