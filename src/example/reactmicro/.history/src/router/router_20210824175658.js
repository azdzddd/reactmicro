import { Redirect } from 'react-router';
const routeSelf = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to={'/a'}></Redirect>;
    },
  },
  // {
  //   path: '/a',
  //   component: A,
  //   routes: [
  //     {
  //       path: '/a/b',
  //       component: B,
  //     },
  //     {
  //       path: '/a/c',
  //       component: C,
  //     },
  //   ],
  // },
];
// /\.\/[^\/]+\/_route\.js$/
const files = require.context('../page', true, /\.\/[^\/]+\/_route\.js$/);
console.log('？？？？？？？？？？？？？？', files.keys());
const otherRouter = files.keys().map((item) => files(item).default);
const routes = [...routeSelf, ...otherRouter];

export { routes };
