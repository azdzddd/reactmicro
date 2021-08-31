import { Redirect } from 'react-router';
import asyncComponent from '@/utils/asyncComponent';
const routeSelf = [
  // {
  //   component: asyncComponent(() => import('../page/error404')),
  // },
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to={'/a'}></Redirect>;
    },
  },
];

const error404 = {
  component: asyncComponent(() => import('../page/error404')),
}
const files = require.context('../page', true, /\.\/[^/]+\/_route\.js$/);
const otherRouter = files.keys().map((item) => files(item).default);
const routes = [...routeSelf, ...otherRouter ,error404];
console.log('🚀routes', routes);

export { routes };
