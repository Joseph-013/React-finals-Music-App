import visualizerGif from './icons/visualizerGif.gif';
import { useState } from 'react';
import IconPlayFilled from './icons/IconPlayFilled';

export default function TrackItemShort(track) {
    const [hovered, setHovered] = useState(false);


    return (
        <div className={`w-full h-full flex items-center justify-between text-left space-x-2 cursor-pointer hover:bg-cyan-700 p-2 -mx-2 rounded-lg`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="h-full flex items-center space-x-3">
                <div className="relative">
                    {(!track.playing) || <img src={visualizerGif} alt='Play' className='opacity-40 absolute' />}
                    <IconPlayFilled size="25" className={`absolute justify-center items-center h-full w-full p-2 bg-gray-900 opacity-60 ` + (hovered && !track.playing ? `flex` : `hidden`)} />
                    <img src={track.cover} alt={track.title} className="size-12" />
                </div>
                <div className="flex-1 flex flex-col truncate font-poppins w-fit">
                    <span className="text-sm truncate tracking-normal">{track.title}</span>
                    <span className="text-sm text-slate-400 truncate">{track.artist}</span>
                </div>
            </div>
            <span className="h-full w-fit flex items-center text-slate-400">{track.duration}</span>
        </div>
    )
}
