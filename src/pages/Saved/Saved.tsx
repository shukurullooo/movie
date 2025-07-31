import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movie-view/MovieView";
import { useStore } from "@/Zustand/Store";
import React, { useEffect } from "react";
import { Empty } from "antd"; // 👈 Ant Design'dan import qilamiz

const Saved = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const { getMovies } = useMovie();
  const { isLoading } = getMovies({});
  const { saved } = useStore();

  const isEmpty = !saved || saved.length === 0;

  return (
    <div className="min-h-[300px] py-10">
      {isEmpty ? (
        <div className="flex justify-center items-center h-[300px]">
          <Empty description="Saqlangan filmlar mavjud emas" />
        </div>
      ) : (
        <MovieView data={saved} loading={isLoading} count={10} />
      )}
    </div>
  );
};

export default React.memo(Saved);
