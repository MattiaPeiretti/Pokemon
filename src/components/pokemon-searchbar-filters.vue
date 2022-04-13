<template>
  <div class="relative">
    <primaryButton
      @click="isModalOpen = !isModalOpen"
      :isActivated="isModalOpen"
      >Filters<iconFilters
    /></primaryButton>
    <ul
      class="
        filters-modal
        absolute
        border-4 border-black
        mt-2
        py-2
        px-3
        text-left
        w-max
      "
      :class="`${isModalOpen ? '' : 'hidden'}`"
    >
      <li>
        Minimum Height:
        <input
          type="number"
          class="border-b-4 border-black outline-none px-2 w-32"
        />
      </li>
      <li>
        Minimum Weight:<input
          type="number"
          class="border-b-4 border-black outline-none px-2 w-32"
        />
      </li>
      <li>
        Minimum Base Experience:<input
          type="number"
          class="border-b-4 border-black outline-none px-2 w-32"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import primaryButton from "@/components/basic-ui/primary-button.vue";
import iconFilters from "@/components/icons/icon-filters.vue";

export default {
  name: "PokemonSearchbarFilters",
  components: {
    primaryButton,
    iconFilters,
  },
  setup() {
    const isModalOpen = ref(false);
    return {
      isModalOpen,
    };
  },
};
</script>

