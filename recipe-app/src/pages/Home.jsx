import React from 'react'
import Nav from '../components/Nav'
import { NavLink } from 'react-router-dom'
const Home = () => {
return (
    <div className="min-h-screen bg-white w-screen flex flex-col">
    <Nav />

    <div className="flex-1  flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 ">


        {/* Left content */}
        <div className="  mb-10  md:mb-0 w-[100%] md:w-[50%] text-center md:text-left">
        <h1 className="text-3xl md:text-[4.5vw] font-extrabold text-gray-800 leading-tight">
            Cook Like a Pro with Our{' '}
            <span className="text-orange-500">Easy</span> and{' '}
            <span className="text-yellow-400">Tasty</span> Recipes
        </h1>
        <p className="text-gray-600 text-[0.8rem] md:text-[1rem] mt-4">
            From quick and easy meals to gourmet delights, we have something for every taste and occasion.
        </p>
        <NavLink className='hover:text-yellow-400' to='/recipes'>
        <button className="mt-6 text-[0.8rem] md:text-[1rem] bg-orange-500 text-white px-6 py-3 rounded-full shadow hover:bg-orange-600 transition">
            Explore All Recipes
        </button>
        </NavLink>
        </div>


        {/* Right image */}
        <div className="flex justify-center md:justify-end w-[100%] md:w-[50%] ">
        <img
            src="/chef.png"
            alt="Chef Illustration"
            className="w-72 md:w-[30vw] object-contain"
        />
        </div>


    </div>
    </div>
)
}

export default Home
