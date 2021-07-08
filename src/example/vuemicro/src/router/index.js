import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import AnotherPage from '@/components/AnotherPage';
import MainRouter from '@/components/MainRouter';
Vue.use(Router);

export default [
  {
    path: '/',
    name: 'MainRouter',
    component: MainRouter,
    children: [
      {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld,
      },
      {
        path: '/AnotherPage',
        name: 'AnotherPage',
        component: AnotherPage,
      },
    ],
  },
];
