import Lottie from "lottie-react";
import Mosque from "@assets/lottiesFile/Mosque Animation.json";
import faather from "@assets/lottiesFile/Muslim father teaching his son to read Koran.json";
import loading from "@assets/lottiesFile/Trail loading.json";
import error from "@assets/lottiesFile/error.json";
const myLotties = { Mosque, faather, loading, error };
type lottieHandlerProps = {
  type: keyof typeof myLotties;
};
const LottieHandler = ({ type }: lottieHandlerProps) => {
  const lottieUsed = myLotties[type];
  return (
    <div className=" mt-150px h-[60vh] flex justify-center items-center">
      <Lottie
        animationData={lottieUsed}
        style={{ height: "400px ", width: "300px" }}
      />
    </div>
  );
};

export default LottieHandler;
