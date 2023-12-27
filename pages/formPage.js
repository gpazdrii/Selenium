const { BasePage } = require('./basePage')
const { By, until } = require('selenium-webdriver')

class FormPage extends BasePage {
  constructor () {
    super()
    this.url = 'http://formy-project.herokuapp.com/form'
  }

  async enterFirstName (value) {
    await driver.findElement(By.id('first-name')).sendKeys(value)
  }

  async enterLastName (value) {
    await driver.findElement(By.id('last-name')).sendKeys(value)
  }

  async enterJobTitle (value) {
    await driver.findElement(By.id('job-title')).sendKeys(value)
  }

  async selectRadioButton (text) {
    await driver.findElement(By.xpath(`//*[@class="col-sm-8 col-sm-offset-2"][contains(.,'${text}')]`)).click()
  }

  async checkCheckBox (text) {
    await driver.findElement(By.xpath(`//div[@class="col-sm-8 col-sm-offset-2"][contains(.,'${text}')]`)).click()
  }

  async selectDropdownValue (text) {
    const selectEl = await driver.findElement(By.id('select-menu'))
    selectEl.click()
    const option = await driver.findElement(By.xpath(`//option[text()='${text}']`))
    option.click()
  }

  async enterDate (date) {
    await driver.findElement(By.id('datepicker')).sendKeys(date)
  }

  async clickSubmit () {
    await driver.findElement(By.partialLinkText('Submit')).click()
  }

  async getAlertText () {
    const alertEl = await driver.wait(until.elementLocated(By.css('div[role="alert"]')), 5000)
    const text = await alertEl.getText()
    return text
  }
}

module.exports = { formPage: new FormPage() }
