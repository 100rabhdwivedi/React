import React, { useContext } from 'react'
import Nav from '../components/Nav'
import { recipecontext } from '../context/RecipeContext'
import { useParams, useNavigate } from 'react-router-dom'

const RecipeDetails = () => {
  const { data, setData } = useContext(recipecontext)
  const { id } = useParams()
  const navigate = useNavigate()

  const recipe = data.find((item) => item.id === id)

  const handleDelete = () => {
    setData(data.filter(item => item.id !== id))
    navigate('/recipes')
  }

  const handleEdit = () => {
    navigate(`/edit/${id}`)
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white">
        <Nav />
        <div className="flex-1 flex justify-center items-center">
          <p className="text-gray-500 text-lg">Recipe not found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen font-two w-screen flex flex-col bg-gradient-to-br from-green-50 to-white ">
      <Nav />

      <div className="flex-1 flex justify-center items-center px-2 py-4">
        <div className="max-w-5xl w-full bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden">
          
          <div className="flex flex-col md:flex-row">
            {/* Left Image */}
            <div className="md:w-1/2">
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{recipe.title}</h1>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs md:text-sm">{recipe.category}</span>
                </div>

                <p className="text-gray-500 text-sm md:text-base mb-4">By {recipe.chef}</p>
                <p className="text-gray-700 mb-4 text-[0.95rem] md:text-base">{recipe.description}</p>

                <div className="mb-4">
                  <h2 className="font-semibold text-gray-800 mb-1">Ingredients:</h2>
                  <p className="text-gray-700 text-[0.95rem] md:text-base whitespace-pre-line">{recipe.ingredients}</p>
                </div>

                <div>
                  <h2 className="font-semibold text-gray-800 mb-1">Instructions:</h2>
                  <p className="text-gray-700 text-[0.95rem] md:text-base whitespace-pre-line">{recipe.instructions}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={handleEdit}
                  className="flex-1 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition rounded-md py-2 text-sm"
                >
                  Edit
                </button>
                <button 
                  onClick={handleDelete}
                  className="flex-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition rounded-md py-2 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
