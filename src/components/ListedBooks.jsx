import { NavLink, Outlet } from "react-router-dom";
import ReadBooks from "./ReadBooks";
import WishlistBooks from "./WishlistBooks";


const ListedBooks = () => {
    const readBooksFromLocalStorage = JSON.parse(localStorage.getItem("readBooks"))
    const wishlistBooksFromLocalStorage = JSON.parse(localStorage.getItem("wishlistBooks"))

    const handleSortData = (data) => {
        const sortBy = data.target.value

    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center bg-gray-200 py-4 rounded-md">Listed Books</h1>
            <div className="flex justify-center my-4">
                <select onChange={handleSortData} className="bg-[#23BE0A] px-4 py-2 rounded-lg text-white" name="" id="">
                    <option value="Sort by">Sort by</option>
                    <option value="Rating">Rating</option>
                    <option value="Number of pages">Number of pages</option>
                    <option value="Published year">Published year</option>
                </select>
            </div>
            <div>
                <ul className="flex gap-4 border-b border-b-gray-400 p-1">
                    <li><NavLink to={"/listed-books/read-books"} className={({ isActive }) =>
                        isActive ? "border border-gray-400 border-b-6 border-b-white p-2" : ""
                    }>Read Books</NavLink></li>
                    <li><NavLink to={"/listed-books/wishlist-books"} className={({ isActive }) =>
                        isActive ? "border border-gray-400 border-b-6 border-b-white p-2" : ""
                    }>Wishlist Books</NavLink></li>
                </ul>
            </div>
            <div>
                <ReadBooks />
                <WishlistBooks />
            </div>
            <Outlet />
        </div>
    );
};

export default ListedBooks;