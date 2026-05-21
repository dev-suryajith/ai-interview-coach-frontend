import React, { useState } from "react";

import {
  Briefcase,
  Layers3,
  Hash,
  Sparkles,
  Loader2,
  Wand2,
} from "lucide-react";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import { generateInterviewtAPI } from "../services/allAPI";

function ManualInterview() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };

  const [loading, setLoading] =
    useState(false);

  const categories = [
    "Technology",
    "Marketing",
    "Finance",
    "Healthcare",
    "Education",
    "Human Resources",
    "Sales",
    "Design",
    "Customer Support",
    "Operations",
  ];

  const roleSuggestions = {
    Technology: [
      "Frontend Developer",
      "Backend Developer",
      "Software Engineer",
      "Data Analyst",
      "UI/UX Developer",
    ],

    Marketing: [
      "Digital Marketing Executive",
      "SEO Specialist",
      "Content Strategist",
      "Social Media Manager",
    ],

    Finance: [
      "Accountant",
      "Financial Analyst",
      "Banking Associate",
    ],

    Healthcare: [
      "Nurse",
      "Healthcare Administrator",
      "Pharmacist",
    ],

    Education: [
      "Teacher",
      "Professor",
      "Trainer",
    ],

    "Human Resources": [
      "HR Executive",
      "Recruiter",
    ],

    Sales: [
      "Sales Executive",
      "Business Development Associate",
    ],

    Design: [
      "Graphic Designer",
      "UI/UX Designer",
    ],

    "Customer Support": [
      "Customer Support Executive",
    ],

    Operations: [
      "Operations Executive",
    ],
  };

  const [formData, setFormData] =
    useState({
      category: "",
      role: "",
      level: "Fresher",
      techstack: "",
      count: 5,
    });

  const handleGenerate = async (e) => {
    e.preventDefault();

    if (
      !formData.category ||
      !formData.role ||
      !formData.techstack
    ) {
      return toast.error(
        "Please fill all fields"
      );
    }

    try {
      setLoading(true);

      const response =
        await generateInterviewtAPI(
          formData,
          reqHeader
        );

      toast.success(
        "Interview generated successfully"
      );

      navigate(
        `/interview/${response.data.interviewId}`
      );

    } catch (err) {

      console.log(err);

      toast.error(
        "Failed to generate interview"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 lg:p-10">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 blur-3xl rounded-full"></div>

      <div className="relative">

        {/* Header */}
        <div className="mb-10">

          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-5">
            <Wand2 size={16} />
            Manual Interview Setup
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Customize Your Interview
          </h2>

          <p className="text-gray-400 leading-8 max-w-2xl">
            Configure your interview manually
            and generate personalized AI-powered
            interview questions instantly.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleGenerate}
          className="grid md:grid-cols-2 gap-6"
        >

          {/* Category */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
              <Layers3 size={18} />
              Career Category
            </label>

            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value,
                  role: "",
                })
              }
              className="w-full bg-[#0b1120] border border-white/5 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all rounded-2xl px-5 py-4 outline-none"
            >
              <option value="">
                Select Category
              </option>

              {categories.map(
                (category) => (
                  <option
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Role */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
              <Briefcase size={18} />
              Job Role
            </label>

            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  role: e.target.value,
                })
              }
              className="w-full bg-[#0b1120] border border-white/5 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all rounded-2xl px-5 py-4 outline-none"
            >
              <option value="">
                Select Role
              </option>

              {roleSuggestions[
                formData.category
              ]?.map((role) => (
                <option
                  key={role}
                  value={role}
                >
                  {role}
                </option>
              ))}
            </select>
          </div>

          {/* Experience */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
              <Sparkles size={18} />
              Experience Level
            </label>

            <select
              value={formData.level}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  level: e.target.value,
                })
              }
              className="w-full bg-[#0b1120] border border-white/5 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all rounded-2xl px-5 py-4 outline-none"
            >
              <option value="Fresher">
                Fresher
              </option>

              <option value="Intermediate">
                Intermediate
              </option>

              <option value="Experienced">
                Experienced
              </option>
            </select>
          </div>

          {/* Question Count */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
              <Hash size={18} />
              Number of Questions
            </label>

            <input
              type="number"
              min="1"
              max="15"
              value={formData.count}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  count: e.target.value,
                })
              }
              className="w-full bg-[#0b1120] border border-white/5 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all rounded-2xl px-5 py-4 outline-none"
            />
          </div>

          {/* Skills */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
              <Sparkles size={18} />
              Skills / Technologies
            </label>

            <input
              type="text"
              placeholder="React, Leadership, Excel, Communication..."
              value={formData.techstack}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  techstack:
                    e.target.value,
                })
              }
              className="w-full bg-[#0b1120] border border-white/5 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all rounded-2xl px-5 py-4 outline-none"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 pt-2">

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 active:scale-[0.99] disabled:opacity-70 transition-all py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20"
            >
              {loading ? (
                <>
                  <Loader2
                    className="animate-spin"
                    size={22}
                  />

                  Generating Interview...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Generate Interview
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManualInterview;