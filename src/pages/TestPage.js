import TileGridHorizontal from "../components/TileGridHorizontal";
import TileRounded from "../components/TileRounded";
import TileSquared from "../components/TileSquared";
import ListGridVertical from "../components/ListGridVertical";
// import TrackItemTiny from "../components/TrackItemTiny";
// import TrackItemShort from "../components/TrackItemShort";
// import TrackItemMedium from "../components/TrackItemMedium";
import TrackItem from "../components/TrackItem";

function TestPage() {
    return (
        <div className="w-full space-y-10">

            <TileGridHorizontal title="Recommended Albums">
                <TileSquared src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" type="Album" title="Red" subTitle="Taylor Swift" />
                <TileSquared src="https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png" type="Album" title="Reputation" subTitle="Taylor Swift" />
                <TileSquared src="https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png" type="Album" title="Fearless" subTitle="Taylor Swift" />
            </TileGridHorizontal>

            <TileGridHorizontal title="Recommended Artists">
                <TileRounded src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" type="Album" title="Red" subTitle="Taylor Swift" />
                <TileRounded src="https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png" type="Album" title="Reputation" subTitle="Taylor Swift" />
                <TileRounded src="https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png" type="Album" title="Fearless" subTitle="Taylor Swift" />
            </TileGridHorizontal>

            <ListGridVertical title="Songs for You">
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" album="But" artist="Regine Velasquez" duration="3:55" />
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" artist="Regine Velasquez" playing />
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" artist="Regine Velasquez" />
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" artist="Regine Velasquez" />
            </ListGridVertical>

            <ListGridVertical>
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Blue Red Green Violet" artist="Regine Velasquez" duration="3:45" />
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" artist="Regine Velasquez" duration="3:45" />
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" artist="Regine Velasquez" duration="3:45" />
            </ListGridVertical>

            <ListGridVertical>
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Blue Red Green Violet Blue Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet" artist="Regine Velasquez" duration="3:45" playing />
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Blue Red Green Violet Blue Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet" artist="Regine Velasquez" genre="Pop" duration="3:45" />
                <TrackItem cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Blue Red Green Violet Blue Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet" artist="Regine Velasquez" genre="Trap" duration="3:45" />
            </ListGridVertical>

        </div>

    )
}

export default TestPage
