function HeaderRoundedButton({ className, children, onClick }) {
    return (
        <button className={`rounded-full hover:bg-slate-700 ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default HeaderRoundedButton
