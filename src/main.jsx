import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import CheckOut from './Pages/CheckOut/CheckOut.jsx';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails.jsx';
import Booking from './Pages/Booking/Booking.jsx';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes.jsx';
import { Axios } from 'axios';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/booking',
        element: <PrivateRoutes><Booking></Booking></PrivateRoutes>,

      },
      {
        path: '/serviceDetails/:id',
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: '/checkOut/:id',
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='max-w-7xl mx-auto'>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
);