
const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    it('should be alive', async () => {
        const result = await request(server).get('/');
        expect(result.status).toBe(200);
    });
});
