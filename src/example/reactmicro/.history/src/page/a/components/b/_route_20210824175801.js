import B from './index';
const b = {
  path: '/a/b',
  component: B,
  routes: [],
};
const files = require.context('./', true, /\.\/[^/]+\/[^/]+\/_route\.js$/);
console.log('🚀 xxxxxxxxxxxxxxxx', files.keys());
const otherRouter = files.keys().map((item) => {
  b.routes.push(files(item).default);
});

export default b;
