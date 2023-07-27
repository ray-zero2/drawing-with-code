import { defineConfig } from 'astro/config';
import glsl from 'vite-plugin-glsl';
import relativeLinks from "astro-relative-links";


// https://astro.build/config
export default defineConfig({
  site: 'https://ray-zero2.github.io/',
  base: '/drawing-with-code',
  "paths": {
    "@scripts/*": ["src/scripts/*"]
  },
  vite: {
    build: {
      emptyOutDir: true
    },
    plugins: [glsl()]
  },
  integrations: [relativeLinks()],
  build: {
    assets: 'assets'
  }
});