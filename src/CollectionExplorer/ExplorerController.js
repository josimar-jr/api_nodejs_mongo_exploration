const errorList = require('../Utils/ErrorsList')
const Result = require('../Utils/Result')

module.exports.ExplorerController = (collection, filterParams) => {
  if (!collection) return new Result({ error: errorList.no_collection })

  if (!filterParams) return new Result({ error: errorList.no_filters })

  const data = []

  return new Result({ data: data, msg: 'Success' })
}
