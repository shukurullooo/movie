// src/components/ui/LoadingScreen.tsx

import React from "react";
import img from "@/assets/main-logo.svg"; // Rasm manzili mos bo‘lishi kerak

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-black bg-slate-100 transition-colors">
      <img
        src={img}
        alt="Loading..."
        className="w-28 h-28 
                   animate-spin-bounce 
                   drop-shadow-xl 
                   blur-[0.3px] 
                   hover:scale-105 
                   transition-transform duration-500 ease-in-out"
      />
      
    </div>
  );
};

export default LoadingScreen;
