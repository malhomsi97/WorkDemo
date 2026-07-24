const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    projectId: "x6n7b5",
    baseUrl: 'https://demoqa.com',
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'support/e2e.js',
    viewportWidth: 2040,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
