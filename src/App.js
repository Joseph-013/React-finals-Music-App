import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layoutComponents/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import NoPage from './pages/NoPage';

function App() {
    return (
        <div className='w-full min-h-screen text-[#d9d9d9] bg-[#121C21]'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='search' element={<Search />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
