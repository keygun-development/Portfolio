<script lang="ts">
import {defineComponent} from 'vue';
import Knowledge from '../components/Knowledge.vue';
import Timeline from "../components/Timeline.vue";

export default defineComponent({
  data() {
    return {
      typedText: '',
      text: "Ik ben een Front End <span class='text-orange-400'>Developer</span> uit Lichtenvoorde,  <span class='text-orange-400'>Nederland</span>.",
      typing: false
    }
  },

  components: {
    Timeline
  },

  mounted() {
    this.typeText();
  },

  methods: {
    async typeText() {
      this.typing = true;
      for (let i = 0; i < this.text.length; i++) {
        this.typedText += this.text[i];
        await new Promise(resolve => setTimeout(resolve, 75));
      }
      this.typing = false;
    }
  }
});
</script>

<template>
  <div class="bg-gray-900 py-4">
    <div class="container mx-auto px-4">
      <div class="w-full flex justify-between items-center flex-col md:flex-row">
        <div class="md:w-8/12 text-white">
          <h1 class="sm:text-4xl text-2xl font-semibold">
            Over <span class="text-orange-400">mij</span>.
          </h1>
          <div class="flex items-end md:mt-8 mt-4 sm:text-5xl text-4xl font-bold">
            <p v-html="typedText"></p>
            <span v-if="typing" class="cursor">|</span>
          </div>
          <p class="text-gray-400 lg:w-8/12 md:w-10/12 mt-8">
            Ik ben 21 jaar oud en zit op het Graafschap College in Doetinchem. Ik woon in Lichtenvoorde en werk bij Freave in Doetinchem. Ik ben sinds kort een Vof <a target="_blank" class="hover:text-white underline duration-300" href="https://plugzy.nl/">Plugzy</a> begonnen met een vriend van mij.
            We zijn nog bezig met het ontwikkelen van het product.
          </p>
          <p class="my-4 text-gray-400 lg:w-8/12 md:w-10/12">
            Ik hou ervan om uitdagingen aan te gaan en klanten te helpen bij het realiseren van hun online visie. Ik vind het leuk om van een idee een uitwerking te maken.
          </p>
          <p class="text-gray-400">
            Wanneer ik niet programmeer:
          </p>
          <ul class="ml-4 text-gray-400 list-disc">
            <li class="hover:text-white duration-300">
              Uitgaan met vrienden
            </li>
            <li class="hover:text-white duration-300">
              Gamen
            </li>
            <li class="hover:text-white duration-300">
              Voetbal
            </li>
          </ul>
        </div>
        <div class="flex justify-end mt-4 md:mt-0">
          <img class="rounded-xl aspect-square object-cover shadow-lg hover:rotate-3 duration-300"
               alt="Profielfoto Keagan Mulder"
               src="/images/pf-km.webp"/>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gradient-to-b from-gray-900 to-black shadow-lg py-4">
    <div class="container mx-auto px-4">
      <Timeline></Timeline>
    </div>
  </div>
</template>