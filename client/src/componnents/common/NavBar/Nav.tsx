import { NavLink } from "react-router-dom";
import CloseIcon from "@assets/svg/header/close-square-svgrepo-com.svg?react";
import clsx from "clsx";
/* import afterLink from "@assets/header/linksafter.svg";
 */ type TNavProps = {
  className?: string;
  ulclassName: string;
  mobileNavIsvisible?: boolean;
  setMobileNavIsvisible?: (value: boolean) => void;
};

const menuTabContent = [
  { id: 1, to: "/", content: "الرئيسيه " },
  { id: 2, to: "/azkar", content: "الاذكار  " },
  { id: 3, to: "/adia", content: "الدعاء  " },
];
const Nav = ({
  className,
  ulclassName,
  mobileNavIsvisible,
  setMobileNavIsvisible,
}: TNavProps) => {
  return (
    <nav
      className={`${className}    z-40x  transform  transition-all duration-300
          ${
            mobileNavIsvisible
              ? " translate-y-0 "
              : " -translate-y-full    md:translate-y-0  "
          }`}
    >
      {mobileNavIsvisible && (
        <CloseIcon
          className="absolute top-4 right-3.5 transform transition-transform duration-300 animate-bounce  origin-center hover:rotate-180"
          onClick={() => setMobileNavIsvisible?.(false)}
        />
      )}

      <ul className={ulclassName}>
        {menuTabContent.map((mContent) => (
          <NavLink
            key={mContent.id}
            to={`${mContent.to}`}
            className={({ isActive }) =>
              clsx(
                "md:px-2 py-2 transition-colors duration-300 ease-in-out relative",
                isActive && `text-[var(--secondary)]  active`
              )
            }
            onClick={() =>
              setMobileNavIsvisible &&
              setMobileNavIsvisible(!mobileNavIsvisible)
            }
          >
            {`${mContent.content}`}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
