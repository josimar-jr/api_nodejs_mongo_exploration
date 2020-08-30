module.exports.fromCountArray = (baseMongoDocument) => {
  const exportAs = {
    key: baseMongoDocument.key,
    createdAt: baseMongoDocument.createdAt,
    totalCount: baseMongoDocument.counts.length
  }
  return exportAs
}
