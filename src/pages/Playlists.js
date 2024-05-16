import PlaylistItem from "../components/PlaylistItem";
import SectionContainer from "../components/SectionContainer";
import TrackItem from "../components/TrackItem";

export default function Playlists({ playlists }) {
    return (
        <div className="w-full flex flex-col">
            <SectionContainer title="Playlists">
                <div className="w-full grid grid-flow-row grid-cols-2 sm:grid-cols-3 min-[867px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
                    {Object.entries(playlists).map(([playlistName, songs]) => (
                        <PlaylistItem
                            key={playlistName}
                            title={playlistName}
                            count={songs.length}
                        />
                    ))}
                </div>
            </SectionContainer>
            <ViewPlaylist />
        </div>
    );

    function ViewPlaylist() {
        // <TrackItem
        //     className="w-[28rem]"
        //     cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
        //     title="Red"
        //     album="But"
        //     artist="Regine Velasquez"
        //     duration="3:55"
        //     playlists={playlists}
        // />
        const testItem = (
            < TrackItem
                className="w-[28rem]"
                cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
                title="Red"
                album="But"
                artist="Regine Velasquez"
                duration="3:55"
                playlists={playlists}
            />
        );

        return (
            <div className={`absolute border-none top-0 left-0 flex items-center justify-center border w-full h-full z-[10000] overflow-hidden`}>
                {/* <div className="absolute inset-0 bg-black opacity-50 hover:cursor-pointer" onClick={() => setOverlay(false)}></div> */}
                <div className="absolute inset-0 bg-black opacity-50 hover:cursor-pointer" />

                <div className="bg-[#203038] p-3 m-3 w-full max-w-[35rem] rounded-lg z-[10001] flex flex-col max-h-screen">
                    <div className="flex flex-row justify-between w-full pl-3">
                        <div className="h-full my-auto flex flex-col text-left flex-1 space-y-3">
                            <span className="text-xl font-bold line-clamp-3">
                                Playlist Name
                            </span>
                            <span className="text-gray-500"># of tracks</span>
                        </div>

                        <div className="size-40 rounded-md grid grid-rows-2 grid-cols-2">
                            <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" alt="albumName" className="object-cover" />
                            <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" alt="albumName" className="object-cover" />
                            <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" alt="albumName" className="object-cover" />
                            <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" alt="albumName" className="object-cover" />
                        </div>

                    </div>
                    <div className="mx-5 my-2" style={{ borderBottom: "solid 1px gray" }} />
                    <div className="w-full flex flex-col items-center space-y-2 max-h-[20rem] overflow-y-auto" style={{ overscrollBehaviorY: "contain" }}>
                        {testItem}
                        {testItem}
                        {testItem}
                        {testItem}
                        {testItem}
                        {testItem}
                        {testItem}
                        {testItem}
                    </div>

                </div>
            </div>
        )
    }
}
