import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import IconTrending from "../icons/IconTrending";
import IconSearch from "../icons/IconSearch";
import IconHome from "../icons/IconHome";
import IconRecent from "../icons/IconRecent";
import IconPlaylist from "../icons/IconPlaylist";
import IconHeart from "../icons/IconHeart";


function NavBar() {
    const iconSize = "25";

    return (
        <div className="w-16 pt-16 md:w-60 mb-20 overflow-hidden fixed top-0 left-0 h-screen flex flex-col">
            <div className="flex-1 z-30 pb-20 overflow-y-hidden px-2 md:px-5 text-center bg-[#19272E]" style={{ overscrollBehavior: 'contain' }}>
                <nav className="h-full pb-4 overflow-y-auto">
                    <NavBarSection name="MENU">
                        <NavBarItem to="/" name="Home" >
                            <IconHome size={iconSize} />
                        </NavBarItem>

                        <NavBarItem to="/search" name="Search" >
                            <IconSearch size={iconSize} />
                        </NavBarItem>

                        <NavBarItem to="/trending" name="Trending" >
                            <IconTrending size={iconSize} />
                        </NavBarItem>
                    </NavBarSection>

                    <NavBarSection name="LIBRARY">
                        <NavBarItem to="/recent" name="Recent" >
                            <IconRecent size={iconSize} />
                        </NavBarItem>

                        <NavBarItem to="/playlists" name="Playlists" >
                            <IconPlaylist size={iconSize} />
                        </NavBarItem>

                        <NavBarItem to="/favorites" name="Favorites" >
                            <IconHeart size={iconSize} />
                        </NavBarItem>
                    </NavBarSection>
                </nav>
            </div>
        </div>
    )
}

function NavBarSection({ children, className, name }) {
    return (
        <div className="text-center md:text-left flex flex-col mt-8">
            <span className="font-roboto text-[0.7rem] md:text-base tracking-wider text-slate-400 ">{name}</span>
            <ul className={`mt-3 ` + className}>
                {children}
            </ul>
        </div>
    );
}

function NavBarItem({ children, className, to, name }) {
    const location = useLocation();

    if (location.pathname === to) {
        className += " bg-cyan-700 text-white";
    } else {
        className += " hover:bg-cyan-950";
    }

    return (
        <li className={`flex flex-row items-center space-x-3 md:px-5 h-12 rounded-lg ` + className}>
            <Link to={to} className="w-full h-full flex items-center md:justify-start justify-center space-x-3">
                {children}
                <span className="hidden md:block">{name}</span>
            </Link>
        </li>
    );
}

export default NavBar
