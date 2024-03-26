import ReadBook from "./ReadBook";


const ReadBooks = () => {
    const readBooksFromLocalStorage = JSON.parse(localStorage.getItem("readBooks"))
    return (
        <div className="py-4">
            {readBooksFromLocalStorage?.map((book, idx) => <ReadBook key={idx} book={book}/>)}
        </div>
    );
};

export default ReadBooks;