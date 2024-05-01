import SectionContainer from "./SectionContainer"

function ListGridVertical({ children, className, title, cols }) {

    return (
        <SectionContainer title={title}>
            <div className={`w-full grid grid-cols-1 sm:grid-cols-${cols || 2} grid-flow-row gap-6 ` + className}>
                {children}
            </div>
        </SectionContainer>
    )
}

export default ListGridVertical
