import { useLoaderData } from "react-router-dom";


const Details = () => {
    const allBooksData = useLoaderData()
    console.log(allBooksData[0])
    return (
        <div>
            details page
        </div>
    );
};

export default Details;