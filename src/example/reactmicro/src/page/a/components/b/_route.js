import asyncComponent from '@/utils/asyncComponent';
const b = {
  path: '/a/b',
  exact: true,
  component: asyncComponent(() => import('./index.js')),
  routes: [],
};
const files = require.context('./', true, /\.\/[^/]+\/[^/]+\/_route\.js$/);
files.keys().map((item) => {
  return b.routes.push(files(item).default);
});

export default b;
