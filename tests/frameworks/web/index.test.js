process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const webServer = require('../../../src/app');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Students', () => {
  describe('GET all students /', () => {
    it('Should get all students record', (done) => {
      chai.request(webServer)
        .get('/api/students')
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        });
    });
  });
});
