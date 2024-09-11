import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './component/home/Home.jsx'
import About from './component/about/About.jsx'
import Contact from './component/contact/Contact.jsx'
import Instagram from './component/instagram/Instagram.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',  
      element: <Home/>,
    },
    {
      path: 'about',
      element: <About/>
    },
    {
      path: 'contact',
      element: <Contact/>
    },
    {
      path: 'instagram',
      element: <Instagram/>
    }
  ]
)

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Home/>,
//       children: [
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       }
//     ]
//     }
//   ]
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
