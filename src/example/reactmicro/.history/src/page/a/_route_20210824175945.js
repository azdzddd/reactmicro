import A from './index';
const a = {
  path: '/a',
  component: A,
  routes: [],
};
const files = require.context('./', true, /\.\/[^/]+\/[^\/]+\/_route\.js$/);
const otherRouter = files.keys().map((item) => {
  a.routes.push(files(item).default);
});

export default a;
