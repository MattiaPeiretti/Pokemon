<template>
  <router-view />
  <div class="py-20 text-center">
    <p class="pb-5">
      Developed with ❤ by
      <a href="https://mattiapeiretti.com/" class="">Mattia Peiretti</a>
    </p>
    <a @click="isCreditsOpened = !isCreditsOpened" class="text-sm">{{
      isCreditsOpened ? "See Less" : "See More"
    }}</a>
    <p
      v-show="isCreditsOpened"
      class="text-sm mx-auto my-5 px-5 lg:w-6/12 leading-8"
    >
      This app is based upon the
      <a href="https://pokeapi.co/" target="_blank">Pokè API</a>, I do not own
      any right to the images displayed on this site. For the rights, check the
      Pokè API website. All the remaining content which isn't part of the Pokè
      API is under the copyright of © Mattia Peiretti
      {{ new Date().getFullYear() }}. Pokémon and Pokémon character names are
      trademarks of Nintendo. This is an open-source project. Please contribute
      over at:
      <a href="https://github.com/mattiapeiretti/pokemon"
        >MattiaPeiretti/Pokemon</a
      >. If you want to support this open-source projects, please donate
      <a href="https://paypal.me/mattiapeiretti">here</a>, any donation is
      hugely appreciated!
    </p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const isCreditsOpened = ref(false);
    return {
      isCreditsOpened,
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  @apply underline
        decoration-yellow-500 decoration-[0.25rem]
        motion-safe:transition-all motion-safe:duration-200
        hover:decoration-[0.5rem]
        focus:decoration-[0.5rem]
        hover:decoration-yellow-500/50
        focus:decoration-yellow-500/50
        whitespace-nowrap
        cursor-pointer;
}
</style>
