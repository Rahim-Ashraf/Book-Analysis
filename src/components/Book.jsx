import { FaRegStar } from "react-icons/fa"
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, tags, category, rating } = book
    return (
        <div>
            <Link to={`/book-details/${bookId}`}>
                <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="bg-gray-200 rounded-md flex justify-center p-4 mb-4">
                        <div className="h-[200px]">
                            <img className="mx-auto h-full" src={image} alt={bookName} />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-4">
                            <p className="rounded-full bg-gray-50 py-1 px-2 text-[#23BE0A]">{tags[0]}</p>
                            <p className="rounded-full bg-gray-50 py-1 px-2 text-[#23BE0A]">{tags[1]}</p>
                        </div>

                        <h2 className="font-bold text-3xl">{bookName}</h2>
                        <p className="font-semibold">By: {author}</p>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p>{category}</p>
                            <div className="flex gap-2">
                                <FaRegStar />
                                <p>{rating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;