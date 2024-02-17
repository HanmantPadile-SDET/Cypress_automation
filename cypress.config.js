const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  tasks = sqlServer.loadDBPlugin(config.DB);
  on('task',tasks);

  on('task',{
    execelToJsonCon(filepath) {
      const result = excelToJson({
      source: fs.readFileSync(filepath) // fs.readFileSync return a Buffer
      });
      return result;
    }
  })
  //for reporter
  require('cypress-mochawesome-reporter/plugin')(on,config);
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "4qbvwa",
  reporter: 'cypress-mochawesome-reporter', //for html report
  env:{
      url:"https://rahulshettyacademy.com",
      user:"hanmant",
      pass:"test123"
  },
  DB:{
    "user": "myuser",
    "host": "127.0.0.1",
    "database": "testDB",
    "password": "pass",
    "port": 32763
  },
  retries:{
    runMode:1,
    openMode:0
  },
  e2e: {
    setupNodeEvents,
  },
});
