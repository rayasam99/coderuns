// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      fs: {
        allow: ['..', 'C:/Users/Pravalika/node_modules'],
      },
    },

    plugins: [tailwindcss()],
  },

  integrations: [react()],
});