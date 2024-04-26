import IconHeart from './icons/IconHeart';

export default function TrackItemTiny(track) {
    return (
        <div className="w-full h-full flex items-center space-x-3">
            <img src={track.cover} alt={track.title + ` Picture`} className="size-12" />
            <div className="flex-1 flex flex-col truncate font-poppins">
                <span className="text-lg truncate tracking-tight">{track.title}</span>
                <span className="text-sm text-slate-400 truncate">{track.artist}</span>
            </div>
            <div className='h-full flex items-center'>
                <button className='flex items-center justify-center size-10 hover:bg-cyan-700 hover:text-white rounded-full'>
                    <IconHeart size="30" />
                </button>
            </div>
        </div>
    )
}