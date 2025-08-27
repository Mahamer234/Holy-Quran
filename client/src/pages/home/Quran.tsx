import { useCallback } from "react";
import { SurahCard } from "@componnents/layout/SurahCaer/SurahCard";
import SurahList from "@componnents/layout/surahList/SurahList";
import UseFetch from "@hooks/UseFetch";
import moshafLogo from "@assets/svg/moshaflogo2.svg";
import LottieHandler from "@componnents/feedback/Lotties/LottieHandler";
import ReciterSelect from "@componnents/features/ReciterSelect/ReciterSelect";
import type { Tsurah } from "@t/surah";
const Quran = () => {
  /* selector for select any part from response */
  const selector = useCallback((res: unknown) => {
    return (res as { data: { data: Tsurah[] } }).data.data;
  }, []);
  /* get quran surah 114 all */
  const { data, loading, error } = UseFetch<Tsurah[]>("/surat", selector);

  if (loading) return <LottieHandler type="Mosque" />;
  if (error) return <LottieHandler type="error" />;

  return (
    <section id="quran" className=" md:py-7">
      {/* title */}
      <h2
        className="flex justify-center items-center bg-gray-950 w-fit  mx-auto py-2  px-8 "
        style={{ borderRadius: "20px 90px / 90px 20px " }}
      >
        <img src={moshafLogo} alt="القران الكريم " draggable={false} />
      </h2>
      {/* select favurit reciter */}
      <ReciterSelect />
      {/* section content */}
      <div className="my-6">
        {data && (
          <SurahList
            data={data}
            render={(surah) => <SurahCard surah={surah} />}
          />
        )}
      </div>
    </section>
  );
};

export default Quran;
