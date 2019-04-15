const router = require('express').Router();

const Profile = require('./profile-model.js');

router.post('/', async (req, res) => {
	try {
		const profile = await Profile.add(req.body);
		res.status(201).json(profile);
	} catch (error) {
		res
			.status(500)
			.json({ error: 'An error trying to add the profile to the database.' });
	}
});

router.get('/', (req, res) => {
	Profile.find()
		.then(profile => {
			res.json(profile);
		})
		.catch(err => res.send(err));
});

router.put('/:id', async (req, res) => {
	try {
		const updateProfile = await Profile.update(req.body);
		if (updateProfile) {
			res.status(200).json(updateProfile);
		} else {
			res.status(404).json({error: 'Profile id not found'});
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

router.get('/:id', async (req, res) => {
	try {
		const userProfile = await Profile.findByUser(req.params.id);
		if (userProfile) {
			res.status(200).json(userProfile);
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



//ADD /:id that gets trips for logged in user id
// inner join users & trips

module.exports = router;
