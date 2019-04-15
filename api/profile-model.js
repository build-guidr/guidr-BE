const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findByUser,
	findById
};

async function add(profile) {
	const [id] = await db('user_profiles').insert(profile);
	return findById(id);
}

function find() {
	return db('user_profiles');
}


function findByUser(user_id) {
	return db('user_profiles').where({user_id}).first();
}

function findById(id) {
	return db('user_profiles')
		.where({ id })
		.first();
}
