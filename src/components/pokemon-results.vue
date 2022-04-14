<template>
  <div>
    <h1>{{ results.length }} Result(s):</h1>
    <ul>
      <pokemon-result-item
        v-for="(item, index) in results"
        :key="index"
        :data="item"
      />
    </ul>
  </div>
</template>

<script>
// Components
import pokemonResultItem from "@/components/pokemon-results-item.vue";

export default {
  name: "PokemonSearchbarFilters",
  components: {
    pokemonResultItem,
  },
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
};
</script>

