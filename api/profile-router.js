const router = require('express').Router();

const Profile = require('./profile-model.js');

router.get('/', (req, res) => {
	Profile.find()
		.then(profile => {
			res.json(profile);
		})
		.catch(err => res.send(err));
});

//ADD /:id that gets trips for logged in user id
// inner join users & trips

module.exports = router;
