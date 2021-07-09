import A from '../page/a';
import B from '../page/b';
import C from '../page/c';
import { Redirect } from 'react-router';
const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to={'/a'}></Redirect>;
    },
  },
  {
    path: '/a',
    component: A,
    routes: [
      {
        path: '/a/b',
        component: B,
      },
      {
        path: '/a/c',
        component: C,
      },
    ],
  },
];

export { routes };
