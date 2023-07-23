const express = require('express')
const router = express.Router();
const AdminController = require('../controllers/adminController')

router.route('/adminLogin')
.post(AdminController.getAdmin)

module.exports =router;