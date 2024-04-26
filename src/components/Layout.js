import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-row h-full">

            {/* NavBar */}
            <section className="pl-16 md:pl-60">
                <div className="w-16 pt-16 md:w-60 mb-16 overflow-hidden fixed top-0 left-0 h-screen flex flex-col">
                    <div className="flex-1 z-30 pb-16 overflow-y-hidden px-2 text-center bg-[#19272E]" style={{ scrollBehavior: 'contain' }}>
                        <nav className="h-full boundary overflow-y-auto">
                            <div className="h-20">test</div>
                            <div className="h-20">test</div>
                            <div className="h-20">test</div>
                            <div className="h-20">test</div>
                        </nav>
                    </div>
                    {/* <div className="w-full h-16 border border-black">
                    </div> */}
                </div>
            </section>


            <div className="flex-1 flex flex-col mt-16 mb-16 px-3 bg-[#121C21]">
                {/* header */}
                <section className="fixed top-0 left-0 w-full h-16 z-40 flex flex-row text-center">
                    <div className="w-60  flex">
                        <div className="w-16 bg-[#19272E]">
                            <button type="button" className="flex justify-center items-center h-full w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2 p-2 hover:bg-slate-700 rounded-full" width="45" height="45" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 6l16 0" />
                                    <path d="M4 12l16 0" />
                                    <path d="M4 18l16 0" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 md:bg-[#19272E]">
                            Logo with Brand
                        </div>
                    </div>
                    <div className="flex-1 bg-[#121C21]">controls</div>
                </section>

                {/* Content */}
                <section className="py-3 text-center">
                    <Outlet />
                </section>
            </div>

            <section className="h-16 fixed bottom-0 overflow-hidden w-full  z-50 text-center bg-[#084868]">
                player
            </section>
        </div>
    );
}






// const Layout = () => {
//     return (
//         <>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     {/* 
//                     <li>
//                         <Link to="/blogs">Blogs</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact">Contact</Link>
//                     </li> 
//                     */}
//                 </ul>
//             </nav>

//             <Outlet />
//         </>
//     )
// };

export default Layout;
