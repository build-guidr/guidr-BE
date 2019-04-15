
const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findById,
	findByUser
};

async function add(trip) {
	const [id] = await db('trip').insert(trip);
	return findById(id);
}

function find() {
	return db('trip');
}

function findByUser(user_id) {
	return db('trip').where({user_id});
}

function findById(id) {
	return db('trip')
		.where({ id })
		.first();
}
