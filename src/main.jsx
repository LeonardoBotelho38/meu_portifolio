import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.sass'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContent from './components/MainContent'
import PageProjects from './components/PageProjects'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<MainContent/>
      },
      {
        path:'/projetos',
        element:<PageProjects/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
