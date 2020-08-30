const errorList = require('../Utils/ErrorsList')
const Result = require('../Utils/Result')

const { fromCountArray } = require('./Collections/ObjectMapper')

const ProductAdapter = require('../DatabaseAdapters/Mongodb/ProductAdapter')
const RecordAdapter = require('../DatabaseAdapters/Mongodb/RecordAdapter')
const CustomDocumentAdapter = require('../DatabaseAdapters/Mongodb/CustomDocumentAdapter')
const ExampleAdapter = require('../DatabaseAdapters/Mongodb/ExampleAdapter')

module.exports.ExplorerController = (collection, filterParams) => {
  return new Promise(resolve => {
    if (!collection) return resolve(new Result({ error: errorList.no_collection }))

    if (!filterParams) return resolve(new Result({ error: errorList.no_filters }))

    let dataPromise

    switch (collection) {
      case 'Product':
        dataPromise = module.exports.SeekOnProductCollection(filterParams)
        break
      case 'Record':
        dataPromise = module.exports.SeekOnRecordCollection(filterParams)
        break
      case 'CustomDocument':
        dataPromise = module.exports.SeekOnCustomCollection(filterParams)
        break
      case 'Example':
        dataPromise = module.exports.SeekOnExampleCollection(filterParams)
        break
      default:
        return resolve(new Result({ error: errorList.no_collection }))
    }

    dataPromise
      .then(result => {
        return resolve(new Result({ data: result, msg: 'Success' }))
      })
      .catch(error => {
        console.error(`[filter-failed] collection ${collection} details: ${error}`)
        return resolve(new Result({ error: errorList.invalid_filter }))
      })
  })
}

module.exports.SeekOnProductCollection = (filterParams) => {
  return new Promise(resolve => {
    ProductAdapter.FilterByDate(filterParams, fromCountArray)
      .then(rawProducts => {
        const filteredProducts = rawProducts.filter(
          product => product.totalCount >= filterParams.minCount && product.totalCount <= filterParams.maxCount
        )
        resolve(filteredProducts)
      })
      .catch(error => Promise.reject(error))
  })
}

module.exports.SeekOnRecordCollection = (filterParams) => {
  return new Promise(resolve => {
    RecordAdapter.FilterByDate(filterParams, fromCountArray)
      .then(rawRecords => {
        const filteredProducts = rawRecords.filter(
          record => record.totalCount >= filterParams.minCount && record.totalCount <= filterParams.maxCount
        )
        resolve(filteredProducts)
      })
      .catch(error => Promise.reject(error))
  })
}

module.exports.SeekOnCustomCollection = (filterParams) => {
  return new Promise(resolve => {
    CustomDocumentAdapter.FilterByDateAndTotalCount(filterParams)
      .then(filteredCustomDocuments => {
        resolve(filteredCustomDocuments)
      })
      .catch(error => Promise.reject(error))
  })
}

module.exports.SeekOnExampleCollection = (filterParams) => {
  return new Promise(resolve => {
    ExampleAdapter.FilterByDateAndTotalCount(filterParams)
      .then(filteredExamples => {
        resolve(filteredExamples)
      })
      .catch(error => Promise.reject(error))
  })
}
