import TileGridHorizontal from "../components/TileGridHorizontal";
import TileRounded from "../components/TileRounded";
import TileSquared from "../components/TileSquared";
import ListGridVertical from "../components/ListGridVertical";
import TrackItemTiny from "../components/TrackItemTiny";
import TrackItemShort from "../components/TrackItemShort";
import TrackItemMedium from "../components/TrackItemMedium";

export default function Home() {
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
                <TrackItemTiny cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" album="But" artist="Regine Velasquez" />
                <TrackItemTiny cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" artist="Regine Velasquez" />
                <TrackItemTiny cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" artist="Regine Velasquez" />
                <TrackItemTiny cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" artist="Regine Velasquez" />
            </ListGridVertical>

            <ListGridVertical>

                <TrackItemShort cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Blue Red Green Violet" artist="Regine Velasquez" duration="3:45" />
                <TrackItemShort cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" artist="Regine Velasquez" duration="3:45" />
                <TrackItemShort cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Red" artist="Regine Velasquez" duration="3:45" />

            </ListGridVertical>

            <ListGridVertical>
                <TrackItemMedium cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Blue Red Green Violet Blue Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet" artist="Regine Velasquez" duration="3:45" />
                <TrackItemMedium cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Blue Red Green Violet Blue Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet" artist="Regine Velasquez" duration="3:45" />
                <TrackItemMedium cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Blue Red Green Violet Blue Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet" artist="Regine Velasquez" duration="3:45" />


            </ListGridVertical>

            <div className="b w-full h-96">

                <TrackItemMedium cover="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" title="Blue Red Green Violet Blue Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet Red Green Violet Blue Red Green Violet" artist="Regine Velasquez" duration="3:45" />

            </div>


        </div>
    );




}