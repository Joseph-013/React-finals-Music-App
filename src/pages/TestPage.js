import TileGridHorizontal from "../components/TileGridHorizontal";
import TileRounded from "../components/TileRounded";
import TileSquared from "../components/TileSquared";
import ListGridVertical from "../components/ListGridVertical";
import TrackItem from "../components/TrackItem";
import ListGridHorizontal from "../components/ListGridHorizontal";

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

            <TileGridHorizontal title="Album Spotlight: Red (Taylor Swift)">
                <TileSquared src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" subTitle="Taylor Swift" />
                <ListGridHorizontal className="flex items-center" rows="3">
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />

                </ListGridHorizontal>
            </TileGridHorizontal>

            <TileGridHorizontal title="Artist Spotlight: Taylor Swift">
                <TileRounded src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Taylor Swift" type="Artist" />
                <ListGridHorizontal className="flex items-center" rows="3">
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />
                    <TrackItem className="w-[28rem]"
                        cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                        title="Red"
                        album="But"
                        artist="Regine Velasquez"
                        duration="3:55"
                        playlists={playlists}
                    />

                </ListGridHorizontal>
            </TileGridHorizontal>
        </div>
    );
}

export default TestPage;
