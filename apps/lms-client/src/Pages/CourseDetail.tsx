import CourseContent from '../components/CourseContent';
import CourseIntro from '../components/CourseIntro';
import InstructorSection from '../components/InstructorSection';

const CourseDetail = () => {
  return (
    <div className=''>
      <div>
        <CourseIntro />
      </div>
      <>  
        <div className="max-w-xl px-8 ml-80">
          "This is the part of content details"
          <CourseContent />
          <InstructorSection/>
        </div>
        
      </>
    </div>
  );
};

export default CourseDetail;
