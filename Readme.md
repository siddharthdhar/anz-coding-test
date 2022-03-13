# Introduction

Coding Test:

1. Create a Cucumber BDD, Puppeteer Framework to test in Web Browser
2. Create a Cucumber BDD, Axios framework to test APIs

## Installing

1. Download and install the following tools:
    * [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) or
    * [nvm-osx-linux](https://github.com/creationix/nvm) (or use `brew install nvm`)

2. Open up a new shell and run the following in the repository root

```bash
$ nvm install node
$ nvm use node
$ npm install
```

3. Run API and Web tests (Tests will run in headless mode by default):

```bash
$ npm test
```

4. Run the test on chrome: 

```bash
$ npm run test:chrome
```

5. Run only Web based tests:

```bash
$ npm run test:web
```

6. Run only API based tests:

```bash
$ npm run test:api
```

7. Run the **HTML Report**:

```bash
$ npm run report
```

8. Results can be located at the Root Folder under the name ***cucumber-html-result.html***

9. Please provide neccessary folder permissions if required to create the JSON and HTML Files which support report generation.


10. IMPORTANT: The framework and setup could not be tested on a Windows machine due to lack of windows machine. Please setup and run on a MAC OS if possible
