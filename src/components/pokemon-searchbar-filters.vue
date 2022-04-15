<template>
  <form class="relative" @submit.prevent="setFilters">
    <primaryButton
      @click="isPanelOpen = !isPanelOpen"
      :isActivated="isPanelOpen"
      buttonType="submit"
      >{{ `${isPanelOpen ? "Apply" : "Filters"}` }}<iconFilters
    /></primaryButton>
    <ul
      class="
        bg-white
        absolute
        w-max
        text-left
        mt-2
        py-2
        px-3
        border-4 border-black
      "
      :class="`${isPanelOpen ? '' : 'hidden'}`"
    >
      <li>
        Minimum Height:
        <input
          type="number"
          class="border-b-4 border-black outline-none px-2 w-32"
          v-model="height"
        />
      </li>
      <li>
        Minimum Weight:<input
          type="number"
          class="border-b-4 border-black outline-none px-2 w-32"
          v-model="weight"
        />
      </li>
      <li>
        Minimum Base Experience:<input
          type="number"
          class="border-b-4 border-black outline-none px-2 w-32"
          v-model="experience"
        />
      </li>
    </ul>
  </form>
</template>

<script>
import { reactive, toRefs } from "vue";

// Components
import primaryButton from "@/components/basic-ui/button-primary.vue";
import iconFilters from "@/components/icons/icon-filters.vue";

export default {
  name: "PokemonSearchbarFilters",
  components: {
    primaryButton,
    iconFilters,
  },
  setup(_, { emit }) {
    const state = reactive({
      isPanelOpen: false,
      height: null,
      weight: null,
      experience: null,
    });

    function setFilters() {
      emit("filters-applied", {
        height: state.height,
        weight: state.weight,
        experience: state.experience,
      });
    }

    return {
      ...toRefs(state),
      setFilters,
    };
  },
};
</script>

