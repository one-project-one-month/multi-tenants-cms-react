import { lazy, Suspense } from 'react';
import { createBrowserRouter, redirect } from 'react-router';
import RootLayout from './components/RootLayout';
import Loading from './components/Loading';
import { HomeLoader } from './router/loader/data-loader';
import AuthLayout from './features/auth/components/AuthLayout';

const LandingPage = lazy(() => import('./page/index'));
const LoginPage = lazy(() => import('./features/auth/login'));
const RegisterPage = lazy(() => import('./features/auth/register'));

const withSuspense = (Component: React.ComponentType) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: withSuspense(LandingPage),
        loader: HomeLoader,
      },
      {
        path: 'about',
        element: <div>About</div>,
      },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: 'login',
        element: withSuspense(LoginPage),
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: '/logout',

    loader: () => redirect('/'),
  },
]);
