function NavBarItem({ children, className }) {
    return (
        <li className={className}>
            {children}
        </li>
    )
}

export default NavBarItem
