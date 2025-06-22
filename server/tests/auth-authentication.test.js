


// __tests__/auth-authentication.test.js
import request from 'supertest';
import jwt from 'jsonwebtoken';

import RegisterUser from '../models/registerModel.js';
import mongoose from 'mongoose';



const TEST_USER = {
  name: 'Test',
  lastName: 'User',
  email: 'testauth@example.com',
  password: 'Password@123',
};



let userId;



beforeAll(async () => {
  const user = new RegisterUser(TEST_USER);
  await user.save();
  userId = user._id;
});

afterAll(async () => {
  await RegisterUser.deleteMany({});
  await mongoose.connection.close();
});

describe('GET /auth/authentication', () => {
  it('should return authenticated user if valid token exists', async () => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const res = await request(app)
      .get('/auth/authentication')
      .set('Cookie', [`authToken=${token}`]);

    expect(res.statusCode).toBe(200);
    expect(res.body.authenticated).toBe(true);
    expect(res.body.user.name).toBe(TEST_USER.name);
  });

  it('should return authenticated: false if no token', async () => {
    const res = await request(app).get('/auth/authentication');
    expect(res.statusCode).toBe(401);
    expect(res.body.authenticated).toBe(false);
  });

  it('should return authenticated: false if token is invalid', async () => {
    const res = await request(app)
      .get('/auth/authentication')
      .set('Cookie', [`authToken=invalidtoken`]);

    expect(res.statusCode).toBe(403);
    expect(res.body.authenticated).toBe(false);
  });
});









