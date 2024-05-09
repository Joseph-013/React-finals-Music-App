import { Link, useLocation } from "react-router-dom";
import IconTrending from "../icons/IconTrending";
import IconHome from "../icons/IconHome";
import IconRecent from "../icons/IconRecent";
import IconPlaylist from "../icons/IconPlaylist";
import IconHeart from "../icons/IconHeart";
import IconCompass from "../icons/IconCompass";

function NavBar({ navBarState }) {
  const iconSize = "25";
  let navBarWidth = navBarState ? "w-60" : "w-16";

  return (
    <div
      className={
        navBarWidth +
        ` pt-16 mb-20 overflow-hidden fixed top-0 left-0 h-screen flex flex-col z-navbar`
      }
    >
      <div
        className={
          (navBarState ? `px-5` : `px-2`) +
          ` flex-1 z-30 pb-20 overflow-y-hidden text-center bg-[#19272E]`
        }
        style={{ overscrollBehavior: "contain" }}
      >
        <nav className="h-full pb-4 overflow-y-auto">
          <NavBarSection name="MENU">
            <NavBarItem to="/" name="Home">
              <IconHome size={iconSize} />
            </NavBarItem>

            <NavBarItem to="/discover" name="Discover">
              <IconCompass size={iconSize} />
            </NavBarItem>

            <NavBarItem to="/trending" name="Trending">
              <IconTrending size={iconSize} />
            </NavBarItem>
          </NavBarSection>

          <NavBarSection name="LIBRARY">
            <NavBarItem to="/recent" name="Recent">
              <IconRecent size={iconSize} />
            </NavBarItem>

            <NavBarItem to="/playlists" name="Playlists">
              <IconPlaylist size={iconSize} />
            </NavBarItem>

            <NavBarItem to="/favorites" name="Favorites">
              <IconHeart size={iconSize} />
            </NavBarItem>
          </NavBarSection>

          <NavBarSection name="DEVS">
            <NavBarItem to="/testpage" name="TestPage">
              <IconHeart size={iconSize} />
            </NavBarItem>
          </NavBarSection>
        </nav>
      </div>
    </div>
  );

  function NavBarSection({ children, className, name }) {
    return (
      <div
        className={
          (navBarState ? `text-left` : `text-center`) + ` flex flex-col mt-8`
        }
      >
        <span
          className={
            (navBarState
              ? `text-base justify-start`
              : `text-[0.7rem] justify-center`) +
            ` flex font-roboto tracking-wider text-slate-400 h-7 items-end`
          }
        >
          {name}
        </span>
        <ul className={`mt-3 ` + className}>{children}</ul>
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
      <li
        className={
          (!navBarState || `px-5`) +
          ` flex flex-row items-center space-x-3 h-12 rounded-lg ` +
          className
        }
      >
        <Link
          to={to}
          className={
            (navBarState ? `justify-start` : `justify-center`) +
            ` w-full h-full flex items-center space-x-3`
          }
        >
          {children}
          <span className={navBarState ? `block` : "hidden"}>{name}</span>
        </Link>
      </li>
    );
  }
}

export default NavBar;
