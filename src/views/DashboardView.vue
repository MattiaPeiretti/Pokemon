<template>
  <div class="container mx-auto flex flex-col items-center mb-16">
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
    <h2 class="m-4" v-if="fetching">Loading...</h2>
    <h2 class="m-4" v-if="noResults">
      Looks like that pokemon<br />
      does not exist:/
    </h2>
    <h2 class="m-4" v-if="error">Whoops! An error occurred. Sorry!</h2>
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
      noResults: false,
    });

    const { fetchData, fetching, response, error } = usePokemonList();

    fetchData();

    state.allPokemons = response;

    function updateResults(results) {
      state.results = results;
      if (!results.length) state.noResults = true;
      else {
        state.noResults = false;
        state.results = generateURLForSprites(state.results);
      }
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