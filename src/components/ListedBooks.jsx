import { NavLink, Outlet } from "react-router-dom";


const ListedBooks = () => {


    return (
        <div>
            <h1 className="text-2xl font-bold text-center bg-gray-200 py-4 rounded-md">Listed Books</h1>
            <div className="flex justify-center my-4">
                <select className="bg-[#23BE0A] px-4 py-2 rounded-lg text-white" name="" id="">
                    <option value="">Sort by</option>
                    <option value="">Rating</option>
                    <option value="">Number of pages</option>
                    <option value=""> Published year</option>
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
            <Outlet />
        </div>
    );
};

export default ListedBooks;