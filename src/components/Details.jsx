import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = () => {

    const allBooksData = useLoaderData()
    const { id } = useParams()
    const bookData = allBooksData?.find(book => book.bookId === parseInt(id))
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = bookData

    const toastWarn = () => toast.warn("Item is alredy added");
    const toastReadBook = () => toast("Book is added to Read books");
    const toastWishlist = () => toast("Book is added to Wishlist");
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    useEffect(() => {
        // Retrieve items from local storage when component mounts
        const storedItems = JSON.parse(localStorage.getItem('readBooks'));
        if (storedItems) {
            setReadBooks(storedItems);
        }
    }, []);
    useEffect(() => {
        // Retrieve items from local storage when component mounts
        const storedItems = JSON.parse(localStorage.getItem('wishlistBooks'));
        if (storedItems) {
            setWishlistBooks(storedItems);
        }
    }, []);
    const checkitemInLocalStorage = (item, dataName) => {
        const parseGetedItem = JSON.parse(localStorage.getItem(dataName))
        const getedItemId = parseGetedItem?.map(thisItem => thisItem.bookId)
        const checkIsItemInclud = getedItemId?.includes(item.bookId)
        return checkIsItemInclud
    }
    const handleReadClick = (item) => {
        const checkitem = checkitemInLocalStorage(item, "readBooks")
        if (checkitem) {
            toastWarn()
            return
        }
        toastReadBook()
        setReadBooks([...readBooks, item]);
        localStorage.setItem('readBooks', JSON.stringify([...readBooks, item]));

    }
    const handleWishlistClick = (item) => {
        const checkitem = checkitemInLocalStorage(item, "readBooks")
        const checkitem2 = checkitemInLocalStorage(item, "wishlistBooks")

        if (checkitem || checkitem2) {
            toastWarn()
            return
        }
        toastWishlist()
        setWishlistBooks([...wishlistBooks, item]);
        localStorage.setItem('wishlistBooks', JSON.stringify([...wishlistBooks, item]));
    }
    return (
        <div>
            <div className="lg:flex gap-10">
                <div className="lg:w-1/2 bg-gray-200 rounded-lg">
                    <img className="h-full mx-auto py-10" src={image} alt={bookName} />
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">{bookName}</h1>
                    <p className="font-semibold">By: {author}</p>
                    <hr className="my-4" />
                    <p className="font-semibold">{category}</p>
                    <hr className="my-4" />
                    <p className="mb-4"><span className="font-semibold">review: </span>{review}</p>
                    <div className="flex gap-6">
                        <p className="font-bold">Tag</p>
                        <p className="text-[#23BE0A]">#{tags[0]}</p>
                        <p className="text-[#23BE0A]">#{tags[0]}</p>
                    </div>
                    <hr className="my-4" />
                    <table>
                        <tbody>
                            <tr>
                                <td className="pr-10">Number of Pages:</td>
                                <td className="font-semibold">{totalPages}</td>
                            </tr>
                            <tr>
                                <td className="pr-10">Publisher:</td>
                                <td className="font-semibold">{publisher}</td>
                            </tr>
                            <tr>
                                <td className="pr-10">Year of Publishing:</td>
                                <td className="font-semibold">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="pr-10">Rating:</td>
                                <td className="font-semibold">{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-4 flex gap-4">
                        <button onClick={() => handleReadClick(bookData)} className="btn bg-white border border-gray-400">Read</button>
                        <button onClick={() => handleWishlistClick(bookData)} className="btn bg-[#59C6D2] text-white">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;