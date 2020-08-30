const mongoose = require('mongoose')
const baseSchema = require('./Schemas/BaseSchemaAsNumber')
const errorList = require('../../Utils/ErrorsList')

const baseModel = mongoose.model('CustomDocument', baseSchema)
module.exports = baseModel

module.exports.FilterByDateAndTotalCount = (rawFilter) => {
  return new Promise(resolve => {
    // mounts filter to run in mongodb aggregate pipeline
    const startDate = rawFilter.startDate // moment(rawFilter.startDate)
    const endDate = rawFilter.endDate // moment(rawFilter.endDate)
    // queries data with the filter
    baseModel
      .find({
        createdAt: {
          $gte: startDate,
          $lte: endDate
        },
        totalCount: {
          $gte: rawFilter.minCount,
          $lte: rawFilter.maxCount
        }
      })
      .exec()
      .then(queryResult => resolve(queryResult))
      .catch(error => {
        console.error(`[CustomDocument-mongo] error while finding data ${error}`)
        Promise.reject(errorList.conn_string)
      })
  })
}
