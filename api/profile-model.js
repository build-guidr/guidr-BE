const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById
};

async function add(profile) {
	const [id] = await db('user_profiles').insert(profile);
	return findById(id);
}

function find() {
	return db('user_profiles');
}

function findBy(filter) {
	return db('user_profiles').where(filter);
}

function findById(id) {
	return db('user_profiles')
		.where({ id })
		.first();
}
