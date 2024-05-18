import IconSearch from "../components/icons/IconSearch";
import TileGridHorizontal from "../components/TileGridHorizontal";
import TileSquared from "../components/TileSquared";
import TileRounded from "../components/TileRounded";
import ListGridVertical from "../components/ListGridVertical";
import TrackItem from "../components/TrackItem";

import { useContext, useEffect, useState } from "react";
import { TrackContext } from "../components/Context";

export default function Discover({
  accessToken,
  setRecent,
  data,
  setData,
  likedTracks,
  setLikedTracks,
  toggleLiked,
  removeTrack,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [sortOption, setSortOption] = useState("popularity");
  const [viewOption, setViewOption] = useState("all");
  const { convertMsToTime } = useContext(TrackContext);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

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

      setData({
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

  const sortData = (data, option) => {
    if (option === "popularity") {
      return [...data].sort((a, b) => b.popularity - a.popularity);
    } else if (option === "release_date") {
      return [...data].sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
    } else if (option === "alphabetical") {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    }
    return data;
  };

  const sortedAlbums = sortData(data.albums, sortOption);
  const sortedArtists = sortData(data.artists, sortOption);
  const sortedTracks = sortData(data.tracks, sortOption);

  const displayAlbums = viewOption === "all" || viewOption === "albums";
  const displayArtists = viewOption === "all" || viewOption === "artists";
  const displayTracks = viewOption === "all" || viewOption === "tracks";

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

      <div className="flex space-x-4">
        <select
          className="bg-[#19272E] text-white p-2 rounded"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="popularity">Popularity</option>
          <option value="release_date">Release Date</option>
          <option value="alphabetical">Alphabetical</option>
        </select>

        <select
          className="bg-[#19272E] text-white p-2 rounded"
          value={viewOption}
          onChange={(e) => setViewOption(e.target.value)}
        >
          <option value="all">All</option>
          <option value="albums">Albums</option>
          <option value="artists">Artists</option>
          <option value="tracks">Tracks</option>
        </select>
      </div>

      {showSearchResults && displayAlbums && (
        <TileGridHorizontal title="Albums">
          {sortedAlbums.map((music) => (
            <TileSquared
              key={music.id}
              src={music.images[0]?.url}
              type="Album"
              title={music.name}
              subTitle={music.artists[0].name}
            />
          ))}
        </TileGridHorizontal>
      )}

      {showSearchResults && displayArtists && (
        <TileGridHorizontal title="Artists">
          {sortedArtists.map((music) => (
            <TileRounded
              key={music.id}
              src={music.images[0]?.url}
              type="Artist"
              title={music.name}
            />
          ))}
        </TileGridHorizontal>
      )}

      {showSearchResults && displayTracks && (
        <ListGridVertical title="Songs" cols="2">
          {sortedTracks.map((music) => (
            <TrackItem
              key={music.id}
              trackId={music.id}
              cover={music.album.images[0]?.url}
              artist={music.artists[0].name}
              title={music.name}
              type="Songs"
              duration={convertMsToTime(music.duration_ms)}
              liked={likedTracks[music.id]?.liked || false}
              onLike={() => toggleLiked(music.id)}
              onRemoveLike={() => removeTrack(music.id)}
              accessToken={accessToken}
              setLikedTracks={setLikedTracks}
              uri={music.uri}
            />
          ))}
        </ListGridVertical>
      )}
    </div>
  );
}
