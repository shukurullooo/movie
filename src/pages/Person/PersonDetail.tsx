import { usePerson } from "@/api/hooks/usePerson";
import { IMAGE_URL } from "@/const";
import { useParams } from "react-router-dom";
import { Skeleton } from "antd";
import MovieView from "@/components/movie-view/MovieView";

const PersonDetail = () => {
  const { id } = useParams();
const { getPersonSingle } = usePerson();
const { data, isLoading } = getPersonSingle(id || "");
 
  return (
    <div className="bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition min-h-screen py-10 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 mb-8">
        <div className="flex justify-center lg:block">
          {isLoading ? (
            <Skeleton.Image style={{ width: 300, height: 450 }} active />
          ) : (
            <img
              src={IMAGE_URL + data?.profile_path}
              alt={data?.name}
              className="w-[250px] sm:w-[300px] h-[380px] sm:h-[450px] object-cover rounded-md shadow"
            />
          )}
        </div>

        <div className="flex-1">
          {isLoading ? (
            <>
              <Skeleton active title={{ width: "50%" }} paragraph={{ rows: 4 }} />
            </>
          ) : (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{data?.name}</h1>
              <p className="text-gray-500 dark:text-gray-400 italic mb-4">
              {data?.known_for_department}
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
              {data?.birthday && (
                <p><span className="font-semibold">Born:</span> {data.birthday}</p>
              )}
              {data?.place_of_birth && (
                <p><span className="font-semibold">Birthplace:</span> {data.place_of_birth}</p>
              )}
              {data?.homepage && (
                <p>
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href={data.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  {data.homepage}
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
              
              <h2 className="text-xl sm:text-2xl font-semibold mb-8">Biography</h2>
              <p className="leading-7 whitespace-pre-line text-justify text-gray-800 dark:text-gray-200 mb-8">
              {data?.biography.slice(0,500) || "Biography not available."}
              </p>
            </>
          )}

      
        </div>
      </div>
          <MovieView data={data?.crew?.slice(0, 4)} />
    </div>
  );
};

export default PersonDetail;
