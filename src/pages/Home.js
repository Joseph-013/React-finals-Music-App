import TileGridHorizontal from "../components/TileGridHorizontal";
import TileRounded from "../components/TileRounded";
import TileSquared from "../components/TileSquared";

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

            <TileGridHorizontal title="Recommended Artists">
                <TileRounded src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" type="Album" title="Red" subTitle="Taylor Swift" />
                <TileRounded src="https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png" type="Album" title="Reputation" subTitle="Taylor Swift" />
                <TileRounded src="https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png" type="Album" title="Fearless" subTitle="Taylor Swift" />
            </TileGridHorizontal>

            <div className="w-full grid grid-rows-2 grid-flow-col">
                <div className="h-36">test</div>
                <div className="h-36">test</div>
                <div className="h-36">test</div>
                <div className="h-36">test</div>
            </div>

        </div>
    );


}