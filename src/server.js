const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')

app.use(routes)

app.listen(port, () => {
  const serverStartDatetime = new Date()
  console.info(`application running - ${serverStartDatetime.toString()}`)
})
