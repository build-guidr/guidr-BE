const localPg = {
	host: 'localhost',
	database: 'users',
	user: 'juliann',
	password: 'pass'
}

const productionDbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/guidr.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done); // enforce FK
			}
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	testing: {
		client: 'pg',
		// connection: 'postgres://localhost:5432/<testing>',
		connection: {
			database: 'testing',
			user: 'test',
			password: 'test'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	  },

	production: {
		client: 'pg',
		connection: productionDbConnection,
		migrations: {
			directory: './data/migrations',
		  },
		  seeds: {
			directory: './data/seeds',
		},
	}
};
