import { Redirect } from 'react-router';
const routeSelf = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to={'/a'}></Redirect>;
    },
  },
];
const files = require.context('../page', true, /\.\/[^/]+\/_route\.js$/);
const otherRouter = files.keys().map((item) => files(item).default);
const routes = [...routeSelf, ...otherRouter];
console.log('🚀routes', routes);

export { routes };
