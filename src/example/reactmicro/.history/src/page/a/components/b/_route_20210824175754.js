import B from './index';
const b = {
  path: '/a/b',
  component: B,
  routes: [],
};
const files = require.context('./', true, /\.\/[^/]+\/[^/]+\/_route\.js$/);
console.log('🚀 xxxxxxxxxxxxxxxx', files.keys());
export default b;
