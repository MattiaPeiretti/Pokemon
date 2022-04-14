<template>
  <li
    class="
      bg-white
      text-left
      mt-2
      border-4 border-black
      flex
      items-center
      justify-between
      p-3
    "
  >
    <img :src="data.imageURL" alt="" />
    <h2 class="px-8">{{ data.name }}</h2>
    <primary-button>See Details</primary-button>
  </li>
</template>

<script>
// Components
import primaryButton from "@/components/basic-ui/primary-button.vue";

export default {
  name: "PokemonSearchbarFilters",
  components: {
    primaryButton,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

