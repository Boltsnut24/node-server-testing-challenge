const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {
        it('Return a 200 OK status code', () => {
            return request(server)
            .get('/')
            .then( res => {
                expect(res.status).toBe(200);
            })
        });

        it("Should return { api: 'It is alive!' } ", async () => {
            const res = await request(server).get('/');

            expect(res.body.api).toBe('It is alive!');
            expect(res.body).toEqual({ api: 'It is alive!' });
        });
        
        it('Should return JSON', done => {
            request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
                done();
            });
        });
    });
});