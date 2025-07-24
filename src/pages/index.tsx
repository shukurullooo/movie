import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Seorch from "./seorch/Seorch";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));
const Movies = lazy(() => import("./movies/Movies"));
const MovieDetail = lazy(() => import("./movies/MovieDetail"));
const PersonDetail = lazy(() => import("./Person/PersonDetail"));

const MainRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/movie/:id",
          element: <MovieDetail />,
        }, 
         {
          path: "/seorch",
          element: <Seorch />,
        }, 
        {
          path: "/personDetail/:id",
          element: <PersonDetail />,
        },
      ],
    },
  ]);
};

export default MainRouter;
