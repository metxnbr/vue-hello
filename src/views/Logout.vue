<template>
  <div class="logout">
    <button @click="signOut">
      Sign out
    </button>
  </div>
</template>

<script>
import router from '@/router';
import { logOut } from '@/utils/auth';

export default {
  name: 'Logout',
  methods: {
    signOut: () => {
      logOut();
      router.push('/');
    },
  },
};
</script>
