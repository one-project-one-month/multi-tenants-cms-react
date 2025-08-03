//import { useSuspenseQuery } from '@tanstack/react-query';
import { Button } from '@cms/ui/components/button';
import { Header } from '../../components/Layout/Header';
import { Main } from '../../components/Layout/main';
import { ProfileDropdown } from '../../components/profile-dropdown';
import { Search } from '../../components/search';
import { OwnerDialogs } from './actions/category-dialog';
import columns from './components/column';
import { DataTable } from './components/data-table';
import { CategoryProvider } from './context/category-context';
//import { FetchOwnerQuery } from '@lms/data';
import { Plus } from 'lucide-react';
import { Link } from 'react-router';
import { useCategoryStore } from '../../store/categoryStore';

const CategoryApp = () => {
  //const { data: categoryData } = useSuspenseQuery(FetchOwnerQuery());
  const categories = useCategoryStore((state) => state.categories);
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
            <Link to='create'>
            <Button>
              <Plus/> Create
            </Button>
            </Link>
          </div>

          <div>
            <DataTable data={categories} columns={columns} />
          </div>
        </div>
      </Main>
      <OwnerDialogs />
    </CategoryProvider>
  );
};

export default CategoryApp;
