function HeaderRoundedButton({ className, children }) {
    return (
        <button className={`rounded-full hover:bg-slate-700 ` + className}>
            {children}
        </button>
    )
}

export default HeaderRoundedButton
