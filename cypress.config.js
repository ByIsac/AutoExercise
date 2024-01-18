const { defineConfig } = require("cypress");
const fs = require('fs')

module.exports = defineConfig({
  e2e: {
    video: true,
    viewportWidth: 1600,
    viewportHeight: 900,
    experimentalRunAllSpecs: true,
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        checkFileExistence: function(filePath) {
          const exists = fs.existsSync(filePath)
          if (exists) {
            return true
          } else {
            throw new Error(`O arquivo ${filePath} não foi encontrado`)
          }
        }
      })
    },
  },
});
