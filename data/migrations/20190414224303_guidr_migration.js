exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('users', tbl => {
			tbl
				.increments()
				.primary()
				.notNullable();
			tbl
				.string('username', 128)
				.notNullable()
				.unique();
			tbl.string('password').notNullable();
		})
		.createTable('trip', tbl => {
			tbl.increments('');
			tbl
				.integer('user_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users');
			tbl.string('adventure_type', 128);
			tbl.string('title', 128);
			tbl.string('location', 128);
			tbl.string('duration', 128);
			tbl.text('description');
			tbl.boolean('professional').defaultTo(false);
			tbl.string('date', 128);
		});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users').dropTableIfExists('trip');
};
