import B from './index';
const b = {
  path: '/a/b',
  component: B,
  routes: [],
};
const files = require.context('./', true, /\.\/[^/]+\/[^/]+\/_route\.js$/);
export default b;
