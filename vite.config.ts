import { fileURLToPath, URL } from 'node:url'
import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  ssr: {
    noExternal: ['remix-utils'],
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./app', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
})
