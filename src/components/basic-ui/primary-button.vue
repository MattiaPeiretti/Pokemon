<template>
  <button
    class="
      text-white
      bg-yellow-400
      py-2
      px-3
      border-4
      hover:border-black hover:text-black
      inline-flex
    "
    :class="`${isActivated ? 'border-black text-black' : 'border-white'}`"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    isActivated: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>
