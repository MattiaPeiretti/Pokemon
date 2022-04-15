<template>
  <div class="md:flex p-4 mb-16">
    <div class="text-left border-4 border-black">
      <div class="p-3">
        <h1>{{ data.name }}</h1>
        <img
          :src="data.sprites.other['official-artwork'].front_default"
          alt="Pokemon artwork"
        />
      </div>
      <div class="border-black border-t-4 p-3">
        <h3>Sprites:</h3>
        <div class="flex p-2">
          <img
            :src="data.sprites.front_default"
            alt="Sprite front"
            class="mr-4"
          />
          <img :src="data.sprites.back_default" alt="Sprite back" />
        </div>
      </div>
    </div>
    <div
      class="
        p-3
        border-4 border-t-0 border-black
        md:border-l-0 md:border-t-4 md:w-3/6
      "
    >
      <h2>Details:</h2>
      <ul class="text-sm pt-4">
        <li>Height: {{ data.height }}</li>
        <li>Weight: {{ data.weight }}</li>
        <li>Base Experience: {{ data.base_experience }}</li>

        <li class="mt-3">
          Abilities:
          <ul>
            <li v-for="(item, index) in data.abilities" :key="index">
              - {{ item.ability.name }}
            </li>
          </ul>
        </li>

        <li class="mt-3">
          Stats:
          <ul>
            <li v-for="(item, index) in data.stats" :key="index">
              - {{ item.stat.name }}: {{ item.base_stat }}
            </li>
          </ul>
        </li>

        <li class="mt-3">
          Types:
          <ul>
            <li v-for="(item, index) in data.types" :key="index">
              - {{ item.type.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsPanel",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>