# Cypress_automation
Cypress web automation and API testing 
Practice Repo for cypress.

1.install node
3.npm -i init --> create package.json file
2.npm install cypress --save -dev
3.open cypress app -- npx cypress open 
                      node_modules/.bin/cypress open
----------------------------------------------------------

Running the cypress tests
 1. open the cypress and run
2.command line 
 npx cypress run (by default headless)
npx cypress run --headed 
npx cypress run --spec cypress\e2e\mytest.cy.js --headed (specific file)
npx cypress run --browser chrome


--------------------------------
Spec file (.js) --describe blocks (test suite) --> it blocks (tests)
Running Tests/Specs
-------------
To open Cypress Runner
 npx cypress open

To Run All the specs under e2e folder
 npx cypress run
 npx cypress run --headed

To Run Single spec under e2e folder
 npx cypress run –-spec cypress\e2e\MyTest.js"


To Run All the specs under e2e folder using Chrome
 npx cypress run --browser chrome
 npx cypress run --browser edge

 npx cypress run --browser edge --headed

------------------------------------------
Locators
CSS selectors (by default)
tag id
tag class
tag attribute
tag class attribute

xpath (plugin needed)

cy.get(locator);


npm install -D cypress-xpath

cy.xpath('locator')

add entry in command.js 
 /// <reference types="cypress-xpath"/>

e2e.js 
require('cypress-xpath')

============================================================================
Assertions
1) implicit -built in
	should
	and
2) explicit -chai library
     expect ---BDD 
	assert ---TDD
=================================================================================

Typescript

npm install typescript
npx tsc --init --types cypress --lib dom,es6

========================================================================

Cutome timeout
cy.get("#id',{timeout})

===============================================================

Post rest call
1.using hard coded json payload in the script
2.using random email id in payload
3.read json from cypress fixtures and use it in request body
	a.using require --> const
	b.using cy.fixture--callback

==================================================================
To group the test that contains specific name and we can group them

install cypress-grep --> plugin
=============================================================
connecting cypress to DB

npm i mysql -D




