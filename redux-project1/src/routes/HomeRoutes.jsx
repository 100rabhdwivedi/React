import { Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import Users from "../pages/Users"
import Products from "../pages/Products"

const HomeRoutes = () => {
    return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
    </Routes>
    )
}

export default HomeRoutes