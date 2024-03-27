import { NavLink } from "react-router-dom";
import ReadBook from "./ReadBook";
import { useEffect, useState } from "react";


const ReadBooks = () => {
    const readBooksFromLocalStorage = JSON.parse(localStorage.getItem("readBooks"))
    const [readItems, setReadItems] = useState([])

    useEffect(() => {
        setReadItems(readBooksFromLocalStorage)
    }, [])

    const handleSortData = (data) => {
        const sortBy = data.target.value

        if (sortBy === "Rating") {
            const sortedData = readBooksFromLocalStorage.sort(((a, b) => b.rating - a.rating))
            setReadItems(sortedData)

        }
        else if (sortBy === "Number of pages") {
            const sortedData = readBooksFromLocalStorage.sort(((a, b) => b.totalPages - a.totalPages))
            setReadItems(sortedData)
        }
        else if (sortBy === "Published year") {
            const sortedData = readBooksFromLocalStorage.sort(((a, b) => b.yearOfPublishing - a.yearOfPublishing))
            setReadItems(sortedData)
        }
        else {
            setReadItems(readBooksFromLocalStorage)
        }

    }
    return (
        <div>
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
            <div className="py-4">
                {readItems?.map((book, idx) => <ReadBook key={idx} book={book} />)}
            </div>
        </div>
    );
};

export default ReadBooks;