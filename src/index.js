import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import Error from './pages/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Accommodations from './pages/Accommodations';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>
  },
  {
    path: '/Accommodations/:id',
    element: <Accommodations/>
  },
  {
    path: '/About',
    element: <About/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
