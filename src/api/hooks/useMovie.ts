import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useMovie = () => {
  // Discover movies (default listing)
  const getMovies = (params: Record<string, any>) =>
    useQuery({
      queryKey: ["movies", "discover", params],
      queryFn: () =>
        api.get("discover/movie", { params }).then((res) => res.data),
    });

  // Search movies
  const getMoviesBySearch = (params: { query: string }) =>
    useQuery({
      queryKey: ["movies", "search", params.query],
      queryFn: () =>
        api.get("search/movie", { params: { ...params } }).then((res) => res.data),
      enabled: !!params.query, // faqat query bo‘lsa so‘rov yuboradi
    });

  // Single movie
  const getMovieSingle = (id: string) =>
    useQuery({
      queryKey: ["movie", id],
      queryFn: () => api.get(`movie/${id}`).then((res) => res.data),
      enabled: !!id, // id bo‘lsa so‘rov yuboradi
    });

  // Movie detail (credits, videos, recommendations...)
  const getMovieDetail = (id: string, path: string) =>
    useQuery({
      queryKey: ["movie", id, path],
      queryFn: () => api.get(`movie/${id}/${path}`).then((res) => res.data),
      enabled: !!id && !!path,
    });

  return {
    getMovies,
    getMoviesBySearch,
    getMovieSingle,
    getMovieDetail,
  };
};
