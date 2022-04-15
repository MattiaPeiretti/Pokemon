<template>
  <ul class="bg-white absolute w-full mt-2 text-left border-4 border-black">
    <li
      v-for="(data, index) in results"
      v-bind:key="index"
      @click="search(data.name)"
      class="cursor-pointer py-2 px-3 hover:bg-black hover:text-yellow-400"
    >
      {{ data.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "PokemonSearchbarAutocompleteResults",
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
  setup(_, { emit }) {
    function search(data) {
      emit("clicked-result", data);
    }
    return {
      search,
    };
  },
};
</script>