function HeaderRoundedButton({ className, children }) {
    return (
        <button className={`rounded-full bg-slate-800 hover:bg-slate-700 ` + className}>
            {children}
        </button>
    )
}

export default HeaderRoundedButton
