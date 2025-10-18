// src/routes/sitemap.js
import paths from '../routes/path.js';

const sitemap = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: paths.dashboard,
    icon: 'solar:widget-bold',
    active: true,
    messages: null,
  },
  {
    id: 'analytics',
    subheader: 'Analytics',
    path: paths.analytics,
    icon: 'solar:chart-square-bold',
    active: false,
    messages: null,
  },
  {
    id: 'invoice',
    subheader: 'Invoice',
    path: paths.invoice,
    icon: 'solar:ticket-bold',
    active: false,
    messages: null,
  },
  {
    id: 'schedule',
    subheader: 'Schedule',
    path: paths.schedule,
    icon: 'solar:document-text-bold',
    active: false,
    messages: null,
  },
  {
    id: 'calendar',
    subheader: 'Calendar',
    path: paths.calendar,
    icon: 'mage:calendar-2-fill',
    active: false,
    messages: null,
  },
  {
    id: 'messages',
    subheader: 'Messages',
    path: paths.messages,
    icon: 'mage:dashboard-chart-fill',
    active: false,
    messages: 49,
  },
  {
    id: 'notification',
    subheader: 'Notification',
    path: paths.notification,
    icon: 'solar:bell-bold',
    active: false,
    messages: 2,
  },
  {
    id: 'settings',
    subheader: 'Settings',
    path: paths.settings,
    icon: 'solar:settings-bold',
    active: false,
    messages: null,
  },
  {
    id: 'signin',
    subheader: 'Sign In',
    path: paths.signin,
    icon: 'mage:lock-fill',
    active: false,
    messages: null,
  },
  {
    id: 'signup',
    subheader: 'Sign Up',
    path: paths.signup,
    icon: 'mage:user-plus-fill',
    active: false,
    messages: null,
  },
];

export default sitemap;