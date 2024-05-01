import IconSearch from '../components/icons/IconSearch';
import TileGridHorizontal from '../components/TileGridHorizontal';
import TileSquared from '../components/TileSquared';
import TileRounded from '../components/TileRounded';
import ListGridVertical from '../components/ListGridVertical';
import TrackItem from '../components/TrackItem';
import { useEffect, useState } from 'react';

export default function Discover({ getAccessToken }) {
    const [searchQuery, setSearchQuery] = useState('');
    // const [accessToken, setAccessToken] = useState("");
    const [data, setData] = useState(null);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // const [data, setData] = useState({});

    // let DATA

    async function search(searchQuery) {
        let trackParameters = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + getAccessToken(),
            },
        };

        // await fetch(
        //     // let tracks = await fetch(
        //     "https://api.spotify.com/v1/search?q=" + searchQuery + "&type=track&limit=50",
        //     trackParameters
        // )
        //     .then((res) => res.json())
        //     .then((data) => DATA = data);

        // // let DATA;

        try {
            const response = await fetch(
                "https://api.spotify.com/v1/search?q=" + searchQuery + "&type=track&limit=50",
                trackParameters
            );
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    return (
        <div className="w-full space-y-10">
            <div className='relative w-full font-poppins md:w-1/2 flex justify-start h-10'>
                <input
                    type="text"
                    className="h-full w-full rounded-lg bg-[#19272E] border-none pr-16 pl-5"
                    placeholder="Search for albums, artists, or tracks..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === 'Enter' && search()}
                />
                <button onClick={() => search()} className='flex px-4 bg-[#243943] hover:bg-cyan-700 my-1 mr-1 rounded-lg items-center justify-center absolute right-0 top-0 bottom-0'>
                    <IconSearch size="20" />
                </button>
            </div>

            {/* <div>
                {data && (
                    <>
                        <TileGridHorizontal title="Search Results">
                            {data.tracks.items.map((item) => (
                                <TileSquared
                                    key={item.id}
                                    src={item.album.images[0].url}
                                    type="Track"
                                    title={item.name}
                                    subTitle={item.artists.map((artist) => artist.name).join(', ')}
                                />
                            ))}
                        </TileGridHorizontal>
                    </>
                )}
            </div> */}

            <TileGridHorizontal title="Albums">
                <TileSquared src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" type="Album" title="Red" subTitle="Taylor Swift" />
                <TileSquared src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" type="Album" title="Red" subTitle="Taylor Swift" />
            </TileGridHorizontal>

            <TileGridHorizontal title="Artists">
                <TileRounded src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" type="Album" title="Red" subTitle="Taylor Swift" />
                <TileRounded src="https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png" type="Album" title="Reputation" subTitle="Taylor Swift" />
            </TileGridHorizontal>

            <ListGridVertical title="Songs">
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Blue Red Green Violet" artist="Regine Velasquez" duration="3:45" />
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" artist="Regine Velasquez" duration="3:45" />
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Blue Red Green Violet" artist="Regine Velasquez" duration="3:45" />
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" artist="Regine Velasquez" duration="3:45" />
            </ListGridVertical>
        </div>
    );
}