const { BasePage } = require('./basePage')
const { By } = require('selenium-webdriver')

class TablesPage extends BasePage {
  constructor () {
    super()
    this.url = 'http://the-internet.herokuapp.com/tables'
  }

  async scrollToTable () {
    const table = await driver.findElement(By.id('table2'))
    await driver.actions()
      .scroll(0, 0, 0, 0, table)
      .perform()
  }

  async clickTableColumn (name) {
    await driver.findElement(By.xpath(`//table[@id='table2']//*[text()='${name}']`)).click()
  }

  async getColumnValues () {
    return await driver.findElements(By.xpath("//table[@id='table2']/tbody//*[@class='dues']"))
  }
}

module.exports = { tablesPage: new TablesPage() }
