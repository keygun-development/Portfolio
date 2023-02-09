<script lang="ts">
import {defineComponent, ref} from 'vue';
import ProjectCard from "../components/ProjectCard.vue";
import Project from "../types/Project";

export default defineComponent({
  data() {
    return {
      typedText: '',
      text: "Benieuwd naar de <span class='text-orange-400'>projecten</span> waar ik aan heb gewerkt? Ik heb ze hier op een <span class='text-orange-400'>rij</span> voor je.",
      typing: false
    }
  },

  setup() {
    const projects = ref<Project[]>([
      {
        img: '../src/images/Ben.jpg',
        title: 'Ben Berkenbosch',
        description: 'Ben had mij gevraagd een website te maken waar hij zijn eigen muziek op kon publiceren. Dit klonk als een leuk project! Hij moet albums aan kunnen maken, muziek toevoegen en teksten aanpassen. Ik heb een eigen dashboard achter de website gebouwd zodat hij dit zelf kon doen.',
        url: 'https://benberkenbosch.com',
      },
      {
        img: '../src/images/Tclievelde.jpg',
        title: 'TC lievelde',
        description: 'De vraag was of ik een frisse website kon bouwen waarin ze hun content konden beheren en vooral belangrijk een reserveringssysteem. De oude website was een oud vertrouwd pareltje op het web. Het gebruikte namelijk nog Adobe Flash Player, maar dit wordt niet meer ondersteund.',
        url: 'https://tclievelde.nl',
      },
      {
        img: '../src/images/Legoland.jpg',
        title: 'Legoland Doetinchem (School opdracht)',
        description: 'De vraag was om een applicatie te maken waarin je als gebruiker tickets voor "Legoland Doetinchem" kon bestellen. Dit is natuurlijk een nep opdracht, maar wel leuk om te delen. Dit was namelijk mijn eerste Laravel website. Ik heb ook mollie payments geïmplementeerd zo kon je dus ook daadwerkelijk geld betalen voor de nep tickets. Helaas staat de site niet live.',
        url: '',
      },
      {
        img: '../src/images/Tao.jpg',
        title: 'Tao / Bely.nl',
        description: 'Er werd mij gevraagd door de jeu de boules vereniging om een website te maken waar zij onderlinge scores in konden voeren. Hierbij kwam er ook een scorebord die berekende wie er op welke plek moest komen te staan. Jammer genoeg staat de website achter een vergrendeling dit heeft te maken met de privacy van de spelers.',
        url: 'http://bely.nl',
      }
    ])

    return {
      projects
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
        <ProjectCard v-for="project in projects" :project="project"></ProjectCard>
      </div>
    </div>
  </div>
</template>