class ApiError {
  constructor (errorProperties) {
    this.code = errorProperties.code
    this.msg = errorProperties.msg
    this.result = []
  }
}

const list = {
  conn_string: new ApiError({ code: -2, msg: 'Database connection errro, verify connection string and user authorization', result: [] }),
  not_found: new ApiError({ code: -1, msg: 'Endpoint fetched doesn\'t exist', result: [] }),
  no_collection: new ApiError({ code: 1, msg: 'Provide a collection name to fetch data', result: [] }),
  no_filters: new ApiError({ code: 2, msg: 'Provide start and end date as well as counts boundary in the body', result: [] }),
  invalid_filter: new ApiError({ code: 3, msg: 'Provide a valid filter', result: [] }),
  collection_not_mapped: new ApiError({ code: 4, msg: 'Provide one of this collections to fetch: Product, Record, CustomDocument or Example', result: [] })
}

module.exports = list
