import React, { useState } from "react";
import { Briefcase, Sparkles, FileText, } from "lucide-react";
import ManualInterview from "./ManualInterview";
import ResumeUpload from "./ResumeUpload";

const GenerateInterview = () => {
  const [selectedMode, setSelectedMode] = useState("");

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-10 overflow-hidden">

      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm text-blue-400 font-medium mb-6">
            <Sparkles size={16} />
            AI Powered Interview Platform
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5">
            Generate Interviews
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto">
            Create personalized AI interview experiences
            tailored to your career, skills, and experience.
          </p>
        </div>

        {/* MODE SWITCH */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">

          {/* Manual */}
          <button
            onClick={() =>
              setSelectedMode("manual")
            }
            className={`group relative overflow-hidden rounded-4xl p-6 text-left transition-all duration-300 border ${selectedMode === "manual"
              ? "bg-blue-500/10 border-blue-500/30"
              : "bg-[#1e293b]/60 border-white/5 hover:border-white/10"
              }`}
          >

            <div className="flex items-start justify-between mb-5">

              <div className="bg-[#0b1120] w-14 h-14 rounded-2xl flex items-center justify-center">
                <Briefcase
                  size={24}
                  className="text-blue-400"
                />
              </div>

              {selectedMode ===
                "manual" && (
                  <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                    Active
                  </div>
                )}
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              Manual Setup
            </h2>

            <p className="text-gray-400 leading-7 text-sm">
              Configure interview settings manually
              for fully customized AI questions.
            </p>
          </button>

          {/* Resume */}
          <button
            onClick={() =>
              setSelectedMode("resume")
            }
            className={`group relative overflow-hidden rounded-4xl p-6 text-left transition-all duration-300 border ${selectedMode === "resume"
              ? "bg-blue-500/10 border-blue-500/30"
              : "bg-[#1e293b]/60 border-white/5 hover:border-white/10"
              }`}
          >

            <div className="flex items-start justify-between mb-5">

              <div className="bg-[#0b1120] w-14 h-14 rounded-2xl flex items-center justify-center">
                <FileText
                  size={24}
                  className="text-blue-400"
                />
              </div>

              {selectedMode ===
                "resume" && (
                  <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                    Active
                  </div>
                )}
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              Resume AI
            </h2>

            <p className="text-gray-400 leading-7 text-sm">
              Upload your resume and let AI generate
              highly personalized interview questions.
            </p>
          </button>
        </div>

        {/* DYNAMIC CONTENT */}
        <div className="animate-in fade-in duration-300">
          {selectedMode === "manual" && <ManualInterview />}
          {selectedMode === "resume" && <ResumeUpload />}
        </div>
      </div>
    </div>
  );
};

export default GenerateInterview;