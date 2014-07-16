module.exports = function(app) {

	var Event = require('../models/event');
	var express = require('express');
	var router = express.Router(); 

	router.use(function(req, res, next) {
		console.log("Logging");
		next();
	});

	router.route('/events');

	app.use('/api', router);
};
