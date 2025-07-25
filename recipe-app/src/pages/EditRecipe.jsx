import Nav from "../components/Nav";
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const { data, setData } = useContext(recipecontext);
  const { id } = useParams();
  const navigate = useNavigate();

  // Find recipe by id
  const recipe = data.find(item => item.id === id);

const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: recipe
});

  const onSubmit = (updatedRecipe) => {
    const updatedList = data.map(item => 
      item.id === id ? { ...item, ...updatedRecipe } : item
    );
    setData(updatedList);
    navigate('/recipes'); // redirect after edit
  };

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white">
        <Nav />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500 text-lg">Recipe not found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Nav />
      <div className="flex-1 flex justify-center items-center px-4">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-md border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Edit Recipe
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Image URL</label>
              <input
                {...register("imageUrl", { required: true })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errors.imageUrl && <span className="text-red-500 text-xs">Image URL is required</span>}
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Title</label>
              <input
                {...register("title", { required: true })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errors.title && <span className="text-red-500 text-xs">Title is required</span>}
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Chef</label>
              <input
                {...register("chef", { required: true })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errors.chef && <span className="text-red-500 text-xs">Chef is required</span>}
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Category</label>
              <select
                {...register("category", { required: true })}
                className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">All Categories</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
                <option value="Snacks">Snacks</option>
              </select>
              {errors.category && <span className="text-red-500 text-xs">Category is required</span>}
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-1">Description</label>
              <textarea
                {...register("description", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errors.description && <span className="text-red-500 text-xs">Description is required</span>}
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-1">Ingredients</label>
              <textarea
                {...register("ingredients", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errors.ingredients && <span className="text-red-500 text-xs">Ingredients are required</span>}
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-1">Instructions</label>
              <textarea
                {...register("instructions", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errors.instructions && <span className="text-red-500 text-xs">Instructions are required</span>}
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full mt-2 bg-blue-500 text-white py-2 rounded-full shadow hover:bg-blue-600 transition font-semibold"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
