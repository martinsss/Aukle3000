const express = require('express');
const router = express.Router();


// controller 
const Controller = require('../routes/controller.js');

// index
router.get('/', Controller.Render);
router.post('/', Controller.Index);

// register
router.get('/register/nanny', Controller.RegisterNanny);
//router.get('/register/parent', Controller.RegisterParent);



router.get('/list', Controller.List);
router.get('/item', Controller.Item);
//router.get('/test', tictactoeController.test);
//router.post('/', tictactoeController.gameP);

module.exports = router;