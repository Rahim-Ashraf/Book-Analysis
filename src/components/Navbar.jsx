import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 font-work-sans">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={"/"} className={({ isActive }) =>
                            isActive ? "text-[#23BE0A] border rounded-md border-[#23BE0A] py-1 px-2" : ""
                        }>Home</NavLink></li>
                        <li><NavLink to={"/listed-books"} className={({ isActive }) =>
                            isActive ? "text-[#23BE0A] border rounded-md border-[#23BE0A] py-1 px-2" : ""
                        }>Listed Books</NavLink></li>
                        <li><NavLink to={"/pages-to-read"} className={({ isActive }) =>
                            isActive ? "text-[#23BE0A] border rounded-md border-[#23BE0A] py-1 px-2" : ""
                        }>Pages to Read</NavLink></li>
                    </ul>
                </div>
                <button className="btn btn-ghost text-2xl font-black">Book Vibe</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-6 font-semibold">
                    <li><NavLink to={"/"} className={({ isActive }) =>
                        isActive ? "text-[#23BE0A] border rounded-md border-[#23BE0A] py-3 px-4" : ""
                    }>Home</NavLink></li>
                    <li><NavLink to={"/listed-books"} className={({ isActive }) =>
                        isActive ? "text-[#23BE0A] border rounded-md border-[#23BE0A] py-3 px-4" : ""
                    }>Listed Books</NavLink></li>
                    <li><NavLink to={"/pages-to-read"} className={({ isActive }) =>
                        isActive ? "text-[#23BE0A] border rounded-md border-[#23BE0A] py-3 px-4" : ""
                    }>Pages to Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;