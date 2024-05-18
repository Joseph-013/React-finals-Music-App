import React, { useContext } from "react";
import ListGridVertical from "../components/ListGridVertical";
import TrackItem from "../components/TrackItem";

import { TrackContext } from "../components/Context";

export default function Favorites({ likedTracks, toggleLiked, removeTrack }) {
  const { convertMsToTime } = useContext(TrackContext);

  const handleRemoveTrack = (trackId) => {
    removeTrack(trackId);
  };

  return (
    <div>
      <ListGridVertical title="Favorites">
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
              onRemoveLike={() => handleRemoveTrack(track.id)}
              uri={track.uri}
            />
          ))
        ) : (
          <p>No liked tracks found</p>
        )}
      </ListGridVertical>
    </div>
  );
}
