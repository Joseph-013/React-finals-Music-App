function TileRounded(data) {
    return (
        <li className="w-44 h-full flex flex-col justify-between text-left">
            <img src={data.src} className="w-full rounded-full" height="auto" alt={data.name + ` ` + data.type} />
            <div className="flex flex-col w-full">
                <span className="truncate text-base">{data.title}</span>
                <span className="truncate text-xs text-slate-400">{data.subTitle}</span>
            </div>
        </li>
    )
}

export default TileRounded
