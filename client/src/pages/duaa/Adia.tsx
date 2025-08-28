import Useadia from "./Useadia";
import LottieHandler from "@componnents/feedback/Lotties/LottieHandler";
import PageHeader from "@componnents/layout/PageHeader/PageHeader";

const keyTranslations: Record<string, string> = {
  prophetic_duas: "أدعية نبوية",
  prophets_duas: "أدعية قرآنية	",
  quran_completion_duas: "أدعية الأنبياء	",
  quran_duas: "دعاء ختم القرآن الكريم	",
};
const Adia = () => {
  const { sliceEnds, handleShowMore, handleShowLess, data, loading, error } =
    Useadia();
  if (loading)
    return (
      <div className=" h-[60vh] flex justify-center items-center">
        <LottieHandler type={"faather"} />
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
      {/* content */}
      <div className=" px-2 md:px-8">
        {data && (
          <ul>
            {Object.keys(data).map((duaTitle) => {
              if (!Array.isArray(data[duaTitle])) return null;
              return (
                <li key={duaTitle}>
                  <h2 className="text-3xl   text-[var(--secondary)]  font-medium bg-[var(--bgsecondary)] my-4 px-4 py-2  rounded-4xl w-fit m-auto   ">
                    {keyTranslations[duaTitle] || duaTitle}
                  </h2>
                  <ul>
                    {data[duaTitle]
                      .slice(0, sliceEnds[duaTitle] || 2)
                      .map((duaEle) => (
                        <li key={duaEle.id}>
                          <p className=" bg-[var(--bgsecondary)] leading-12 text-2x md:text-3xl my-4 p-4 rounded-2xl shadow-2xs text-xl">
                            {duaEle.text}
                          </p>
                        </li>
                      ))}

                    <div className="flex gap-3">
                      {data[duaTitle].length <= 1 ? (
                        ""
                      ) : (
                        <button
                          onClick={() => handleShowMore(duaTitle)}
                          className=" cursor-pointer text-xl animate-pulse hover:animate-none text-[var(--secondary)] font-medium bg-[var(--primary)] my-4 px-4 py-2 rounded-4xl w-fit m-auto"
                        >
                          عرض المزيد ..
                        </button>
                      )}

                      {sliceEnds[duaTitle] > 3 ? (
                        <button
                          onClick={() => handleShowLess(duaTitle)}
                          className=" cursor-pointer text-xl text-[var(--secondary)] font-medium bg-[var(--primary)] my-4 px-4 py-2 rounded-4xl w-fit m-auto"
                        >
                          عرض اقل ..
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </ul>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Adia;
