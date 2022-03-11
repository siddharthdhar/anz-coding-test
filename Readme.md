# Introduction

ANZ Coding Test:

1. Create a Cucumber BDD, Puppeteer Framework
2. 

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

3. Run the test on chromium: 

```bash
$ npm test
```

4. Run the test on chrome: 

```bash
$ npm run test:chrome
```

4. Run the test headless: 

```bash
$ npm run test:headless
```