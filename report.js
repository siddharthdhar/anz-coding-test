const reporter = require("cucumber-html-reporter")
const options ={
     theme:'bootstrap',
     jsonFile:'output/report/cucumber-report.json',
     output:'cucumber-html-result.html',
     reportSuiteAsScenaros:true,
     launchReport:false,
}
reporter.generate(options)