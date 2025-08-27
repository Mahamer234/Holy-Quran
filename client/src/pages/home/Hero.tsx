import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import quranLogo from "@assets/svg/home/iqraa.png";

import bgImage from "../../assets/svg/home/line-background.webp";

const Hero = () => {
  return (
    <section
      className="relative mt-[100px] md:mt-[100px] min-h-[90vh] flex items-center justify-center text-center  text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-8 justify-center items-center md:flex-row ">
        <div>
          <img
            src={quranLogo}
            className="w-2/3  md:w-3/4 mx-auto "
            alt="اقرأ"
          />
        </div>

        <div className="relative  max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-6 leading-snug">
            صدقة جارية على روح
          </h1>
          <span
            className="bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            فاطمة محمد عبدالغني عامر
          </span>

          <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
            وموتانا وجميع موتى المسلمين
          </p>

          <p className="text-lg md:text-xl mb-8   text-[var(--text)]">
            {`" قال رسول الله ﷺ
           إذا مات ابن آدم انقطع عمله إلا من ثلاث  صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له "  `}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <ScrollLink
              to="quran"
              smooth={true}
              duration={800}
              offset={-50} // تعدل مكان الوقوف (مفيد لو عندك Navbar ثابت)
              className="px-6 py-3 bg-yellow-400 text-green-900 font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition-all cursor-pointer"
            >
              القرآن الكريم
            </ScrollLink>
            <Link
              to="/azkar"
              className="px-6 py-3 bg-white text-green-800 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition-all"
            >
              الأذكار اليومية
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
