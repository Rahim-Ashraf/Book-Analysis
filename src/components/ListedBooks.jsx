

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
                
            </div>
        </div>
    );
};

export default ListedBooks;