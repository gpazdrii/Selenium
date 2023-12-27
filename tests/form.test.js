const { formPage } = require('../pages/formPage')
const assert = require('assert')

describe('test form', function () {
  beforeEach(async function () {
    await formPage.openURL()
  })

  after(function () {
    driver.quit()
  })

  it('Filling out the form', async function () {
    await formPage.enterFirstName('Peter')
    await formPage.enterLastName('Peterson')
    await formPage.enterJobTitle('tester')
    await formPage.selectRadioButton('High School')
    await formPage.checkCheckBox('Male')
    await formPage.selectDropdownValue('2-4')
    await formPage.enterDate('12/12/2020')
    await formPage.clickSubmit()
    const alert = await formPage.getAlertText()
    assert(alert === 'The form was successfully submitted!')
  })
})
