<template>
  <div
    class="head-nav"
    :class="$styled('head-nav')"
  >
    <RouterLink
      class="item"
      :class="$styled('item')"
      to="/"
    >
      <span class="text">
        Chat
      </span>
    </RouterLink>
    <RouterLink
      class="item"
      :class="$styled('item')"
      to="/login"
    >
      <span class="text">
        Sign in
      </span>
    </RouterLink>
    <RouterLink
      class="item"
      :class="$styled('item')"
      to="/register"
    >
      <span class="text">
        Sign up
      </span>
    </RouterLink>
    <div class="right-side">
      <SetTheme />
      <LocaleChanger />
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

</style>


<script>
import { mapState, mapGetters } from 'vuex';

import SetTheme from '@/components/SetTheme.vue';
import LocaleChanger from '@/components/LocaleChanger.vue';

const styled = ({
  theme,
  color,
}) => ({
  'head-nav': {
    'background-color': theme,
  },
  item: {
    ':hover': {
      'background-color': `${color(theme).darken(0.1)}`,
    },
  },
});

export default {
  name: 'HeadNav',
  components: {
    SetTheme,
    LocaleChanger,
  },

  computed: {
    ...mapState([
      'mode',
    ]),
    ...mapGetters([
      'theme',
    ]),
  },

  methods: {
    styled,
  },
};
</script>
