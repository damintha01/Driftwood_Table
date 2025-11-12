import Cart from "../models/Cart.js";
import Food from "../models/food.js";

// Add item to cart
export const addToCart = async (req, res) => {
  const userId = req.user._id;
  const { foodId, quantity } = req.body;

  try {
    const food = await Food.findById(foodId);
    if (!food) return res.status(404).json({ message: "Food not found" });

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [], totalPrice: 0 });
    }

    const existingItem = cart.items.find((item) => item.foodId.toString() === foodId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ foodId, quantity });
    }

    // Recalculate total
    cart.totalPrice = await calculateTotal(cart.items);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const calculateTotal = async (items) => {
  let total = 0;
  for (const item of items) {
    const food = await Food.findById(item.foodId);
    total += food.price * item.quantity;
  }
  return total;
};

// Get user cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate("items.foodId");
    if (!cart) return res.status(404).json({ message: "Cart is empty" });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove item
export const removeItem = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(
      (item) => item.foodId.toString() !== req.params.id
    );

    cart.totalPrice = await calculateTotal(cart.items);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
