import { useState } from "react";
import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";

function PlaylistItem({ title, count, onDelete, onRename }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(title);

  const handleRename = (e) => {
    e.stopPropagation();
    if (newName && newName !== title) {
      onRename(title, newName);
    }
    setIsEditing(false);
  };

  const handleCancelRename = (e) => {
    e.stopPropagation();
    setIsEditing(false);
    setNewName(title);
  };

  return (
    <div className="gap-y-2 w-44 flex flex-col justify-center text-left hover:underline hover:cursor-pointer hover:bg-slate-700 rounded-lg px-3 py-4">
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
      <div className="flex justify-between items-center">
        {isEditing ? (
          <input
            className="bg-transparent border-b border-gray-400 focus:outline-none w-28" // Updated width to make the input line shorter
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <div>
            <span className="truncate block">{title}</span>
            <span className="truncate block text-slate-500">{count} tracks</span>
          </div>
        )}
        <div className="flex items-center">
          {isEditing ? (
            <>
              <button
                className="text-green-500 hover:text-green-700 cursor-pointer mx-1"
                onClick={handleRename}
              >
                <FaCheck />
              </button>
              <button
                className="text-red-500 hover:text-red-700 cursor-pointer"
                onClick={handleCancelRename}
              >
                <FaTimes />
              </button>
            </>
          ) : (
            <>
              <button
                className="text-blue-500 hover:text-blue-700 cursor-pointer mx-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(true);
                }}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700 cursor-pointer bg-[#2c3b43b5] hover:bg-[#2c3b40] px-2 rounded-md py-1.5"
                onClick={onDelete}
              >
                <FaTrash />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlaylistItem;
