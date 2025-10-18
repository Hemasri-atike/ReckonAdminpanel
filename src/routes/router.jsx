// src/routes/router.jsx
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';

// Lazy-loaded components
const App = lazy(() => import('../App.jsx')); // Adjusted path to root
const MainLayout = lazy(() => import('../layouts/main-layouts/MainLayout.jsx'));
const AuthLayout = lazy(() => import('../layouts/auth-layouts/AuthLayout.jsx'));
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard.jsx'));
const SignIn = lazy(() => import('../pages/authentication/SignIn.jsx'));
const SignUp = lazy(() => import('../pages/authentication/SignUp.jsx'));
const ResetPassword = lazy(() => import('../pages/authentication/ResetPassword.jsx'));
const Error404 = lazy(() => import('../pages/errors/Error404.jsx'));
const Splash = lazy(() => import('../components/loader/Splash.jsx'));
const PageLoader = lazy(() => import('../components/loader/PageLoader.jsx'));

// Define paths
const paths = {
  dashboard: '/dashboard',
  analytics: '/analytics',
  invoice: '/invoice',
  schedule: '/schedule',
  calendar: '/calendar',
  messages: '/messages',
  notification: '/notification',
  settings: '/settings',
  signin: '/signin',
  signup: '/signup',
  resetPassword: '/reset-password',
};

const rootPaths = {
  authRoot: '/auth',
};

const routes = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          { index: true, element: <Dashboard /> },
          { path: paths.dashboard, element: <Dashboard /> },
          { path: paths.analytics, element: <div className="p-4">Analytics Content</div> },
          { path: paths.invoice, element: <div className="p-4">Invoice Content</div> },
          { path: paths.schedule, element: <div className="p-4">Schedule Content</div> },
          { path: paths.calendar, element: <div className="p-4">Calendar Content</div> },
          { path: paths.messages, element: <div className="p-4">Messages Content</div> },
          { path: paths.notification, element: <div className="p-4">Notification Content</div> },
          { path: paths.settings, element: <div className="p-4">Settings Content</div> },
        ],
      },
      {
  path: rootPaths.authRoot, // '/auth'
  element: (
    <Suspense fallback={<Splash />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: 'signin', // ✅ relative to /auth → /auth/signin
      element: (
        <AuthLayout>
          <SignIn />
        </AuthLayout>
      ),
    },
    {
      path: 'signup', // ✅ → /auth/signup
      element: (
        <AuthLayout>
          <SignUp />
        </AuthLayout>
      ),
    },
    {
      path: 'reset-password', // ✅ → /auth/reset-password
      element: <ResetPassword />,
    },
  ],
},

      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;