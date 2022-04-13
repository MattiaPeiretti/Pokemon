<template>
  <div class="container mx-auto flex flex-col items-center">
    <img src="@/assets/img/pikachu.png" alt="pikachu" />
    <h1>
      Look up your favorite <br />
      pokemon!
    </h1>

    <pokemonSearchbar></pokemonSearchbar>
  </div>
</template>

<script>
import pokemonSearchbar from "@/components/pokemon-searchbar.vue";

export default {
  name: "DashboardView",
  components: {
    pokemonSearchbar,
  },
};
</script>