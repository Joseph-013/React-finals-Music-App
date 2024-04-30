import logo from './logo.svg';
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

function App() {
    return (
        <div className='w-screen h-screen text-[#d9d9d9] bg-[#121C21] tracking-wide'>
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
