<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";</script>

<template>
  <div class="min-h-[20rem] max-h-[20rem] relative">
    <Header/>
    <RouterView/>
    <Footer/>
  </div>
</template>