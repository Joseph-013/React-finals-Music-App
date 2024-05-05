import IconSearch from "../components/icons/IconSearch";
import TileGridHorizontal from "../components/TileGridHorizontal";
import TileSquared from "../components/TileSquared";
import TileRounded from "../components/TileRounded";
import ListGridVertical from "../components/ListGridVertical";
import TrackItem from "../components/TrackItem";
import { useEffect, useState } from "react";

export default function Discover({ accessToken, setMusic, musics }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchResults, setShowSearchResults] = useState(false);
    // const [accessToken, setAccessToken] = useState("");
    //   const [data, setData] = useState(null);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // const [data, setData] = useState({});

    // let DATA

    async function search() {
        console.log("Searching for.. " + searchQuery);
        var trackParameters = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
        };

        try {
            var response = await fetch(
                "https://api.spotify.com/v1/search?q=" +
                searchQuery +
                "&type=album,artist,track&limit=50",
                trackParameters
            );

            const data = await response.json();

            setMusic({
                albums: data.albums.items,
                artists: data.artists.items,
                tracks: data.tracks.items,
            });

            console.log("Albums:", data.albums.items);
            console.log("Artists:", data.artists.items);
            console.log("Tracks:", data.tracks.items);

            setShowSearchResults(true);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function convertMsToTime(duration_ms) {
        var seconds = Math.floor((duration_ms / 1000) % 60);
        var minutes = Math.floor((duration_ms / (1000 * 60)) % 60);

        var displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        var displayMinutes = minutes < 10 ? "0" + minutes : minutes;

        return displayMinutes + ":" + displaySeconds;
    }

    return (
        <div className="w-full space-y-10">
            <div className="relative w-full font-poppins md:w-1/2 flex justify-start h-10">
                <input
                    type="text"
                    className="h-full w-full rounded-lg bg-[#19272E] border-none pr-16 pl-5"
                    placeholder="Search for albums, artists, or tracks..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === "Enter" && search()}
                />
                <button
                    onClick={() => search()}
                    className="flex px-4 bg-[#243943] hover:bg-cyan-700 my-1 mr-1 rounded-lg items-center justify-center absolute right-0 top-0 bottom-0"
                >
                    <IconSearch size="20" />
                </button>
            </div>

            {showSearchResults && (
                <TileGridHorizontal title="Albums">
                    {musics.albums.map((music) => (
                        <TileSquared
                            key={music.id}
                            src={music.images[0]?.url}
                            type="Album"
                            title={music.name}
                            subTitle={music.artists[0].name}
                        />
                    ))}
                </TileGridHorizontal>
            )}

            {showSearchResults && (
                <TileGridHorizontal title="Artists">
                    {musics.artists.map((music) => (
                        <TileRounded
                            key={music.id}
                            src={music.images[0]?.url}
                            type="Artist"
                            title={music.name}
                        />
                    ))}
                </TileGridHorizontal>
            )}

            {showSearchResults && (
                <ListGridVertical title="Songs" cols="2">
                    {musics.tracks.map((music) => (
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
            )}
        </div>
    );
}
