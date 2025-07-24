import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import React, { type FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  data: undefined | IMovie[];
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const isLoading = !data || data.length === 0;

  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e1e1e] rounded-lg shadow overflow-hidden animate-pulse"
            >
              <div className="w-full h-[350px] bg-gray-200 dark:bg-gray-700" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
                <div className="h-3 bg-gray-200 dark:bg-gray-500 rounded w-1/2" />
              </div>
            </div>
          ))
        : data.map((movie: IMovie) => (
            <div
              key={movie.id}
              className="bg-white dark:bg-[#1e1e1e] rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer overflow-hidden"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <div className="relative h-[350px] w-full overflow-hidden">
                <img
                  loading="lazy"
                  src={IMAGE_URL + movie.poster_path}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {movie.release_date.split("-")[0]}
                </span>
              </div>

              <div className="p-4">
                <h3
                  className="text-lg font-semibold text-gray-900 dark:text-white truncate"
                  title={movie.title}
                >
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  ⭐ {movie.vote_average.toFixed(1)} / 10
                </p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default React.memo(MovieView);
