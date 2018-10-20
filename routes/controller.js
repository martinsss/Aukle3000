'use strict';
//const f = require('../controllers/functions');

const index = 'Aukle3000', list = 'Filtered list', details = 'Details about nanny';

// GET
	// render ejs
exports.Render = function(req, res, next){
	res.render('index', {title: index});
};

exports.RegisterNanny = function(req, res, next){
	res.render('sign-up-form-nanny', {title: 'RegisterNanny'});
};

/*exports.RegisterParent = function(req, res, next){
	res.render('register_parent', {title: index});
};
*/

exports.List = function(req, res, next){
	res.render('list', {title: list});
};

exports.Item = function(req, res, next){
	res.render('item', {title: details});
};


// POST
exports.Index = function(req, res, next){
	var db = req.app.locals.db, body = req.body, type = body.type;
	console.log('post', body);
};