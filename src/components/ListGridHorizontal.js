import SectionContainer from "./SectionContainer";

function ListGridHorizontal({ children, className, title, rows }) {
    return (
        <SectionContainer title={title}>
            <div
                className={`grid grid-rows-3 grid-flow-col gap-x-6 ${className}`}
            >
                {children}
            </div>
        </SectionContainer>
    )
}

export default ListGridHorizontal
