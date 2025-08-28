import LottieHandler from "@componnents/feedback/Lotties/LottieHandler";
import PageHeader from "@componnents/layout/PageHeader/PageHeader";
import UseAzkar from "./UseAzkar";

/* transilation ofr keys of azkar */
const keyTranslations: Record<string, string> = {
  morning_azkar: "أذكار الصباح",
  evening_azkar: "أذكار المساء",
  prayer_azkar: "أذكار الصلاة",
  prayer_later_azkar: "اذكار بعد الصلاه ",
  sleep_azkar: "اذكار النوم",
  wake_up_azkar: "اذكار الاستيقاظ",
  mosque_azkar: "أذكار المسجد	",
  miscellaneous_azkar: "اذكار متنوعه",
  adhan_azkar: "اذكار الاذان",
  wudu_azkar: "اذكار الوضوء ",
  home_azkar: "اذكار المنزل ",
  khala_azkar: "اذكار الخلاء ",
  food_azkar: "اذكار الطعام ",
  hajj_and_umrah_azkar: "اذكار الحج والعمره",
};
/* start azkar componnent */
const Azkar = () => {
  console.log("API:", import.meta.env.VITE_API_BASE_URL);
  const { data, loading, error, sliceEnds, handleShowLess, handleShowMore } =
    UseAzkar();
  if (loading)
    return (
      <div className=" h-[60vh] flex justify-center items-center">
        <LottieHandler type={"Mosque"} />
      </div>
    );
  if (error)
    return (
      <div className=" h-[60vh] flex justify-center items-center">
        <LottieHandler type={"error"} />
      </div>
    );
  return (
    <div>
      <PageHeader />

      <div className=" px-2 md:px-8">
        <ul>
          {data &&
            Object.keys(data).map((azkarTitle) => {
              if (!Array.isArray(data[azkarTitle])) return null;
              <li key={azkarTitle} className="py-6">
                <h2 className="text-3xl text-[var(--secondary))]  font-medium bg-[var(--bgsecondary)] my-2 px-4 py-2  rounded-4xl w-fit m-auto">
                  {(data[azkarTitle].length > 0 &&
                    keyTranslations[azkarTitle]) ||
                    azkarTitle}
                </h2>
                <ul>
                  {data[azkarTitle]
                    .slice(0, sliceEnds[azkarTitle] || 3)
                    .map((item) => (
                      <li key={item.id}>
                        <div className=" bg-[var(--bgsecondary)] my-4 p-4 rounded-2xl shadow-xl text-xl">
                          <p className="leading-12 text-2x md:text-3xl">
                            {" "}
                            {item.text}
                          </p>
                          <div className="bg-[var(--primary)] w-fit text-xs px-2 py-1 mt-4 rounded-[30px_50px/50px_30px]">
                            <span> التكرار </span>
                            <span>{item.count}</span>
                          </div>
                        </div>
                      </li>
                    ))}

                  <div className="flex gap-3">
                    {data[azkarTitle]?.length <= 3 ? (
                      ""
                    ) : (
                      <button
                        onClick={() => handleShowMore(azkarTitle)}
                        className=" cursor-pointer text-xl animate-pulse hover:animate-none text-[var(--secondary)] font-medium bg-[var(--primary)] my-4 px-4 py-2 rounded-4xl w-fit m-auto"
                      >
                        عرض المزيد ..
                      </button>
                    )}
                    {sliceEnds[azkarTitle] > 3 ? (
                      <button
                        onClick={() => handleShowLess(azkarTitle)}
                        className=" cursor-pointer text-xl text-[var(--secondary)] font-medium bg-[var(--primary)] my-4 px-4 py-2 rounded-4xl w-fit m-auto"
                      >
                        عرض اقل ..
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </ul>
              </li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Azkar;
