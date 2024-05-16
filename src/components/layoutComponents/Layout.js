import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Player from "./Player";
import { useState, useEffect } from "react";
// import { NavbarToggle } from "flowbite-react";

function Layout({ playerTracks, setPlayerTracks, accessToken }) {
    const [navBarToggle, setNavBarToggle] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setNavBarToggle(!mediaQuery.matches);
    }, []);

    window.matchMedia('(max-width: 768px)').addEventListener('change', () => {
        if (navBarToggle) {
            setNavBarToggle(false);
        } else {
            setNavBarToggle(true);
        }
    });

    const handleNavBarToggle = () => {
        setNavBarToggle(!navBarToggle);
    }

    return (
        <div className="flex flex-row h-full">
            {/* NavBar */}
            {/* <section className={(navBarToggle ? `pl-16 md:pl-60` : `pl-16`) + ` b`}> */}
            <NavBar navBarState={navBarToggle} />
            <Header onNavBarToggle={handleNavBarToggle} navBarState={navBarToggle} />

            <section className={(navBarToggle ? `pl-16 md:pl-60` : `pl-16`) + ` flex-1 flex flex-col pt-16 h-screen w-screen pb-20 bg-[#121C21] overflow-x-hidden`}>
                {/* <section className="p-3 text-center h-full" style={{ overflow: `overlay` }}> */}
                <section className="p-3 sm:p-6 text-center h-full w-full overflow-x-hidden overflow-y-auto">
                    <Outlet />
                </section>
            </section>

            {/* Player */}
            <section className="h-20 fixed bottom-0 overflow-hidden w-full z-player bg-[#084868]">
                <Player navBarState={navBarToggle} playerTracks={playerTracks} setPlayerTracks={setPlayerTracks} accessToken={accessToken} />
            </section>
        </div>
    );
}

export default Layout;
