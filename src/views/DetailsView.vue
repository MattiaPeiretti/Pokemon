<template>
  <div
    class="container mx-auto flex flex-col items-center text-left"
    v-if="!fetching"
  >
    <buttonPrimary class="m-3" :isHREF="true" destination="/"
      >Go back</buttonPrimary
    >
    <details-panel :data="pokemonData" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";

// Components
import detailsPanel from "@/components/details-panel";
import buttonPrimary from "@/components/basic-ui/button-primary";

// Composables
import useFetch from "@/composables/useFetch";
import constants from "@/constants";

export default {
  name: "DetailsView",
  components: {
    detailsPanel,
    buttonPrimary,
  },
  setup() {
    const route = useRoute();

    const { response, fetchData, fetching, error } = useFetch(
      `${constants.pokemonRESTAPIBaseURL}/${route.params.slug}`
    );

    fetchData();

    const pokemonData = response;

    return { pokemonData, fetching, error };
  },
};
</script>
