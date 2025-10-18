// src/paths.js
const rootPaths = {
  root: '/',
  pageRoot: 'pages',
  authRoot: 'auth',
  errorRoot: 'error',
};

export default {
  dashboard: '/dashboard',
  careers: `/${rootPaths.pageRoot}/careers`,
  invoice: `/${rootPaths.pageRoot}/invoice`,
  schedule: `/${rootPaths.pageRoot}/schedule`,
  calendar: `/${rootPaths.pageRoot}/calendar`,
  messages: `/${rootPaths.pageRoot}/messages`,
  notification: `/${rootPaths.pageRoot}/notification`,
  settings: `/${rootPaths.pageRoot}/settings`,
  signin: `/${rootPaths.authRoot}/signin`,
  signup: `/${rootPaths.authRoot}/signup`,
  resetPassword: `/${rootPaths.authRoot}/reset-password`,
};