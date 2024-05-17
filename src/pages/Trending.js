import React, { useEffect, useState } from "react";
import TrackItem from "../components/TrackItem";
import ListGridVertical from "../components/ListGridVertical";
import ListGridHorizontal from "../components/ListGridHorizontal";
import TileGridHorizontal from "../components/TileGridHorizontal";
import TileRounded from "../components/TileRounded";
import TileSquared from "../components/TileSquared";

const formatDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default function Trending({
  accessToken,
  playTrack,
  toggleLiked,
  setData,
  likedTracks,
  removeTrack,
}) {
  const [tracks, setTracks] = useState([]);
  const [randomAlbumTracks, setRandomAlbumTracks] = useState([]);
  const [spotlightArtistTracks, setSpotlightArtistTracks] = useState([]);
  const [randomAlbum, setRandomAlbum] = useState(null);
  const [spotlightArtist, setSpotlightArtist] = useState(null);

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
      const items = data.items ?? [];

      const mappedTracks = items.map((item) => ({
        ...item.track,
        liked: likedTracks[item.track.id]?.liked || false,
      }));

      setTracks(mappedTracks);
      setData({
        albums: [],
        artists: [],
        tracks: mappedTracks,
      });

      if (items.length > 0) {
        selectRandomAlbumAndArtist(mappedTracks);
        selectSpotlightArtist(mappedTracks);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setTracks([]);
      setRandomAlbum(null);
      setSpotlightArtist(null);
    }
  };

  const selectRandomAlbumAndArtist = (tracks) => {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    const randomTrack = tracks[randomIndex];
    setRandomAlbum(randomTrack.album);
    setRandomAlbumTracks(
      tracks.filter((track) => track.album.id === randomTrack.album.id)
    );
  };

  const selectSpotlightArtist = async (tracks) => {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    const artistId = tracks[randomIndex].artists[0].id;
    const artistDetails = await fetchArtistDetails(artistId);
    setSpotlightArtist(artistDetails);
    fetchArtistTracks(artistId);
  };

  const fetchArtistTracks = async (artistId) => {
    const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=PH`;
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
      setSpotlightArtistTracks(data.tracks ?? []);
    } catch (error) {
      console.error("Error fetching artist tracks:", error);
    }
  };

  const fetchArtistDetails = async (artistId) => {
    const url = `https://api.spotify.com/v1/artists/${artistId}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch artist details");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching artist details:", error);
      return null;
    }
  };

  const updateLikedStatus = (trackId, liked) => {
    setTracks((prevTracks) =>
      prevTracks.map((track) =>
        track.id === trackId ? { ...track, liked } : track
      )
    );
    setRandomAlbumTracks((prevTracks) =>
      prevTracks.map((track) =>
        track.id === trackId ? { ...track, liked } : track
      )
    );
    setSpotlightArtistTracks((prevTracks) =>
      prevTracks.map((track) =>
        track.id === trackId ? { ...track, liked } : track
      )
    );
  };

  const handleToggleLiked = (trackId) => {
    const track = tracks.find((track) => track.id === trackId);
    const newLikedStatus = !track.liked;
    updateLikedStatus(trackId, newLikedStatus);
    toggleLiked(trackId);
  };

  const handleRemoveLike = (trackId) => {
    updateLikedStatus(trackId, false);
    removeTrack(trackId);
  };

  return (
    <div className="w-full space-y-10">
      <ListGridVertical title="Trending Tracks in the Philippines">
        {tracks.map((track) => (
          <TrackItem
            key={track.id}
            cover={track.album.images[0]?.url || "default_album_image.jpg"}
            artist={track.artists.map((artist) => artist.name).join(", ")}
            title={track.name}
            duration={formatDuration(track.duration_ms)}
            playTrack={() => playTrack(track.uri)}
            uri={track.uri}
            onLike={() => handleToggleLiked(track.id)}
            onRemoveLike={() => handleRemoveLike(track.id)}
            liked={track.liked}
          />
        ))}
      </ListGridVertical>
      {randomAlbum && (
        <TileGridHorizontal title={`Album Spotlight: ${randomAlbum.name}`}>
          <TileSquared
            src={randomAlbum.images[0]?.url || "default_album_image.jpg"}
            title={randomAlbum.name}
            subTitle={randomAlbum.artists
              .map((artist) => artist.name)
              .join(", ")}
          />
          <ListGridHorizontal className="flex items-center">
            {randomAlbumTracks.map((track) => (
              <TrackItem
                key={track.id}
                className="w-[28rem]"
                cover={track.album.images[0]?.url || "default_album_image.jpg"}
                title={track.name}
                album={track.album.name}
                artist={track.artists.map((artist) => artist.name).join(", ")}
                duration={formatDuration(track.duration_ms)}
                playTrack={() => playTrack(track.uri)}
                uri={track.uri}
                onLike={() => handleToggleLiked(track.id)}
                onRemoveLike={() => handleRemoveLike(track.id)}
                liked={track.liked}
              />
            ))}
          </ListGridHorizontal>
        </TileGridHorizontal>
      )}
      {spotlightArtist && (
        <TileGridHorizontal title={`Artist Spotlight: ${spotlightArtist.name}`}>
          <TileRounded
            src={spotlightArtist.images[0]?.url || "default_artist_image.jpg"}
            title={spotlightArtist.name}
            type="Artist"
          />
          <ListGridHorizontal className="flex items-center">
            {spotlightArtistTracks.map((track) => (
              <TrackItem
                key={track.id}
                className="w-[28rem]"
                cover={track.album.images[0]?.url || "default_album_image.jpg"}
                title={track.name}
                album={track.album.name}
                artist={track.artists.map((artist) => artist.name).join(", ")}
                duration={formatDuration(track.duration_ms)}
                playTrack={() => playTrack(track.uri)}
                uri={track.uri}
                onLike={() => handleToggleLiked(track.id)}
                onRemoveLike={() => handleRemoveLike(track.id)}
                liked={track.liked}
              />
            ))}
          </ListGridHorizontal>
        </TileGridHorizontal>
      )}
    </div>
  );
}
