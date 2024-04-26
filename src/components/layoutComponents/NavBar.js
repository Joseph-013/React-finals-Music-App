import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="w-16 pt-16 md:w-60 mb-16 overflow-hidden fixed top-0 left-0 h-screen flex flex-col">
            <div className="flex-1 z-30 pb-16 overflow-y-hidden px-2 text-center bg-[#19272E]" style={{ scrollBehavior: 'contain' }}>
                <nav className="h-full overflow-y-auto">
                    <ul>
                        <li className="h-20">
                            <Link to="/" >Home</Link>
                        </li>
                        <li className="h-20">
                            <Link to="/search" >Search</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
