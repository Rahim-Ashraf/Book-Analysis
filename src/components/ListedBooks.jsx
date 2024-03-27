import { Outlet } from "react-router-dom";


const ListedBooks = () => {


    return (
        <div>
            <h1 className="text-2xl font-bold text-center bg-gray-200 py-4 rounded-md">Listed Books</h1>
            

            <Outlet />
        </div>
    );
};

export default ListedBooks;