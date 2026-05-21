import React, { useEffect, useState } from "react";
import { Brain, Trophy, History, Plus, ArrowRight, Loader2, } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { deleteInterviewAPI, getHistoryAPI } from "../services/allAPI";


const Dashboard = () => {
  const token = localStorage.getItem("token");

  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [interviews, setInterviews] = useState([]);

  const [stats, setStats] = useState({
    totalInterviews: 0,
    bestScore: 0,
    averageScore: 0,
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const deleteInterview = async (id) => {
    try {
      const response = await deleteInterviewAPI(id, reqHeader)
      response.status == 200 && fetchDashboardData()
    } catch (error) {
      console.log(error);

    }
  }

  const fetchDashboardData = async () => {
    try {
      const response = await getHistoryAPI(reqHeader);

      const data = response.data;

      setInterviews(data);

      const totalInterviews = data.length;

      const scores = data.map((item) => item.score || 0);

      const bestScore =
        scores.length > 0 ? Math.max(...scores) : 0;

      const averageScore =
        scores.length > 0
          ? Math.floor(
            scores.reduce((a, b) => a + b, 0) /
            scores.length
          )
          : 0;

      setStats({
        totalInterviews,
        bestScore,
        averageScore,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <Loader2
          className="animate-spin text-blue-500"
          size={60}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">

      {/* Navbar */}
      <div className="border-b border-gray-800 px-6 py-5 flex items-center justify-between sticky top-0 bg-[#0f172a]/95 backdrop-blur-lg z-50">
        <div>
          <h1 className="text-3xl font-bold">
            InterviewIQ
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            AI Mock Interview Dashboard
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/generate"
            className="bg-blue-500 hover:bg-blue-600 transition-all px-5 py-3 rounded-xl font-medium flex items-center gap-2"
          >
            <Plus size={20} />
            Start Interview
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition-all px-5 py-3 rounded-xl font-medium"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto">

        {/* Welcome */}
        <div className="mb-10">
          <h2 className="text-5xl font-bold leading-tight">
            Welcome Back
          </h2>

          <p className="text-gray-400 mt-3 text-lg">
            Track your AI interview performance and improve your skills.
          </p>
        </div>

        {/* Stats */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10">

          <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-6 backdrop-blur-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">
                  Total Interviews
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  {stats.totalInterviews}
                </h2>
              </div>

              <div className="bg-blue-500/20 p-4 rounded-2xl">
                <Brain size={35} />
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-green-500/20 to-emerald-500/10 border border-green-500/20 rounded-3xl p-6 backdrop-blur-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">
                  Best Score
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  {stats.bestScore}%
                </h2>
              </div>

              <div className="bg-green-500/20 p-4 rounded-2xl">
                <Trophy size={35} />
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">
                  Average Score
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  {stats.averageScore}%
                </h2>
              </div>

              <div className="bg-purple-500/20 p-4 rounded-2xl">
                <History size={35} />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Interviews */}
        <div className="bg-[#1e293b]/70 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg">

          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">
                Recent Interviews
              </h2>

              <p className="text-gray-400 mt-2">
                Your latest AI mock interviews
              </p>
            </div>

            <Link
              to="/history"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </div>

          {interviews.length === 0 ? (
            <div className="text-center py-20">
              <Brain
                size={70}
                className="mx-auto text-gray-600 mb-6"
              />

              <h2 className="text-3xl font-bold mb-3">
                No Interviews Yet
              </h2>

              <p className="text-gray-400 mb-8">
                Start your first AI interview now.
              </p>

              <Link
                to="/generate"
                className="bg-blue-500 hover:bg-blue-600 transition-all px-6 py-4 rounded-2xl inline-flex items-center gap-2"
              >
                <Plus size={20} />
                Generate Interview
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {interviews.slice(0, 5).map((item) => (
                <div
                  key={item._id}
                  className="bg-[#0f172a] hover:bg-[#111827] transition-all border border-gray-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {item.role}
                    </h3>

                    <div className="flex items-center gap-3 mt-3 flex-wrap">
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-sm">
                        {item.level}
                      </span>

                      <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm">
                        {item.techstack}
                      </span>
                    </div>

                    <p className="text-gray-500 mt-4 text-sm">
                      {new Date(
                        item.createdAt
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`px-5 py-3 rounded-2xl text-xl font-bold ${item.score >= 80
                        ? "bg-green-500"
                        : item.score >= 60
                          ? "bg-yellow-500"
                          : "bg-red-500"
                        }`}
                    >
                      {item.score || 0}%
                    </div>

                    <Link
                      to={`/result/${item._id}`}
                      className="bg-white/10 hover:bg-white/20 transition-all px-5 py-3 rounded-xl"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => deleteInterview(item._id)}
                      className="bg-red-500/30 hover:bg-white/20 transition-all px-5 py-3 rounded-xl"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;