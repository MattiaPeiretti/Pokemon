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
import useFetchGraphql from "@/composables/useFetchGraphql";

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
        pokemon_v2_pokemonsprites {
          id
        }
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
      state.results = results.map((_, index) => {
        return {
          ...results[index],
          imageURL: `${constants.pokemonSpritesBaseURL}/${results[index].pokemon_v2_pokemonsprites[0].id}.png`,
        };
      });
    }

    return {
      ...toRefs(state),
      fetching,
      updateResults,
    };
  },
};
</script>