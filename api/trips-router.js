const router = require('express').Router();

const Trips = require('./trips-model.js');

router.get('/', async (req, res) => {
	try {
		const allTrips = await Trips.find();
		res.status(200).json(allTrips);
	}
	catch(err) {
		res.status(500).json(err);
	}

});

//ADD /:id that gets trips for logged in user id
// inner join users & trips

router.post('/', async (req, res) => {
	// const {
	// 	adventure_type,
	// 	date,
	// 	description,
	// 	duration,
	// 	location,
	// 	professional,
	// 	title
	// } = req.body;
	// req.body = { ...req.body };
	try {
		const trip = await Trips.add(req.body);
		res.status(201).json(trip);
	} catch (error) {
		res
			.status(500)
			.json({ error: 'An error trying to add the trip to the database.' });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const users = await db('users')
			.innerJoin('trip', {'trip.id': 'users.id'})
			.select('trip.*')
			.where({'users.id': req.params.id});
		const trip = await db('trip').where('id', req.params.id);
		proj
			? res.status(200).json({
					...trip[0],
					users: users
			  })
			: res
					.status(404)
					.json({ errorMessage: 'A project with that ID does not exist.' });
	} catch (error) {
		res
			.status(500)
			.json({
				error:
					'An error occuried while trying to access the project from the database.'
			});
	}
});

module.exports = router;
