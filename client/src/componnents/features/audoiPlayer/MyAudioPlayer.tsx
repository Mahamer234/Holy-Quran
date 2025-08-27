import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useAudio } from "@context/PlayerContext/AudioContextProvider";
import "./css/myAudioPlayer.css";
const MyAudioPlayer = () => {
  const { audio, nexSurahID, prevSurahId, audioPlayerRef } = useAudio();
  if (!audio) return null;

  return (
    <div style={{ direction: "ltr" }}>
      <AudioPlayer
        ref={audioPlayerRef}
        autoPlay={true}
        src={audio}
        autoPlayAfterSrcChange={true}
        showSkipControls={true}
        showJumpControls={false}
        layout="stacked-reverse"
        customAdditionalControls={[]} // لو عايز تتحكم بالـ controls
        onClickNext={() => nexSurahID()}
        onClickPrevious={() => prevSurahId()}
        onEnded={() => nexSurahID()}
        className="custom-player"
      />
    </div>
  );
};

export default MyAudioPlayer;
