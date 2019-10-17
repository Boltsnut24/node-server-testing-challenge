const Users = require('./users-model.js');
const db = require('../data/dbConfig.js');

describe('Users model', () => {

    it('Should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
    describe('add()', () => {
        it('Should add users into the db', async () => {
            await Users.add({ username: 'carlos' });

            let users = await db('users');
            
            expect(users).toHaveLength(2);
        })
    })
})