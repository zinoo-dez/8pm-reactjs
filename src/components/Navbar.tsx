import { Link, Outlet } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className="h-[90px] w-full bg-red-50 flex justify-center items-center">
                <ul className="flex gap-4">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/post">Post</Link>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar