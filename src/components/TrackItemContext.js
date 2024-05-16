import { OverlayContext, PlaylistContext } from "./Context";
import { useContext, useState } from "react";

import IconDotsVerical from "./icons/IconDotsVertical";

function TrackItemContext({ trackId }) {
  const { playlists, setPlaylist, setOverlay, addSongToPlaylist } =
    useContext(PlaylistContext);

  const [hovered, setHovered] = useState(false);
  const [contextDisplay, setContextDisplay] = useState("hidden"); //or block

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setContextDisplay(contextDisplay === "hidden" ? "block" : "hidden");
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center size-10 hover:bg-cyan-700 hover:text-white rounded-full"
        onClick={handleButtonClick}
        // onFocus={handleButtonClick}
      >
        <IconDotsVerical size="25" />
      </button>
      <ul
        className={`py-2 absolute max-h-64 overflow-y-auto w-48 z-20 left-0 -translate-y-1/2 top-1/2 -translate-x-full bg-gray-700 ${contextDisplay}`}
        onMouseEnter={() => setContextDisplay("block")}
        onMouseLeave={() => setContextDisplay("hidden")}
      >
        <li
          onClick={() => setOverlay(true)}
          className="h-12 px-2 flex items-center hover:bg-slate-500"
        >
          Create new playlist
        </li>
        <li className="h-12 px-2 flex items-center hover:bg-slate-500">
          Add to Favorites
        </li>
        {Object.keys(playlists).map((playlistName) => (
          <li
            onClick={() => addSongToPlaylist(playlistName, trackId)}
            className="h-12 px-2 flex items-center hover:bg-slate-500"
          >
            {playlistName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackItemContext;
