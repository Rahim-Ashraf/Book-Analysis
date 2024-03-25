import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import App from './components/App';
import Home from './components/Home';
import ListedBooks from './components/ListedBooks';
import PagesToRead from './components/PagesToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/listed-books",
        element: <ListedBooks />
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
