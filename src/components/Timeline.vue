<script lang="ts">
import {defineComponent, ref} from "vue";
import Timeline from "../types/Timeline";

export default defineComponent({
  setup() {
    const currentYear = new Date().getFullYear();
    const timelines = ref<Timeline[]>([
      {
        year: 2020,
        accomplishment: 'Start opleiding (Software developer niveau 4)'
      },
      {
        year: 2021,
        accomplishment: 'Junior Frontend Developer bij: <a class="hover:underline" target="_blank" href="https://www.freave.com/">Freave</a>'
      },
      {
        year: 2021,
        accomplishment: 'Tussenstage: <a class="hover:underline" target="_blank" href="https://www.freave.com/">Freave</a>'
      },
      {
        year: 2022,
        accomplishment: 'Oplevering eerste website (Alleen gemaakt): <a class="hover:underline" target="_blank" href="https://tclievelde.nl/">TC Lievelde</a>'
      },
      {
        year: 2023,
        accomplishment: 'Eindstage: <a class="hover:underline" target="_blank" href="https://www.freave.com/">Freave</a>'
      }
    ])
    return {
      timelines,
      currentYear
    }
  }
});
</script>

<template>
  <h2 class="text-orange-400 text-4xl font-semibold text-center">
    Tijdlijn
  </h2>
  <div class="flex justify-center mt-8">
    <ul class="c-timeline inline-block">
      <li v-for="timeline in timelines"
          class="relative pl-4 mb-20 text-white font-bold max-h-[25px]"
          :class="timeline.year >= currentYear ? 'c-timeline__gray' : ''">
        <span class="text-gray-400 text-sm mr-2 ml-8 font-normal">
          {{ timeline.year }}
        </span>
        <span v-html="timeline.accomplishment"></span>
      </li>
    </ul>
  </div>
</template>