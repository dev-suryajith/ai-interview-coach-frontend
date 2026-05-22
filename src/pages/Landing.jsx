import React from "react";

import {
  Brain,
  Sparkles,
  FileText,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";

const Landing = () => {
  const loggedIn = localStorage.getItem("token");

  const features = [
    {
      icon: Brain,
      title: "AI Interview Generation",
      desc: "Generate personalized mock interview questions instantly.",
    },
    {
      icon: FileText,
      title: "Resume-Based Questions",
      desc: "Upload your resume and receive customized interview questions.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      desc: "Track scores, progress, and interview history.",
    },
    {
      icon: Sparkles,
      title: "Detailed AI Feedback",
      desc: "Receive strengths, improvements, and actionable tips.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%)] text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute top-[30%] right-0 w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0f172a]/70 border-b border-white/5">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="bg-blue-500/10 p-3 rounded-2xl border border-blue-500/10">
              <Brain
                className="text-blue-400"
                size={24}
              />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                InterviewAI
              </h1>

              <p className="text-xs text-gray-500">
                AI Interview Platform
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm">

            <a
              href="#features"
              className="text-gray-400 hover:text-white transition-all"
            >
              Features
            </a>

            <a
              href="#preview"
              className="text-gray-400 hover:text-white transition-all"
            >
              Preview
            </a>

            <a
              href="#cta"
              className="text-gray-400 hover:text-white transition-all"
            >
              Get Started
            </a>
          </div>

          <div className="flex items-center gap-3">

            {loggedIn ? (
              <Link
                to="/dashboard"
                className="bg-blue-500 hover:bg-blue-600 transition-all px-5 py-3 rounded-2xl font-medium flex items-center gap-2 shadow-lg shadow-blue-500/20"
              >
                Dashboard

                <ArrowRight size={18} />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden sm:flex text-gray-300 hover:text-white transition-all px-4 py-2"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-blue-500 hover:bg-blue-600 transition-all px-5 py-3 rounded-2xl font-medium shadow-lg shadow-blue-500/20"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="preview"
        className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24"
      >

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8">

              <Sparkles size={16} />

              AI-Powered Interview Preparation
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">

              Land Your Next Job
              <span className="text-blue-400">
                {" "}with AI
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-2xl mb-10">

              Practice personalized mock interviews,
              generate resume-based questions,
              and receive detailed AI feedback
              designed to improve your confidence
              and interview performance.
            </p>

            <div className="flex flex-wrap items-center gap-5">

              <Link
                to={
                  loggedIn
                    ? "/dashboard"
                    : "/register"
                }
                className="bg-blue-500 hover:bg-blue-600 active:scale-[0.99] transition-all px-7 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-lg shadow-blue-500/20"
              >
                {loggedIn
                  ? "Go to Dashboard"
                  : "Get Started"}

                <ArrowRight size={20} />
              </Link>

              {!loggedIn && (
                <Link
                  to="/login"
                  className="bg-[#1e293b]/60 border border-white/5 hover:border-blue-500/20 transition-all px-7 py-4 rounded-2xl font-medium"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Trust */}
            <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-gray-500">

              {[
                "AI-Powered Questions",
                "Resume Analysis",
                "Instant Feedback",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    size={16}
                    className="text-green-400"
                  />

                  {item}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-14">

              {[
                ["AI", "Interview Generation"],
                ["Resume", "Based Interviews"],
                ["Real-Time", "AI Feedback"],
              ].map((item, index) => (
                <div key={index}>
                  <h2 className="text-4xl font-bold mb-2">
                    {item[0]}
                  </h2>

                  <p className="text-gray-400">
                    {item[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="relative">

            <div className="relative bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">

              <div className="flex items-center justify-between mb-8">

                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    AI Mock Interview
                  </h2>

                  <p className="text-gray-400">
                    MERN Stack Developer
                  </p>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-2xl text-blue-400 font-medium">
                  Question 3/5
                </div>
              </div>

              <div className="w-full h-3 bg-[#0b1120] rounded-full overflow-hidden mb-8">

                <div className="w-[60%] h-full bg-blue-500 rounded-full"></div>
              </div>

              <div className="bg-[#0b1120] border border-white/5 rounded-[2rem] p-6 mb-6">

                <h3 className="text-xl leading-8 font-medium">
                  Explain the difference between authentication and authorization in web applications.
                </h3>
              </div>

              <div className="bg-[#0b1120] border border-white/5 rounded-[2rem] p-6 mb-8 space-y-4">

                <div className="h-3 bg-white/10 rounded-full w-full"></div>

                <div className="h-3 bg-white/10 rounded-full w-[90%]"></div>

                <div className="h-3 bg-white/10 rounded-full w-[75%]"></div>

                <div className="h-3 bg-white/10 rounded-full w-[50%]"></div>
              </div>

              <div className="flex items-center justify-between bg-[#0b1120] border border-white/5 rounded-[2rem] p-5">

                <div>

                  <p className="text-gray-400 text-sm mb-2">
                    AI Evaluation Score
                  </p>

                  <h2 className="text-4xl font-bold text-green-400">
                    88%
                  </h2>
                </div>

                <div className="bg-green-500/10 p-4 rounded-2xl">
                  <CheckCircle2
                    className="text-green-400"
                    size={32}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 max-w-7xl mx-auto px-6 pb-24"
      >

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">

            <Sparkles size={16} />

            Features
          </div>

          <h2 className="text-5xl font-bold mb-6">
            Everything You Need
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-8">

            Practice smarter with AI-generated interviews and detailed performance analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map(
            (
              {
                icon: Icon,
                title,
                desc,
              },
              index
            ) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/20 transition-all rounded-[2rem] p-7"
              >

                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/[0.03] blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>

                <div className="relative">

                  <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-7">

                    <Icon
                      className="text-blue-400"
                      size={28}
                    />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {title}
                  </h3>

                  <p className="text-gray-400 leading-8">
                    {desc}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="relative z-10 max-w-5xl mx-auto px-6 pb-24"
      >

        <div className="relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-[3rem] p-10 md:p-16 text-center">

          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

          <div className="relative">

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8">

              <Sparkles size={16} />

              Start Today
            </div>

            <h2 className="text-5xl font-bold mb-8 leading-tight">

              Practice Interviews
              <br />
              Smarter with AI
            </h2>

            <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-10">

              Build confidence, improve communication,
              and prepare for your next interview
              with AI-powered mock interviews.
            </p>

            <Link
              to={
                loggedIn
                  ? "/dashboard"
                  : "/register"
              }
              className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 active:scale-[0.99] transition-all px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/20"
            >
              {loggedIn
                ? "Go to Dashboard"
                : "Get Started Now"}

              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;