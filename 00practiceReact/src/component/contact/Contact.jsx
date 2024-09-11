import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <h1>Contact us</h1>
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
  )
}

export default Contact
