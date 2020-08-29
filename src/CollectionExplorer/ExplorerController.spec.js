const { ExplorerController } = require('./ExplorerController')

describe('Collections explorer data fetch tests', () => {
  it('no collection name provided', async (done) => {
    const result = ExplorerController()
    expect(result.error).not.toBe(null)
    done()
  })

  it('Product collection data', async (done) => {
    const result = ExplorerController('Product')
    expect(result.error).not.toBeUndefined()
    done()
  })
})
