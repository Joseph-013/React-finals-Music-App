import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { PlaylistContext } from "./components/Context";

import Layout from "./components/layoutComponents/Layout";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Trending from "./pages/Trending";
import Recent from "./pages/Recent";
import Playlists from "./pages/Playlists";
import Favorites from "./pages/Favorites";
import NoPage from "./pages/NoPage";
import TestPage from "./pages/TestPage";
import NewPlaylist from "./components/NewPlaylist";
import Overlay from "./components/Overlay";

const CLIENT_ID = "1b6704c6a4c340899a3d4f5f0e407358";
const CLIENT_SECRET = "48dfec19fefc4ae48dfdfd5e48cdaa40";
const tmpPlaylists = {
  "test playlist 1": ["song 1", "song 2"],
  "test playlist 2": ["song 3", "song 4"],
};

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [recent, setRecent] = useState({ albums: [], artists: [], tracks: [] });
  const [data, setData] = useState({
    albums: [],
    artists: [],
    tracks: [],
  });

  const [playlists, setPlaylists] = useState(tmpPlaylists);
  const [likedTracks, setLikedTracks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [overlay, setOverlay] = useState(false);

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
      .then((data) => {
        setAccessToken(data.access_token);
        setLoading(false); // Update loading state once access token is fetched
      });
  }, []);

  const removeTrack = (trackId) => {
    setLikedTracks((prevLikedTracks) => {
      const updatedLikedTracks = Object.fromEntries(
        Object.entries(prevLikedTracks).filter(([id, track]) => id !== trackId)
      );
      return updatedLikedTracks;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleLiked = (trackId) => {
    setLikedTracks((prevState) => {
      const updatedLikedTracks = { ...prevState };
      if (updatedLikedTracks[trackId]) {
        updatedLikedTracks[trackId].liked = !updatedLikedTracks[trackId].liked;
      } else {
        const foundTrack = data.tracks.find((track) => track.id === trackId);
        if (foundTrack) {
          foundTrack.liked = true;
          updatedLikedTracks[trackId] = foundTrack;
        }
      }
      return updatedLikedTracks;
    });
  };

  function addSongToPlaylist(playlistName, trackID) {
    setPlaylists(() => {
      var updatedPlaylist = [...playlists[playlistName], trackID];

      console.log("Song is added");
      return { ...playlists, [playlistName]: updatedPlaylist };
    });
  }

  return (
    <PlaylistContext.Provider
      value={{ playlists, setPlaylists, setOverlay, addSongToPlaylist }}
    >
      <div className="w-screen h-screen text-[#d9d9d9] bg-[#121C21] tracking-wide">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="testpage"
                element={
                  <TestPage playlists={playlists}>
                    <NewPlaylist setPlaylists={setPlaylists} />
                  </TestPage>
                }
              />
              <Route
                index
                element={
                  <Home
                    accessToken={accessToken}
                    setRecent={setRecent}
                    likedTracks={likedTracks}
                    data={data}
                    setData={setData}
                    setLikedTracks={setLikedTracks}
                    toggleLiked={toggleLiked}
                  />
                }
              />
              <Route
                path="discover"
                element={
                  <Discover
                    accessToken={accessToken}
                    setRecent={setRecent}
                    likedTracks={likedTracks}
                    data={data}
                    setData={setData}
                    setLikedTracks={setLikedTracks}
                    toggleLiked={toggleLiked}
                  />
                }
              />
              <Route
                path="trending"
                element={<Trending accessToken={accessToken} />}
              />
              <Route path="recent" element={<Recent recent={recent} />} />
              <Route
                path="playlists"
                element={<Playlists playlists={playlists} />}
              />
              <Route
                path="favorites"
                element={
                  <Favorites
                    likedTracks={likedTracks}
                    toggleLiked={toggleLiked}
                    removeTrack={removeTrack}
                  />
                }
              />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
        <Overlay
          overlay={overlay}
          setOverlay={setOverlay}
          setPlaylists={setPlaylists}
        />
      </div>
    </PlaylistContext.Provider>
  );
}
export default App;
