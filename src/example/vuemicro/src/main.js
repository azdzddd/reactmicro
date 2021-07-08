// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './public-path';
import VueRouter from 'vue-router';
Vue.config.productionTip = false;

let a = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  a = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/a/c/vuemicro' : '/',
    mode: 'history',
    routes: router,
  });

  instance = new Vue({
    router: a,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
  console.log('非QIANKUN环境JavascriptModulesPlugin');
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  a = null;
}
