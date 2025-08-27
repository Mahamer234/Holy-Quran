import UseFetch from "@hooks/UseFetch";
import { useState } from "react";
import type { Tazkar } from "@t/azker";
const UseAzkar = () => {
  const [sliceEnds, setSliceEnds] = useState<Record<string, number>>({});

  const handleShowMore = (azkarTitle: string) => {
    setSliceEnds((prev) => ({
      ...prev,
      [azkarTitle]: (prev[azkarTitle] || 3) + 3,
    }));
  };

  const handleShowLess = (azkarTitle: string) => {
    setSliceEnds((prev) => ({
      ...prev,
      [azkarTitle]: 3,
    }));
  };
  const { data, loading, error } = UseFetch<Tazkar>(`/azkar`);
  console.log(data);
  return { data, loading, error, sliceEnds, handleShowLess, handleShowMore };
};

export default UseAzkar;
