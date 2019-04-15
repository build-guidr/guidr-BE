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
					date: 'Apr 15 2018',
					description: 'an exciting adventure of fun stuff, and things also!',
					duration: '5 days',
					location: 'Yosemite National Park',
					professional: true,
					title: 'Yosemite Sam',
				}
			]);
		});
};
