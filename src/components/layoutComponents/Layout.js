import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import PlayerDocked from "./PlayerDocked";
import { useState, useEffect } from "react";
// import { NavbarToggle } from "flowbite-react";

const Layout = () => {
    const [navBarToggle, setNavBarToggle] = useState(true);
    // const [windowWidth, setWindowWidth] = useState('');

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
        console.log(navBarToggle)
        setNavBarToggle(!navBarToggle);
    }

    return (
        <div className="flex flex-row h-full">
            {/* NavBar */}
            <section className={(navBarToggle ? `pl-16 md:pl-60` : `pl-16`) + ` `}>
                <NavBar navBarStatus={navBarToggle} />
            </section>

            <section className="flex-1 flex flex-col mt-16 mb-20 bg-[#121C21]">
                {/* header */}
                <Header onNavBarToggle={handleNavBarToggle} navBarStatus={navBarToggle} />

                {/* Content */}
                <section className="py-3 text-center" style={{ overflow: `overlay` }}>
                    <Outlet />
                </section>
            </section>

            {/* Player */}
            <section className="h-20 fixed bottom-0 overflow-hidden w-full z-50 bg-[#084868]">
                <PlayerDocked />
            </section>
        </div>
    );
}

export default Layout;
