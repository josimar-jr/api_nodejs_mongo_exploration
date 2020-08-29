const routes = require('express').Router()
const { NOT_FOUND, OK } = require('http-status-codes')

const errorsList = require('./Utils/ErrorsList')
const { ExplorerHandler } = require('./ExpressAdapters/ExpressHandler')

routes.post('/fetch/:collection', ExplorerHandler)

const healthcheck = (req, res) => res.status(OK).json({ status: 'ok' })
routes.get('/', healthcheck)
routes.get('/healthcheck', healthcheck)

const notFound = (req, res) => res.status(NOT_FOUND).json(errorsList.not_found)
routes.get('*', notFound)
routes.put('*', notFound)
routes.post('*', notFound)
routes.delete('*', notFound)

module.exports = routes
