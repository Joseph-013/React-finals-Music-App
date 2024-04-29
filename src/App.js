import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layoutComponents/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import Trending from './pages/Trending';
import Recent from './pages/Recent';
import Playlists from './pages/Playlists';
import Favorites from './pages/Favorites';
import NoPage from './pages/NoPage';
import unsplash from './img/unsplash.jpg';

function App() {
    return (
        <div className='w-full min-h-screen text-[#e7e7e7] tracking-wide test'>
            <img className='fixed top-0 left-0 h-screen w-screen object-cover object-center z-0' src={unsplash} alt='' />
            <div className='fixed inset-0 h-screen w-screen z-0 bgBlur'></div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='search' element={<Search />} />
                        <Route path='trending' element={<Trending />} />
                        <Route path='recent' element={<Recent />} />
                        <Route path='playlists' element={<Playlists />} />
                        <Route path='favorites' element={<Favorites />} />
                    </Route>
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
