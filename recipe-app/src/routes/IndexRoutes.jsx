import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import RecipeDetails from '../pages/RecipeDetails'
import EditRecipe from '../pages/EditRecipe'

const IndexRoutes = () => {
return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/recipe/:id' element={<RecipeDetails/>} />
        <Route path='/edit/:id' element={<EditRecipe/>} />
        <Route path='/create-recipes' element={<Create/>} />
    </Routes>
)
}

export default IndexRoutes