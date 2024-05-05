import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/layoutComponents/Layout";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Trending from "./pages/Trending";
import Recent from "./pages/Recent";
import Playlists from "./pages/Playlists";
import Favorites from "./pages/Favorites";
import NoPage from "./pages/NoPage";
import TestPage from "./pages/TestPage";

const CLIENT_ID = "1b6704c6a4c340899a3d4f5f0e407358";
const CLIENT_SECRET = "48dfec19fefc4ae48dfdfd5e48cdaa40";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [recent, setRecent] = useState({ albums: [], artists: [], tracks: [] });
  const [discover, setDiscover] = useState({
    albums: [],
    artists: [],
    tracks: [],
  });
  const [likedTracks, setLikedTracks] = useState([]);

  // useEffect(() => {
  //     var authParameters = {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/x-www-form-urlencoded"
  //         },
  //         body: "grant_type=client_credentials&client_id=" +
  //             CLIENT_ID +
  //             "&client_secret=" +
  //             CLIENT_SECRET,
  //     };

  //     fetch("https://accounts.spotify.com/api/token", authParameters)
  //         .then((res) => res.json())
  //         // .then(data => console.log(data.access_token))
  //         .then((data) => setAccessToken(data.access_token));
  // }, [])

  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((res) => res.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  return (
    <div className="w-screen h-screen text-[#d9d9d9] bg-[#121C21] tracking-wide">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home accessToken={accessToken} />} />
            <Route path="testpage" element={<TestPage />} />
            <Route
              path="discover"
              element={
                <Discover
                  accessToken={accessToken}
                  setRecent={setRecent}
                  discover={discover}
                  setDiscover={setDiscover}
                  setLikedTracks={setLikedTracks}
                />
              }
            />
            <Route path="trending" element={<Trending />} />
            <Route path="recent" element={<Recent recent={recent} />} />
            <Route path="playlists" element={<Playlists />} />
            <Route
              path="favorites"
              element={<Favorites likedTracks={likedTracks} />}
            />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
