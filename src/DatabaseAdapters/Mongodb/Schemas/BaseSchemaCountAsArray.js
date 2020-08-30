const Schema = require('mongoose').Schema

const baseSchema = new Schema({
  key: { String },
  createdAt: { Date },
  counts: [{ Number }]
})

baseSchema.index({ key: 1 }, { sparse: true })
baseSchema.index({ createdAt: -1 }, { sparse: true })

module.exports = baseSchema
