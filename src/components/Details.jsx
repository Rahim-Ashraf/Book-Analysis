import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const allBooksData = useLoaderData()
    const { id } = useParams()
    const bookData = allBooksData.find(book => book.bookId === parseInt(id))
    console.log(bookData)
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = bookData
    const newImage = "../../public/books-images/mony.png"
    return (
        <div>
            <div className="lg:flex gap-10">
                <div className="lg:w-1/2 bg-gray-200 rounded-lg">
                    <img className="h-full mx-auto py-10" src={newImage} alt="sgadg" />
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
                                <td className="font-semibold">{ }rating</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-4 flex gap-4">
                        <button className="btn bg-white border border-gray-400">Read</button>
                        <button className="btn bg-[#59C6D2] text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;