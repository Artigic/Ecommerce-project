const express = require('express');
const router = express.Router();

const {
  createOrder,
  getMyOrders,
  getAllOrders,
} = require('../controllers/orderController');

const {
  protect,
  adminOnly,
} = require('../middleware/authMiddleware');

router.post('/', protect, createOrder);
router.get('/my-orders', protect, getMyOrders);
router.get('/', protect, adminOnly, getAllOrders);

module.exports = router;