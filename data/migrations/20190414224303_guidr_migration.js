exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('users', tbl => {
			tbl.increments();
			tbl.string('username', 128)
				.notNullable()
				.unique();
			tbl.string('password').notNullable();
		})
		.createTable('trip', tbl => {
			tbl.increments();
			tbl
				.integer('user_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.string('adventure_type', 128);
			tbl.string('date', 128);
			tbl.text('description');
			tbl.string('duration', 128);
			tbl.string('location', 128);
			tbl.boolean('professional').defaultTo(false);
			tbl.string('title', 128);
		})
		.createTable('user_profiles', tbl => {
			tbl.increments();
			tbl
				.integer('user_id')
				.unsigned()
				.notNullable()
				.unique()
				.references('id')
				.inTable('users')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.string('first_name', 128);
			tbl.string('last_name', 128);
			tbl.string('age', 128);
			tbl.text('certs');
			tbl.text('profile_text');
			tbl.string('years_of_exp', 128);
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTableIfExists('users')
		.dropTableIfExists('user_profiles')
		.dropTableIfExists('trip');
};
