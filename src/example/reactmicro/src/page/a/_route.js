import asyncComponent from '@/utils/asyncComponent';

const route = {
  path: '/a',
  component: asyncComponent(() => import('./index.js')),
  routes: [],
};
(function (files) {
  files.keys().map((item) => {
    return route.routes.push(files(item).default);
  });
})(require.context('./', true, /\.\/[^/]+\/[^/]+\/_route\.js$/));

export default route;
