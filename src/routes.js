const routes = require('express').Router()
const { NOT_FOUND, OK } = require('http-status-codes')

const healthcheck = (req, res) => res.status(OK).json({ status: 'ok' })

routes.get('/', healthcheck)
routes.get('/healthcheck', healthcheck)

routes.get('*', (req, res) => {
  res.status(NOT_FOUND).json({
    code: -1,
    msg: 'route not found'
  })
})

module.exports = routes
