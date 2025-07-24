import React, { useEffect, useState } from "react";
import { Input, Empty, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movie-view/MovieView";
import useDebounce from "@/hooks/useDebounce";
import { useParamsHook } from "@/hooks/useParamsHook";

const Search = () => {
  const { setParam, getParam } = useParamsHook();
  const { getMoviesBySearch } = useMovie();

  const query = getParam("query");
  const [value, setValue] = useState(query || "");
  const debounceValue = useDebounce(value);

  const { data, isLoading } = getMoviesBySearch({ query: debounceValue });

  useEffect(() => {
    setParam("query", debounceValue);
  }, [debounceValue]);

  const hasResults = data?.results && data.results.length > 0;

  return (
    <div className="container mx-auto min-h-[80vh] py-6 px-4 dark:bg-[#121212] transition-colors">
      <div className="max-w-2xl mx-auto mb-6">
        <Input
          className="!rounded-2xl !px-4 !py-2 !transition-all 
                     focus:!shadow-md dark:bg-[#1e1e1e] 
                     dark:text-white dark:placeholder:text-gray-400 
                     dark:focus:!border-white"
          size="large"
          placeholder="Search for movies..."
          prefix={<SearchOutlined className="text-gray-400 dark:text-gray-300" />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          allowClear
        />
      </div>

      {value !== debounceValue && (
        <div className="flex justify-center items-center h-40">
          <Spin tip="Searching..." size="large" />
        </div>
      )}

      {debounceValue && value === debounceValue && (
        hasResults ? (
          <MovieView data={data.results} />
        ) : !isLoading ? (
          <div className="flex justify-center items-center h-60">
            <Empty description="No movies found" />
          </div>
        ) : null
      )}
    </div>
  );
};

export default React.memo(Search);
