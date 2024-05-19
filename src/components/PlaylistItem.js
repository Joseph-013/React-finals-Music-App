function PlaylistItem(playlist) {
    return (
        <div className="gap-y-2 w-44 flex flex-col justify-center text-left hover:underline hover:cursor-pointer hover:bg-slate-700 rounded-lg px-3 py-4">
            <div className="size-36 rounded-md">
                {/* Adjust nalang to 1 img if yung count is less than 4 */}
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vinyl" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M16 3.937a9 9 0 1 0 5 8.063" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M20 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M20 4l-3.5 10l-2.5 2" />
                </svg>
            </div>
            <div className="w-44">
                <span className="truncate block">{playlist.title}</span>
                <span className="truncate block text-slate-500">{playlist.count} tracks</span>
            </div>
        </div>
    )
}

export default PlaylistItem
