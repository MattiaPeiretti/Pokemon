<template>
  <div class="flex items-center justify-between p-6">
    <div class="relative mr-2">
      <input class="border-4 border-black py-2 px-3 outline-none" type="text" />
      <ul
        class="
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
          {{ data }}
        </li>
      </ul>
    </div>
    <PokemonSearchbarFilters class="mr-2" />
    <primaryButton>Search</primaryButton>
  </div>
</template>

<script>
import { ref } from "vue";

import primaryButton from "@/components/basic-ui/primary-button.vue";
import PokemonSearchbarFilters from "@/components/pokemon-searchbar-filters.vue";

export default {
  name: "PokemonSearchbar",
  components: {
    primaryButton,
    PokemonSearchbarFilters,
  },
  setup() {
    const searchQuery = ref("");
    const autoCompleteResults = ref([
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
    ]);

    return {
      searchQuery,
      autoCompleteResults,
    };
  },
};
</script>
