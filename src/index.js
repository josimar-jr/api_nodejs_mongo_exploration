require('dotenv').config()
const app = require('./server')
const port = Number(process.env.PORT) || 3000

app.listen(port, () => {
  const serverStartDatetime = new Date()
  console.info(`application running - ${serverStartDatetime.toString()}`)
  console.info(`node version - ${process.version}`)
})
