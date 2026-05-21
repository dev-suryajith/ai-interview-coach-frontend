import React from "react";

import {
  ShieldAlert,
  ArrowLeft,
  LayoutDashboard,
} from "lucide-react";

import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-4">

      <div className="max-w-xl w-full text-center">

        {/* Icon */}
        <div className="w-28 h-28 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShieldAlert
            className="text-red-400"
            size={50}
          />
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-bold tracking-tight mb-4">
          404
        </h1>

        {/* Text */}
        <h2 className="text-3xl font-semibold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg leading-8 max-w-md mx-auto mb-10">
          The page you are trying to access does not exist
          or may have been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            to="/dashboard"
            className="bg-blue-500 hover:bg-blue-600 transition-all px-6 py-4 rounded-2xl font-medium flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <button
            onClick={() => window.history.back()}
            className="bg-[#1e293b] hover:bg-[#263548] border border-gray-800 transition-all px-6 py-4 rounded-2xl font-medium flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page404;