function IconPlayFilled({ size, className, playTrack, uri }) {
  const handlePlayClick = () => {
    console.log("Play button clicked for URI:", uri); // Add this log for debugging
    playTrack(uri);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-player-play-filled ` + className}
      width={size}
      height={size}
      onClick={handlePlayClick}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconPlayFilled;
