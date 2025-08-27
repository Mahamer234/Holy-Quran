import img01 from "@assets/reciters/abdalaelgu.jpg";
import img02 from "@assets/reciters/02 Abdul-Muhsin-Al-Qasim.jpg";
import img03 from "@assets/reciters/03 Abdurrahman-as-Sudais.jpeg";
import img04 from "@assets/reciters/04 Ibrahim-Al-Dossari.jpg";
import img05 from "@assets/reciters/05 Misyari-Rasyid-Al-Afasi.jpeg";

import Select, { components } from "react-select";
import { useAudio } from "@context/PlayerContext/AudioContextProvider";

const options = [
  {
    value: "01",
    label: " القارئ عبد الله الجهني",
    image: img01,
  },
  {
    value: "02",
    label: "القارئ عبد المحسن القاسم",
    image: img02,
  },
  {
    value: "03",
    label: "القارئ عبد الرحمن السديس",
    image: img03,
  },
  {
    value: "04",
    label: " القارئ إبراهيم الدوسري",
    image: img04,
  },
  {
    value: "05",
    label: " القارئ مشاري راشد العفاسي",
    image: img05,
  },
];

// Custom Option Component
const Option = (props: any) => (
  <components.Option {...props}>
    <div className="flex items-center gap-2">
      <img
        src={props.data.image}
        alt={props.data.label}
        className="w-6 h-6 rounded-full"
      />
      <span>{props.data.label}</span>
    </div>
  </components.Option>
);

// Custom Single Value (selected one)
const SingleValue = (props: any) => (
  <components.SingleValue {...props}>
    <div className="flex items-center gap-2">
      <img
        src={props.data.image}
        alt={props.data.label}
        className="w-6 h-6 rounded-full"
      />
      <span>{props.data.label}</span>
    </div>
  </components.SingleValue>
);

export default function ReciterSelect() {
  const { reciter, setReciter } = useAudio();

  return (
    <div className=" px-4  md:w-fit my-8 ">
      <Select
        options={options}
        value={options.find((opt) => opt.value === reciter)}
        onChange={(option) => setReciter(option?.value || "01")}
        components={{ Option, SingleValue }}
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: "0.5rem",
            borderColor: `var(--primary)`, // tailwind border-gray-300
            padding: "4px",
            boxShadow: "none",
            "&:hover": {
              borderColor: "#d69e2e",
              cursor: "pointer",
            },
          }),
          option: (base, state) => ({
            ...base,
            padding: "8px 12px",
            backgroundColor: state.isSelected
              ? "#3b82f6" // blue-500
              : state.isFocused
              ? "#bfdbfe" // blue-100
              : "white",
            color: state.isSelected ? "white" : "#1f2937", // gray-800
            cursor: "pointer",
          }),
          menu: (base) => ({
            ...base,
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            padding: "4px",
          }),
        }}
      />
    </div>
  );
}
