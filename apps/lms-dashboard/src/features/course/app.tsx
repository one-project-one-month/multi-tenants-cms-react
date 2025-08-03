import { Header } from '../../components/Layout/Header';
import { Main } from '../../components/Layout/main';
import { ProfileDropdown } from '../../components/profile-dropdown';
import { Search } from '../../components/search';
import { DataTable } from './components/data-table';
import columns from './components/column';
// import { useSuspenseQuery } from '@tanstack/react-query';
// import { FetchCourseQuery } from '../../../../../packages/data/src/lms-dashboard-query/query';
import { mockCourses } from './data/mockData';
import { CourseDialogs } from './actions/course-dialog';
import { CourseProvider } from './context/course-context';
import { AddCourse } from './actions/add-course-btn';


const CourseApp = () => {
 // const { data : courseLists } = useSuspenseQuery(FetchCourseQuery());

 // const data = courseLists.data || mockCourses;
 // console.log(courseLists)
  const data = mockCourses;
  return (
    <CourseProvider>
      <Header>
        <Search />
        <div className="ml-auto flex items-center gap-4">
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <div className="mb-2 space-y-4 ">
          <div className="flex justify-between items-center space-x-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">Course Lists</h1>
              <p className="text-muted-foreground">Here&apos;s a list of Courses</p>
            </div>
            <AddCourse />
          </div>

          <div>
            <DataTable data={data} columns={columns} />
            <CourseDialogs />
          </div>
          
        </div>
      </Main>
    </CourseProvider>
  );
};

export default CourseApp;
