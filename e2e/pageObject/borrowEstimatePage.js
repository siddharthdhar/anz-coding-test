const scope = require('../step_definitions/support/scope')

class BorrowingEstimatePage {

    borrowEstimate = '#borrowResultTextAmount';

    borrowQuestionButtonsAndSelectors = function (text) {
        switch (text) {
            case "Single":
                return '.btn[for="application_type_single"]'
            case "Joint":
                return '.btn[for="application_type_joint"]'
            case "Home to live in":
                return '.btn[for="borrow_type_home"]'
            case "Residential investment":
                return '.btn[for="borrow_type_investment"]'
            case "Number of dependants":
                return '[title="Number of dependants"]'
            case "Work out how much I could borrow":
                return '#btnBorrowCalculater';
        }
    };

    borrowingQuestionInputs = async function (text) {
        const borrowQuestionInput = '.borrow__question input';
        if (text.includes('annual income')) {
            return (await scope.page.$$(borrowQuestionInput))[4];
        } else if (text.includes('other income')) {
            return (await scope.page.$$(borrowQuestionInput))[5];
        } else if (text.includes('living expenses')) {
            return (await scope.page.$$('.borrow__question input'))[8];
        } else if (text.includes('Current home loan monthly repayments')) {
            return (await scope.page.$$('.borrow__question input'))[9];
        } else if (text.includes('Other loan monthly repayments')) {
            return (await scope.page.$$('.borrow__question input'))[10];
        } else if (text.includes('Other monthly commitments')) {
            return (await scope.page.$$('.borrow__question input'))[11];
        } else if (text.includes('Total credit card limits')) {
            return (await scope.page.$$('.borrow__question input'))[12];
        }
    }
}

module.exports = BorrowingEstimatePage;
