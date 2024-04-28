import { useNavigate } from 'react-router-dom';

// export default function NoPage({errorCode, message}) {
export default function NoPage() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="h-screen w-screen py-28 flex flex-col md:flex-row justify-center items-center space-y-3">
            <div className='flex-1 flex flex-col items-center justify-center pb-20 leading-none'>
                <span style={{ fontSize: '50px' }}>oops!</span>
                <span style={{ fontSize: '200px' }}>{':('}</span>
            </div>
            <div className='flex-1 flex flex-col items-center justify-center space-y-5'>
                <span style={{ fontSize: '100px' }}>404</span>
                <div className='w-56 border-b border-slate-600'></div>
                <span className="text-xl">Not Found!</span>
                <button className="text-xl py-3 px-4 bg-slate-600 hover:bg-slate-500 rounded-full" onClick={goBack}>Go Back</button>
            </div>
        </div>
    )
}