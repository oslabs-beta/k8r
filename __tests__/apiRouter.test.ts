import app from '../server/server';
import request from 'supertest';

describe("GET /getDashboardUIds", () => {
  it('Returns status code 200 when fetching dashboard UIds', async () => {
    const res = await request(app)
      .get('/api/getDashboardUIds')
      .set('Cookie', ['id=63cf09fd655ea55bc5b4e9ee'])
    expect(res.statusCode).toEqual(200);
  });
})


