<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size || '1em'"
    :height="height || size || '1em'"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'IconBase',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    width: [String, Number],
    // eslint-disable-next-line vue/require-default-prop
    height: [String, Number],
    // eslint-disable-next-line vue/require-default-prop
    size: [String, Number],
  },
};
</script>
