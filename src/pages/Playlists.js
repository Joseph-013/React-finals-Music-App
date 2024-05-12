import PlaylistItem from "../components/PlaylistItem";
import SectionContainer from "../components/SectionContainer";

export default function Playlists() {
    return (
        <div className="w-full flex flex-col">

            <SectionContainer title="Playlists">
                <div className="w-full grid grid-flow-row grid-cols-2 sm:grid-cols-3 min-[867px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                </div>
            </SectionContainer>


        </div>
    );
}