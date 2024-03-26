import { CiLocationOn } from "react-icons/ci";
import { IoIosPersonAdd } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ReadBook = ({ book }) => {
    const { bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = book
    return (
        <div className="lg:flex gap-4 p-4 border border-gray-400 rounded-lg mb-4">
            <div className="bg-gray-200 rounded-lg p-4">
                <img src={image} alt="" />
            </div>
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">
                    {bookName}
                </h1>
                <p>{author}</p>
                <div className="lg:flex gap-8 space-y-4 items-center">
                    <div className="flex gap-4">
                        <p className="font-bold">Tag</p>
                        <p className="text-[#23BE0A]">#{tags[0]}</p>
                        <p className="text-[#23BE0A]">#{tags[1]}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <CiLocationOn />
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                        <IoIosPersonAdd />
                        <p>Publisher: {author}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <RiPagesLine />
                        <p>page: {totalPages}</p>
                    </div>
                </div>
                <hr />
                <div className="lg:flex space-y-2 gap-4 items-center">
                    <p className="p-4 rounded-full text-sky-600 bg-sky-200">Category: {category}</p>
                    <p className="p-4 rounded-full text-amber-600 bg-amber-200">Rating: {rating}</p>
                    <Link to={`/book-details/${bookId}`} className="btn rounded-full bg-[#23BE0A] text-white">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ReadBook;