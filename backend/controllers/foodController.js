import Food from "../models/food.js";

// @desc Add new food (Admin only)
export const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    
    // Get image URL from uploaded file (works with any field name)
    const imageUrl = req.files && req.files.length > 0 ? req.files[0].path : "";
    
    const food = new Food({ name, description, price, category, imageUrl });
    await food.save();
    res.status(201).json({ message: "Food added successfully", food });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all foods
export const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get food by ID
export const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ message: "Food not found" });
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update food (Admin only)
export const updateFood = async (req, res) => {
  try {
    const updateData = { ...req.body };
    
    // If a new image is uploaded, update the imageUrl
    if (req.files && req.files.length > 0) {
      updateData.imageUrl = req.files[0].path;
    }
    
    const food = await Food.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!food) return res.status(404).json({ message: "Food not found" });
    res.status(200).json({ message: "Food updated", food });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Delete food (Admin only)
export const deleteFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) return res.status(404).json({ message: "Food not found" });
    res.status(200).json({ message: "Food deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
