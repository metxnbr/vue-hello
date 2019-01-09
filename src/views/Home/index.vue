<template>
  <div class="home">
    <div class="text" :class="$styled('text')">
      <h1>{{ $t("message.hello") }}</h1>
      <p>
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
