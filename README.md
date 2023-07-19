# webdriverioPracticalTest

 Create a new folder and open in IDE (VS Code)
 Open terminal and run command npm init -y
 Install webdriverio using command npm init wido and select options as needed
 Webdriverio configuration file wdio.conf.js
 Check webdriverio version npm ls webdriverio
 run tests in webdriverio project
 npx wdio run wdio.conf.js
 npm run wdio
 To run specific tests npx wdio run wdio.conf.js --spec example.spec.js

 How to Generate and View Reports

Step 1 - Run - npm install @wdio/allure-reporter --save-dev
Step 2 - Add reporter config in wdio.conf.js
Step 3 - Run test and check Allure Results folder is generated
Step 4 - Install allure command line tool  npm install -g allure-commandline --save-dev
Step 5 - Run commands
 allure generate allure-results // this will generate allure-report folder
 allure open     // will start server and open report
