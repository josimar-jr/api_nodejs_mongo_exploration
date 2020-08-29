class Product {
  constuctor (baseOptions) {
    this._id = baseOptions._id
    this.key = baseOptions.key
    this.counts = baseOptions.counts
    this.totalCount = baseOptions.counts?.length
    this.createdAt = baseOptions.createdAt
  }

  toResponse () {
    const exportAs = {
      key: this.key,
      createdAt: this.createdAt,
      totalCount: this.totalCount
    }
    return exportAs
  }
}

module.exports = Product
