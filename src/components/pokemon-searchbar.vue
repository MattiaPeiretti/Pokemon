<template>
  <form
    @submit.prevent="search()"
    class="flex items-center justify-between p-6 overflow-visible"
  >
    <div class="relative mr-2 z-50">
      <input
        type="text"
        @focus="isSearchbarFocused = true"
        v-model="searchQuery"
        class="border-4 border-black py-2 px-3 outline-none"
      />
      <ul
        v-if="showAutocompleteBox"
        class="
          auto-complete-results
          bg-white
          w-full
          text-left
          mt-2
          absolute
          border-4 border-black
        "
      >
        <li
          v-for="(data, index) in autoCompleteResults"
          v-bind:key="index"
          @click="search(data.name)"
          class="hover:bg-black hover:text-yellow-400 cursor-pointer py-2 px-3"
        >
          {{ data.name }}
        </li>
      </ul>
    </div>
    <PokemonSearchbarFilters
      @filters-applied="updateFilters"
      button-type="button"
      class="mr-2"
    />
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
      filters: {
        height: null,
        weight: null,
        experience: null,
      },
      selectedPokemons: computed(() => updatePokemon()),
      autoCompleteResults: computed(() => state.selectedPokemons.slice(0, 5)),
      isSearchbarFocused: false,
      showAutocompleteBox: computed(
        () => state.autoCompleteResults.length && state.isSearchbarFocused
      ),
    });

    function updatePokemon() {
      if (!state.searchQuery) return [];
      return props.allPokemons.data.pokemon_v2_pokemon.filter((pokemon) => {
        if (state.filters.height && pokemon.height < state.filters.height)
          return false;
        if (state.filters.weight && pokemon.weight < state.filters.weight)
          return false;
        if (
          state.filters.experience &&
          pokemon.base_experience < state.filters.experience
        )
          return false;
        return pokemon.name.includes(state.searchQuery.toLowerCase());
      });
    }

    // Searches pokemons by current query, or by custom query if passed.
    function search(query = null) {
      if (query) state.searchQuery = query;
      state.isSearchbarFocused = false;
      emit("gotten-results", state.selectedPokemons);
    }

    function updateFilters(data) {
      state.filters = data;
    }

    return {
      ...toRefs(state),
      search,
      updateFilters,
    };
  },
};
</script>
