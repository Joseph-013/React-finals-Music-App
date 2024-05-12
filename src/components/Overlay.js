import IconCirclePlus from "./icons/IconCirclePlus";

function Overlay({ children, overlay, setOverlay }) {
    function CreatePlaylistForm() {
        return (
            <div className="flex flex-col space-y-6 w-full max-w-72">
                <div className="flex justify-between items-center">
                    <span className="text-left text-lg md:text-xl font-bold">Create Playlist</span>
                    <button className="bg-cyan-900 hover:bg-cyan-800 p-2 rounded-lg" onClick={() => setOverlay(false)}>Cancel</button>
                </div>
                <div className="relative w-full font-poppins flex justify-start h-10">
                    <input
                        type="text"
                        className="h-full w-full rounded-lg bg-[#19272E] border-none pr-16 pl-5"
                        placeholder="Playlist Name"
                    />
                    <button
                        className="flex px-4 bg-[#243943] hover:bg-cyan-700 my-1 mr-1 rounded-lg items-center justify-center absolute right-0 top-0 bottom-0"
                    >
                        <IconCirclePlus size="22" />
                    </button>
                </div>
            </div>
        )
    }

    const renderOverlayContent = () => {
        if (overlay === "createPlaylistForm") {
            return <CreatePlaylistForm />;
        }
        return null;
    }

    return (
        // <div className={`relative ${(overlay) ? 'flex' : 'hidden'}`}>
        //     {/* {children || renderOverlayContent()} */}

        //     <div className="z-[10000] absolute inset-0 w-full h-full bg-black"></div>
        // </div >

        <div className={`absolute border-none top-0 left-0 flex items-center justify-center border w-full h-full z-[10000] overflow-hidden ${(overlay) ? 'flex' : 'hidden'}`}>
            <div className="absolute inset-0 bg-black opacity-50 hover:cursor-pointer" onClick={() => setOverlay(false)}></div>

            <div className="bg-[#203038] p-3 rounded-lg z-[10001] m-2">
                {children || renderOverlayContent()}
            </div>
        </div>
    )
}

export default Overlay;
