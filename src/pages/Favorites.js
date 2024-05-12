import React from "react";
import TrackItem from "../components/TrackItem";

export default function Favorites(fav) {
  function convertMsToTime(duration_ms) {
    var seconds = Math.floor((duration_ms / 1000) % 60);
    var minutes = Math.floor((duration_ms / (1000 * 60)) % 60);

    var displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    var displayMinutes = minutes < 10 ? "0" + minutes : minutes;

    return displayMinutes + ":" + displaySeconds;
  }

  const handleRemoveTrack = (trackId) => {
    fav.removeTrack(trackId);
  };

  return (
    <div>
      <h1>Favorites</h1>
      {fav.likedTracks && Object.values(fav.likedTracks).length > 0 ? (
        Object.values(fav.likedTracks).map((track) => (
          <TrackItem
            key={track.id}
            cover={track.album.images[0]?.url}
            artist={track.artists[0].name}
            title={track.name}
            type="Songs"
            duration={convertMsToTime(track.duration_ms)}
            liked={true}
            onLike={() => fav.toggleLiked(track.id)}
            onRemove={() => handleRemoveTrack(track.id)}
          />
        ))
      ) : (
        <p>No liked tracks found</p>
      )}
    </div>
  );
}
