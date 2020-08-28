const express = require('express')
const app = express()
const port = process.env.ENV || 3000

const healthcheck = (req, res) => res.json({ status: 'ok' })

app.get('/', healthcheck)
app.get('/', healthcheck)

app.listen(port, () => {
  const serverStartDatetime = new Date()
  console.info(`application running on port ${port} - ${serverStartDatetime.toString()}`)
})
