import React from "react";
import TrackItem from "../components/TrackItem";

export default function Favorites({ likedTracks, toggleLiked, removeTrack }) {
  function convertMsToTime(duration_ms) {
    var seconds = Math.floor((duration_ms / 1000) % 60);
    var minutes = Math.floor((duration_ms / (1000 * 60)) % 60);

    var displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    var displayMinutes = minutes < 10 ? "0" + minutes : minutes;

    return displayMinutes + ":" + displaySeconds;
  }

  const handleRemoveTrack = (trackId) => {
    removeTrack(trackId);
  };

  return (
    <div>
      <h1>Favorites</h1>
      {likedTracks && Object.values(likedTracks).length > 0 ? (
        Object.values(likedTracks).map((track) => (
          <TrackItem
            key={track.id}
            cover={track.album.images[0]?.url}
            artist={track.artists[0].name}
            title={track.name}
            type="Songs"
            duration={convertMsToTime(track.duration_ms)}
            liked={true}
            onLike={() => toggleLiked(track.id)}
            onRemove={() => handleRemoveTrack(track.id)}
          />
        ))
      ) : (
        <p>No liked tracks found</p>
      )}
    </div>
  );
}
