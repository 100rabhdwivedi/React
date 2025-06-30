import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Product from '../components/Product'
import About from '../components/About'
import Service from '../components/Service'
import ProductDetails from '../components/ProductDetails'
import ServiceDetails from '../components/ServiceDetails'


const IndexRoutes = () => {
return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/details/:name' element={<ProductDetails/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>}>
        <Route path='/service/details' element={<ServiceDetails/>}/>
        </Route>
    </Routes>
)
}

export default IndexRoutes