const express = require('express')
const router = express.Router();
const ItemController = require('../controllers/itemController')

router.route('/item')
.post(ItemController.saveItem)

router.route('/getItem')
.get(ItemController.getItem)

// router.route('/login')
// .post(UserController.getUser)

module.exports =router;