import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import {
  Trophy,
  Brain,
  Lightbulb,
  ArrowLeft,
  Loader2,
  Sparkles,
} from "lucide-react";

import { getResultAPI } from "../services/allAPI";

const Result = () => {

  const { id } = useParams();

  const token = localStorage.getItem("token");

  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };

  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchResult();
  }, []);

  const fetchResult = async () => {

    try {

      const response = await getResultAPI(
        id,
        reqHeader
      );

      setResult(response.data);

    } catch (err) {

      console.log(err);

      toast.error(
        "Failed to fetch result"
      );
    }
  };

  const getScoreTheme = () => {

    if (result?.score >= 80) {

      return {
        text: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
      };
    }

    if (result?.score >= 60) {

      return {
        text: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
      };
    }

    return {
      text: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
    };
  };

  if (!result) {

    return (

      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">

        <Loader2
          className="animate-spin text-blue-500"
          size={50}
        />

      </div>
    );
  }

  const scoreTheme = getScoreTheme();

  return (

    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-10 overflow-hidden">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">

          <div>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm text-blue-400 font-medium mb-5">

              <Sparkles size={16} />

              AI Interview Analysis

            </div>

            <h1 className="text-5xl font-bold tracking-tight">
              Interview Result
            </h1>

            <p className="text-gray-400 mt-4 text-lg leading-8">

              Personalized AI evaluation based on your interview responses.

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

        {/* Score Card */}

        <div className="relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 mb-8">

          {/* Glow */}

          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 blur-3xl rounded-full"></div>

          <div className="relative">

            <div className="flex flex-col items-center text-center">

              <div
                className={`w-32 h-32 rounded-full border flex items-center justify-center mb-6 ${scoreTheme.bg} ${scoreTheme.border}`}
              >

                <Trophy
                  size={50}
                  className={scoreTheme.text}
                />

              </div>

              <p className="text-gray-400 text-lg mb-3">
                Overall Performance
              </p>

              <h2
                className={`text-7xl font-bold mb-4 ${scoreTheme.text}`}
              >
                {result.score}%
              </h2>

              <p className="text-gray-400 max-w-xl leading-8">

                AI-generated evaluation based on your technical understanding,
                communication, and problem-solving approach.

              </p>

            </div>

          </div>

        </div>

        {/* Sections */}

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Feedback Section */}

          <div className="relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8">

            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-3xl rounded-full"></div>

            <div className="relative">

              <div className="flex items-center gap-4 mb-8">

                <div className="bg-blue-500/10 p-4 rounded-2xl">

                  <Brain
                    className="text-blue-400"
                    size={26}
                  />

                </div>

                <div>

                  <h2 className="text-2xl font-semibold">
                    AI Feedback
                  </h2>

                  <p className="text-gray-400 text-sm mt-1">
                    Performance analysis
                  </p>

                </div>

              </div>

              {result.feedback?.map((item, index) => (

                <div
                  key={index}
                  className="bg-[#0b1120] border border-white/5 rounded-4xl p-6 mb-5"
                >

                  {/* Summary */}

                  <div className="mb-6">

                    <h3 className="text-lg font-semibold text-blue-400 mb-3">
                      Summary
                    </h3>

                    <p className="text-gray-300 leading-8">
                      {item.summary}
                    </p>

                  </div>

                  {/* Strengths */}

                  <div className="mb-6">

                    <h3 className="text-lg font-semibold text-green-400 mb-3">
                      Strengths
                    </h3>

                    <ul className="space-y-2">

                      {item.strengths.length > 0 ? (item.strengths.map((strength, i) => (

                        <li
                          key={i}
                          className="text-gray-300 flex gap-3"
                        >

                          <span className="text-green-400">
                            •
                          </span>

                          {strength}

                        </li>
                      )))
                        : <div>-</div>
                      }
                    </ul>

                  </div>

                  {/* Improvements */}
                  <div>

                    <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                      Improvements
                      
                    </h3>

                    <ul className="space-y-2">

                      {item.improvements?.map((improvement, i) => (

                        <li
                          key={i}
                          className="text-gray-300 flex gap-3"
                        >

                          <span className="text-yellow-400">
                            •
                          </span>

                          {improvement}

                        </li>
                      ))}

                    </ul>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Tips Section */}

          <div className="relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8">

            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/5 blur-3xl rounded-full"></div>

            <div className="relative">

              <div className="flex items-center gap-4 mb-8">

                <div className="bg-yellow-500/10 p-4 rounded-2xl">

                  <Lightbulb
                    className="text-yellow-400"
                    size={26}
                  />

                </div>

                <div>

                  <h2 className="text-2xl font-semibold">
                    Improvement Tips
                  </h2>

                  <p className="text-gray-400 text-sm mt-1">
                    Areas to improve
                  </p>

                </div>

              </div>

              <div className="space-y-4">

                {result.tips?.map((tip, index) => (

                  <div
                    key={index}
                    className="bg-[#0b1120] border border-white/5 rounded-2xl p-5 flex items-start gap-4"
                  >

                    <div className="min-w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 text-sm font-semibold">

                      {index + 1}

                    </div>

                    <p className="text-gray-300 leading-7">
                      {tip}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-10 flex justify-center">

          <Link
            to="/generate"
            className="bg-blue-500 hover:bg-blue-600 active:scale-[0.99] transition-all px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/20"
          >

            Start Another Interview

          </Link>

        </div>

      </div>

    </div>
  );
};

export default Result;