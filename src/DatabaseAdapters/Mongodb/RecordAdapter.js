const mongoose = require('mongoose')

const baseSchema = require('./Schemas/BaseSchemaCountAsArray')

const baseModel = mongoose.model('record', baseSchema)
module.exports = baseModel

module.exports.FilterByDate = (rawFilter, mappingCommand) => {
  return new Promise(resolve => {
    // mounts filter to run in mongodb aggregate pipeline
    const startDate = rawFilter.startDate // moment(rawFilter.startDate)
    const endDate = rawFilter.endDate // moment(rawFilter.endDate)
    // queries data with the filter
    baseModel
      .aggregate([
        {
          $match: {
            createdAt: {
              $gte: startDate,
              $lte: endDate
            }
          }
        }
      ])
      .exec()
      .then(queryResult => {
        const valuesList = queryResult.map(item => mappingCommand(item))
        resolve(valuesList)
      })
  })
}
