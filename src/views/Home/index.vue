<template>
  <div class="home">
    <div
      class="text"
      :class="$styled('text')"
    >
      <h1>{{ $t("home.message.hello") }}</h1>
      <p>
        {{ repeatText($t("home.message.text"), 100) }}
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
  name: 'Home',
  computed: mapState([
    'mode',
  ]),
  methods: {
    styled,
    repeatText: (text, count) => {
      let i = 0;
      const textArr = [];
      while (i < count) {
        textArr.push(text);
        i += 1;
      }

      return textArr.join(', ');
    },
  },
};
</script>
