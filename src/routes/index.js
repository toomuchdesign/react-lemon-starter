const siteTitle = 'React lemon starter';
const routes = {
  homepage: {
    path: '/',
    title: `${siteTitle} - Welcome`,
  },
  about: {
    path: '/about/:foo?',
    title: `${siteTitle} - About`,
  },
  notFound: {
    path: '/not-found',
    title: `${siteTitle} - Page Not Found`,
  },
  logout: {
    path: '/logout',
    title: `${siteTitle} - Logout`,
  },
};

export default routes;
