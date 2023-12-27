const { tablesPage } = require('../pages/tablesPage')
const assert = require('assert')

describe('test tables', function () {
  beforeEach(async function () {
    await tablesPage.openURL()
  })

  after(function () {
    driver.quit()
  })

  it('Sorting the table', async function () {
    await tablesPage.scrollToTable()
    await tablesPage.clickTableColumn('Due')
    const values = await tablesPage.getColumnValues()
    const actualArrOfTextValues = await getTextOfColumnValues(values)
    const arrOfNumbers = convertToNumbers(actualArrOfTextValues)
    const arrOfNumbersCopy = [...arrOfNumbers]
    arrOfNumbersCopy.sort(function (a, b) { return a - b })
    assert.deepEqual(arrOfNumbers, arrOfNumbersCopy, 'Sorted column')
  })
})

const getTextOfColumnValues = async (values) => {
  const results = []
  for (const value of values) { results.push(await value.getText()) }
  return results
}

function convertToNumbers (arr) {
  return arr.map(el => Number(el.replace('$', '')))
}
