function IconCompass({ size, className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-brand-safari ${className}`} width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        </svg>
    )
}

export default IconCompass
