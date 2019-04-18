
const db = require('../data/dbConfig');

module.exports = {
	add,
	remove,
	find,
	findById,
	findByUser,
	update
};

async function add(trip) {
	const [id] = await db('trip').insert(trip);
	return findById(id);
}

async function remove(id) {
	return db('trip').where({id}).delete();
}

async function find() {
	return db('trip');
}

async function findByUser(user_id) {
	return db('trip').where({user_id});
}

async function findById(id) {
	return db('trip')
		.where({ id })
		.first();
}

async function update(trip) {
	return db('trip').where({id:trip.id}).update(trip);
}
