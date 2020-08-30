const toResponse = (baseResult) => {
  const result = {}

  result.code = (baseResult.isFailure ? baseResult.error.code : baseResult.code)
  result.msg = (baseResult.isFailure ? baseResult.error.msg : baseResult.msg)
  result.records = (baseResult.isFailure ? [] : baseResult.data)

  return result
}

module.exports = toResponse
