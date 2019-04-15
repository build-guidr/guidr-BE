const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', (req, res) => {
	Users.find()
		.then(users => {
			res.json(users);
		})
		.catch(err => res.send(err));
});

router.delete("/:id", async (req, res) => {
	try {
		const removed = await Users.remove(req.params.id);
		if (removed) {
			res.status(204).json({success: 'User removed'}); 
		} else {
			res.status(404).json({ message: "The User with the specified ID does not exist." });    
		}
	} catch(err) {
		res.status(500).json(err);
	}
});

module.exports = router;
