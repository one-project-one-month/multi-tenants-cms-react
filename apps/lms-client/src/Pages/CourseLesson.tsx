import { VideoPlayer } from '../components/VideoPlayer';
import { VideoLists } from '../components/VideoLists';
import CourseDescription from '../components/CourseDetail';
import { mockCourseDetail } from '../api/mockCourseDetail';

const CourseLesson = () => {
  return (
    <div>
      <div className="container flex min-h-screen justify-between gap-3">
        <div className="w-2/3 border-r">
          <VideoPlayer />
          <CourseDescription data={mockCourseDetail} />
        </div>

        <div className="w-1/3">
          <VideoLists />
        </div>
      </div>
    </div>
  );
};

export default CourseLesson;
