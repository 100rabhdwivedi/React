import { NavLink } from "react-router-dom"
const Nav = () => {
return (
    <div className="flex font-two items-center justify-between px-2 md:px-8  py-8 text-gray-800">
        <div className="font-one text-xl md:text-4xl">Cook.</div>
        <div className="flex gap-4 sm:gap-6 md:gap-x-12 text-[2.7vw] font-semibold sm:text-[2.2vw] md:text-[1.2rem]">
        <NavLink className='hover:text-yellow-400'  to='/'>Home</NavLink>
        <NavLink className='hover:text-yellow-400' to='/recipes'>Recipes</NavLink>
        <NavLink className='hover:text-yellow-400' to='/contact'>Contact</NavLink>
        <NavLink className='hover:text-yellow-400' to='/about'>About</NavLink>
        </div>
        <div className="px-4 md:px-8 py-1 text-[2.7vw] sm:text-[2.2vw] md:text-sm md:py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition shadow">
        <NavLink to='/create-recipes'>Create</NavLink>
        </div>
    </div>
)
}

export default Nav