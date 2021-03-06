exports.seed = function(knex, Promise) {
	const fakeProfiles = [];
	const userCount = 10;
	for (let i=0;i<userCount;i++) {
		let user_id = i+1;
		fakeProfiles.push(createFakeProfile(user_id));
	}
	return knex('user_profiles').insert(fakeProfiles);
};

const faker = require('faker');

const createFakeProfile = (i) => ({
	user_id: i,
	first_name: faker.name.firstName(),
	last_name: faker.name.lastName(),
	age: Math.floor(Math.random() * 80),
	certs: faker.random.words(3),
	profile_text:
		faker.lorem.paragraph(),
	years_of_exp: Math.floor(Math.random() * 60)
});
