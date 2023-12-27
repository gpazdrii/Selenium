const { dropdownPage } = require('../pages/dropdownPage')
const assert = require('assert')

describe('test dropdown', function () {
  beforeEach(async function () {
    await dropdownPage.openURL()
  })

  after(function () {
    driver.quit()
  })

  it('State of element activity', async function () {
    await dropdownPage.selectDropdownOptionByIndex(1)
    const option1Selected = await dropdownPage.isDropdownOptionSelected(1)
    const option2Selected = await dropdownPage.isDropdownOptionSelected(2)
    assert(option1Selected === true)
    assert(option2Selected === false)
  })
})
