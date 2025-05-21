



// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './ex/Login';
import Username_search from './ex/Username_search';
import Password_search from './ex/Password_search';
import Sign_up from './ex/Sign_up';
import './index.css';

const router = createBrowserRouter([
  { path: '/Username_search', element: <Username_search /> },
  { path: '/', element: <Login /> },
  
  { path: '/Password_search', element: <Password_search /> },
  { path: '/Sign_up', element: <Sign_up /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);