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
import NewPlaylist from "./components/NewPlaylist";

const CLIENT_ID = "1b6704c6a4c340899a3d4f5f0e407358";
const CLIENT_SECRET = "48dfec19fefc4ae48dfdfd5e48cdaa40";
const tmpPlaylists = {
  "test playlist 1": ["song 1", "song 2"],
  "test playlist 2": ["song 3", "song 4"],
};

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [recent, setRecent] = useState({ albums: [], artists: [], tracks: [] });
  const [discover, setDiscover] = useState({
    albums: [],
    artists: [],
    tracks: [],
  });

  const [playlists, setPlaylists] = useState(tmpPlaylists);
  const [likedTracks, setLikedTracks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

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

  // const toggleLiked = (trackId) => {
  //   setLikedTracks((prevLikedTracks) => {
  //     return {
  //       ...prevLikedTracks,
  //       [trackId]: {
  //         ...prevLikedTracks[trackId],
  //         liked: !prevLikedTracks[trackId].liked,
  //       },
  //     };
  //   });
  // };

  const toggleLiked = (trackId) => {
    setLikedTracks((prevState) => {
      const updatedLikedTracks = { ...prevState };
      if (updatedLikedTracks[trackId]) {
        updatedLikedTracks[trackId].liked = !updatedLikedTracks[trackId].liked;
      } else {
        // Assuming discover is available in the scope of this function
        const foundTrack = discover.tracks.find(
          (track) => track.id === trackId
        );
        if (foundTrack) {
          foundTrack.liked = true;
          updatedLikedTracks[trackId] = foundTrack;
        }
      }
      return updatedLikedTracks;
    });
  };

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

  return (
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
                  discover={discover}
                  setDiscover={setDiscover}
                  setLikedTracks={setLikedTracks}
                  toggleLiked={toggleLiked}
                  playlists={playlists}
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
                  discover={discover}
                  setDiscover={setDiscover}
                  setLikedTracks={setLikedTracks}
                  toggleLiked={toggleLiked}
                  playlists={playlists}
                />
              }
            />
            <Route
              path="trending"
              element={
                <Trending accessToken={accessToken} playlists={playlists} />
              }
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
    </div>
  );
}

export default App;
