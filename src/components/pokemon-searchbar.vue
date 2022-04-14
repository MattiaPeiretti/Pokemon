<template>
  <form
    @submit.prevent="submitted"
    class="flex items-center justify-between p-6 overflow-visible"
  >
    <div class="relative mr-2 z-50">
      <input
        class="border-4 border-black py-2 px-3 outline-none"
        type="text"
        v-model="searchQuery"
      />
      <ul
        v-if="autoCompleteResults.length"
        class="
          bg-white
          auto-complete-results
          w-full
          text-left
          mt-2
          absolute
          border-4 border-black
        "
      >
        <li
          class="hover:bg-black hover:text-yellow-400 cursor-pointer py-2 px-3"
          v-for="(data, index) in autoCompleteResults"
          v-bind:key="index"
        >
          {{ data.name }}
        </li>
      </ul>
    </div>
    <PokemonSearchbarFilters button-type="button" class="mr-2" />
    <primaryButton button-type="submit">Search</primaryButton>
  </form>
</template>

<script>
import { reactive, toRefs, computed } from "vue";

// Components
import primaryButton from "@/components/basic-ui/primary-button.vue";
import PokemonSearchbarFilters from "@/components/pokemon-searchbar-filters.vue";

export default {
  name: "PokemonSearchbar",
  components: {
    primaryButton,
    PokemonSearchbarFilters,
  },
  props: {
    allPokemons: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      searchQuery: "",
      selectedPokemons: computed(() => updatePokemon()),
      autoCompleteResults: computed(() => state.selectedPokemons.slice(0, 5)),
    });

    function updatePokemon() {
      if (!state.searchQuery) return [];

      return props.allPokemons.results.filter((pokemon) =>
        pokemon.name.includes(state.searchQuery.toLowerCase())
      );
    }

    function submitted() {
      emit("gotten-results", state.selectedPokemons);
    }

    return {
      ...toRefs(state),
      submitted,
    };
  },
};
</script>
