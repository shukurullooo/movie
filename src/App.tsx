import { Suspense } from "react";
import MainRouter from "./pages";
import LoadingScreen from "./components/loading/LoadingScreen";

const App = () => {
  return (
    <div className="dark:bg-black dark:text-white bg-slate-100 min-h-screen">
      <Suspense fallback={<LoadingScreen />}>
        <MainRouter />
      </Suspense>
    </div>
  );
};

export default App;
