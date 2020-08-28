const routes = require('express').Router()
const httpStatus = require('http-status-codes')

const healthcheck = (req, res) => res.status(httpStatus.OK).json({ status: 'ok' })

routes.get('/', healthcheck)
routes.get('/healthcheck', healthcheck)

routes.get('*', (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    code: -1,
    msg: 'route not found'
  })
})

module.exports = routes
