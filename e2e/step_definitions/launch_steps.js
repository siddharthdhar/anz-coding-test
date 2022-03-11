
const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const scope = require('./support/scope');
const constants = require('./support/constants');
const _ = require('lodash');
const borrowerEstimate = require ('../pageObject/borrowEstimatePage');
const assert = require('assert')

const THIRTY_SECONDS = 30 * 1000; // default
setDefaultTimeout(THIRTY_SECONDS);

const borrowerEstimatePage = new borrowerEstimate();

Given('User launches application', async () => {
    let env = process.env.NODE_ENV
    let url = constants.baseUrl
    console.log(`ENV: ${env}`)
    await scope.page.goto(url, { waitUntil: 'networkidle0' })
})

When(/^User clicks "([^"]*)"/, async(text) => {
    await scope.page.click( borrowerEstimatePage.borrowQuestionButtonsAndSelectors(text));
})

When(/^clicks "([^"]*)"/, async(text) => {
    await scope.page.click(borrowerEstimatePage.borrowQuestionButtonsAndSelectors(text));
})

When(/^selects "([^"]*)" dependants/, async(dependants) => {
    await scope.page.select(borrowerEstimatePage.borrowQuestionButtonsAndSelectors("Number of dependants"), dependants);
})

When(/^enters "([^"]*)"/, async(text) => {
    const element = await borrowerEstimatePage.borrowingQuestionInputs(text);
    await element.type(text.split("$")[1], {delay: 100});
})

Then(/^User sees a borrowing estimate of "([^"]*)"/, async(text) => {
    // Waiting Mechanism to pause half a second and check if Borrowing Estimate has stopped moving
    // TIP from SID D: DO NOT USE a standard wait, as it will always block the test for the standard time
    let prev = await scope.page.$eval(borrowerEstimatePage.borrowEstimate, element => element.textContent);
    let expectedText;
    for(var i=0; i<10; i++) {
        await scope.page.waitForTimeout(500).then(() => console.log('Waited .5 second for Borrowing Estimate to stabilise!'));
        expectedText = await scope.page.$eval(borrowerEstimatePage.borrowEstimate, element => element.textContent)
        if(expectedText === prev) {
            break;
        } else {
            prev = expectedText;
        }

    }
    assert.equal(text, expectedText);
})