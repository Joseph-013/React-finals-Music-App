import HeaderRoundedButton from "./HeaderRoundedButton";
import IconChevronLeft from '../icons/IconChevronLeft';
import IconChevronRight from '../icons/IconChevronRight';

function Header() {
    return (
        <section className="fixed top-0 left-0 w-full h-16 z-40 flex flex-row text-center">
            <div className="w-60 flex">
                <div className="w-16 bg-[#19272E] flex items-center justify-center">
                    <HeaderRoundedButton className="size-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2 p-2 size-full" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                    </HeaderRoundedButton>
                </div>
                <div className="flex-1 pl-3 md:bg-[#19272E] flex justify-left items-center font-koulen space-x-2 text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#007BFE" className="bi bi-soundwave" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5" />
                    </svg>
                    <div className="text-[#24A4DA]">Waveform</div>
                </div>
            </div>
            <div className="flex-1 flex justify-between px-3 bg-[#121C21] items-center border-b border-slate-700">
                <div className="h-full flex items-center space-x-2">
                    <HeaderRoundedButton className="size-10">
                        <IconChevronLeft />
                    </HeaderRoundedButton>
                    <HeaderRoundedButton className="size-10">
                        <IconChevronRight />
                    </HeaderRoundedButton>
                </div>
                <div>Maybe Visualizer dito?</div>
                <div className="flex items-center space-x-3">
                    <div className="flex flex-col justify-center text-right h-full">
                        <span>Rick</span>
                        <span className="text-xs text-slate-500">@theRealRickAstley</span>
                    </div>
                    <img className="size-10 object-cover rounded-full" src="profile.jpg" alt="joseph" />
                </div>
            </div>
        </section>
    )
}

export default Header
