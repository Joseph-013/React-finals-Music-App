import TileGridHorizontal from "../components/TileGridHorizontal";
import TileSquared from "../components/TileSquared";
import TileRounded from "../components/TileRounded";
import ListGridVertical from "../components/ListGridVertical";
import TrackItem from "../components/TrackItem";
import { useContext, useEffect, useState } from "react";
import { TrackContext } from "../components/Context";

export default function Home({
  accessToken,
  setRecent,
  likedTracks,
  data,
  setData,
  setLikedTracks,
  toggleLiked,
  removeTrack,
}) {
  const initialMusicsState = {
    albums: [],
    artists: [],
    tracks: [],
  };
  const [musics, setMusic] = useState(initialMusicsState);
  const { convertMsToTime } = useContext(TrackContext);

  function getRandomSearch() {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const randomCharacter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    return randomCharacter;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await search();
        setMusic(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [accessToken]);

  async function search() {
    const randomSearch = getRandomSearch();
    console.log("Searching for.. " + randomSearch);

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          randomSearch
        )}&type=album,artist,track&limit=50`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data from Spotify API");
      }

      const data = await response.json();

      setData({
        albums: data.albums.items,
        artists: data.artists.items,
        tracks: data.tracks.items.map((track) => ({ ...track, liked: false })),
      });

      console.log("Albums:", data.albums.items);
      console.log("Artists:", data.artists.items);
      console.log("Tracks:", data.tracks.items);
      return {
        albums: data.albums.items,
        artists: data.artists.items,
        tracks: data.tracks.items,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        albums: [],
        artists: [],
        tracks: [],
      };
    }
  }

  return (
    <div className="w-full space-y-10">
      <TileGridHorizontal title="Recommended Albums">
        {musics.albums &&
          musics.albums.map((music) => (
            <TileSquared
              key={music.id}
              src={music.images[0]?.url}
              type="Album"
              title={music.name}
              subTitle={music.artists[0].name}
            />
          ))}
      </TileGridHorizontal>

      <TileGridHorizontal title="Recommended Artists">
        {musics.artists &&
          musics.artists.map((music) => (
            <TileRounded
              key={music.id}
              src={music.images[0]?.url}
              type="Artist"
              title={music.name}
            />
          ))}
      </TileGridHorizontal>

      <ListGridVertical title="Recommended Songs">
        {musics.tracks &&
          musics.tracks.map((music) => (
            <TrackItem
              key={music.id}
              trackId={music.id}
              cover={music.album.images[0]?.url}
              artist={music.artists[0].name}
              title={music.name}
              type="Songs"
              duration={convertMsToTime(music.duration_ms)}
              liked={likedTracks[music.id]?.liked || false} // <-- Pass liked state here
              onLike={() => toggleLiked(music.id)}
              onRemoveLike={() => removeTrack(music.id)}
              accessToken={accessToken}
              setLikedTracks={setLikedTracks}
              uri={music.uri}
            />
          ))}
      </ListGridVertical>
    </div>
  );
}
