const request = require('supertest')
const server = require('./server')
const { OK, NOT_FOUND } = require('http-status-codes')

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
      .expect(OK)
      .end(function(err, res) {
        if (err) return done(err)
        expect(res.body.status).toBe('ok')
        done()
      })
  })

  it('should get a not found for a GET', async (done) => {
    request(server)
      .get('/blergh')
      .expect('Content-Type', /json/)
      .expect(NOT_FOUND, done)
  })

  it('should get a not found for a PUT', async (done) => {
    request(server)
      .put('/blergh')
      .expect('Content-Type', /json/)
      .expect(NOT_FOUND, done)
  })

  it('should get a not found for a POST', async (done) => {
    request(server)
      .post('/blergh')
      .expect('Content-Type', /json/)
      .expect(NOT_FOUND, done)
  })

  it('should get a not found for a DELETE', async (done) => {
    request(server)
      .delete('/blergh')
      .expect('Content-Type', /json/)
      .expect(NOT_FOUND, done)
  })
})
