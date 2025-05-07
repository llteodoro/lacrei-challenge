const request = require('supertest');
const app = require('../app');

describe('GET /status', () => {
  it('should return status OK', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('OK');
  });
});