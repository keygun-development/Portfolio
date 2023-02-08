<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  data() {
    return {
      open: false
    }
  },

  props: {
    width: {
      type: String,
      default: 'w-auto'
    }
  }
});
</script>

<template>
  <slot name="openpopup"></slot>
  <div class="c-popup" v-if="open">
    <div class="c-popup__container">
      <div class="flex items-center justify-center h-full overflow-y-auto">
        <div class="c-popup__card" :class="open ? 'open' : 'close'">
          <div class="flex justify-end">
            <div @click="open = false">
              <i class="fa-solid fa-xmark text-gray-400 fa-2x cursor-pointer"></i>
            </div>
          </div>
          <div class="scrollbar">
            <slot name="popup"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
