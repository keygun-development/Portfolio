<script setup lang="ts">
import Popup from "./Popup.vue";</script>

<template>
  <div class="py-4 bg-black shadow-lg sticky top-0 z-10 left-0 right-0">
    <nav class="container mx-auto c-navigation flex justify-between px-4">
      <div class="w-4/12">
        <RouterLink to="/" class="text-orange-400 text-xl !font-semibold flex">
          Keagan<span class="!text-white">Mulder</span>
        </RouterLink>
      </div>
      <ul class="w-4/12 flex justify-center gap-x-4">
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
      <div class="w-4/12 flex justify-end gap-x-4">
        <Popup
          ref="popup"
          :width="'w-2/12'"
        >
          <template #openpopup>
            <a @click="$refs['popup'].open = true" class="cursor-pointer text-white flex items-center">
              Start een project <i class="fa-solid fa-chevron-right duration-300"></i>
            </a>
          </template>
        </Popup>
      </div>
    </nav>
  </div>
</template>