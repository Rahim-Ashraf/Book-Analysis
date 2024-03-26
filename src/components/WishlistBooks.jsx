import WishlistBook from "./WishlistBook";


const WishlistBooks = () => {
    const wishlistBooksFromLocalStorage = JSON.parse(localStorage.getItem("wishlistBooks"))
    return (
        <div className="py-4">
            {
                wishlistBooksFromLocalStorage?.map((book, idx) => <WishlistBook key={idx} book={book} />)
            }
        </div>
    );
};

export default WishlistBooks;