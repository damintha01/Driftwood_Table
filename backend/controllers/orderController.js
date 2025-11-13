import Order from "../models/Order.js";

// 🧑‍💻 User places an order
export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;
    const order = new Order({
      user: req.user.id, // from JWT token
      items,
      totalPrice
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Error creating order" });
  }
};

// 👨‍💼 Admin: get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "username email").populate("items.food", "name price");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};

// 🧍 User: get their own orders
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate("items.food", "name price");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user orders" });
  }
};

// 👨‍💼 Admin: update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: "Error updating order status" });
  }
};
