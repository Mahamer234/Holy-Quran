import LocationIcon from "@assets/svg/home/location.svg?react";
import AyatIcon from "@assets/svg/home/ayat.svg?react";
import PLayer from "@assets/svg/audioPlayer/player.svg?react";
import Pause from "@assets/svg/audioPlayer/pause.svg?react";
import suraIcon from "@assets/svg/home/frame.png";
import { useAudio } from "@context/PlayerContext/AudioContextProvider";
import type { Tsurah } from "@t/surah";
/* audio context  */
export const SurahCard = ({ surah }: { surah: Tsurah }) => {
  /* extract set audio */
  const { surahId, setSurahId, audioPlayerRef, isPlaying, setIsPlaying } =
    useAudio();
  const isCurrent = surahId === Number(surah.nomor);
  return (
    <>
      <div className="group p-4 border border-[var(--primary)] rounded-lg shadow-lg bg-[var(--bgsecondary)] flex  justify-between items-center  gap-2  transition-transform duration-200 hover:-translate-y-1 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <h3>{surah.nama}</h3>
          <div className=" cursor-pointer bg-[var(--primary)] p-2 rounded-full shadow-2xl  hover:scale-110 hover:rotate-12 duration-100 ">
            {/* conteroll play & pause  */}
            {isCurrent ? (
              isPlaying ? (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPlaying(false);
                    audioPlayerRef.current?.audio.current?.pause();
                  }}
                >
                  <Pause />
                </div>
              ) : (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPlaying(true);
                    audioPlayerRef.current?.audio.current?.play();
                  }}
                >
                  <PLayer />
                </div>
              )
            ) : (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setSurahId(Number(surah.nomor));
                  setIsPlaying(true);
                }}
              >
                <PLayer />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p>{surah.namaLatin}</p>
          {/* ayat and type  */}
          <div className="flex  gap-4 md:gap-1">
            <div className="flex gap-1 justify-center items-center border rounded-4xl px-2 py-0.5">
              <p className="text-xs">
                {surah.jumlahAyat}
                <span>آيه</span>
              </p>
              <AyatIcon />
            </div>
            <div className="flex gap-1 justify-center items-center border rounded-4xl px-2 py-0.5">
              <p className="text-xs"> {surah.tempatTurun}</p>
              <LocationIcon />
            </div>
          </div>
        </div>
        {/* image number */}
        <div className="relative">
          <span className="absolute top-1/2 left-1/2 -translate-1/2  ">
            {surah.nomor}
          </span>
          <div
            className={`group-hover:animate-pulse ${
              surahId === surah.nomor ? "animate-spin" : ""
            } duration-500`}
          >
            <img src={suraIcon} alt={suraIcon} className="w-16" />
          </div>
        </div>
      </div>
    </>
  );
};
