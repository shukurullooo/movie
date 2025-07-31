import { usePerson } from "@/api/hooks/usePerson";
import { IMAGE_URL } from "@/const";
import { useParams } from "react-router-dom";
import { Skeleton } from "antd";
import MovieView from "@/components/movie-view/MovieView";

const PersonDetail = () => {
  const { id } = useParams();
  const { getPersonSingle } = usePerson();
  const { data, isLoading } = getPersonSingle(id || "");

  const profileImage = data?.profile_path
    ? IMAGE_URL + data.profile_path
    : "https://via.placeholder.com/300x450?text=No+Image";

  const knownFor = data?.combined_credits?.cast || [];

  return (
    <div className="bg-white dark:bg-[#121212] text-gray-900 dark:text-white min-h-screen py-10 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 mb-10">
        <div className="flex justify-center lg:justify-start">
          {isLoading ? (
            <Skeleton.Image style={{ width: 300, height: 450 }} active />
          ) : (
            <img
              src={profileImage}
              alt={data?.name}
              className="w-[300px] h-[450px] object-cover rounded-2xl shadow-xl"
            />
          )}
        </div>

        <div className="flex-1">
          {isLoading ? (
            <Skeleton active title={{ width: "50%" }} paragraph={{ rows: 6 }} />
          ) : (
            <>
              <h1 className="text-4xl font-bold mb-2">{data?.name}</h1>
              <p className="text-gray-500 dark:text-gray-400 italic text-lg mb-4">
                {data?.known_for_department || "Not Specified"}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-base text-gray-700 dark:text-gray-300 mb-8">
                {data?.birthday && (
                  <p>
                    <span className="font-semibold">Birthday:</span>{" "}
                    {data.birthday}
                  </p>
                )}
                {data?.place_of_birth && (
                  <p>
                    <span className="font-semibold">Birthplace:</span>{" "}
                    {data.place_of_birth}
                  </p>
                )}
                {data?.deathday && (
                  <p>
                    <span className="font-semibold">Death:</span>{" "}
                    {data.deathday}
                  </p>
                )}
                {data?.imdb_id && (
                  <p>
                    <span className="font-semibold">IMDb:</span>{" "}
                    <a
                      href={`https://www.imdb.com/name/${data.imdb_id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 dark:text-blue-400 underline"
                    >
                      View on IMDb
                    </a>
                  </p>
                )}
                {data?.also_known_as?.length > 0 && (
                  <p>
                    <span className="font-semibold">Also Known As:</span>{" "}
                    {data.also_known_as.join(", ")}
                  </p>
                )}
              </div>

              <h2 className="text-2xl font-semibold mb-4">Biography</h2>
              <p className="leading-7 whitespace-pre-line text-justify text-gray-800 dark:text-gray-200">
                {data?.biography || "Biography not available."}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Known For</h2>
        {isLoading ? (
          <Skeleton active paragraph={{ rows: 4 }} />
        ) : knownFor.length > 0 ? (
          <MovieView data={knownFor.slice(0, 8)} loading={isLoading} count={knownFor.length} />
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No known movies found.</p>
        )}
      </div>
    </div>
  );
};

export default PersonDetail;
