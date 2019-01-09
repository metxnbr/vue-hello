<template>
  <div id="app">
    <HeadNavAuth v-if="loggedIn()"/>
    <HeadNav v-else/>
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
import { mapActions } from 'vuex';
import HeadNavAuth from '@/components/HeadNavAuth.vue';
import HeadNav from '@/components/HeadNav.vue';
import { initBodyBg } from '@/utils/storageTheme';
import { getToken } from '@/utils/auth';

initBodyBg();

export default {
  name: 'app',
  components: {
    HeadNavAuth,
    HeadNav,
  },
  methods: {
    ...mapActions('user', [
      'requestUser',
    ]),
    loggedIn: () => !!getToken(),
  },
  mounted() {
    if (this.loggedIn()) {
      this.requestUser();
    }
  },
};
</script>
