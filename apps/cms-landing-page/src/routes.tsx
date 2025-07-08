import { lazy, Suspense } from 'react';
import { createBrowserRouter, redirect } from 'react-router';
import RootLayout from './components/RootLayout';
import Loading from './components/Loading';
import { HomeLoader } from './router/loader/data-loader';
import { loginLoader } from './router/loader/auth-loader';
import { LoginAction } from './router/action/auth-action';
import Error from './page/Error';
import AuthLayout from './features/auth/components/AuthLayout';

const LandingPage = lazy(() => import('./page/index'));
const LoginPage = lazy(() => import('./features/auth/login'));
const RegisterPage = lazy(() => import('./features/auth/register'));
const PageRequestForm = lazy(() => import('./features/page-request/page-request-form'));

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
        errorElement: <Error />,
      },
      {
        path: 'about',
        element: <div>About</div>,
        errorElement: <Error />,
      },
      {
        path: '/page-request',
        element: withSuspense(PageRequestForm),
        errorElement: <Error />,
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
        loader: loginLoader,
        action: LoginAction,
        errorElement: <Error />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
        loader: loginLoader,
        errorElement: <Error />,
      },
    ],
  },

  {},
  {
    path: '/logout',

    loader: () => redirect('/'),
  },
]);
