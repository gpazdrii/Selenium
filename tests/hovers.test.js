const { hoversPage } = require('../pages/hoversPage')
const assert = require('assert')

describe('test hovers', function () {
  beforeEach(async function () {
    await hoversPage.openURL()
  })

  after(function () {
    driver.quit()
  })

  it('Hovering the mouse over an element', async function () {
    await hoversPage.hoverOverAvatarByIndex(0)
    const elStatus = await hoversPage.isAvatarCaptionVisible()
    assert(elStatus === true)
    const elText = await hoversPage.avatarCaptionText()
    assert(elText === 'name: user1')
  })
})
