import React, {
  useEffect,
  useState,
} from "react";

import {
  History as HistoryIcon,
  Trophy,
  CalendarDays,
  ArrowLeft,
  Loader2,
  Brain,
  TrendingUp,
  Clock3,
  ChevronRight,
  Sparkles,
  Target,
} from "lucide-react";

import { Link } from "react-router-dom";

import toast from "react-hot-toast";

import {
  deleteInterviewAPI,
  getHistoryAPI,
} from "../services/allAPI";

const History = () => {
  const token =
    localStorage.getItem("token");

  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };

  const [history, setHistory] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {

      const response =
        await getHistoryAPI(
          reqHeader
        );

      setHistory(response.data);

    } catch (err) {

      toast.error(
        "Failed to load history"
      );

    } finally {

      setLoading(false);
    }
  };

  const deleteInterview =
    async (id) => {
      try {

        const response =
          await deleteInterviewAPI(
            id,
            reqHeader
          );

        if (
          response.status === 200
        ) {

          toast.success(
            "Interview deleted"
          );

          setHistory((prev) =>
            prev.filter(
              (item) =>
                item._id !== id
            )
          );
        }

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to delete interview"
        );
      }
    };

  const getScoreTheme = (
    score
  ) => {

    if (score >= 80) {
      return {
        text: "text-green-400",
        bg: "bg-green-500/10",
        border:
          "border-green-500/20",
      };
    }

    if (score >= 60) {
      return {
        text: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border:
          "border-yellow-500/20",
      };
    }

    return {
      text: "text-red-400",
      bg: "bg-red-500/10",
      border:
        "border-red-500/20",
    };
  };

  const averageScore =
    history.length > 0
      ? Math.floor(
          history.reduce(
            (acc, item) =>
              acc +
              (item.score || 0),
            0
          ) / history.length
        )
      : 0;

  const bestScore =
    history.length > 0
      ? Math.max(
          ...history.map(
            (item) =>
              item.score || 0
          )
        )
      : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">

        <Loader2
          className="animate-spin text-blue-500"
          size={50}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-10 overflow-hidden">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">

          <div>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm text-blue-400 font-medium mb-5">
              <Sparkles size={16} />
              AI Interview Analytics
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Interview History
            </h1>

            <p className="text-gray-400 mt-4 text-lg leading-8 max-w-2xl">
              Track your AI interview
              performance, progress,
              and improvement over
              time.
            </p>
          </div>

          <Link
            to="/dashboard"
            className="flex items-center gap-2 bg-[#1e293b]/60 backdrop-blur-xl hover:bg-[#263548] transition-all px-6 py-4 rounded-2xl border border-white/5 w-fit"
          >
            <ArrowLeft size={18} />
            Dashboard
          </Link>
        </div>

        {/* Analytics */}
        {history.length > 0 && (
          <div className="grid md:grid-cols-3 gap-5 mb-8">

            {/* Total */}
            <div className="relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-4xl p-5">

              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-3xl rounded-full"></div>

              <div className="relative">

                <div className="bg-blue-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">
                  <HistoryIcon
                    className="text-blue-400"
                    size={24}
                  />
                </div>

                <h2 className="text-4xl font-bold mb-2">
                  {history.length}
                </h2>

                <p className="text-gray-400">
                  Interviews Completed
                </p>
              </div>
            </div>

            {/* Average */}
            <div className="relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-4xl p-5">

              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/5 blur-3xl rounded-full"></div>

              <div className="relative">

                <div className="bg-yellow-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">
                  <TrendingUp
                    className="text-yellow-400"
                    size={24}
                  />
                </div>

                <h2 className="text-4xl font-bold mb-2">
                  {averageScore}%
                </h2>

                <p className="text-gray-400">
                  Average Score
                </p>
              </div>
            </div>

            {/* Best */}
            <div className="relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-4xl p-5">

              <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/5 blur-3xl rounded-full"></div>

              <div className="relative">

                <div className="bg-green-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">
                  <Target
                    className="text-green-400"
                    size={24}
                  />
                </div>

                <h2 className="text-4xl font-bold mb-2">
                  {bestScore}%
                </h2>

                <p className="text-gray-400">
                  Highest Score
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {history.length === 0 ? (
          <div className="relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-4xl py-20 px-8 text-center">

            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 blur-3xl rounded-full"></div>

            <div className="relative">

              <div className="bg-blue-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain
                  className="text-blue-400"
                  size={40}
                />
              </div>

              <h2 className="text-4xl font-bold mb-5">
                No Interviews Yet
              </h2>

              <p className="text-gray-400 max-w-xl mx-auto text-lg leading-8 mb-10">
                Start your first AI
                interview session and
                begin tracking your
                performance journey.
              </p>

              <Link
                to="/generate"
                className="bg-blue-500 hover:bg-blue-600 active:scale-[0.99] transition-all px-6 py-3.5 rounded-2xl font-medium inline-flex items-center gap-3 shadow-lg shadow-blue-500/20"
              >
                <Brain size={20} />
                Generate Interview
              </Link>
            </div>
          </div>
        ) : (

          /* History List */
          <div className="space-y-4">

            {history.map(
              (item, index) => {

                const theme =
                  getScoreTheme(
                    item.score
                  );

                return (
                  <div
                    key={item._id}
                    className="group relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/20 transition-all rounded-4xl p-6"
                  >

                    <div className="absolute top-0 right-0 w-52 h-52 bg-blue-500/3 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>

                    <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-5">

                      {/* Left */}
                      <div className="flex items-start gap-5">

                        {/* Number */}
                        <div className="min-w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-lg">
                          {index + 1}
                        </div>

                        {/* Content */}
                        <div>

                          <div className="flex flex-wrap items-center gap-3 mb-4">

                            <h2 className="text-2xl font-semibold">
                              {item.role}
                            </h2>

                            <span className="bg-[#0b1120] border border-white/5 px-3 py-1 rounded-xl text-xs text-gray-400">
                              AI Interview
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 mb-5">

                            <span className="bg-[#0b1120] border border-white/5 px-4 py-2 rounded-xl text-sm text-gray-300">
                              {item.level}
                            </span>

                            <span className="bg-[#0b1120] border border-white/5 px-4 py-2 rounded-xl text-sm text-gray-300">
                              {
                                item.techstack
                              }
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-gray-500 text-sm">

                            <CalendarDays
                              size={16}
                            />

                            {new Date(
                              item.createdAt
                            ).toLocaleDateString()}

                            <span>
                              •
                            </span>

                            <Clock3
                              size={15}
                            />

                            Completed
                          </div>
                        </div>
                      </div>

                      {/* Right */}
                      <div className="flex items-center gap-3">

                        {/* Score */}
                        <div
                          className={`px-5 py-3 rounded-[1.4rem] border text-xl font-bold min-w-24 text-center ${theme.bg} ${theme.border} ${theme.text}`}
                        >
                          {item.score || 0}%
                        </div>

                        {/* View */}
                        <Link
                          to={`/result/${item._id}`}
                          className="bg-[#0b1120] hover:bg-[#172033] transition-all border border-white/5 hover:border-blue-500/20 px-5 py-3 rounded-2xl flex items-center gap-2"
                        >
                          <Trophy
                            size={18}
                          />

                          View

                          <ChevronRight
                            size={16}
                            className="group-hover:translate-x-1 transition-all"
                          />
                        </Link>

                        {/* Delete */}
                        <button
                          onClick={() =>
                            deleteInterview(
                              item._id
                            )
                          }
                          className="bg-red-500/10 hover:bg-red-500/20 transition-all border border-red-500/20 hover:border-red-500/40 px-4 py-3 rounded-2xl flex items-center justify-center text-red-400"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;