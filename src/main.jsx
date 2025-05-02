import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Root/Roots.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Home from './component/Home/Home.jsx';
import DashboardLayout from './component/DashboardLayout/DashboardLayout.jsx';
import Dashboard from './component/DashboardPages/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots/> ,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element:<Home/> ,
      },
    ],
  },

  {
    path:"/dashboard",
    element:<DashboardLayout/>,
    children:[
      {
        index:true,
        element:<Dashboard/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </StrictMode>,
)
