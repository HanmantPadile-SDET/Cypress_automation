const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gq62b5",
  reporter: 'cypress-mochawesome-reporter', //for html report
  env:{
      url:"https://rahulshettyacademy.com",
      user:"hanmant",
      pass:"test123"
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
