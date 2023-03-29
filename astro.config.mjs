import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      path: "./tailwind.config.cjs",
      applyBaseStyles: false
    }
  }), vue()],
  site: "https://www.keaganmulder.nl/"
});