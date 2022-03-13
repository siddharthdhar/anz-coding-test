@web
Feature: Borrowing Estimate Calculator

	Scenario: Verify Borrowing Estimate
		Given User launches application
		When User clicks "Single"
		And selects "0" dependants
		And clicks "Home to live in"
		And enters "annual income of $80000"
		And enters "other income of $10000"
		And enters "Monthly living expenses Tooltip of $500"
		And enters "Current home loan monthly repayments as $0"
		And enters "Other loan monthly repayments Tooltip as $100"
		And enters "Other monthly commitments $0"
		And enters "Total credit card limits as $10000"
		And clicks "Work out how much I could borrow"
		Then User sees a borrowing estimate of "$482,000"
		And User clears the form
		Then User sees a borrowing estimate of "$0"

