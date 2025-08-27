import { useEffect, useState } from "react";

const ScrollHeight = () => {
  const [divWidth, setDivWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const width = (scrollTop / scrollHeight) * 100;
      setDivWidth(width);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed h-1 w-screen left-0 top-0 bg-[var(--primary)] z-50">
      <div
        className="absolute h-1 bg-[var(--secondary)] left-0 top-0 "
        style={{ width: `${divWidth}%` }}
      ></div>
    </div>
  );
};

export default ScrollHeight;
