exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('trip')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('trip').insert([
				{
					id: 1,
					user_id: '1',
					adventure_type: 'a lot of things',
					title: 'Good trip',
					duration: '5 days',
					description:
						'bhla bhla bhla bhla bhla bhlabhlabhla  bhla bhla bhla bhla bhla',
					professional: true,
					date: 'Apr 15 2018'
				}
			]);
		});
};
