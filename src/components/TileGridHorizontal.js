import SectionContainer from "./SectionContainer"

function TileGridHorizontal({ children, title, className }) {
    return (
        <SectionContainer title={title}>
            <ul className={`max-w-full grid grid-rows-1 grid-flow-col overflow-x-auto gap-x-10 justify-start font-poppins ${className}`}>
                {children}
            </ul>
        </SectionContainer>
    )
}

export default TileGridHorizontal
