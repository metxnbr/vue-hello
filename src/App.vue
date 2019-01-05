<template>
  <div id="app">
    <HeadNav/>
    <router-view/>
  </div>
</template>

<style>
@import '~sanitize.css';
@import './assets/global.css';
@import './assets/common.css';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>

<script>
import HeadNav from '@/components/HeadNav.vue';

export default {
  name: 'app',
  components: {
    HeadNav,
  },
};
</script>
