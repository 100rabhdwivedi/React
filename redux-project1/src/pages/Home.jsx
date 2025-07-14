import React from 'react'

const Home = () => {
    return (
        <div className="flex items-center justify-center mt-10">
            <div className="bg-white rounded-lg shadow p-8 max-w-xl text-center">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Our Website</h1>
                <p className="text-gray-600 mb-6">
                    This is a simple React application where we use <strong>Redux</strong> to manage state,
                    work with dummy data, and also demonstrate API calling for real-world scenarios.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Home
