<script setup lang="ts">
import MobileMenu from './MobileMenu.vue';
import MenuDisclosure from "./MenuDisclosure.vue";
</script>

<template>
  <div class="py-4 bg-black shadow-lg sticky top-0 z-10 left-0 right-0">
    <nav class="container mx-auto c-navigation flex justify-between px-4">
      <div class="w-4/12">
        <RouterLink to="/" class="text-orange-400 text-xl !font-semibold flex">
          Keagan<span class="!text-white">Mulder</span>
        </RouterLink>
      </div>
      <div class="justify-between w-8/12 hidden md:flex">
        <ul class="w-6/12 flex justify-center gap-x-4">
          <li>
            <RouterLink to="/projecten" class="text-gray-300 hover:text-white duration-300">
              Projecten
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/packages" class="text-gray-300 hover:text-white duration-300">
              Packages
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/over-mij" class="text-gray-300 hover:text-white duration-300">
              Over mij
            </RouterLink>
          </li>
        </ul>
        <div class="w-6/12 flex justify-end gap-x-4">
          <a href="mailto:keaganmulder1@gmail.com" class="cursor-pointer text-white flex items-center">
            Start een project <i class="fa-solid fa-chevron-right duration-300"></i>
          </a>
        </div>
      </div>
      <div class="block md:hidden w-8/12">
        <MobileMenu
          ref="mobileMenuRef"
        >
          <template v-slot:disclosure="slotProps">
            <div @click="this.$refs.mobileMenuRef.disclose()"
                 class="c-header__bars"
                 :class="slotProps.active ? 'menu-open' : ''">
              <div class="one"></div>
              <div class="two my-1"></div>
              <div class="three"></div>
            </div>
          </template>
        </MobileMenu>
      </div>
    </nav>
  </div>
  <MenuDisclosure
    ref="menuDisclosureRef"
  >
    <template v-slot:disclosure="slotProps">
      <div id="mobile-menu" class="c-mobile__menu">
        <ul>
          <li>
            <RouterLink to="/projecten" class="text-gray-300 hover:text-white duration-300">
              Projecten
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/packages" class="text-gray-300 hover:text-white duration-300">
              Packages
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/over-mij" class="text-gray-300 hover:text-white duration-300">
              Over mij
            </RouterLink>
          </li>
        </ul>
      </div>
    </template>
  </MenuDisclosure>
</template>