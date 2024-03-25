import { Link } from 'react-router-dom';
import banner from '../assets/banner.png'
import Books from './Books';

const Home = () => {
    return (
        <div>
            <div className="bg-base-200 py-4 lg:py-20 rounded-lg font-work-sans mb-10">
                <div className="flex flex-col lg:flex-row-reverse justify-around items-center">
                    <div>
                        <img src={banner} className="" />
                    </div>
                    <div>
                        <h1 className="text-6xl font-bold mb-8 font-playfair-display">Books to freshen up<br />
                            your bookshelf</h1>
                        <Link to={"/listed-books"} className="btn bg-[#23BE0A] text-white">View The List</Link>
                    </div>
                </div>
            </div>
            <Books />
        </div>
    );
};

export default Home;