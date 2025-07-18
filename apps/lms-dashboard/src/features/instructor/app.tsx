import { Header } from '../../components/Layout/Header';
import { Main } from '../../components/Layout/main';
import { ProfileDropdown } from '../../components/profile-dropdown';
import { Search } from '../../components/search';
import { InstructorDialogs } from './actions/instructor-dialog';
import columns from './components/column';
import { DataTable } from './components/data-table';
import { InstructorProvider } from './context/instructor-context';
import { mockInstructors } from './data/mockData';

const InstructorApp = () => {
  const data = mockInstructors;
  return (
    <InstructorProvider>
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
              <h1 className="text-2xl font-bold tracking-tight">Instructor Lists</h1>
              <p className="text-muted-foreground">Here&apos;s a list of Instructors</p>
            </div>
          </div>
          <div>
            <DataTable data={data} columns={columns} />
          </div>
        </div>
      </Main>
      <InstructorDialogs />
    </InstructorProvider>
  );
};

export default InstructorApp;