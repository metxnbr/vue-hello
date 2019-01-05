<template>
  <div class="home">
    <p
      class="text"
     :style="[
        styleMode({property: 'color', value: '#333'}),
        styleMode({property: 'background-color', value: '#e9ecef'}),
     ]"
    >
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
      text text text text text text text text text text text text text
    </p>
  </div>
</template>

<style scoped>
 .text {
   padding: 30px;
 }
</style>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  computed: mapGetters([
    'styleMode',
  ]),
};
</script>
