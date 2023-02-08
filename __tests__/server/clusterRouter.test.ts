import app from '../../server/server';
import request from 'supertest';
import dotenv from 'dotenv'

dotenv.config();

describe("GET all clusters.", () => {
  it('Should return a status code 200 when fetching clusters.', async () => {
    const res = await request(app)
      .get('/api/cluster/getAll')
      .set('Cookie', [`id=${process.env.K8R_USER_ID}`])
    expect(res.statusCode).toEqual(200);
  });
})

