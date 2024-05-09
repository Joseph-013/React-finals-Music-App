import { useState } from "react";

function NewPlaylist({ setPlaylists }) {
  const [newPlaylistName, setNewPlaylistName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPlaylistName) return;

    setPlaylists((prevPlaylists) => ({
      ...prevPlaylists,
      [newPlaylistName]: [],
    }));

    setNewPlaylistName("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Create new Playlist</h1>
      <input
        type="text"
        placeholder="Playlist name..."
        value={newPlaylistName}
        onChange={(e) => setNewPlaylistName(e.target.value)}
      />
      <button type="submit">Create Playlist</button>
    </form>
  );
}

export default NewPlaylist;
