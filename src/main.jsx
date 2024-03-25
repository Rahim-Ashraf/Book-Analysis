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
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        loader: () => fetch("./booksData.json"),
        element: <Home />
      },
      {
        path: "/listed-books",
        element: <ListedBooks />
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />
      },
      {
        path: "/book-details/:id",
        loader: () => fetch("./booksData.json"),
        element: <Details />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
