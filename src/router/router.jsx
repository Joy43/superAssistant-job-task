import React from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom';

import Mainlayout from '../Layout/Mainlayout';
import NotFound from '../lib/NotFound';
import Home from '../Home/Home/Home';


// Import your page components
export const router=createBrowserRouter([

  {
    path:"/",
    element:<Mainlayout/>,
    errorElement:<NotFound/>,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
    ]
  }
])


