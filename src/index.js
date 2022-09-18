import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import CardsPage from './routes/cards.page';
import GalleryPage from './routes/gallery.page';
import LandingPage from './routes/landing.page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/randomanimal",
        element: <CardsPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
