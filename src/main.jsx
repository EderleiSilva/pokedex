import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PokeList } from "./pages/home";
import { Pokemon } from "./pages/pokemon";
import { ErrorPage } from './pages/errorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PokeList />
      },
    
      {
        path: '/pokemon/:name',
        element: <Pokemon />
      }
    ]
  },

  {
    path: 'pokemon',
    element: <Pokemon />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router} />
  </StrictMode>,
)
