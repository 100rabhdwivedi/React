import React, { createContext, useState } from 'react'
import { nanoid } from 'nanoid';


export const recipecontext   = createContext(null)
const RecipeContext = ({children}) => {
const [data,setData] = useState([
    {
    id: nanoid(),
    imageUrl: "https://plus.unsplash.com/premium_photo-1664299961811-65184a363105?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Classic Pancakes",
    chef: "John Doe",
    description: "Fluffy homemade pancakes perfect for breakfast.",
    ingredients: "Flour, Milk, Eggs, Baking powder, Sugar, Salt, Butter",
    instructions: "1. Mix dry ingredients. 2. Add wet ingredients. 3. Cook on skillet until golden brown.",
    category: "Breakfast"
  },
  {
    id: nanoid(),
    imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Grilled Chicken Salad",
    chef: "Jane Smith",
    description: "Healthy salad with juicy grilled chicken and fresh veggies.",
    ingredients: "Chicken breast, Lettuce, Tomatoes, Cucumbers, Olive oil, Lemon juice, Salt, Pepper",
    instructions: "1. Grill chicken. 2. Chop veggies. 3. Toss together with dressing.",
    category: "Lunch"
  },
  {
    id: nanoid(),
    imageUrl: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Spaghetti Bolognese",
    chef: "Mario Rossi",
    description: "Classic Italian pasta with rich meat sauce.",
    ingredients: "Spaghetti, Ground beef, Tomato sauce, Onion, Garlic, Olive oil, Salt, Pepper, Basil",
    instructions: "1. Cook pasta. 2. Prepare meat sauce. 3. Combine and garnish with basil.",
    category: "Dinner"
  },
  {
    id: nanoid(),
    imageUrl: "https://images.unsplash.com/photo-1548184934-0e21703c9a12?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Chocolate Lava Cake",
    chef: "Ella Brown",
    description: "Warm chocolate cake with gooey molten center.",
    ingredients: "Chocolate, Butter, Eggs, Sugar, Flour",
    instructions: "1. Melt chocolate and butter. 2. Mix with eggs and sugar. 3. Bake until edges set but center is soft.",
    category: "Dessert"
  },
  {
    id: nanoid(),
    imageUrl: "https://images.unsplash.com/photo-1505575156881-dd15ae275636?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Avocado Toast",
    chef: "Liam Wilson",
    description: "Crispy toast topped with creamy smashed avocado.",
    ingredients: "Bread, Avocado, Lemon juice, Salt, Pepper, Chili flakes",
    instructions: "1. Toast bread. 2. Smash avocado with lemon, salt, and pepper. 3. Spread and top with chili flakes.",
    category: "Breakfast"
  },
  {
    id: nanoid(),
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Margherita Pizza",
    chef: "Marco Verdi",
    description: "Classic pizza with fresh mozzarella and basil.",
    ingredients: "Pizza dough, Tomato sauce, Mozzarella, Basil, Olive oil, Salt",
    instructions: "1. Spread sauce on dough. 2. Add cheese and basil. 3. Bake until crust is golden.",
    category: "Dinner"
  },
  {
    id: nanoid(),
    imageUrl: "https://images.unsplash.com/photo-1532301791573-4e6ce86a085f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Berry Smoothie",
    chef: "Sophia Green",
    description: "Refreshing smoothie with mixed berries and yogurt.",
    ingredients: "Berries, Yogurt, Honey, Banana, Ice",
    instructions: "1. Blend all ingredients until smooth. 2. Serve chilled.",
    category: "Snacks"
  },
 
]);
    console.log(data)
    return (
        <recipecontext.Provider value={{data,setData}}>
            {children}
        </recipecontext.Provider>
    )
}

export default RecipeContext