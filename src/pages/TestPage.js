import TileGridHorizontal from "../components/TileGridHorizontal";
import TileRounded from "../components/TileRounded";
import TileSquared from "../components/TileSquared";
import ListGridVertical from "../components/ListGridVertical";
import TrackItem from "../components/TrackItem";

function TestPage({ children, playlists }) {
  const logPlaylists = () => {
    console.log(Object.keys(playlists));
  };

  return (
    <div className="w-full space-y-10">
      {children}
      <button onClick={() => logPlaylists()}>Log</button>
      <ListGridVertical title="Songs for You">
        <TrackItem
          cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
          title="Red"
          album="But"
          artist="Regine Velasquez"
          duration="3:55"
          playlists={playlists}
        />
      </ListGridVertical>
    </div>
  );
}

export default TestPage;
