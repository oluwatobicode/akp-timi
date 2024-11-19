import React, { useState } from "react";
import photograph from "../sound/Photograph.mp3";

const PlayMe = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(photograph)); // Persist the Audio instance

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  audio.onplaying = () => setIsPlaying(true);
  audio.onpause = () => setIsPlaying(false);

  return (
    <div className="mt-5 mb-5">
      <button
        className="text-white text-2xl w-full p-3 h-14 rounded-md bg-black"
        onClick={togglePlay}
      >
        {isPlaying ? "Playing" : "Paused"}
      </button>
    </div>
  );
};

export default PlayMe;
