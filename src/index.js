import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import Error from './pages/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/apartment/:id',
    element: <div>Apartment</div>
  },
  {
    path: '/404',
    element: <Error/>
  },
  {
    path: '/A-propos',
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
