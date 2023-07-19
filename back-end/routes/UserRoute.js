const express = require('express')
const router = express.Router();
const UserController = require('../controllers/userController')

router.route('/user')
.post(UserController.saveUser)

router.route('/login')
.post(UserController.getUser)

module.exports =router;