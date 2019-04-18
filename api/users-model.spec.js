
const db = require('../data/dbConfig.js');
const Users = require('./users-model.js');

describe('users-model.js', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('CREATE', () => {
        it('return the new user id and username', async () => {
            const user = {
                username:'username',
                password:'password'
            };
            const newUser = await Users.add(user);
            expect(newUser.id).toBe('1');
            expect(newUser.username).toBe('username');

            const user2 = {
                username:'username2',
                password:'password'
            };
            const newUser2 = await Users.add(user2);
            expect(newUser2.id).toBe('2');
            expect(newUser2.username).toBe('username2');
        });
    });
});