import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileIcon from "@assets/svg/header/mobileIcon.svg?react";
import logo from "@assets/svg/header/header.png";
import Nav from "@componnents/common/NavBar/Nav";
import ThemeToggleButton from "@context/ThemeContext/ThemeToggleButton";
import clsx from "clsx";

const Navbar = () => {
  const [mobileNavIsvisible, setMobileNavIsvisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMobileIconCLicked = () => {
    setMobileNavIsvisible((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileNavIsvisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileNavIsvisible]);

  return (
    <header
      className={clsx(
        "fixed w-full top-0 flex items-center justify-between z-30 transition-all duration-300",
        isScrolled
          ? "bg-gray-800 p-1 text-white"
          : "bg-transparent p-4  backdrop-blur shadow-2xl text-gray-600 "
      )}
    >
      <Link to="/">
        <img
          src={logo}
          loading="lazy"
          draggable={false}
          title="logo "
          alt="logo image"
          className="ratio-1/1 object-cover w-16 h-16"
        />
      </Link>

      <Nav
        className={
          "hidden md:flex  md:justify-center md:items-center  font-semibold"
        }
        ulclassName={"flex gap-4  justify-center items-center"}
      />

      <div className="flex gap-2 justify-center items-center">
        <div className="hidden md:block">
          <ThemeToggleButton />
        </div>
      </div>

      {/* mobile icon */}
      <div className="hover:cursor-pointer  md:hidden md:pointer-none ">
        <div className="flex gap-4 justify-center items-center">
          <ThemeToggleButton />

          <MobileIcon
            onClick={() => handleMobileIconCLicked()}
            className={"animate-pulse"}
          />
        </div>

        <Nav
          className={` z-30 flex justify-center items-center  font-semibold  absolute bg-[var(--primary)] top-0 left-0 w-full h-screen `}
          mobileNavIsvisible={mobileNavIsvisible}
          ulclassName={"flex flex-col gap-4 "}
          setMobileNavIsvisible={setMobileNavIsvisible}
        />
      </div>
    </header>
  );
};

export default Navbar;
