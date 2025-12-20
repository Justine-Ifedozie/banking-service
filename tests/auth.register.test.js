const request = require('supertest');
const app = require('../src/app');

describe('Auth - Register', () => {
    it('should register a user successfully', async () => {
        await request(app).post('/api/auth/register').send({
                email: 'justine@gmail.com',
                phone: '+2348012345678',
                password: 'password123',
                firstName: 'Justine',
                lastName: 'Ifeanyi'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.user.email).toBe('justine@gmail.com');
    });

    it('should not allow duplicate email registration', async () => {
        await request(app).post('/api/auth/register').send({
            email: 'justine@gmail.com',
            phone: '+2348012345678',
            password: 'password123',
            firstName: 'Justine',
            lastName: 'Ifeanyi'
        });

        const res = await request(app).post('/api/auth/register').send({
            email: 'justine@gmail.com',
            phone: '+2348012345678',
            password: 'password123',
            firstName: 'Justine',
            lastName: 'Ifeanyi'
        });
        expect(res.statusCode).toBe(409);
    });
});