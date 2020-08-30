const mongoose = require('mongoose')
const baseSchema = require('./Schemas/BaseSchemaCountAsArray')
const errorList = require('../../Utils/ErrorsList')

const baseModel = mongoose.model('Product', baseSchema)
module.exports = baseModel

module.exports.FilterByDate = (rawFilter, mappingCommand) => {
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
        }
      })
      .exec()
      .then(queryResult => {
        const listValue = queryResult.map(item => mappingCommand(item))
        resolve(listValue)
      })
      .catch(error => {
        console.error(`[Product-mongo] error while finding data ${error}`)
        Promise.reject(errorList.conn_string)
      })
  })
}
