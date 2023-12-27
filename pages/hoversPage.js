const { BasePage } = require('./basePage')
const { By } = require('selenium-webdriver')

class HoversPage extends BasePage {
  constructor () {
    super()
    this.url = 'http://the-internet.herokuapp.com/hovers'
  }

  async hoverOverAvatarByIndex (index) {
    const avatars = await driver.findElements(By.className('figure'))
    await driver.actions()
      .move({ origin: avatars[index] })
      .pause(100)
      .perform()
  }

  async isAvatarCaptionVisible () {
    const el = await driver.findElement(By.css('h5'))
    return el.isDisplayed()
  }

  async avatarCaptionText () {
    const el = await driver.findElement(By.css('h5'))
    return el.getText()
  }
}

module.exports = { hoversPage: new HoversPage() }
