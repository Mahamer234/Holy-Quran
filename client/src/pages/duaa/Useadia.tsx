import UseFetch from "@hooks/UseFetch";
import { useState } from "react";
import type { Tazkar } from "@t/azker";

const Useadia = () => {
  const [sliceEnds, setSliceEnds] = useState<Record<string, number>>({});
  /* handleShowMore */
  const handleShowMore = (duaTitle: string) => {
    setSliceEnds((prev) => ({
      ...prev,
      [duaTitle]: (prev[duaTitle] || 2) + 5,
    }));
  };
  /* handle showless */
  const handleShowLess = (duaTitle: string) => {
    setSliceEnds((prev) => ({
      ...prev,
      [duaTitle]: 2,
    }));
  };
  const { data, loading, error } = UseFetch<Tazkar>(`/duas`);

  return { sliceEnds, handleShowMore, handleShowLess, data, loading, error };
};

export default Useadia;
