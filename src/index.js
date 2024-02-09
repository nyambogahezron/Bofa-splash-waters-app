import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css';
import App from './App';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route index='true' element={<App />}>
      </Route> */}
      <Route path='/' element={<App />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
