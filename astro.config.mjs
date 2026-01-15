// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import { remarkObsidianLinks } from './src/plugins/remark-obsidian-links.js';
import { remarkObsidianExcalidraw } from './src/plugins/remark-obsidian-excalidraw.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://ishaan-jain.me',
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  integrations: [react()],
  server: {
    host: true
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true
    }
  },

  markdown: {
    remarkPlugins: [remarkObsidianExcalidraw, remarkObsidianLinks],
    shikiConfig: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha'
      },
      wrap: false
    }
  }
});
