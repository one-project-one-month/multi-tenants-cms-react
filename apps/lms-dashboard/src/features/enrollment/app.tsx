import { useSuspenseQuery } from '@tanstack/react-query';
import { Header } from '../../components/Layout/Header';
import { Main } from '../../components/Layout/main';
import { ProfileDropdown } from '../../components/profile-dropdown';
import { Search } from '../../components/search';
import columns from './components/column';
import { DataTable } from './components/data-table';
import { EnrollmentProvider } from './context/enrollment-context';
import { mockEnrollments } from './data/mockData';
import { FetchEnrollmentQuery } from '../../../../../packages/data/src/lms-dashboard-query/query';

const EnrollmentApp = () => {
  // const data = mockEnrollments;
  const {data : enrollmentData} = useSuspenseQuery(FetchEnrollmentQuery())
  return (
    <EnrollmentProvider>
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
              <h1 className="text-2xl font-bold tracking-tight">Enrollment Lists</h1>
              <p className="text-muted-foreground">Here&apos;s a list of Enrollments</p>
            </div>
          </div>
          <div>
            <DataTable data={enrollmentData.data} columns={columns} />
          </div>
        </div>
      </Main>
    </EnrollmentProvider>
  );
};

export default EnrollmentApp;