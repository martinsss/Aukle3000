const express = require('express');
const router = express.Router();


// controller 
const Controller = require('../routes/controller.js');


router.get('/', Controller.Render);
router.post('/', Controller.Index);

router.get('/list', Controller.List);
router.get('/item', Controller.Item);
//router.get('/test', tictactoeController.test);
//router.post('/', tictactoeController.gameP);

module.exports = router;