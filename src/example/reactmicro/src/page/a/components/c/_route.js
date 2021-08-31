import asyncComponent from '@/utils/asyncComponent';
const c = {
  path: '/a/c',
  exact: true,
  component: asyncComponent(() => import('./index.js')),
};

export default c;
