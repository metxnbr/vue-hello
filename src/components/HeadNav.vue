<template>
  <div
    class="head-nav"
    :style="style({property: 'background-color'})"
  >
    <router-link class="item" to="/">
      <span class="text">Chat</span>
    </router-link >
    <router-link class="item" to="/login">
      <span class="text">Sign in</span>
    </router-link >
    <router-link class="item" to="/register">
      <span class="text">Sign up</span>
    </router-link >
    <div class="right-side">
      <SetTheme/>
    </div>
  </div>
</template>

<style scoped>
.head-nav {
  position: relative;
  display: flex;
  align-items: stretch;
  padding: 8px 16px;
  height: 56px;
  z-index: 9;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),
              0 6px 10px 0 rgba(0,0,0,.14),
              0 1px 18px 0 rgba(0,0,0,.12);
}

.item {
  display: flex;
  align-items: center;
  padding: 0 16px;
  transition: 0.5s;
}

.text {
  color: #fff;
  font-weight: bold;
}

.right-side {
  display: flex;
  align-items: center;
  margin-left: auto;
}

</style>


<script>
import { mapGetters } from 'vuex';
import SetTheme from '@/components/SetTheme.vue';

export default {
  name: 'headNav',
  components: {
    SetTheme,
  },
  computed: mapGetters([
    'style',
    'styleMode',
  ]),

};
</script>
