function TileGridHorizontal({ children, title }) {
    return (
        <div className="w-full flex flex-col font-poppins space-y-3">
            <span className="w-full text-left text-lg md:text-2xl font-bold">{title}</span>
            <ul className="max-w-full h-[14.5rem] grid grid-rows-1 grid-flow-col overflow-x-auto gap-x-10 justify-start font-poppins">
                {children}
            </ul>
        </div>
    )
}

export default TileGridHorizontal
