import IconSearch from "../components/icons/IconSearch";
import TileGridHorizontal from "../components/TileGridHorizontal";
import TileSquared from "../components/TileSquared";
import TileRounded from "../components/TileRounded";
import ListGridVertical from "../components/ListGridVertical";
import TrackItem from "../components/TrackItem";
import { useEffect, useState } from "react";

export default function Recent({ recent }) {
  function convertMsToTime(duration_ms) {
    var seconds = Math.floor((duration_ms / 1000) % 60);
    var minutes = Math.floor((duration_ms / (1000 * 60)) % 60);

    var displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    var displayMinutes = minutes < 10 ? "0" + minutes : minutes;

    return displayMinutes + ":" + displaySeconds;
  }

  return (
    <div>
      <TileGridHorizontal title="Albums">
        {recent.albums.map((music) => (
          <TileSquared
            key={music.id}
            src={music.images[0]?.url}
            type="Album"
            title={music.name}
            subTitle={music.artists[0].name}
          />
        ))}
      </TileGridHorizontal>

      <TileGridHorizontal title="Artists">
        {recent.artists.map((music) => (
          <TileRounded
            key={music.id}
            src={music.images[0]?.url}
            type="Artist"
            title={music.name}
          />
        ))}
      </TileGridHorizontal>

      <ListGridVertical title="Songs" cols="2">
        {recent.tracks.map((music) => (
          <TrackItem
            key={music.id}
            cover={music.album.images[0]?.url}
            artist={music.artists[0].name}
            title={music.name}
            type="Songs"
            duration={convertMsToTime(music.duration_ms)}
          />
        ))}
      </ListGridVertical>
    </div>
  );
}
