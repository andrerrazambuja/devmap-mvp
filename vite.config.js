import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default {
  plugins: [sveltekit()],
  css: {
    postcss: './postcss.config.js' // Ensure PostCSS is included
  }
};