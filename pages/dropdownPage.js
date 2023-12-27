const { BasePage } = require('./basePage')
const { By } = require('selenium-webdriver')

class DropdownPage extends BasePage {
  constructor () {
    super()
    this.url = 'http://the-internet.herokuapp.com/dropdown'
  }

  async selectDropdownOptionByIndex (index) {
    const selectElement = await driver.findElement(By.id('dropdown'))
    selectElement.click()
    const options = await selectElement.findElements(By.css('option'))
    options[index].click()
  }

  async isDropdownOptionSelected (index) {
    const selectElement = await driver.findElement(By.id('dropdown'))
    const options = await selectElement.findElements(By.css('option'))
    return options[index].isSelected()
  }
}

module.exports = { dropdownPage: new DropdownPage() }
