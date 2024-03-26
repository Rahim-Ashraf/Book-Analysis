import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center">
            <div>
                <h1 className="text-4xl font-bold">Oops!!!</h1>
                <p>404 page not found</p>
                <p>Go to Home page</p>
                <Link to={"/"} className="btn">Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;