<template>
  <div>
    <button
      v-if="!isHREF"
      :type="buttonType"
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

    <!-- <router-link> giving some problems, worth investigating. 
    As the structure is pretty straight forward, a <a></a> is just fine. -->
    <a
      v-if="isHREF"
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
      :href="String(destination)"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "buttonPrimary",
  props: {
    isActivated: {
      type: Boolean,
      default: false,
      required: false,
    },
    buttonType: {
      type: String,
      required: false,
      default: "button",
    },
    isHREF: {
      type: Boolean,
      default: false,
    },
    destination: {
      type: String,
    },
  },
};
</script>
