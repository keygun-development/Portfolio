<script lang="ts">
import {defineComponent, ref} from 'vue';
import ProjectCard from "../components/ProjectCard.vue";
import Project from "../types/Project";

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
        img: '/images/Draggable.gif',
        title: 'Draggable',
        description: 'Dit was een package die ik gebruikte voor het versimpelen van code. Hier zat een fout in dat wanneer je een nieuwe item toevoegde aan de items die je kon verslepen werd hij niet laten zien. Dit heb ik opgelost en heb hier mijn eigen clone van gemaakt.',
        url: 'https://github.com/keygun-development/vue3-draggable',
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