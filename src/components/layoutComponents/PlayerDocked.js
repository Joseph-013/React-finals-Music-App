// import TrackItemTiny from "../TrackItemTiny";
import TrackItem from "../TrackItem";
import IconPlayFilled from "../icons/IconPlayFilled";
import IconRepeat from "../icons/IconRepeat";
import IconShuffle from "../icons/IconShuffle";
import IconSkipLeft from "../icons/IconSkipLeft";
import IconSkipRight from "../icons/IconSkipRight";
import IconHeart from "../icons/IconHeart";
import { useState } from "react";
import "./VolumePop.css";
import SpotifyPlayer from "react-spotify-player";

function PlayerDocked({ playing }) {
  const size = {
    width: "100%",
    height: "100%",
  };
  const view = "list"; // or 'coverart'
  const theme = "white"; // or 'white'

  return <SpotifyPlayer uri={playing} size={size} view={view} theme={theme} />;
}

export default PlayerDocked;
