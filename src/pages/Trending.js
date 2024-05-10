import React, { useEffect, useState } from "react";
import TrackItem from "../components/TrackItem";
import ListGridVertical from "../components/ListGridVertical";

export default function Trending({ accessToken }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (accessToken) {
      fetchTrendingTracks();
    }
  }, [accessToken]);

  const fetchTrendingTracks = async () => {
    const playlistId = "37i9dQZEVXbNBz9cRCSFkY";
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?market=PH`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Spotify API error: ${errorDetails.error.message}`);
      }

      const data = await response.json();
      setTracks(data.items ?? []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setTracks([]);
    }
  };

  const convertMsToTime = (duration_ms) => {
    const seconds = Math.floor((duration_ms / 1000) % 60);
    const minutes = Math.floor((duration_ms / (1000 * 60)) % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div className="w-full space-y-10">
      <ListGridVertical title="Trending Tracks in the Philippines">
        {tracks.length > 0 ? (
          tracks.map((item) => (
            <TrackItem
              key={item.track.id}
              cover={item.track.album.images[0]?.url}
              artist={item.track.artists[0].name}
              title={item.track.name}
              type="Songs"
              duration={convertMsToTime(item.track.duration_ms)}
              liked={item.track.liked}
              onLike={() => {
                /* Implement like functionality here if needed */
              }}
            />
          ))
        ) : (
          <p>No tracks available</p>
        )}
      </ListGridVertical>
    </div>
  );
}
