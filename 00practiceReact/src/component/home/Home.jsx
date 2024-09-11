import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
    <nav class="bg-blue-600 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <div class="text-white text-2xl font-bold">
                My Website
            </div>
                  <ul class="flex space-x-6">
                      <li>
                          <NavLink to="/"
                              className={({ isActive }) =>
                                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                              }
                          >
                              Home
                          </NavLink>
                      </li>

                      <li>
                          <NavLink to="/about"
                              className={({ isActive }) =>
                                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                              }
                          >
                              About
                          </NavLink>
                      </li>

                      <li>
                          <NavLink to="/contact"
                              className={({ isActive }) =>
                                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                              }
                          >
                              Contact us
                          </NavLink>
                      </li>

                      <li>
                          <NavLink to="/instagram"
                              className={({ isActive }) =>
                                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                              }
                          >
                              Instagram
                          </NavLink>
                      </li>
                      
                  </ul>
        </div>
    </nav>

    <section id="home" class="text-center py-20 bg-blue-500 text-white">
        <h1 class="text-4xl font-bold mb-4">Welcome to My Beautiful Website</h1>
        <p class="text-lg">Discover amazing content and connect with us!</p>
    </section>

 
    <section id="about" class="py-20 bg-white">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">About Us</h2>
            <p class="text-gray-600 max-w-xl mx-auto">
                We are a passionate team dedicated to bringing you the best content. Our goal is to inspire and connect people through creativity and innovation.
            </p>
        </div>
    </section>

    <section id="contact" class="py-20 bg-gray-100">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Get in Touch</h2>
            <p class="text-gray-600 mb-4">Feel free to contact us for any inquiries or collaborations.</p>
            <a href="mailto:example@email.com" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Contact Us</a>
        </div>
    </section>

 
    <footer class="bg-blue-600 text-white py-4">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
    </footer>

    </>
  )
}

export default Home
