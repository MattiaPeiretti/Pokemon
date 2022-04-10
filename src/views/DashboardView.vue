<template>
  <div class="container mx-auto flex flex-col items-center">
    <img src="@/assets/img/pikachu.png" alt="pikachu" />
    <h1>
      Look up your favorite <br />
      pokemon!
    </h1>

    <div class="flex items-center justify-between">
      <pokemonSearchbar></pokemonSearchbar>
      <primaryButton>Search</primaryButton>
    </div>
  </div>
</template>

<script>
import pokemonSearchbar from "@/components/pokemon-searchbar.vue";
import primaryButton from "@/components/basic-ui/primary-button.vue";

export default {
  name: "DashboardView",
  components: {
    pokemonSearchbar,
    primaryButton,
  },
};
</script>