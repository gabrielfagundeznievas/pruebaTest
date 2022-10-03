const request = require('supertest');
const { app, server } = require('../index');

afterEach(() => {
    server.close();
});

beforeEach(() => {
    server.close();
});

describe('POST /', () => {
    test('Login del registro', async () => {
        const user = {
            "firstname": "Carlitos",
            "lastname": "Pena",
            "password": 12456,
            "email": "correo@correo.com"
        }

        const {statusCode , body} = await request(app).post('/user/register').send(user)

        expect(statusCode).toBe(200)
        // expect(body).toMatchObject({
        //     ok: true,
        //     msg: expect.any(String)
        // });
        expect(body).toMatchObject({
            firstname: expect.any(String),
            lastname: expect.any(String),
            password: expect.any(Number),
            email: expect.any(String)
        })
    });

    test('Errores del registro', async () => {
        const user = {
            "firstname": "Carlitos",
            "lastname": "Pena",
            "password": 12456,
            "email": "correo@correo.com"
        }

        const {statusCode , body} = await request(app).post('/user/register').send(user)

        expect(statusCode).toBe(400)

        // expect(body).toMatchObject({
        //     ok: false,
        //     msg: expect.any(String)
        // });
    });
})