<template>
  <div class="container mx-auto flex flex-col items-center">
    <img src="@/assets/img/pikachu.png" alt="pikachu" />
    <h1>
      Look up your favorite <br />
      pokemon!
    </h1>
    <pokemonSearchbar
      :all-pokemons="allPokemons"
      @gotten-results="updateResults"
      class="z-10"
    />
    <div>
      <h1>{{ results.length }} Results:</h1>
      <ul>
        <li v-for="(item, index) in results" :key="index">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import constants from "@/constants";
import { reactive, toRefs } from "vue";

// Components
import pokemonSearchbar from "@/components/pokemon-searchbar.vue";

// Composables
import useFetch from "@/composables/useFetch";

export default {
  name: "DashboardView",
  components: {
    pokemonSearchbar,
  },
  setup() {
    const state = reactive({
      allPokemons: [],
      results: [],
    });

    const { response, fetchData } = useFetch(
      `${constants.pokemonAPIBaseURL}?limit=100000&offset=0`,
      {}
    );

    fetchData();

    state.allPokemons = response;

    function updateResults(results) {
      state.results = results;
    }

    return {
      ...toRefs(state),
      updateResults,
    };
  },
};
</script>