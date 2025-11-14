// src/pages/Menu.jsx
import React, { useState } from "react";
import FoodCard from "../components/FoodCard";

// Sample food data
const DUMMY_FOODS = [
  {
    id: 1,
    name: "Cheese Pizza",
    description: "Fresh mozzarella cheese with tomato sauce.",
    price: 1500,
    category: "Pizza",
    imageUrl: "https://images.pexels.com/photos/4109083/pexels-photo-4109083.jpeg",
  },
  {
    id: 2,
    name: "Veg Burger",
    description: "Crispy veggie patty with lettuce and cheese.",
    price: 1200,
    category: "Burgers",
    imageUrl: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
  },
  {
    id: 3,
    name: "Chicken Fried Rice",
    description: "Sri Lankan style chicken fried rice.",
    price: 1000,
    category: "Rice",
    imageUrl: "https://images.pexels.com/photos/3577565/pexels-photo-3577565.jpeg",
  },
];

export default function Menu() {
  // State for food items
  const [foods] = useState(DUMMY_FOODS);

  // Handle adding item to cart
  const handleAddToCart = (foodItem) => {
    console.log("Adding to cart:", foodItem);
    // TODO: Later we will call backend /cart API here
  };

  return (
    <div className="menu-container">
      
      {/* Page Header */}
      <div className="page-header">
        <h2 className="page-title">Our Menu</h2>
      </div>

      {/* Food Items Grid */}
      <div className="food-grid">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            description={food.description}
            price={food.price}
            category={food.category}
            imageUrl={food.imageUrl}
            onAddToCart={() => handleAddToCart(food)}
          />
        ))}
      </div>

    </div>
  );
}

// CSS Classes (Tailwind CSS equivalents)
const styles = {
  menuContainer: "mt-6",
  pageHeader: "mb-4",
  pageTitle: "text-2xl font-bold",
  foodGrid: "grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
};