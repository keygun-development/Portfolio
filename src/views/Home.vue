<script lang="ts">
import {defineComponent} from 'vue';
import Knowledge from '../components/Knowledge.vue';
import Timeline from "../components/Timeline.vue";

export default defineComponent({
  data() {
    return {
      typedText: '',
      text: "Ik maak websites voor <span class='text-orange-400'>bedrijven</span> en <span class='text-orange-400'>personen</span>.",
      typing: false
    }
  },

  components: {
    Timeline,
    Knowledge
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
        <div class="w-full flex justify-between items-center flex-col md:flex-row">
          <div class="md:w-8/12 text-white">
            <h1 class="sm:text-4xl text-2xl font-semibold">
              Hey, ik ben <span class="text-orange-400">Keagan</span>.
            </h1>
            <div class="flex items-end md:mt-8 mt-4 sm:text-5xl text-4xl font-bold">
              <p v-html="typedText"></p>
              <span v-if="typing" class="cursor">|</span>
            </div>
            <p class="md:mt-8 mt-4 mb-4 text-gray-400">
              Ik hou ervan om uitdagingen aan te gaan en klanten te helpen bij het realiseren van hun online visie.
            </p>
            <RouterLink to="/over-mij" class="group text-orange-400 text-lg">
              Lees meer <i class="fa-solid fa-chevron-right duration-300 group-hover:ml-1 duration-300"></i>
            </RouterLink>
          </div>
          <div class="flex justify-end mt-4 md:mt-0">
            <img class="rounded-xl aspect-square object-cover shadow-lg hover:rotate-3 duration-300"
                 alt="Profielfoto Keagan Mulder"
                 src="/images/pf-km.webp"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="bg-gradient-to-b from-gray-900 to-black shadow-lg py-4">
    <div class="container mx-auto px-4">
      <div class="flex justify-center">
        <Knowledge></Knowledge>
      </div>
    </div>
  </div>
  <div class="bg-black py-4">
    <div class="container mx-auto px-4">
      <Timeline></Timeline>
    </div>
  </div>
</template>