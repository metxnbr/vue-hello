<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size || '1em'"
    :height="height || size || '1em'"
    >
    <slot></slot>
  </svg>
</template>

<script>
export default {
  name: 'iconBase',
  props: {
    width: [String, Number],
    height: [String, Number],
    size: [String, Number],
  },
};
</script>
