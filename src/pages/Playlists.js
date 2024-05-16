import { useState } from "react";
import PlaylistItem from "../components/PlaylistItem";
import SectionContainer from "../components/SectionContainer";
import TileGridHorizontal from "../components/TileGridHorizontal";
import TrackItem from "../components/TrackItem";

export default function Playlists({ playlists, accessToken }) {
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  let renderPlaylistTrack;

  function handleClick(playlistName) {
    setSelectedPlaylist(playlistName);
    setPlaylistTracks([]);
    getPlaylistTracks(playlistName);
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

  if (playlistTracks.length === 0) {
    renderPlaylistTrack = <span>Playlist is empty</span>;
  } else {
    renderPlaylistTrack = playlistTracks.map((track) => (
      <TrackItem
        key={track.id}
        cover={track.album.images[0].url}
        artist={track.artists[0].name}
        title={track.name}
        duration={track.duration_ms}
        trackId={track.id}
      />
    ));
  }

  return (
    <div className="w-full flex flex-col">
      <SectionContainer title="Playlists">
        <TileGridHorizontal>
          {Object.entries(playlists).map(([playlistName, songs]) => (
            <div key={playlistName} onClick={() => handleClick(playlistName)}>
              <PlaylistItem title={playlistName} count={songs.length} />
            </div>
          ))}
        </TileGridHorizontal>
      </SectionContainer>

      <SectionContainer title={selectedPlaylist}>
        {renderPlaylistTrack}
      </SectionContainer>
    </div>
  );
}
