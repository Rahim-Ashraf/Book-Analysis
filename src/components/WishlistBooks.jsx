import WishlistBook from "./WishlistBook";


const WishlistBooks = () => {

    return (
        <div className="py-4">
            {
                wishlistBooksFromLocalStorage?.map((book, idx) => <WishlistBook key={idx} book={book} />)
            }
        </div>
    );
};

export default WishlistBooks;