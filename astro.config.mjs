// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  security: {
    checkOrigin: false,
  },
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'cms.hubcentrometropolitano.com.br' }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
