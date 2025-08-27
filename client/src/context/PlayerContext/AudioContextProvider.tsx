import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import UseFetch from "@hooks/UseFetch";

type AudioContextType = {
  audio: string | undefined;
  setAudio: React.Dispatch<React.SetStateAction<string | undefined>>;
  surahId: number | undefined;
  setSurahId: React.Dispatch<React.SetStateAction<number | undefined>>;
  nexSurahID: () => void;
  prevSurahId: () => void;
  audioPlayerRef: any | null;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  reciter: string;
  setReciter: React.Dispatch<React.SetStateAction<string>>;
};

export const AudioContext = createContext<AudioContextType>({
  audio: undefined,
  setAudio: () => {},
  surahId: undefined,
  setSurahId: () => {},
  nexSurahID: () => {},
  prevSurahId: () => {},
  audioPlayerRef: null,
  isPlaying: false,
  setIsPlaying: () => {},
  reciter: "01",
  setReciter: () => {},
});

const AudioContextProvider = ({ children }: { children: ReactNode }) => {
  const [audio, setAudio] = useState<string | undefined>(undefined);
  const [surahId, setSurahId] = useState<number | undefined>();
  const [reciter, setReciter] = useState<string>("01");
  const audioPlayerRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(audioPlayerRef.current);
  console.log(isPlaying);
  /* fetching url to audio when set surah Id  */
  const selector = useCallback(
    (res: unknown) => (res as any).data.data.audioFull[reciter],
    [reciter]
  );

  // fetch audio url

  const { data } = UseFetch<string>(
    surahId !== undefined ? `http://localhost:5000/api/surat/${surahId}` : null,
    selector
  );
  /* السوره التاليه  */
  const nexSurahID = () => {
    if (surahId !== undefined && surahId < 114) {
      setSurahId((prev) => (prev !== undefined ? prev + 1 : 1));
      setIsPlaying(true);
    }
  };
  /* السوره السابقه  */
  const prevSurahId = () => {
    if (surahId !== undefined && surahId > 1) {
      setSurahId((prev) => (prev !== undefined ? prev - 1 : 1));
      setIsPlaying(true);
    } else {
      setSurahId((prev) => prev);
    }
  };
  const value: AudioContextType = {
    audio,
    setAudio,
    surahId,
    setSurahId,
    nexSurahID,
    prevSurahId,
    audioPlayerRef,
    isPlaying,
    setIsPlaying,
    reciter,
    setReciter,
  };

  useEffect(() => {
    if (data) setAudio(data);
  }, [data]);

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};
export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("AudioContext value not found");
  }
  return context;
};

export default AudioContextProvider;
