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
    id: 'careers ',
    subheader: 'Careers',
    path: paths.careers,
    icon: 'solar:chart-square-bold',
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