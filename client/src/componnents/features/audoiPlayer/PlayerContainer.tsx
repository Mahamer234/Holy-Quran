import { useAudio } from "@context/PlayerContext/AudioContextProvider";
import MyAudioPlayer from "./MyAudioPlayer";
import HidePlayer from "@assets/svg/audioPlayer/hidePlayer.svg?react";
import ShowPlayer from "@assets/svg/audioPlayer/showPlayer.svg?react";
import { useState } from "react";
import clsx from "clsx";
const PlayerContainer = () => {
  const { audio, setAudio } = useAudio();
  const [showPlayer, setShowPlayer] = useState(false);
  console.log(showPlayer);
  return (
    <div>
      {audio && (
        <div className="fixed bottom-1 left-1/2 -translate-x-[50%] w-[80%] md:w-1/2    z-30">
          {/* audio player  */}
          <div className={clsx("relative ", showPlayer && "hidden")}>
            {/* hide  audio player while playing  */}
            <div
              className="bg-[var(--secondary)] w-8 h-8 flex items-center justify-center 
             text-white cursor-pointer absolute -top-2 -right-2 rounded-full animate-pulse"
              onClick={() => {
                setShowPlayer(!showPlayer);
              }}
            >
              <HidePlayer />
            </div>
            <span
              className="absolute  left-4 top-4 bg-[var(--bgsecondary)]  px-2 py-1 rounded-2xl     cursor-pointer "
              onClick={() => setAudio("")}
            >
              اغلاق
            </span>
            <MyAudioPlayer />
          </div>

          {/* SHow audio player  */}
          {showPlayer && (
            <div
              className="absolute left-[50%] -translate-x-[50%] bottom-4 bg-[var(--text)]  p-4 shadow-[0px_4px_10px_var(--secondary)]
              w-16 h-16 flex items-center justify-center rounded-full 
              cursor-pointer  animate-pulse hover:animate-none"
              onClick={() => setShowPlayer(false)}
            >
              <ShowPlayer />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PlayerContainer;
