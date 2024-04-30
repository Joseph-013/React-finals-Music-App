function ListGridVertical({ children, className }) {
    return (
        <div className={`w-full grid grid-cols-2 grid-flow-row gap-6 ` + className}>
            {children}
        </div>
    )
}

export default ListGridVertical
