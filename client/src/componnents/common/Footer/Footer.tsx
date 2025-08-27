import Waves from "@componnents/layout/Waves/Waves";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--primary)] text-white pt-24">
      {/* Waves */}
      <div className="absolute -top-2 left-0 w-full overflow-hidden  md:h-[100px]  rotate-180">
        <Waves />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 pb-10">
        {/* Islamic Quote */}
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 text-center">
            ﴿ إِنَّ مَعَ الْعُسْرِ يُسْرًا ﴾
          </h2>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">روابط سريعه </h3>
          <ul className="space-y-2 text-lg opacity-90">
            <li>
              <Link to="/" className="hover:text-yellow-400 duration-100">
                الرئيسيه
              </Link>
            </li>
            <li>
              <Link to="/adia" className="hover:text-yellow-400 duration-100">
                الدعاء
              </Link>
            </li>
            <li>
              <Link to="/azkar" className="hover:text-yellow-400 duration-100">
                الاذكار
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">عن الموقع</h3>
          <p className="text-lg leading-relaxed opacity-90">
            هذا الموقع يتيح للزائر الاستماع إلى القرآن الكريم وقراءة الأذكار
            والأدعية، وهو صدقة جارية لروح <br />
            <span className="font-bold text-[var(--secondary)]">
              فاطمة محمد عامر
            </span>
            ، نسأل الله أن يتقبلها بقبول حسن.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/20 py-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} موقع اسلامى كل الحقوق محفوظه
      </div>
    </footer>
  );
}
