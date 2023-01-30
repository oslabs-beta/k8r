import app from '../server/server';
import request from 'supertest';
import dotenv from 'dotenv'

dotenv.config();

describe("GET /getDashboardUIds", () => {
  it('Returns status code 200 when fetching dashboard UIds', async () => {
    const res = await request(app)
      .get('/api/getDashboardUIds')
      .set('Cookie', [`id=${process.env.K8R_USER_ID}`])
    expect(res.statusCode).toEqual(200);
  });
})


