import { FaTrash } from "react-icons/fa";

function PlaylistItem({ title, count, onDelete, tracks }) {
  const renderSection = () => {
    if (count === 0) {
      return (
        <div className="size-36 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-vinyl"
            viewBox="0 0 24 24"
            strokeWidth="0.7"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16 3.937a9 9 0 1 0 5 8.063" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M20 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M20 4l-3.5 10l-2.5 2" />
          </svg>
        </div>
      );
    } else if (count < 4) {
      return (
        <div className="size-36 rounded-md">
          <img
            src={tracks[0].album.images[0].url}
            alt={tracks[0].album.name}
            className="object-cover"
          />
        </div>
      );
    } else {
      return (
        <div className="size-36 rounded-md grid grid-rows-2 mx-auto grid-cols-2">
          {tracks.slice(0, 4).map((track, index) => (
            <img
              key={index}
              src={track?.album?.images?.[0]?.url || ""}
              alt={track?.album?.name || "Unknown Album"}
              className="object-cover"
            />
          ))}
        </div>
      );
    }
  };
  var cover = renderSection();

  return (
    <div className="gap-y-2 w-44 flex flex-col justify-center text-left hover:underline hover:cursor-pointer hover:bg-slate-700 rounded-lg px-3 py-4">
      {cover}
      <div className="flex justify-between items-center">
        <div>
          <span className="truncate block">{title}</span>
          <span className="truncate block text-slate-500">{count} tracks</span>
        </div>
        <button
          className="text-red-500 hover:text-red-700 cursor-pointer bg-[#2c3b43b5] hover:bg-[#2c3b40] px-2 rounded-md py-1.5"
          onClick={onDelete}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default PlaylistItem;
