import TrackItemTiny from "../TrackItemTiny";
import IconPlayFilled from '../icons/IconPlayFilled';
import IconRepeat from '../icons/IconRepeat';
import IconShuffle from '../icons/IconShuffle';
import IconSkipLeft from '../icons/IconSkipLeft';
import IconSkipRight from '../icons/IconSkipRight';

function PlayerDocked() {
    return (
        <div className="h-full flex flex-row items-center space-x-3">
            <div className="w-1/3 h-full flex justify-start items-center">
                <TrackItemTiny cover="https://upload.wikimedia.org/wikipedia/en/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png" title="All Too Well [Explicit 18+] (69 Hour Version) asd asd asd asd asd asd asd" artist="Taylor Swift" />
            </div>
            <div className="w-1/3 h-full flex justify-center">
                <TrackControlsLong />
            </div>
            <div className="w-1/3 h-full flex items-center justify-end">
                Volume Controls
            </div>
        </div>
    )
}

function TrackControlsLong() {
    return (
        <div className="w-full flex flex-col items-center justify-between">
            <div className="flex-1 flex w-full justify-between items-center pb-2">
                <button className="flex items-center justify-center rounded-full size-9 hover:bg-cyan-700">
                    <IconShuffle size={"25"} />
                </button>

                <div className="flex items-center space-x-4">
                    <button className="flex items-center justify-center rounded-full size-9 hover:bg-cyan-700">
                        <IconSkipLeft size={"25"} />
                    </button>
                    <button className="flex items-center justify-center bg-[#d9d9d9] hover:bg-[#ACACAC] size-11 rounded-full text-[#084868]">
                        <IconPlayFilled size={"25"} />
                    </button>
                    <button className="flex items-center justify-center rounded-full size-9 hover:bg-cyan-700">
                        <IconSkipRight size={"25"} />
                    </button>
                </div>

                <button className="flex items-center justify-center rounded-full size-9 hover:bg-cyan-700">
                    <IconRepeat size={"25"} />
                </button>
            </div>
            <div className="w-full flex text-xs space-x-2 h-3">
                <div className="flex items-center">30:12</div>
                <div className="flex-1 flex justify-center bg-white"></div>
                <div className="flex items-center">30:12</div>
            </div>
        </div>
    );
}

export default PlayerDocked
