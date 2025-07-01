import React from 'react'
import Nav from '../components/Nav'
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
return (
    <div className="min-h-screen font-one w-screen flex flex-col bg-gradient-to-br from-green-50 to-white font-[Poppins]">
    <Nav />

    <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-16 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Get in <span className="text-orange-500">Touch</span>
        </h1>
        <p className="text-gray-600 text-[0.95rem] md:text-lg max-w-2xl mb-8">
        We'd love to hear from you! Reach us through the details below or connect with us on social media.
        </p>

        <div className="space-y-4 md:space-y-6 mb-8">
        <div className="flex items-center justify-center font-two font-semibold space-x-3 text-gray-700">
            <FaMapMarkerAlt className="text-orange-500" />
            <span>123 Recipe Street, Food City, Country</span>
        </div>
        <div className="flex items-center justify-center space-x-3 font-two font-semibold text-gray-700">
            <FaEnvelope className="text-orange-500" />
            <span>contact@recipeapp.com</span>
        </div>
        <div className="flex items-center justify-center space-x-3 font-two font-semibold text-gray-700">
            <FaPhoneAlt className="text-orange-500" />
            <span>+123 456 7890</span>
        </div>
        </div>

        <div className="flex space-x-4 mt-4">
        <a
            href="#"
            className="p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
            aria-label="Facebook"
        >
            <FaFacebookF />
        </a>
        <a
            href="#"
            className="p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
            aria-label="Twitter"
        >
            <FaTwitter />
        </a>
        <a
            href="#"
            className="p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
            aria-label="Instagram"
        >
            <FaInstagram />
        </a>
        </div>
    </div>
    </div>
)
}

export default Contact
