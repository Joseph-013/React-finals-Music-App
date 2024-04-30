function TrackItemMedium(track) {
    return (
        <div className="w-full h-full flex items-center justify-between text-left space-x-2">
            <div className="h-full flex items-center space-x-3 w-3/5">
                <img src={track.cover} alt={track.title + ` Picture`} className="size-12" />
                <div className="flex-1 flex flex-col truncate font-poppins w-fit">
                    <span className="text-sm truncate tracking-normal">{track.title}</span>
                    <span className="text-sm text-slate-400 truncate">{track.artist}</span>
                </div>
            </div>
            <span className="h-full w-fit flex items-center text-slate-400">Country</span>
            <span className="h-full w-fit flex items-center text-slate-400">{track.duration}</span>
        </div>
    )
}

export default TrackItemMedium
