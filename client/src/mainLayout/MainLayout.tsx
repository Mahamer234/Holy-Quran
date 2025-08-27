import { Outlet } from "react-router-dom";
import Navbar from "@componnents/layout/Navbar/Navbar";
import Footer from "@componnents/common/Footer/Footer";
import PlayerContainer from "@componnents/features/audoiPlayer/PlayerContainer";
import ScrollHeight from "@componnents/features/scrooling/ScrollHeight";
import GoTop from "@componnents/common/GoTop/GoTop";
const MainLayout = () => {
  return (
    <div className="relative">
      {/* utilities */}
      <div>
        <GoTop />
        <ScrollHeight />
        <PlayerContainer />
      </div>
      {/* mainlayout */}
      <div className="relative  flex justify-between flex-col min-h-screen">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
