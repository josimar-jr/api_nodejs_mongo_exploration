class ApiError {
  constructor (errorProperties) {
    this.code = errorProperties.code
    this.msg = errorProperties.msg
    this.result = []
  }
}

const list = {
  not_found: new ApiError({ code: -1, msg: 'Endpoint fetched doesn\'t exist', result: [] }),
  no_collection: new ApiError({ code: 1, msg: 'Provide a collection name to fetch data', result: [] }),
  no_filters: new ApiError({ code: 2, msg: 'Provide start and end date as well as counts boundary in the body', result: [] })
}

module.exports = list
