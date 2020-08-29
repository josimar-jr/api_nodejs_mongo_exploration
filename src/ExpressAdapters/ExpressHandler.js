const { OK, BAD_REQUEST } = require('http-status-codes')

const toResponse = require('./ExpressResponseFormatter')
const { ExplorerController } = require('../CollectionExplorer/ExplorerController')
const errorList = require('../Utils/ErrorsList')
const Result = require('../Utils/Result')

const isBodyValid = (body) => {
  return (body.startDate && body.endDate && body.minCount && body.maxCount)
}

module.exports.ExplorerHandler = (req, res) => {
  const body = req.body
  body.startDate = new Date(body.startDate)
  body.endDate = new Date(body.endDate)

  if (!isBodyValid(body)) {
    const invalidResult = new Result({ error: errorList.no_filters })
    res.status(BAD_REQUEST).json(toResponse(invalidResult))
    return
  }

  const result = ExplorerController(req.params.collection, req.body)
  res.status(OK).json(toResponse(result))
}
