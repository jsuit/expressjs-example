var user_store = require('../stores/user.js');

module.exports.LinkApp = function(app) {
	app.get('/api/users', function(req, res) {
		user_store.getAll(function(users) {
			res.json(users);
		});
	});

	app.get('/api/users/:id', function(req, res) {
		var userId = req.params.id;
		user_store.get(userId, function(user, err) {
			if (err) 
				return res.sendStatus(400);
			res.json(user);
		});
	});

	app.post('/api/users', function(req, res) {
		var user = req.body;
		if (!user) return res.sendStatus(400);
		user_store.save(user, function(user, err) {
			if (err) return res.sendStatus(400);
			res.json(user);
		});
	});

	app.put('/api/users/:id', function(req, res) {
		var userId = req.params.id;
		var userUpdate = req.body;
		if (!userUpdate) return res.sendStatus(400);
		user_store.get(userId, function(user, err) {
			if (error) return res.sendStatus(400);
			userUpdate.id = user.id;
			user_store.save(userUpdate, function(user, err) {
				if (err) return res.sendStatus(400);
				res.json(user);
			});
		});
	});

	app.delete('/api/users/:id', function(req, res) {
		var userId = req.params.id;

		user_store.get(userId, function(user, err1) {
			if (err1) return res.sendStatus(400);
			
			user_store.delete(user, function(user, err2) {
				if (err2) return res.sendStatus(400);
				res.json(user);
			});
		});

		
	});


};