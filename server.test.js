const request = require('supertest');
const app = require('./server');

describe('Test Base Route GET / ', () => {
 

    it('checking for response object properties', (done) => {
      request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).toHaveProperty('msg')
        expect(res.body).toHaveProperty('build_SHA')
        expect(res.body).toHaveProperty('status')
        expect(res.body).toHaveProperty('timestamp')
        done();
      })
  })

  it('Check content-type is JSON', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      done();
    })
})
})
