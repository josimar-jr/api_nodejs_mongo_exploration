const request = require('supertest')
const server = require('../server')
const { NOT_FOUND, BAD_REQUEST, OK } = require('http-status-codes')

describe('explores api to fetch data', () => {
  it('it doesn\'t provide collection name', async (done) => {
    request(server)
      .post('/fetch/')
      .expect('Content-Type', /json/)
      .expect(NOT_FOUND, done)
  })

  it('no body provided', async (done) => {
    request(server)
      .post('/fetch/blergh')
      .expect('Content-Type', /json/)
      .expect(BAD_REQUEST, done)
  })

  it('no body provided', async (done) => {
    const startDate = '2016-01-26'
    const endDate = '2018-02-02'
    const minCount = 2700
    const maxCount = 3000
    request(server)
      .post('/fetch/blergh')
      .send({ startDate, endDate, minCount, maxCount })
      .expect('Content-Type', /json/)
      .expect(OK, done)
  })
})
