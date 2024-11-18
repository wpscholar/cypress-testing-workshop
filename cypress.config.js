const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://todomvc.com/examples/react/dist/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    viewportWidth: 600,
    viewportHeight: 900,
  },
});
