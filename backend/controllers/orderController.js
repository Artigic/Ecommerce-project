const Order = require('../models/Order');

const createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(order);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Server Error',
    });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.id,
    });

    res.json(orders);

  } catch (error) {
    console.log(error);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user');

    res.json(orders);

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  getAllOrders,
};