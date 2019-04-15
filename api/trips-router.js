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
		const userTrips = await Trips.findByUser(req.params.id);
		if (userTrips.length > 0) {
			res.status(200).json(userTrips);
		} else {
			res.status(404).json({error: 'user id not found'});
		}
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
