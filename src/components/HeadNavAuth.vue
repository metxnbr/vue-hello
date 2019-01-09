<template>
  <div
    class="head-nav"
    :class="$styled('head-nav')"
  >
    <router-link
      class="item"
      :class="$styled('item')"
      to="/">
      <span class="text">Chat</span>
    </router-link >
    <div class="right-side">
      <SetTheme/>
      <div
        class="user"
        :class="$styled('user')">
        <div class="avatar"></div>
        <div class="user-name">
          <span v-if="isFetching">--</span>
          <span v-else>{{user.username}}</span>
        </div>
        <div class="user-handle" :class="$styled('user-handle')">
          <router-link
            to='/dog'
            class="user-handle-item"
            :class="$styled('user-handle-item')">Account Center</router-link>
          <div
            class="user-handle-item"
            @click="signOut"
            :class="$styled('user-handle-item')">Sign Out</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.head-nav {
  position: relative;
  display: flex;
  align-items: stretch;
  padding: 0 16px;
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

.user {
  position: relative;
  display: flex;
  height: 100%;
  padding: 0 16px;
  align-items: center;
  color: #fff;
  cursor: pointer;
}

.user:hover .user-handle {
  visibility: visible;
  transform: scaleY(1);
  opacity: 1;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ddd;
}

.user-name {
  margin-left: 0.5em;
}

.user-handle {
  position: absolute;
  right: 0;
  top: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  visibility: hidden;
  transform: scaleY(0);
  transition: 0.3s;
  opacity: 0;
  transform-origin: center top;
}

.user-handle-item {
  white-space: nowrap;
  padding: 0 16px;
  line-height: 2.5;
}
</style>


<script>
import { mapState, mapGetters } from 'vuex';

import { logOut } from '@/utils/auth';

import SetTheme from '@/components/SetTheme.vue';

const styled = ({
  theme,
  color,
  modeColor,
}) => ({
  'head-nav': {
    'background-color': theme,
  },
  item: {
    ':hover': {
      'background-color': `${color(theme).darken(0.1)}`,
    },
  },
  user: {
    ':hover': {
      'background-color': `${color(theme).darken(0.1)}`,
    },
  },

  'user-handle': {
    'background-color': modeColor('#fff'),
  },
  'user-handle-item': {
    color: modeColor('#333'),
    ':hover': {
      'background-color': modeColor('#eee'),
    },
  },
});

export default {
  name: 'headNavAuth',
  components: {
    SetTheme,
  },

  computed: {
    ...mapState([
      'mode',
    ]),
    ...mapState('user', [
      'isFetching',
      'user',
    ]),
    ...mapGetters([
      'theme',
    ]),
  },

  methods: {
    styled,
    signOut() {
      logOut();
      window.location.href = '/';
    },
  },
};
</script>
