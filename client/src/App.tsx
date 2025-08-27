import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./componnents/feedback/ScrollToTop/ScrollTOTop";
import LottieHandler from "./componnents/feedback/Lotties/LottieHandler";
const MainLayout = lazy(() => import("./mainLayout/MainLayout"));
const Home = lazy(() => import("@pages/home/Home"));
const Azkar = lazy(() => import("@pages/azkar/Azkar"));
const Adia = lazy(() => import("@pages/duaa/Adia"));
const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center  h-screen  ">
            <LottieHandler type={"loading"} />
          </div>
        }
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="azkar" element={<Azkar />} />
            <Route path="adia" element={<Adia />} />
            <Route
              path="*"
              element={
                <div>
                  <LottieHandler type={"error"} />
                </div>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
