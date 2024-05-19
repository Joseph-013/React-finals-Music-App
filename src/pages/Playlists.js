import { useState, useEffect, useContext } from "react";
import { TrackContext } from "../components/Context";

import PlaylistItem from "../components/PlaylistItem";
import SectionContainer from "../components/SectionContainer";
import TileGridHorizontal from "../components/TileGridHorizontal";
import TrackItem from "../components/TrackItem";

export default function Playlists({
  playlists,
  accessToken,
  removeSongFromPlaylist,
  onDeletePlaylist,
}) {
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [targetPlaylistName, setTargetPlaylistName] = useState("");
  const { convertMsToTime } = useContext(TrackContext);

  useEffect(() => {
    if (selectedPlaylist) {
      getPlaylistTracks(selectedPlaylist);
    }
  }, [selectedPlaylist]); // Fetch playlist tracks whenever selectedPlaylist changes

  function handleClick(playlistName) {
    setSelectedPlaylist(playlistName);
    setPlaylistTracks([]);
    setTargetPlaylistName(playlistName);
  }

  async function getPlaylistTracks(playlistName) {
    let trackIDs = playlists[playlistName].join(",");

    const trackParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/tracks?ids=${trackIDs}`,
        trackParameters
      );
      const data = await response.json();
      console.log("API response:", data);

      if (Array.isArray(data.tracks)) {
        setPlaylistTracks(data.tracks);
      } else {
        console.error("Unexpected API response structure:", data);
      }
    } catch (error) {
      console.error("Error fetching playlist tracks:", error);
    }
  }

  const handleRemoveFromPlaylist = (trackId) => {
    removeSongFromPlaylist(targetPlaylistName, trackId);
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((track) => track.id !== trackId)
    );
  };

  const handleDeletePlaylist = (playlistName, e) => {
    e.stopPropagation(); // Prevent event propagation to the parent div
    onDeletePlaylist(playlistName);
    setSelectedPlaylist("");
    setPlaylistTracks([]);
  };

  return (
    <div className="w-full flex flex-col">
      <SectionContainer title="Playlists">
        <TileGridHorizontal>
          {Object.entries(playlists).map(([playlistName, songs]) => (
            <div key={playlistName} onClick={() => handleClick(playlistName)}>
              <PlaylistItem
                title={playlistName}
                count={songs.length}
                onDelete={(e) => handleDeletePlaylist(playlistName, e)}
              />
            </div>
          ))}
        </TileGridHorizontal>
      </SectionContainer>

      <SectionContainer title={selectedPlaylist}>
        {playlistTracks.length === 0 ? (
          <span>Playlist is empty</span>
        ) : (
          playlistTracks.map((track) => (
            <TrackItem
              key={track.id}
              cover={track.album.images[0].url}
              artist={track.artists[0].name}
              title={track.name}
              duration={convertMsToTime(track.duration_ms)}
              trackId={track.id}
              showControls={false}
              isPlaylistPage={true}
              removeSongFromPlaylist={() => handleRemoveFromPlaylist(track.id)}
              uri={track.uri}
            />
          ))
        )}
      </SectionContainer>
    </div>
  );
}
