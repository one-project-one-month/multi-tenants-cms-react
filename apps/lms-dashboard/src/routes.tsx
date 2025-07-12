import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';
import { AuthenticatedLayout } from './components/Layout/authenticated-layout';
import { LoginAuthForm } from './features/auth/components/LoginAuthForm';

const Dashboard = lazy(() => import('./features/dashboard/app'));
const Course = lazy(() => import('./features/course/app'));
const Category = lazy(() => import('./features/category/app'));

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<p>Loading...</p>}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthenticatedLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: withSuspense(Dashboard),
      },
      {
        path: '/course',
        children: [
          {
            path: '',
            index: true,
            element: withSuspense(Course),
          },
          {
            path: 'create',
            element: <p>New Course</p>,
          },
          {
            path: ':id/edit',
            element: <p>Edit Course</p>,
          },
        ],
      },
      {
        path: '/category',
        children: [
          {
            path: '',
            index: true,
            element: withSuspense(Category),
          },
          {
            path: 'create',
            element: <p>New Category</p>,
          },
          {
            path: ':id/edit',
            element: <p>Edit Category</p>,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <LoginAuthForm />,
  },
  {
    path: '/logout',
  },
]);
