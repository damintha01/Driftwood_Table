import React from 'react'

const FoodCard = ({ 
  name, 
  description, 
  price, 
  category, 
  imageUrl, 
  onAddToCart 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      {/* Food Image */}
      <img
        src={imageUrl}
        alt={name}
        className="h-40 w-full object-cover"
      />
      
      {/* Food Details Container */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        
        {/* Name and Category Row */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{name}</h3>
          <span className="text-sm text-gray-500">{category}</span>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-600 flex-1">
          {description}
        </p>
        
        {/* Price and Add to Cart Button Row */}
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-red-500 text-lg">
            LKR {price}
          </span>
          
          {/* Show Add to Cart button only if handler is provided */}
          {onAddToCart && (
            <button
              onClick={onAddToCart}
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-lg"
            >
              Add to cart
            </button>
          )}
        </div>
        
      </div>
    </div>
  )
}

export default FoodCard