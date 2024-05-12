function TileRounded(data) {
    return (
        <li className="w-44 h-[14.5rem] text-left hover-underline">
            <a className="flex flex-col justify-start gap-y-3 h-full" href="#artist">
                <img src={data.src} className="w-full rounded-full object-cover h-44" alt={data.name + ` ` + data.type} />
                <div className="flex flex-col w-full">
                    <span className="truncate text-base">{data.title}</span>
                    <span className="truncate text-xs text-slate-400">{data.subTitle}</span>
                </div>
            </a>
        </li>
    )
}

export default TileRounded
