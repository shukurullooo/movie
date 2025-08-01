import { useEffect } from "react";
import { useMovie } from "@/api/hooks/useMovie";
import { IMAGE_URL } from "@/const";
import { useNavigate, useParams } from "react-router-dom";
import MovieView from "@/components/movie-view/MovieView";

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieSingle, getMovieDetail } = useMovie();

  const { data } = getMovieSingle(id || "");
  const { data: similarData } = getMovieDetail(id || "", "similar");
  const { data: creditsData } = getMovieDetail(id || "", "credits");
  const navigate = useNavigate();

  // Sahifa ochilganda yuqoriga scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition">
      <div
        className="relative h-[450px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGE_URL + data?.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        <div className="absolute bottom-10 left-10 z-10">
          <h1 className="text-4xl font-bold text-white drop-shadow-md">
            {data?.title}
          </h1>
          {!!data?.budget && (
            <p className="mt-2 text-white text-lg font-medium">
              Budget: ${data?.budget?.toLocaleString()} USD
            </p>
          )}
        </div>
      </div>

    

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Cast</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-thin pb-2">
          {creditsData?.cast?.slice(0, 20)?.map((person: any /* TODO: Replace with correct type */) => (
            <div
              key={person.id}
              className="min-w-[150px] bg-gray-100 dark:bg-[#1e1e1e] rounded-md overflow-hidden shadow-md"
            >
              <img
                onClick={() => navigate(`/personDetail/${person.id}`)}
                src={IMAGE_URL + person.profile_path}
                alt={person.original_name}
                className="h-[220px] w-full object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-bold truncate">{person.original_name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  as {person.character}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Similar Movies</h2>
        <MovieView data={similarData?.results?.slice(0, 4)} loading={!similarData?.results} count={similarData?.results?.length || 0} />
      </div>
    </div>
  );
};

export default MovieDetail;
