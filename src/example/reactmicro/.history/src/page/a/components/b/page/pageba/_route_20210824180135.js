import B from './index';
const b = {
  path: '/a/b/d',
  component: B,
};

const files = require.context('./', true, /\.\/[^/]+\/[^/]+\/_route\.js$/);
files.keys().map((item) => {
  return b.routes.push(files(item).default);
});

export default b;
