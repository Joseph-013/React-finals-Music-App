export default function TrackItemShort(track) {
    return (
        <div className="w-full h-full flex items-center space-x-3 text-left">
            <img src={track.cover} alt={track.title + ` Picture`} className="size-12" />
            <div className="flex-1 flex flex-col truncate font-poppins">
                <span className="text-sm truncate tracking-normal">{track.title}</span>
                <span className="text-sm text-slate-400 truncate">{track.artist}</span>
            </div>
        </div>
    )
}