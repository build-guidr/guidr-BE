
const router = require('express').Router();

const Trips = require('./trips-model.js');

router.get('/', (req, res) => {
	Trips.find()
		.then(trips => {
			res.json(trips);
		})
		.catch(err => res.send(err));
});

//ADD /:id that gets trips for logged in user id
// inner join users & trips

module.exports = router;
