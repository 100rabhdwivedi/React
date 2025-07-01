import React, { useContext } from 'react'
import Nav from "../components/Nav"
import { recipecontext } from "../context/RecipeContext"
import { NavLink } from 'react-router-dom'

const Recipes = () => {
const { data } = useContext(recipecontext)

return (
    <div className="min-h-screen font-two w-screen flex flex-col bg-gradient-to-br from-green-50 to-white font-[Poppins]">
    <Nav />

    <div className="flex-1 px-6 md:px-16 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center">
        All <span className="text-orange-500">Recipes</span>
        </h1>

        {data.length === 0 ? (
        <p className="text-center text-gray-500">No recipes available. Add some!</p>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-xl shadow hover:shadow-md transition duration-300">
                <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-54 object-cover rounded-t-xl"
                />
                <div className='flex justify-between items-center px-4'>
                <div className="p-4">
                <h2 className="font-semibold text-md text-gray-800">{recipe.title}</h2>
                <p className="text-gray-500 text-sm mt-1">By {recipe.chef}</p>
                </div>
                <div ><NavLink to={`/recipe/${recipe.id}`}>
                <button className='px-4 py-1 bg-orange-500 hover:bg-orange-600 transition text-white rounded-md'>Deatils</button></NavLink></div>
                </div>
            </div>
            ))}
        </div>
        )}
    </div>
    </div>
)
}

export default Recipes
