<template>
  <div class="flex items-center justify-between p-6">
    <div class="relative mr-2">
      <input class="border-4 border-black py-2 px-3 outline-none" type="text" />
      <ul
        class="
          auto-complete-results
          w-full
          text-left
          absolute
          border-4 border-black border-t-0
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
    <primaryButton>Search</primaryButton>
  </div>
</template>

<script>
import { ref } from "vue";
import primaryButton from "@/components/basic-ui/primary-button.vue";

export default {
  name: "PokemonSearchbar",
  components: {
    primaryButton,
  },
  setup() {
    const query = ref("");
    const autoCompleteResults = ref([
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
    ]);

    return {
      query,
      autoCompleteResults,
    };
  },
};
</script>
