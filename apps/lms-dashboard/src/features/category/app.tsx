//import { useSuspenseQuery } from '@tanstack/react-query';
import { Header } from '../../components/Layout/Header';
import { Main } from '../../components/Layout/main';
import { ProfileDropdown } from '../../components/profile-dropdown';
import { Search } from '../../components/search';
import { OwnerDialogs } from './actions/category-dialog';
import columns from './components/column';
import { DataTable } from './components/data-table';
import { CategoryProvider } from './context/category-context';
//import { FetchOwnerQuery } from '@lms/data';
import { mockCategory } from './data/mockData';

const CategoryApp = () => {
  //const { data: categoryData } = useSuspenseQuery(FetchOwnerQuery());

  return (
    <CategoryProvider>
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
              <h1 className="text-2xl font-bold tracking-tight">Category Lists</h1>
              <p className="text-muted-foreground">Here&apos;s a list of Category</p>
            </div>
            {/* <AddCategory /> */}
          </div>

          <div>
            <DataTable data={mockCategory} columns={columns} />
          </div>
        </div>
      </Main>
      <OwnerDialogs />
    </CategoryProvider>
  );
};

export default CategoryApp;
