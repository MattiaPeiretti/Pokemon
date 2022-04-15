<template>
  <li
    class="
      bg-white
      text-left
      flex
      justify-between
      items-center
      mt-2
      p-3
      border-4 border-black
    "
  >
    <img :src="data.imageURL" alt="Pokemon Sprite" />
    <h2 class="px-8">{{ data.name }}</h2>
    <primary-button :isHREF="true" :destination="url"
      >See Details</primary-button
    >
  </li>
</template>

<script>
import constants from "@/constants";
import { computed } from "vue";

// Components
import primaryButton from "@/components/basic-ui/button-primary.vue";

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
  setup(props) {
    const url = computed(
      () => constants.pokemonDetailsPageBaseURL + "/" + props.data.name
    );
    return { url };
  },
};
</script>

