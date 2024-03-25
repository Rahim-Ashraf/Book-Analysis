import { useLoaderData} from "react-router-dom";
import Book from "./Book";


const Books = () => {
    const booksData = useLoaderData()
    return (
        <div className="font-playfair-display">
            <h1 className="text-center font-bold text-5xl my-4">Books</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    booksData.map(book => <Book key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;