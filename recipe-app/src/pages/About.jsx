import React from 'react'
import Nav from '../components/Nav'

const About = () => {
return (
    <div className="min-h-screen font-one w-screen flex flex-col bg-gradient-to-br from-green-50 to-white font-[Poppins]">
    <Nav />

    <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-24 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
        About <span className="text-orange-500">Our Recipe App</span>
        </h1>

        <p className="text-gray-600 font-two text-[0.95rem] md:text-lg max-w-3xl mb-6">
        Welcome to your new favorite cooking companion!  
        Our mission is simple: make cooking <span className="text-yellow-500 font-semibold">fun</span>, 
        <span className="text-orange-500 font-semibold"> easy</span>, and <span className="text-green-600 font-semibold">delicious</span> for everyone.
        Discover recipes, save your favorites, and explore cuisines from around the world.
        </p>

        <p className="text-gray-600 font-two text-[0.95rem] md:text-lg max-w-3xl mb-6">
        We believe great food brings people together.  
        That’s why we carefully curate and test every recipe — so whether you're a beginner or a seasoned chef, 
        you can cook confidently and share meals with the people you love.
        </p>

        <p className="text-gray-600 font-two text-[0.95rem] md:text-lg max-w-3xl mb-10">
        Ready to explore? Start your cooking journey today and bring tasty moments to your table.
        </p>

        <button className="bg-orange-500 font-two font-semibold text-white px-6 py-3 rounded-full shadow hover:bg-orange-600 transition text-[0.9rem] md:text-[1rem]">
        Explore Recipes
        </button>

        
    </div>
    </div>
)
}

export default About
