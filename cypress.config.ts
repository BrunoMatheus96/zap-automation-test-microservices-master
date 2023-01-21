import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    email: 'zapapi',
    password: 'Ap1Z@p',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    baseUrl: 'https://heropu-usuario-api.azurewebsites.net',
  },
})
