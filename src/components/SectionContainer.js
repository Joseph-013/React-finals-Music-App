function SectionContainer({ children, title }) {
    return (
        <div className="flex flex-col space-y-3">
            <span className="w-full text-left text-lg md:text-2xl font-bold">{title}</span>
            {children}
        </div>
    )
}

export default SectionContainer
