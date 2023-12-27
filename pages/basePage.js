const { chromeDriver } = require('../driverConfig')

class BasePage {
  constructor () {
    global.driver = chromeDriver()
    this.url
  }

  async openURL () {
    await driver.get(this.url)
  }
}

module.exports = { BasePage }
