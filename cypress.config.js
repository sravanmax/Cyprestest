const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
      on('file:preprocessor', cucumber())
    },
    "watchForFileChanges": true,
    "defaultCommandTimeout": 10000,
   
  },
  

});
