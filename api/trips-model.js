
const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById
};

async function add(trip) {
	const [id] = await db('trip').insert(trip);
	return findById(id);
}

function find() {
	return db('trip');
}

function findBy(filter) {
	return db('trip').where(filter);
}

function findById(id) {
	return db('trip')
		.where({ id })
		.first();
}
