import B from './index';
const b = {
  path: '/a/b',
  component: B,
  routes: [],
};
const files = require.context('./', true, /\.\/[^/]+\/[^/]+\/_route\.js$/);
files.keys().map((item) => ({
  b.routes.push(files(item).default);
}));

export default b;
