import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import IconTrending from "../icons/IconTrending";
import IconSearch from "../icons/IconSearch";
import IconHome from "../icons/IconHome";
import IconRecent from "../icons/IconRecent";
import IconPlaylist from "../icons/IconPlaylist";
import IconHeart from "../icons/IconHeart";


function NavBar() {
    const iconSize = "27";

    return (
        <div className="w-16 pt-16 md:w-60 mb-20 overflow-hidden fixed top-0 left-0 h-screen flex flex-col">
            <div className="flex-1 z-30 pb-20 overflow-y-hidden px-2 md:px-5 text-center bg-[#19272E]" style={{ overscrollBehavior: 'contain' }}>
                <nav className="h-full pb-4 overflow-y-auto">

                    <NavBarSection name="MENU">
                        <NavBarItem to="/" >
                            <IconHome size={iconSize} />
                            <Link to="/" className="w-full h-full flex items-center">Home</Link>
                        </NavBarItem>

                        <NavBarItem to="/search" >
                            <IconSearch size={iconSize} />
                            <Link to="/search" className="w-full h-full flex items-center">Search</Link>
                        </NavBarItem>
                        <NavBarItem to="/trending" >
                            <IconTrending size={iconSize} />
                            <Link to="/trending" className="w-full h-full flex items-center">Trending</Link>
                        </NavBarItem>
                    </NavBarSection>

                    <NavBarSection name="LIBRARY">
                        <NavBarItem to="/recent" >
                            <IconRecent size={iconSize} />
                            <Link to="/recent" className="w-full h-full flex items-center">Recent</Link>
                        </NavBarItem>

                        <NavBarItem to="/playlists" >
                            <IconPlaylist size={iconSize} />

                            <Link to="/playlists" className="w-full h-full flex items-center">Playlists</Link>
                        </NavBarItem>

                        <NavBarItem to="/favorites" >
                            <IconHeart size={iconSize} />

                            <Link to="/favorites" className="w-full h-full flex items-center">Favorites</Link>
                        </NavBarItem>

                    </NavBarSection>

                    <NavBarSection name="LIBRARY">
                        <NavBarItem to="/recent" >
                            <IconRecent size={iconSize} />
                            <Link to="/recent" className="w-full h-full flex items-center">Recent</Link>
                        </NavBarItem>

                        <NavBarItem to="/playlists" >
                            <IconPlaylist size={iconSize} />

                            <Link to="/playlists" className="w-full h-full flex items-center">Playlists</Link>
                        </NavBarItem>

                        <NavBarItem to="/favorites" >
                            <IconHeart size={iconSize} />

                            <Link to="/favorites" className="w-full h-full flex items-center">Favorites</Link>
                        </NavBarItem>

                    </NavBarSection><NavBarSection name="LIBRARY">
                        <NavBarItem to="/recent" >
                            <IconRecent size={iconSize} />
                            <Link to="/recent" className="w-full h-full flex items-center">Recent</Link>
                        </NavBarItem>

                        <NavBarItem to="/playlists" >
                            <IconPlaylist size={iconSize} />

                            <Link to="/playlists" className="w-full h-full flex items-center">Playlists</Link>
                        </NavBarItem>

                        <NavBarItem to="/favorites" >
                            <IconHeart size={iconSize} />

                            <Link to="/favorites" className="w-full h-full flex items-center">Favorites</Link>
                        </NavBarItem>

                    </NavBarSection>

                </nav>
            </div>
        </div>
    )
}

function NavBarSection({ children, className, name }) {
    return (
        <div className="text-left flex flex-col mt-8">
            <span className="font-roboto text-lg tracking-wider text-slate-400">{name}</span>
            <ul className={`mt-3 ` + className}>
                {children}
            </ul>
        </div>
    );
}

function NavBarItem({ children, className, to }) {
    const location = useLocation();

    if (location.pathname === to) {
        className += " bg-cyan-700 text-white";
    } else {
        className += " hover:bg-cyan-950";
    }

    return (
        <li className={` flex flex-row items-center space-x-3 px-5 h-12 rounded-lg ` + className}>
            {children}
        </li>
    );
}

export default NavBar
