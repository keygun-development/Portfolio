<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  data() {
    return {
      typedText: '',
      text: "Ik ben een Front End <span class='text-orange-400'>Developer</span> uit Lichtenvoorde,  <span class='text-orange-400'>Nederland</span>.",
      typing: false
    }
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
  <div class="md:w-8/12 text-white">
    <h1 class="sm:text-4xl text-2xl font-semibold">
      Over <span class="text-orange-400">mij</span>.
    </h1>
    <div class="flex items-end md:mt-8 mt-4 sm:text-5xl text-4xl font-bold">
      <p v-html="typedText"></p>
      <span v-if="typing" class="cursor">|</span>
    </div>
    <div class="prose lg:w-8/12 md:w-10/12 mt-8">
      <p class="text-gray-400">
        Ik ben 21 jaar oud en zit op het Graafschap College in Doetinchem. Ik woon in Lichtenvoorde en werk bij Freave
        in
        Doetinchem. Ik ben sinds kort een Vof <a target="_blank" class="!text-gray-400 hover:text-white underline duration-300"
                                                 href="https://plugzy.nl/">Plugzy</a> begonnen met een vriend van mij.
        We zijn nog bezig met het ontwikkelen van het product.
      </p>
      <p class="text-gray-400">
        Ik hou ervan om uitdagingen aan te gaan en klanten te helpen bij het realiseren van hun online visie. Ik vind
        het
        leuk om van een idee een uitwerking te maken.
      </p>
      <p class="text-gray-400">
        Wanneer ik niet programmeer:
      </p>
      <ul class="text-gray-400 list-disc">
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
  </div>
</template>