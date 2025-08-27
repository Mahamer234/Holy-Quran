import Goup from "@assets/svg/goUp.svg?react";
import clsx from "clsx";
import { useEffect, useState } from "react";
const GoTop = () => {
  const [goUpShow, setgoUpShow] = useState(false);
  const handlegototop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); //
  };

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 100) {
        setgoUpShow(true);
      } else setgoUpShow(false);
    };
    window.addEventListener("scroll", handleScrolled);
    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);
  return (
    <div
      className={clsx(
        goUpShow
          ? "fixed bottom-2 left-2 z-40  md:bottom-4 md:left-4  animate-bounce opacity-100  transition-opacity duration-400 hover:scale-110"
          : "opacity-0 hidden pointer-events-none"
      )}
      onClick={() => {
        handlegototop();
      }}
    >
      <div className="flex justify-center  cursor-pointer items-center rounded-full bg-[var(--primary)] h-8 w-8  p-2 border-2 border-[var(--bg)]">
        <Goup />
      </div>
    </div>
  );
};

export default GoTop;
