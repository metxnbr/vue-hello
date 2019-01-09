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
    width: [String, Number],
    height: [String, Number],
    size: [String, Number],
  },
};
</script>
