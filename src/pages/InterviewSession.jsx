import React, { useEffect, useState } from "react";

import {
  Brain,
  ArrowRight,
  Send,
  Loader2,
  Clock3,
} from "lucide-react";

import { useParams, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import {
  getInterviewAPI,
  submitInterviewAPI,
} from "../services/allAPI";

const InterviewSession = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };

  const [questions, setQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] = useState([]);

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  useEffect(() => {
    fetchInterview();
  }, []);

  const fetchInterview = async () => {
    try {
      const response = await getInterviewAPI(
        id,
        reqHeader
      );

      setQuestions(response.data.questions);

    } catch (err) {
      toast.error("Failed to load interview");

    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (!answer.trim()) {
      return toast.error(
        "Please write your answer"
      );
    }

    const updatedAnswers = [...answers, answer];

    setAnswers(updatedAnswers);

    setAnswer("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      submitInterview(updatedAnswers);
    }
  };

  const submitInterview = async (
    finalAnswers
  ) => {
    try {
      setSubmitting(true);

      const reqBody = {
        id,
        answers: finalAnswers,
      };

      const response =
        await submitInterviewAPI(
          reqBody,
          reqHeader
        );

      toast.success(
        "Interview submitted successfully"
      );

      navigate(
        `/result/${response.data.resultId}`
      );

    } catch (err) {
      toast.error("Failed to submit interview");

    } finally {
      setSubmitting(false);
    }
  };

  const progress =
    ((currentQuestion + 1) /
      questions.length) *
    100;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <Loader2
          className="animate-spin text-blue-500"
          size={55}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-10">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">

          <div>
            <h1 className="text-5xl font-bold tracking-tight">
              AI Interview Session
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Answer each question carefully and clearly
            </p>
          </div>

          <div className="bg-[#1e293b] border border-gray-800 px-5 py-4 rounded-2xl flex items-center gap-3">
            <Clock3
              className="text-blue-400"
              size={20}
            />

            <span className="text-lg font-medium">
              Question {currentQuestion + 1} /{" "}
              {questions.length}
            </span>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#1e293b] border border-gray-800 rounded-3xl p-8 lg:p-10">

          {/* Progress */}
          <div className="mb-10">

            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm">
                Progress
              </span>

              <span className="text-gray-400 text-sm">
                {Math.floor(progress)}%
              </span>
            </div>

            <div className="w-full h-3 bg-[#0f172a] rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 mb-8">

            <div className="flex items-start gap-4">

              <div className="bg-blue-500/10 p-4 rounded-2xl">
                <Brain
                  className="text-blue-400"
                  size={24}
                />
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-3">
                  Interview Question
                </p>

                <h2 className="text-2xl font-semibold leading-relaxed">
                  {
                    questions[currentQuestion]
                  }
                </h2>
              </div>
            </div>
          </div>

          {/* Answer Box */}
          <div className="mb-8">

            <label className="block text-gray-300 mb-4 font-medium">
              Your Answer
            </label>

            <textarea
              value={answer}
              onChange={(e) =>
                setAnswer(e.target.value)
              }
              placeholder="Write your answer here..."
              className="w-full h-64 bg-[#0f172a] border border-gray-800 focus:border-blue-500 transition-all rounded-3xl p-6 outline-none resize-none leading-7"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleNext}
            disabled={submitting}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-70 transition-all py-4 rounded-2xl font-semibold flex items-center justify-center gap-3"
          >
            {submitting ? (
              <>
                <Loader2
                  className="animate-spin"
                  size={22}
                />

                Submitting Interview...
              </>
            ) : currentQuestion + 1 ===
              questions.length ? (
              <>
                <Send size={20} />

                Submit Interview
              </>
            ) : (
              <>
                <ArrowRight size={20} />

                Next Question
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewSession;