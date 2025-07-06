import { lazy, Suspense } from 'react';
import { createBrowserRouter, redirect } from 'react-router';
import RootLayout from './components/RootLayout';
import Loading from './components/Loading';
import { HomeLoader } from './router/loader/data-loader';
import { AuthLoader, loginLoader } from './router/loader/auth-loader';
import { LoginAction } from './router/action/auth-action';
import Error from './page/Error';

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
    // loader: AuthLoader,
    errorElement: <Error />,
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
    path: '/login',
    element: <LoginPage />,
    loader: loginLoader,
    action: LoginAction,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    loader: loginLoader,
  },
  {
    path: '/logout',

    loader: () => redirect('/'),
  },
]);
