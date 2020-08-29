class Result {
  constructor (baseOptions) {
    this.code = 0
    this.data = baseOptions.data
    this.msg = baseOptions.msg
    this.error = baseOptions.error
    this.isFailure = (baseOptions.error || !baseOptions.data)
  }
}

module.exports = Result
