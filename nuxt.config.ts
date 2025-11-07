// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['primeicons/primeicons.css'],
  
  // GitHub Pages deployment configuration
  app: {
    baseURL: '/pail/',
  },
  
  // Enable static site generation
  ssr: false
})