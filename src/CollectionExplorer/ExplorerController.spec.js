const { ExplorerController } = require('./ExplorerController')
const ProductAdapter = require('../DatabaseAdapters/Mongodb/ProductAdapter')
const RecordAdapter = require('../DatabaseAdapters/Mongodb/RecordAdapter')
const ExampleAdapter = require('../DatabaseAdapters/Mongodb/ExampleAdapter')
const CustomDocumentAdapter = require('../DatabaseAdapters/Mongodb/CustomDocumentAdapter')

describe('Collections explorer data fetch tests', () => {
  it('no collection name provided', async (done) => {
    ExplorerController()
      .then(result => {
        expect(result.error).not.toBe(null)
        done()
      })
  })

  it('Blablabla collection isn\'t valid', async (done) => {
    ExplorerController('Blablabla')
      .then(result => {
        expect(result.error).not.toBeUndefined()
        done()
      })
  })

  it('Product collection getting data', async (done) => {
    const filter = {
      startDate: new Date('2020-08-10'),
      endDate: new Date('2020-08-30'),
      minCount: 1,
      maxCount: 10
    }
    ProductAdapter.FilterByDate = jest.fn()
    ProductAdapter.FilterByDate.mockReturnValueOnce(new Promise(resolve => resolve([])))
    ExplorerController('Product', filter)
      .then(result => {
        expect(ProductAdapter.FilterByDate).toBeCalled()
        done()
      })
  })

  it('Record collection getting data', async (done) => {
    const filter = {
      startDate: new Date('2020-08-10'),
      endDate: new Date('2020-08-30'),
      minCount: new Date('2020-08-30'),
      maxCount: new Date('2020-08-30')
    }
    RecordAdapter.FilterByDate = jest.fn()
    RecordAdapter.FilterByDate.mockReturnValueOnce(new Promise(resolve => resolve([])))
    ExplorerController('Record', filter)
      .then(result => {
        expect(RecordAdapter.FilterByDate).toBeCalled()
        done()
      })
  })

  it('CustomDocument collection getting data', async (done) => {
    const filter = {
      startDate: new Date('2020-08-10'),
      endDate: new Date('2020-08-30'),
      minCount: 1,
      maxCount: 10
    }
    CustomDocumentAdapter.FilterByDateAndTotalCount = jest.fn()
    CustomDocumentAdapter.FilterByDateAndTotalCount.mockReturnValueOnce(new Promise(resolve => resolve([])))
    ExplorerController('CustomDocument', filter)
      .then(result => {
        expect(CustomDocumentAdapter.FilterByDateAndTotalCount).toBeCalled()
        done()
      })
  })

  it('Example collection getting data', async (done) => {
    const filter = {
      startDate: new Date('2020-08-10'),
      endDate: new Date('2020-08-30'),
      minCount: 1,
      maxCount: 10
    }
    ExampleAdapter.FilterByDateAndTotalCount = jest.fn()
    ExampleAdapter.FilterByDateAndTotalCount.mockReturnValueOnce(new Promise(resolve => resolve([])))
    ExplorerController('Example', filter)
      .then(result => {
        expect(ExampleAdapter.FilterByDateAndTotalCount).toBeCalled()
        done()
      })
  })
})
