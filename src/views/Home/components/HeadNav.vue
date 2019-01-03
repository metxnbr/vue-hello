<template>
  <div class="head-nav bg">
    <SetTheme/>
  </div>
</template>

<style scoped>
.head-nav {
  display: flex;
  height: 60px;
}
</style>


<script>
import SetTheme from '@/components/SetTheme.vue';

export default {
  name: 'headNav',
  components: {
    SetTheme,
  },

};
</script>
