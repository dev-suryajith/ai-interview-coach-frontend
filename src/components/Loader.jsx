import React from "react";

import { Loader2 } from "lucide-react";

const Loader = ({
  text = "Loading...",
  fullScreen = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 ${
        fullScreen
          ? "min-h-screen bg-[#0f172a]"
          : "py-16"
      }`}
    >

      {/* Spinner */}
      <div className="relative">

        <div className="w-20 h-20 rounded-full border border-blue-500/20"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2
            className="animate-spin text-blue-500"
            size={38}
          />
        </div>
      </div>

      {/* Text */}
      <p className="text-gray-400 text-lg tracking-wide">
        {text}
      </p>
    </div>
  );
};

export default Loader;