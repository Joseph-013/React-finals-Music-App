import IconSearch from "../components/icons/IconSearch";
import TileGridHorizontal from "../components/TileGridHorizontal";
import TileSquared from "../components/TileSquared";
import TileRounded from "../components/TileRounded";
import ListGridVertical from "../components/ListGridVertical";
import TrackItem from "../components/TrackItem";
import { useEffect, useState } from "react";

export default function Discover({
  accessToken,
  setRecent,
  discover,
  setDiscover,
  setLikedTracks,
  toggleLiked,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  // const [accessToken, setAccessToken] = useState("");
  //   const [data, setData] = useState(null);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // const [data, setData] = useState({});

  // let DATA

  async function search() {
    console.log("Searching for.. " + searchQuery);
    var trackParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    try {
      var response = await fetch(
        "https://api.spotify.com/v1/search?q=" +
          searchQuery +
          "&type=album,artist,track&limit=50",
        trackParameters
      );

      const data = await response.json();

      setDiscover({
        albums: data.albums.items,
        artists: data.artists.items,
        tracks: data.tracks.items.map((track) => ({ ...track, liked: false })),
      });

      console.log("Albums:", data.albums.items);
      console.log("Artists:", data.artists.items);
      console.log("Tracks:", data.tracks.items);

      setShowSearchResults(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // const toggleLiked = (trackId) => {
  //   setLikedTracks((prevState) => {
  //     console.log("prevState:", prevState);
  //     console.log("prevState.tracks:", prevState?.tracks);

  //     return {
  //       ...prevState,
  //       tracks: (prevState?.tracks || []).map((track) =>
  //         track.id === trackId ? { ...track, liked: !track.liked } : track
  //       ),
  //     };
  //   });
  // };

  // const toggleLiked = (trackId) => {
  //   setLikedTracks((prevState) => {
  //     const updatedLikedTracks = { ...prevState };
  //     if (updatedLikedTracks[trackId]) {
  //       updatedLikedTracks[trackId].liked = !updatedLikedTracks[trackId].liked;
  //     } else {
  //       updatedLikedTracks[trackId] = discover.tracks.find(
  //         (track) => track.id === trackId
  //       );
  //       updatedLikedTracks[trackId].liked = true;
  //     }
  //     return updatedLikedTracks;
  //   });
  // };

  function convertMsToTime(duration_ms) {
    var seconds = Math.floor((duration_ms / 1000) % 60);
    var minutes = Math.floor((duration_ms / (1000 * 60)) % 60);

    var displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    var displayMinutes = minutes < 10 ? "0" + minutes : minutes;

    return displayMinutes + ":" + displaySeconds;
  }

  const handleItemClick = (item, category) => {
    item.status = true;

    setRecent((prevRecent) => {
      const updatedRecent = {
        ...prevRecent,
        [category]: [...prevRecent[category], item],
      };

      return updatedRecent;
    });
  };

  return (
    <div className="w-full space-y-10">
      <div className="relative w-full font-poppins md:w-1/2 flex justify-start h-10">
        <input
          type="text"
          className="h-full w-full rounded-lg bg-[#19272E] border-none pr-16 pl-5"
          placeholder="Search for albums, artists, or tracks..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && search()}
        />
        <button
          onClick={() => search()}
          className="flex px-4 bg-[#243943] hover:bg-cyan-700 my-1 mr-1 rounded-lg items-center justify-center absolute right-0 top-0 bottom-0"
        >
          <IconSearch size="20" />
        </button>
      </div>

      {showSearchResults && (
        <TileGridHorizontal title="Albums">
          {discover.albums.map((music) => (
            <TileSquared
              key={music.id}
              src={music.images[0]?.url}
              type="Album"
              title={music.name}
              subTitle={music.artists[0].name}
              onClick={() => handleItemClick(music, "albums")}
            />
          ))}
        </TileGridHorizontal>
      )}

      {showSearchResults && (
        <TileGridHorizontal title="Artists">
          {discover.artists.map((music) => (
            <TileRounded
              key={music.id}
              src={music.images[0]?.url}
              type="Artist"
              title={music.name}
              onClick={() => handleItemClick(music, "artists")}
            />
          ))}
        </TileGridHorizontal>
      )}

      {showSearchResults && (
        <ListGridVertical title="Songs" cols="2">
          {discover.tracks.map((music) => (
            <TrackItem
              key={music.id}
              cover={music.album.images[0]?.url}
              artist={music.artists[0].name}
              title={music.name}
              type="Songs"
              duration={convertMsToTime(music.duration_ms)}
              liked={music.liked}
              onLike={() => toggleLiked(music.id)}
              onClick={() => handleItemClick(music, "tracks")}
            />
          ))}
        </ListGridVertical>
      )}
    </div>
  );
}
