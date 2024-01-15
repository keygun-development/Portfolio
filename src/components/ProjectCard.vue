<script setup lang="ts">
import {PropType, ref} from "vue";
import type Project from "../types/Project";
import { fetchBelongingImage } from "../octokit";

const link = ref('')

const fetchImage = async (reponame: string) => {
  fetchBelongingImage(props.project.owner.login, reponame).then((data) => {
    link.value = data
  })
}

const props = defineProps({
  project: {
    required: true,
    type: Object as PropType<Project>
  }
})

fetchImage(props.project.name)
</script>

<template>
  <a target="_blank" :href="project.homepage ? project.homepage : project.html_url" class="grid-item">
    <img class="aspect-video object-cover w-full rounded-t-xl" :src="link"/>
    <div class="p-8 bg-gray-800 rounded-b-xl">
      <h3 class="sm:text-2xl text-xl font-bold text-orange-400 capitalize">
        {{ project.name }}
      </h3>
      <p class="mt-4 text-gray-400">
        {{ project.description ? project.description : project.repository.description }}
      </p>
    </div>
  </a>
</template>