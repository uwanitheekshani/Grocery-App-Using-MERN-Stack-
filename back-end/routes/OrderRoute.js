const express = require('express')
const router = express.Router();
const OrderController = require('../controllers/orderController')

router.route('/order')
.post(OrderController.saveOrder)

router.route('/getOrder/:useremail')
.get(OrderController.getSelectOrder)

router.route('/getOrder')
.get(OrderController.getOrder)

module.exports =router;