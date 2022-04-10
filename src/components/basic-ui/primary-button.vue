<template>
  <button
    class="
      text-white
      bg-yellow-400
      py-2
      px-3
      ring-black
      hover:ring-4 hover:text-black
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
};
</script>
