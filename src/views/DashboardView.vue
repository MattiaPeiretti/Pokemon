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
    <pokemonResults :results="results" />
  </div>
</template>

<script>
import constants from "@/constants";
import { reactive, toRefs } from "vue";

// Components
import pokemonSearchbar from "@/components/pokemon-searchbar.vue";
import pokemonResults from "@/components/pokemon-results.vue";

// Composables
import usePokemonList from "@/composables/usePokemonList";

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

    // Generates a handy URL for the spites of the pokemons
    function updateResults(results) {
      console.log(state.results);
      state.results = results.map((_, index) => {
        return {
          ...results[index],
          imageURL: `${constants.pokemonSpritesBaseURL}/${results[index].pokemon_v2_pokemonsprites[0].id}.png`,
        };
      });
      console.log(state.results);
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