require('dotenv').config()
const app = require('./server')
const mongoose = require('mongoose')

const port = Number(process.env.PORT) || 3000

const mongoDbUri = process.env.MONGODB_URI

mongoose.connect(mongoDbUri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
)

app.listen(port, () => {
  const serverStartDatetime = new Date()
  console.info(`application running - ${serverStartDatetime.toString()}`)
  console.info(`node version - ${process.version}`)
})
