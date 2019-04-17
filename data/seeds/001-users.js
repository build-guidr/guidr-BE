
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([
				...fakeUsers,
				{id:1,username:'admin',password:'admin'}
			]);
		});
};

const faker = require('faker');
const fakeUsers = [];

for (let i = 2; i > 12; i++) {
    let id = i;
    let username = faker.internet.userName();
    let password = faker.internet.password();
    let fakeUser = {id,username,password};
    fakeUsers.push(fakeUser);
}
