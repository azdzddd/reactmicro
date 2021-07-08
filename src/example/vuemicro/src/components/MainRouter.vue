<template>
  <div class="hello">
    <router-link to="/HelloWorld">跳转vue微应用第一个子路由</router-link>
    <router-link to="/AnotherPage">跳转vue微应用第二个子路由</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MainRouter',
  components: {},
  data() {
    return {};
  },
};
</script>
