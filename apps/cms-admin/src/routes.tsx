import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';
import { AuthenticatedLayout } from './components/Layout/authenticated-layout';
import { LoginAuthForm } from './features/auth/components/LoginAuthForm';
import userListing from './features/report/components/userListing';

const Dashboard = lazy(() => import('./features/dashboard/app'));
const Owner = lazy(() => import('./features/owner/app'));
const PageRequest = lazy(() => import('./features/page-request/app'));
const Report = lazy(() => import('./features/report/app'));

// Wrapper component for lazy loading with suspense
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
        path: '/owner',
        children: [
          {
            path: '',
            index: true,
            element: withSuspense(Owner),
          },
          {
            path: 'create',
            element: <p>New Owner</p>,
          },
          {
            path: ':id/edit',
            element: <p>Edit Owner</p>,
          },
        ],
      },
      {
        path: '/page-request',
        element: withSuspense(PageRequest),
      },
      {
        path: '/report',
        element: withSuspense(Report),
      },
      {
        path: '/userListing',
        element: withSuspense(userListing),
      },
    ],
  },
  {
    path: '/login',
    element: <LoginAuthForm />, // Login is not lazy-loaded as it's usually needed immediately
  },
  {
    path: '/logout',
  },
]);
