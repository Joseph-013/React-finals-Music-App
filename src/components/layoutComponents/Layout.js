import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import PlayerDocked from "./PlayerDocked";

const Layout = () => {
    return (
        <div className="flex flex-row h-full">
            {/* NavBar */}
            <section className="pl-16 md:pl-60">
                <NavBar />
            </section>

            <section className="flex-1 flex flex-col mt-16 mb-20 bg-[#121C21]">
                {/* header */}
                <Header />

                {/* Content */}
                <section className="py-3 text-center">
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
