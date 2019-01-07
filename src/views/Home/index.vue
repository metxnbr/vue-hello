<template>
  <div class="home">
    <p
      class="text"
      :class="$styled('text')"
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
import { mapState } from 'vuex';

const styled = ({
  modeColor,
}) => ({
  text: {
    color: modeColor('#333'),
    'background-color': modeColor('#ddd'),
  },
});

export default {
  name: 'home',
  computed: mapState([
    'mode',
  ]),
  methods: {
    styled,
  },
};
</script>
