<template>
  <div class="container mx-auto flex flex-col items-center">
    <img src="@/assets/img/pikachu.png" alt="pikachu" />
    <h1>
      Look up your favorite <br />
      pokemon!
    </h1>
    <pokemonSearchbar
      v-if="!fetching"
      :all-pokemons="allPokemons"
      @gotten-results="updateResults"
      class="z-10"
    />
    <h2 v-if="fetching">Loading...</h2>
    <pokemonResults class="w-full lg:w-4/6" :results="results" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

// Components
import pokemonSearchbar from "@/components/pokemon-searchbar.vue";
import pokemonResults from "@/components/pokemon-results.vue";

// Composables
import usePokemonList from "@/composables/usePokemonList";
import { generateURLForSprites } from "@/utils";

export default {
  name: "DashboardView",
  components: {
    pokemonSearchbar,
    pokemonResults,
  },
  setup() {
    const state = reactive({
      allPokemons: [],
      results: [],
    });

    const { fetchData, fetching, response, error } = usePokemonList();

    fetchData();

    state.allPokemons = response;

    function updateResults(results) {
      state.results = results;
      state.results = generateURLForSprites(state.results);
    }

    return {
      ...toRefs(state),
      fetching,
      updateResults,
      error,
    };
  },
};
</script>