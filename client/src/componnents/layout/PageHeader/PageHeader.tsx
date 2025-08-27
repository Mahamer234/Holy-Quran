import headerimg2 from "@assets/svg/pageheader2.webp";
import Waves from "@componnents/layout/Waves/Waves";
const PageHeader = () => {
  return (
    <div className="relative h-[40vh] md:h-[60vh] w-full  ">
      <div className="absolute inset-0 bg-gradient-to-bl from-[var(--text)] to-[var(--primary)] z-10 opacity-90"></div>
      <div className="absolute inset-0">
        <img src={headerimg2} className="w-full h-full  object-cover " />
      </div>
      <div className="absolute -bottom-1 z-20 h-[130px] w-[100%]  overflow-hidden">
        <Waves />
      </div>
    </div>
  );
};

export default PageHeader;
