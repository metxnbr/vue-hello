<template>
  <div id="app" :class="theme">
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

<style scoped src='./assets/theme/pink.css'></style>
<style scoped src='./assets/theme/blue.css'></style>

<script>
import { mapState } from 'vuex';

export default {
  name: 'app',
  computed: mapState({
    theme: state => state.theme,
  }),
};
</script>
