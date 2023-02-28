const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 600,
  viewportHeight: 800,
  defaultCommandTimeout: 4000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    e2e: {
      baseUrl: 'http://localhost:3000',
      // specPattern: ["**/*.feature", "cypress/e2e/BDD/**/*.cy.{js,jsx,ts,tsx}"]
  },
  
  },
})

