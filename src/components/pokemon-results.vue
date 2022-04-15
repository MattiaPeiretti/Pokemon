<template>
  <div v-if="results.length" class="flex flex-col items-center">
    <h1 class="py-8">{{ results.length }} Result(s):</h1>
    <ul class="w-full">
      <pokemon-result-item
        v-for="(item, index) in paginatedData"
        :key="index"
        :data="item"
      />
    </ul>
    <div v-if="pagesAmount > 1" class="flex items-center pt-8 pb-16">
      <buttonPrimary @click="backPage">Prev</buttonPrimary>
      <span class="px-6">{{ page }} / {{ pagesAmount }}</span>
      <buttonPrimary @click="nextPage">Next</buttonPrimary>
    </div>
  </div>
</template>

<script>
// Components
import pokemonResultItem from "@/components/pokemon-results-item.vue";
import buttonPrimary from "@/components/basic-ui/button-primary";

import { ref, computed } from "vue";

//Composables
//import useHandlePagination from "@/composables/useHandlePagination";

export default {
  name: "PokemonSearchbarFilters",
  components: {
    pokemonResultItem,
    buttonPrimary,
  },
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const itemsPerPage = 10;
    const page = ref(1);

    const paginatedData = computed(() =>
      props.results.slice(
        (page.value - 1) * itemsPerPage,
        page.value * itemsPerPage
      )
    );

    const nextPage = () => {
      if (page.value !== Math.ceil(props.results.length / itemsPerPage)) {
        page.value += 1;
      }
    };

    const backPage = () => {
      if (page.value !== 1) {
        page.value -= 1;
      }
    };

    const goToPage = (numPage) => {
      page.value = numPage;
    };

    const pagesAmount = computed(() =>
      Math.ceil(props.results.length / itemsPerPage)
    );

    return {
      paginatedData,
      itemsPerPage,
      page,
      nextPage,
      backPage,
      goToPage,
      pagesAmount,
    };
  },
};
</script>

