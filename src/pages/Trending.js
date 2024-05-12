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

export default function Trending({ accessToken }) {
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
      setTracks(items);

      if (items.length > 0) {
        selectRandomAlbumAndArtist(items);
        selectSpotlightArtist(items);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setTracks([]);
      setRandomAlbum(null);
      setSpotlightArtist(null);
    }
  };

  const selectRandomAlbumAndArtist = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomTrack = items[randomIndex].track;
    setRandomAlbum(randomTrack.album);
    setRandomAlbumTracks(items.filter(item => item.track.album.id === randomTrack.album.id));
  };

  const selectSpotlightArtist = async (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    const artistId = items[randomIndex].track.artists[0].id;
    const artistDetails = await fetchArtistDetails(artistId);
    setSpotlightArtist(artistDetails);
    fetchArtistTracks(artistId);
  };

  const fetchArtistTracks = async (artistId) => {
    const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=PH`;
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
  };

  const fetchArtistDetails = async (artistId) => {
    const url = `https://api.spotify.com/v1/artists/${artistId}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch artist details');
    }
    return await response.json();
  };

  return (
    <div className="w-full space-y-10">
      <ListGridVertical title="Trending Tracks in the Philippines">
        {tracks.map((item) => (
          <TrackItem
            key={item.track.id}
            cover={item.track.album.images[0]?.url || "default_album_image.jpg"}
            artist={item.track.artists.map(artist => artist.name).join(", ")}
            title={item.track.name}
            duration={formatDuration(item.track.duration_ms)}
          />
        ))}
      </ListGridVertical>
      {randomAlbum && (
        <TileGridHorizontal title={`Album Spotlight: ${randomAlbum.name}`}>
          <TileSquared
            src={randomAlbum.images[0]?.url || "default_album_image.jpg"}
            title={randomAlbum.name}
            subTitle={randomAlbum.artists.map(artist => artist.name).join(", ")}
          />
          <ListGridHorizontal className="flex items-center">
            {randomAlbumTracks.map((item) => (
              <TrackItem
                key={item.track.id}
                className="w-[28rem]"
                cover={item.track.album.images[0]?.url || "default_album_image.jpg"}
                title={item.track.name}
                album={item.track.album.name}
                artist={item.track.artists.map(artist => artist.name).join(", ")}
                duration={formatDuration(item.track.duration_ms)}
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
                artist={track.artists.map(artist => artist.name).join(", ")}
                duration={formatDuration(track.duration_ms)}
              />
            ))}
          </ListGridHorizontal>
        </TileGridHorizontal>
      )}
    </div>
  );
}
