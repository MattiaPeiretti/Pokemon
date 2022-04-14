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
import useFetchGraphql from "@/composables/useFetchGraphql";

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

    // const { response, fetchData } = useFetch(
    //   `${constants.pokemonRESTAPIBaseURL}?limit=100000&offset=0`,
    //   {}
    // );
    const GQLQuery = `
    query PokeAPIquery {
      pokemon_v2_pokemon{
        id
        name
        height
        weight
        base_experience
      }
    }
    `;

    const { response, fetchData, fetching } = useFetchGraphql(
      `${constants.pokemonGraphqlAPIBaseURL}`,
      GQLQuery,
      null,
      null
    );

    fetchData();

    state.allPokemons = response;

    function updateResults(results) {
      state.results = results;
    }

    return {
      ...toRefs(state),
      fetching,
      updateResults,
    };
  },
};
</script>