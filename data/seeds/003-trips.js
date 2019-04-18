
exports.seed = function(knex, Promise) {
	const fakeTrips = [];
	const tripCount = 10;
	for (let i=0;i<tripCount;i++) {
		fakeTrips.push(createFakeTrip());
	}

	return knex('trip')
		.del()
		.then(function() {
			return knex('trip').insert(fakeTrips);
		});
};

const faker = require('faker');
const moment = require('moment');

const createFakeTrip = () => {
	return {
		user_id: Math.floor(Math.random() * 10 + 1),
		adventure_type: faker.lorem.words(2),
		date: `${moment(faker.date.future(1)).format('MMM Do YYYY')}`,
		description: faker.lorem.paragraph(),
		duration: `${Math.floor(Math.random() * 3 + 1)} days`,
		location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
		professional: faker.random.boolean(),
		title: faker.random.words(2)
	};
}
