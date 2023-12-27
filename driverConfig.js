const { Builder } = require('selenium-webdriver')

function chromeDriver () {
  return new Builder().forBrowser('chrome').build()
}

module.exports = { chromeDriver }
