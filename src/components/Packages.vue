<script lang="ts">
import {defineComponent, ref} from 'vue';
import ProjectCard from "../components/ProjectCard.vue";
import type Project from "../types/Project";

export default defineComponent({
  data() {
    return {
      typedText: '',
      text: "Benieuwd naar de <span class='text-orange-400'>packages</span> waar ik aan heb gewerkt? Ik heb ze hier op een <span class='text-orange-400'>rij</span> voor je.",
      typing: false
    }
  },

  setup() {
    const packages = ref<Project[]>([
      {
        img: '/images/flowcheck.jpg',
        title: 'Flowcheck',
        description: 'Een github action waarmee je consistentie in code behoudt. Tijdens het aanmaken van een Code check wordt deze action uitgevoerd en laat hij het weten wanneer er fouten in je code zitten waardoor er nooit kapotte code op een productieomgeving kan komen!',
        url: 'https://github.com/marketplace/actions/flowcheck-install-dependencies-run-code-checkers',
      }
    ])

    return {
      packages
    }
  },

  components: {
    ProjectCard
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
  <section class="hero-section" slot="hero-section">
    <div class="bg-gray-900 py-4">
      <div class="container mx-auto px-4">
        <div class="w-full flex justify-center text-white text-center">
          <div class="flex justify-center items-end md:w-8/12">
            <h1 v-html="typedText" class="sm:text-5xl text-2xl font-bold mt-8"></h1>
            <span v-if="typing" class="cursor text-5xl font-bold">|</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="bg-gradient-to-b from-gray-900 to-black shadow-lg md:py-8 py-4"></div>
  <div class="bg-black py-4">
    <div class="container mx-auto px-4">
      <div class="c-project__grid">
        <ProjectCard v-for="pack in packages" :project="pack"></ProjectCard>
      </div>
    </div>
  </div>
</template>