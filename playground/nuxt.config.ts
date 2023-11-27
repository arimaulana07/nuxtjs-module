export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt', 
    ['../src/module', { test: 'this is options' }], 
  ],
  myModule: {},
  devtools: { enabled: true }
})
