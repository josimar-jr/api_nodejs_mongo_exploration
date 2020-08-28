const request = require('supertest')
const server = require('./server')
const { OK } = require('http-status-codes')

describe('routes tests', () => {
  it('should get a success on root', async (done) => {
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(OK, done)
  })

  it('should get a success /healthcheck', async (done) => {
    request(server)
      .get('/healthcheck')
      .expect('Content-Type', /json/)
      .expect(OK, done)
  })
})
