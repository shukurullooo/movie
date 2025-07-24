import { useParamsHook } from "@/hooks/useParamsHook";
import type { IGenre } from "@/types";
import React, { type FC } from "react";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  const { setParam, getParam, removeParam } = useParamsHook();
  const genre = getParam("genre");

  const handleGenre = (id: number) => {
    if (genre === id.toString()) {
      removeParam("genre");
    } else {
      setParam("genre", id.toString());
    }
  };

  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 pb-2 mb-4">
      {data?.map((item: IGenre) => {
        const isActive = item.id.toString() === genre;

        return (
          <button
            key={item.id}
            onClick={() => handleGenre(item.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition
              ${
                isActive
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
              }`}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default React.memo(Genre);
