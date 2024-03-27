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
import ReadBooks from './components/ReadBooks';
import WishlistBooks from './components/WishlistBooks';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        loader: async () => {
          const data = await fetch("https://raw.githubusercontent.com/Rahim-Ashraf/books-json/main/booksData.json")
          const result = await data.json()
          return result
        },
        element: <Home />
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        children: [
          {
            path: "/listed-books/read-books",
            element: <ReadBooks />
          },
          {
            path: "/listed-books/wishlist-books",
            element: <WishlistBooks />
          }
        ]
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />
      },
      {
        path: "/book-details/:id",
        loader: async () => {
          const data = await fetch("https://raw.githubusercontent.com/Rahim-Ashraf/books-json/main/booksData.json")
          const result = await data.json()
          return result
        },
        element: <Details />
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
