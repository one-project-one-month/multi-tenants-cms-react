import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
//import { LoginAuthForm } from './features/auth/components/LoginAuthForm';
const About = lazy(() => import('./features/about/app'));
const Client = lazy(() => import('./features/client/app'));
const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<p>Loading...</p>}>
    <Component />
  </Suspense>
);
export const router = createBrowserRouter([
  {
    path: '/about',
    children: [
      {
        path: '',
        index: true,
        element: withSuspense(About),
      },
    ],
  },
  {
    path: '/client',
    children: [
      {
        path: '',
        index: true,
        element: withSuspense(Client),
      },
    ],
  },
]);
