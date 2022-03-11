
let config = require('konfig')({path: './e2e/config'})

module.exports = {
  baseUrl: config.properties.baseUrl,
  pageTimeout: config.properties.pageTimeout,
  headlessMode: config.properties.headlessMode,
  chromiumPath: config.properties.chromiumPath,
  reportConfig: config.properties.reportConfig
}