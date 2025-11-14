import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
      <div className="space-y-4 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Fresh Food. Fast Delivery. 🛵
        </h1>
        
        <p className="text-gray-600 text-lg">
          Order delicious meals from our restaurant. Hot, fresh, and delivered right to your door.
        </p>

        <div className="flex gap-4">
          <Link to="/menu" className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium">
            View Menu
          </Link>
          
          <Link to="/login" className="border border-gray-300 px-5 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-200">
            Login
          </Link>

        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="w-64 h-64 bg-white shadow-lg rounded-3xl flex items-center justify-center">
          <span className="text-6xl">🍕</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home