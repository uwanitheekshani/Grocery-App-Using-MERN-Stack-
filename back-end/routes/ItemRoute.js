const express = require('express')
const router = express.Router();
const ItemController = require('../controllers/itemController')

router.route('/item')
.post(ItemController.saveItem)

router.route('/getItem')
.get(ItemController.getItem)

router.route('/getItem/:id')
.get(ItemController.getSelectItem)

router.route('/updateItem/:id')
.put(ItemController.updateItem)
// router.route('/login')
// .post(UserController.getUser)

module.exports =router;