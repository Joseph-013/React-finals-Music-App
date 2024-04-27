// export default function NoPage({errorCode, message}) {
export default function NoPage() {

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center space-y-3">
            <span className="text-6xl">404</span>
            <span className="text-xl">Not Found!</span>
            <button className="text-xl">Go Back</button>
        </div>
    )
}