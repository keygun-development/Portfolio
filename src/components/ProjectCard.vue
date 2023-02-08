<script lang="ts">
import {defineComponent, PropType} from "vue";
import Project from "../types/Project";

export default defineComponent({
  props: {
    project: {
      required: true,
      type: Object as PropType<Project>
    }
  }
});
</script>

<template>
  <a v-if="project.url" target="_blank" :href="project.url" class="grid-item">
    <img class="aspect-video object-cover w-full rounded-t-xl" :src="project.img"/>
    <div class="p-8 bg-gray-800 rounded-b-xl">
      <h3 class="text-2xl font-bold text-orange-400">
        {{ project.title }}
      </h3>
      <p class="mt-4 text-gray-400">
        {{ project.description }}
      </p>
    </div>
  </a>
  <div v-else class="grid-item">
    <img class="aspect-video object-cover w-full rounded-t-xl" :src="project.img"/>
    <div class="p-8 bg-gray-800 rounded-b-xl">
      <h3 class="text-2xl font-bold text-orange-400">
        {{ project.title }}
      </h3>
      <p class="mt-4 text-gray-400">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>