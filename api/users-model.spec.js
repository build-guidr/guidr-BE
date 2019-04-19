
const db = require('../data/dbConfig.js');
const Users = require('./users-model.js');

const faker = require('faker');

const createFakeUser = () => ({
	username: faker.internet.userName(),
	password: faker.internet.password()
});

const fakeUsers = [];
const userCount = 10;
for (let i=0;i<userCount;i++) {
    fakeUsers.push(createFakeUser());
}

describe('users-model.js', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('CREATE', () => {
        it('return the new user id and username', async () => {
            const newUser = await Users.add(fakeUsers[0]);
            expect(newUser.id).toBe('1');
            expect(newUser.username).toBe(fakeUsers[0].username);

            const newUser2 = await Users.add(fakeUsers[1]);
            expect(newUser2.id).toBe('2');
            expect(newUser2.username).toBe(fakeUsers[1].username);
        });
    });

    describe('READ', () => {
        it('returns a list of all users', async () => {
            const newUser = await Users.add(fakeUsers[0]);
            expect(newUser.id).toBe('1');
            expect(newUser.username).toBe(fakeUsers[0].username);

            const newUser2 = await Users.add(fakeUsers[1]);
            expect(newUser2.id).toBe('2');
            expect(newUser2.username).toBe(fakeUsers[1].username);

            const userList = await Users.find();
            expect(userList[0].username).toEqual(fakeUsers[0].username);
            expect(userList[1].username).toEqual(fakeUsers[1].username);
        });

        it('returns a specified user', async () => {
            const newUser = await Users.add(fakeUsers[0]);
            expect(newUser.id).toBe('1');
            expect(newUser.username).toBe(fakeUsers[0].username);
            const newUser2 = await Users.add(fakeUsers[1]);
            expect(newUser2.id).toBe('2');
            expect(newUser2.username).toBe(fakeUsers[1].username);

            const user_id = '2';
            const userList = await Users.findById(user_id);
            expect(userList.username).toEqual(fakeUsers[1].username);
            expect(userList.id).toBe(user_id);
        });
    });

    describe('DELETE', () => {
        it('removes a specified user ', async () => {
            const newUser = await Users.add(fakeUsers[0]);
            expect(newUser.id).toBe('1');
            expect(newUser.username).toBe(fakeUsers[0].username);
            const newUser2 = await Users.add(fakeUsers[1]);
            expect(newUser2.id).toBe('2');
            expect(newUser2.username).toBe(fakeUsers[1].username);

            const user_id = '1';
            await Users.remove(user_id);
            const userList = await Users.find();
            expect(userList[0].username).toEqual(fakeUsers[1].username);
            expect(userList[0].id).not.toBe(user_id);
        });
    });
});