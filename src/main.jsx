import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Root/Roots.jsx';
import Home from './component/Home/Home.jsx';
import UserDashboardLayout from './component/UserDashboard/UserDashboardLayout/UserDashboardLayout.jsx';
import Dashboard from './component/UserDashboard/UserDashboardPages/Dashboard.jsx';
import WarningPage from './component/Page.jsx/Worning.jsx';

const router = createBrowserRouter([
  {
    // path: "/",
    // element:<WarningPage/> ,
    path: "/",
    element:<Roots/> ,
    children: [
      {
        path: "/",
        element:<Home/> ,
      },
    ],
  },


  {
    path:"/dashboard",
    element:<UserDashboardLayout/>,
    children:[
      {
        index:true,
        element:<Dashboard/>,
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
