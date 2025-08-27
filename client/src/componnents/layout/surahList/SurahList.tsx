type TSurahListProps<T> = {
  data: T[] | null;
  render: (item: T) => React.ReactNode;
};

const SurahList = <T,>({ data, render }: TSurahListProps<T>) => {
  return (
    <div className="grid grid-cols-1 p-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {data?.map((surah, index) => (
        <div key={index}> {render(surah)}</div>
      ))}
    </div>
  );
};

export default SurahList;
