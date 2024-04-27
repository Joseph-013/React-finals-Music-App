import TrackItemTiny from "../TrackItemTiny";
import IconPlayFilled from '../icons/IconPlayFilled';
import IconRepeat from '../icons/IconRepeat';
import IconShuffle from '../icons/IconShuffle';
import IconSkipLeft from '../icons/IconSkipLeft';
import IconSkipRight from '../icons/IconSkipRight';
import IconHeart from '../icons/IconHeart';
import { useState } from "react";


function PlayerDocked() {
    const [maximized, useMaximized] = useState(true);

    return (
        <div className="h-full flex flex-row items-center space-x-3">
            {(maximized ? <PlayerFull /> : '')}
            <div className="w-1/3 h-full flex justify-start items-center">
                <div className="md:w-52 lg:w-72 flex items-center">
                    <TrackItemTiny cover="https://upload.wikimedia.org/wikipedia/en/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png" title="All Too Well [Explicit 18+] (69 Hour Version) asd asd asd asd asd asd asd" artist="Taylor Swift" />
                    <div className='h-full flex items-center'>
                        <button className='flex items-center justify-center size-10 hover:bg-cyan-700 hover:text-white rounded-full'>
                            <IconHeart size="30" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-1/3 h-full flex justify-center">
                <TrackControlsLong />
            </div>
            <div className="w-1/3 h-full flex items-center justify-end space-x-9">

                <div className="flex flex-row items-center space-x-2">
                    <button className="size-10 rounded-full hover:bg-cyan-700 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-volume" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 8a5 5 0 0 1 0 8" />
                            <path d="M17.7 5a9 9 0 0 1 0 14" />
                            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                        </svg>
                        {/* No Volume and Mute */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-volume-3" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                            <path d="M16 10l4 4m0 -4l-4 4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-volume-off" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464" />
                            <path d="M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615" />
                            <path d="M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664" />
                            <path d="M3 3l18 18" />
                        </svg> */}
                    </button>
                    <div>
                        <div className="w-24 h-1 bg-[#d9d9d9]"></div>
                    </div>
                </div>

                <button className="text-[#d9d9d9]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-window-minimize" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z" />
                        <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" />
                        <path d="M15 13h-4v-4" />
                        <path d="M11 13l5 -5" />
                    </svg>
                    {/* If player maximized: */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-window-maximize" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z" />
                        <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" />
                        <path d="M12 8h4v4" />
                        <path d="M16 8l-5 5" />
                    </svg> */}
                </button>
            </div>
        </div>
    )
}

function TrackControlsLong({ className }) {
    return (
        <div className={`${className} w-full flex flex-col items-center justify-between`}>
            <div className="flex-1 flex w-full justify-between items-center pb-2">
                <button className="flex items-center justify-center rounded-full size-9 hover:bg-cyan-700">
                    <IconShuffle size={"25"} />
                </button>

                <div className="flex items-center space-x-4">
                    <button className="flex items-center justify-center rounded-full size-9 hover:bg-cyan-700">
                        <IconSkipLeft size={"25"} />
                    </button>
                    <button className="flex items-center justify-center bg-[#d9d9d9] hover:bg-[#ACACAC] size-11 rounded-full text-[#084868]">
                        <IconPlayFilled size={"25"} />
                    </button>
                    <button className="flex items-center justify-center rounded-full size-9 hover:bg-cyan-700">
                        <IconSkipRight size={"25"} />
                    </button>
                </div>

                <button className="flex items-center justify-center rounded-full size-9 hover:bg-cyan-700">
                    <IconRepeat size={"25"} />
                </button>
            </div>
            <div className="w-full flex text-xs space-x-2 h-3">
                <div className="flex items-center w-10 justify-center">2:10</div>
                <div className="flex-1 flex justify-center bg-white"></div>
                <div className="flex items-center w-10 justify-center">4:20</div>
            </div>
        </div>
    );
}

function PlayerFull(props) {
    return (
        <section className="fixed inset-0 mb-20 mt-16 ml-16 md:ml-60 bg-[#121C21] z-50" style={{ overscrollBehavior: 'contain' }}>
            Maximized player. pa set yung state to false para ma close
        </section>
    );
}

export default PlayerDocked
