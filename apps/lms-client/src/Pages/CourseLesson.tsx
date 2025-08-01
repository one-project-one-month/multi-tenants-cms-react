import { VideoPlayer } from '../components/VideoPlayer';
import { VideoLists } from '../components/VideoLists';

const CourseLesson = () => {
  return (
    <div>
      <div className="container flex h-screen justify-between gap-3">
        <div className="w-2/3 border-r">
          <VideoPlayer />
        </div>
        <div className="w-1/3">
          <VideoLists />
        </div>
      </div>
    </div>
  );
};

export default CourseLesson;
