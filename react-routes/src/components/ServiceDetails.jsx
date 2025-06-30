import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceDetails = () => {
  const navigate = useNavigate()

  return (
    <div className=" bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-2 py-4">
      <div className="w-full max-w-lg bg-gray-800 rounded-xl shadow-lg p-6 md:p-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-sm"
        >
          ← Back
        </button>

        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">Web App Development</h1>

        <p className="text-gray-300 text-sm md:text-base mb-5">
          I provide full-stack web development using <span className="text-green-400">React</span>, <span className="text-green-400">Node.js</span>, <span className="text-green-400">Express</span>, and <span className="text-green-400">MongoDB</span>. Fast, scalable, and modern.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-white">What I Offer:</h2>
        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-5">
          <li>🖥️ Responsive UI with Tailwind CSS</li>
          <li>⚙️ Secure backend APIs</li>
          <li>🔗 MongoDB database integration</li>
          <li>🚀 Deployed apps via Vercel/Netlify</li>
          <li>🛠️ Clean and scalable code</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2 text-white">Why Choose Me?</h2>
        <p className="text-gray-300 text-sm mb-6">
          I learn by building real-world projects like a Windows OS clone and weather apps. I solve problems with passion and practicality.
        </p>

        <div className="text-center">
          <button className="bg-white text-black text-sm px-5 py-2 rounded-full hover:bg-gray-200 transition">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
